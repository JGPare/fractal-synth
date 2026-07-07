import EventEmitter from '../Utils/EventEmitter.js'
import KeyframeTrack from './KeyframeTrack.js'

/**
 * AnimationTimeline - Single keyframe timeline driving shader parameters
 * Owns playhead, duration, loop mode and one KeyframeTrack per animated
 * parameter (keyed by eId). Evaluated every tick; writes directly into
 * the current shader's uFloatPars.
 */
export default class AnimationTimeline extends EventEmitter {
  /**
   * @param {import('../Experience.js').default} experience
   */
  constructor(experience) {
    super()
    this.experience = experience

    this.duration = 15
    this.mode = 'loop' // 'loop' | 'pingpong'
    this.playhead = 0
    this.playing = false
    this.direction = 1
    this.tracks = new Map() // eId -> KeyframeTrack

    // Music mode: a tempo grid laid over the seconds-based engine.
    // When enabled, duration is derived from bars/bpm and the ruler /
    // snapping work in musical units. Disabled by default so the tool
    // behaves exactly as before until the user opts in.
    this.musicMode = false
    this.bpm = 120
    this.bars = 8
    this.beatsPerBar = 4
    this.gridDivision = '1/4' // 'bar' | '1/2' | '1/4' | '1/16'
  }

  // ============================================================
  // MUSIC / TEMPO
  // ============================================================

  /** @returns {number} elapsed beats at time t (seconds) */
  beatsAt(t) {
    return t * this.bpm / 60
  }

  /** @returns {number} elapsed bars at time t (seconds) */
  barAt(t) {
    return this.beatsAt(t) / this.beatsPerBar
  }

  /** seconds per beat */
  get secondsPerBeat() {
    return 60 / this.bpm
  }

  /** Beats spanned by one cell of the current grid division */
  beatsForDivision(division = this.gridDivision) {
    switch (division) {
      case 'bar': return this.beatsPerBar
      case '1/2': return 2
      case '1/16': return 0.25
      case '1/4':
      default: return 1
    }
  }

  /** seconds per grid cell at the current division */
  gridStepSeconds() {
    return this.secondsPerBeat * this.beatsForDivision()
  }

  /**
   * Snap a time to the nearest grid cell. No-op when music mode is off.
   * @param {number} t - seconds
   * @returns {number} seconds, clamped to [0, duration]
   */
  snapTime(t) {
    if (!this.musicMode) return t
    const step = this.gridStepSeconds()
    if (!(step > 0)) return t
    const snapped = Math.round(t / step) * step
    return Math.min(Math.max(0, snapped), this.duration)
  }

  /** duration (seconds) implied by the current bars/beats/bpm */
  derivedDuration() {
    return this.bars * this.beatsPerBar * this.secondsPerBeat
  }

  recalcDurationFromBars() {
    this.setDuration(this.derivedDuration())
  }

  /**
   * @param {boolean} on
   */
  setMusicMode(on) {
    this.musicMode = !!on
    if (this.musicMode) this.recalcDurationFromBars()
    this.trigger('musicSettingsChanged')
  }

  setBpm(v) {
    this.bpm = Math.max(1, Number(v) || this.bpm)
    if (this.musicMode) this.recalcDurationFromBars()
    this.trigger('musicSettingsChanged')
  }

  setBars(v) {
    this.bars = Math.max(1, Math.round(Number(v) || this.bars))
    if (this.musicMode) this.recalcDurationFromBars()
    this.trigger('musicSettingsChanged')
  }

  setBeatsPerBar(v) {
    this.beatsPerBar = Math.max(1, Math.round(Number(v) || this.beatsPerBar))
    if (this.musicMode) this.recalcDurationFromBars()
    this.trigger('musicSettingsChanged')
  }

  setGridDivision(division) {
    this.gridDivision = division
    this.trigger('musicSettingsChanged')
  }

  /**
   * Time window within which two keyframes are considered the same
   */
  get keyEpsilon() {
    return Math.max(0.005, this.duration / 500)
  }

  // ============================================================
  // TRACK / KEYFRAME API
  // ============================================================

  /**
   * Track ids are numeric for shader params (index into uFloatPar) and string
   * for modulator properties (e.g. 'mod:1:center'). Numeric strings are
   * coerced to numbers so old snapshots and slider eIds stay numeric.
   * @param {number|string} id
   * @returns {number|string}
   */
  _normId(id) {
    if (typeof id === 'number') return id
    return /^\d+$/.test(id) ? Number(id) : id
  }

  /**
   * @param {number|string} eId
   * @returns {KeyframeTrack|undefined}
   */
  getTrack(eId) {
    return this.tracks.get(this._normId(eId))
  }

  /**
   * @param {number|string} eId
   * @returns {KeyframeTrack}
   */
  getOrCreateTrack(eId) {
    eId = this._normId(eId)
    let track = this.tracks.get(eId)
    if (!track) {
      track = new KeyframeTrack(eId)
      this.tracks.set(eId, track)
    }
    return track
  }

  /**
   * Remove an entire track by id (used when a modulator is deleted).
   * @param {number|string} id
   */
  removeTrack(id) {
    if (this.tracks.delete(this._normId(id))) {
      this.trigger('tracksChanged')
    }
  }

  /**
   * Add or update a keyframe, creating the track if needed
   * @param {number} eId
   * @param {number} t
   * @param {number} v
   * @param {number|null} s - sharpness, null preserves existing
   */
  addOrUpdateKeyframe(eId, t, v, s = null) {
    const track = this.getOrCreateTrack(eId)
    const index = track.setKeyframe(t, v, s, this.keyEpsilon)
    this.trigger('tracksChanged')
    return index
  }

  /**
   * Remove a keyframe; deletes the track when it becomes empty
   * @param {number} eId
   * @param {number} index
   */
  removeKeyframe(eId, index) {
    const track = this.getTrack(eId)
    if (!track) return
    track.removeKeyframe(index)
    if (track.length === 0) {
      this.tracks.delete(this._normId(eId))
    }
    this.trigger('tracksChanged')
  }

  /**
   * @param {number} eId
   * @returns {boolean}
   */
  hasKeyAtPlayhead(eId) {
    const track = this.getTrack(eId)
    if (!track) return false
    return track.indexOfKeyAt(this.playhead, this.keyEpsilon) >= 0
  }

  hasTracks() {
    return this.tracks.size > 0
  }

  // ============================================================
  // TRANSPORT
  // ============================================================

  play() {
    if (this.playing) return
    this.playing = true
    this.trigger('playStateChanged', [this.playing])
  }

  pause() {
    if (!this.playing) return
    this.playing = false
    this.trigger('playStateChanged', [this.playing])
  }

  togglePlay() {
    if (this.playing) {
      this.pause()
    } else {
      this.play()
    }
  }

  /**
   * @param {number} t - seconds
   */
  setTime(t) {
    this.playhead = Math.min(Math.max(0, t), this.duration)
    this.apply()
    // 'seeked' is a manual reposition (scrub / transport), distinct from the
    // per-tick 'timeChanged' during playback - audio uses it to resync
    this.trigger('seeked', [this.playhead])
    this.trigger('timeChanged', [this.playhead])
  }

  /**
   * @param {number} d - seconds. Keyframes beyond the duration are kept
   * (just unreachable) so shrinking and re-growing round-trips.
   */
  setDuration(d) {
    this.duration = Math.max(0.1, Number(d))
    if (this.playhead > this.duration) {
      this.playhead = this.duration
    }
    this.trigger('durationChanged', [this.duration])
    this.trigger('timeChanged', [this.playhead])
  }

  /**
   * @param {string} mode - 'loop' | 'pingpong'
   */
  setMode(mode) {
    this.mode = mode === 'pingpong' ? 'pingpong' : 'loop'
    if (this.mode === 'loop') {
      this.direction = 1
    }
    this.trigger('modeChanged', [this.mode])
  }

  // ============================================================
  // ENGINE
  // ============================================================

  /**
   * Advance the playhead and write track values to the shader.
   * Called every tick from Experience.update()
   * @param {number} deltaMs
   */
  update(deltaMs) {
    if (!this.playing) return

    this.playhead += (deltaMs / 1000) * this.direction

    if (this.mode === 'pingpong') {
      if (this.playhead >= this.duration) {
        this.direction = -1
        this.playhead = 2 * this.duration - this.playhead
      }
      if (this.playhead <= 0) {
        this.direction = 1
        this.playhead = -this.playhead
      }
    } else {
      if (this.playhead >= this.duration) {
        this.playhead -= this.duration
      }
    }

    this.apply()
    this.trigger('timeChanged', [this.playhead])
  }

  /**
   * Evaluate all tracks at the playhead and write to shader uniforms
   */
  /**
   * @param {number} eId
   */
  toggleMute(eId) {
    const track = this.getTrack(eId)
    if (!track) return
    track.muted = !track.muted
    this.apply()
    this.trigger('tracksChanged')
  }

  /**
   * Toggle a track between the compact key strip and the tall automation
   * lane. Pure UI state - playback is unaffected.
   * @param {number|string} eId
   */
  toggleExpanded(eId) {
    const track = this.getTrack(eId)
    if (!track) return
    track.expanded = !track.expanded
    this.trigger('tracksChanged')
  }

  apply() {
    const shader = this.experience.shader
    if (!shader) return

    // Pass 1: direct parameter keyframe tracks (numeric ids). String-keyed
    // tracks (modulator center/range) are evaluated in pass 2 instead.
    for (const [eId, track] of this.tracks) {
      if (typeof eId !== 'number') continue
      if (track.length === 0 || track.muted) continue
      let v = track.evaluate(this.playhead)
      // Hermite interpolation can overshoot between keys - clamp to the
      // parameter's range so e.g. iterations never go negative
      const input = shader.getInput(eId)
      if (input) {
        v = Math.min(Math.max(v, input.min), input.max)
      }
      shader.uFloatPars[eId] = v
    }

    // Pass 2: modulators drive their target parameter (a stand-in for direct
    // animation, so they run last and win over any direct track).
    this.applyModulators(shader)
  }

  /**
   * Resolve a modulator's center/range: its keyframe track if one exists,
   * else the modulator's static value.
   * @param {string} trackId
   * @param {number} fallback
   */
  resolveModValue(trackId, fallback) {
    const track = this.getTrack(trackId)
    if (track && track.length > 0 && !track.muted) {
      return track.evaluate(this.playhead)
    }
    return fallback
  }

  applyModulators(shader) {
    const mm = this.experience.modulatorManager
    if (!mm) return
    const audioReady = this.experience.audioEngine?.hasAudio()
    for (const mod of mm.list()) {
      if (!mod.enabled) continue
      // A dB follower with no audio loaded would otherwise pin its target at
      // `center`, silently overriding any direct keyframe track on the same
      // parameter. Leave the target alone until a track is available.
      if (mod.type === 'dbFollower' && !audioReady) continue
      const input = shader.getInput(mod.targetEId)
      if (!input) continue
      const center = this.resolveModValue(mod.centerTrackId, mod.center)
      const range = this.resolveModValue(mod.rangeTrackId, mod.range)
      let v = center + range * mod.signal(this)
      if (!isFinite(v)) continue
      v = Math.min(Math.max(v, input.min), input.max)
      shader.uFloatPars[mod.targetEId] = v
    }
  }

  // ============================================================
  // PERSISTENCE
  // ============================================================

  clear() {
    this.tracks.clear()
    this.playhead = 0
    this.pause()
    this.trigger('tracksChanged')
    this.trigger('timeChanged', [this.playhead])
  }

  /**
   * @returns {Object} { duration, mode, tracks: [...] }
   */
  getSnapshot() {
    return {
      duration: this.duration,
      mode: this.mode,
      musicMode: this.musicMode,
      bpm: this.bpm,
      bars: this.bars,
      beatsPerBar: this.beatsPerBar,
      gridDivision: this.gridDivision,
      tracks: Array.from(this.tracks.values()).map(track => track.getSnapshot())
    }
  }

  /**
   * Tolerant of missing snapshots (old project format) - clears instead
   * @param {Object|null} snap
   */
  setFromSnapshot(snap) {
    this.tracks.clear()
    this.playhead = 0
    this.playing = false
    this.direction = 1

    // Music settings default to off / sensible values for old snapshots
    this.musicMode = false
    this.bpm = 120
    this.bars = 8
    this.beatsPerBar = 4
    this.gridDivision = '1/4'

    if (snap) {
      this.duration = Number(snap.duration) || 15
      this.mode = snap.mode === 'pingpong' ? 'pingpong' : 'loop'
      this.musicMode = !!snap.musicMode
      if (snap.bpm) this.bpm = Math.max(1, Number(snap.bpm))
      if (snap.bars) this.bars = Math.max(1, Math.round(Number(snap.bars)))
      if (snap.beatsPerBar) this.beatsPerBar = Math.max(1, Math.round(Number(snap.beatsPerBar)))
      if (snap.gridDivision) this.gridDivision = snap.gridDivision
      if (snap.tracks instanceof Array) {
        for (const trackSnap of snap.tracks) {
          const track = KeyframeTrack.fromSnapshot(trackSnap)
          if (track.length > 0) {
            track.eId = this._normId(track.eId)
            this.tracks.set(track.eId, track)
          }
        }
      }
    }

    this.apply()
    this.trigger('durationChanged', [this.duration])
    this.trigger('modeChanged', [this.mode])
    this.trigger('musicSettingsChanged')
    this.trigger('tracksChanged')
    this.trigger('playStateChanged', [this.playing])
    this.trigger('timeChanged', [this.playhead])
  }
}
