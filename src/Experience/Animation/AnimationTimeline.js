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
   * @param {number} eId
   * @returns {KeyframeTrack|undefined}
   */
  getTrack(eId) {
    return this.tracks.get(Number(eId))
  }

  /**
   * @param {number} eId
   * @returns {KeyframeTrack}
   */
  getOrCreateTrack(eId) {
    eId = Number(eId)
    let track = this.tracks.get(eId)
    if (!track) {
      track = new KeyframeTrack(eId)
      this.tracks.set(eId, track)
    }
    return track
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
      this.tracks.delete(Number(eId))
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
  apply() {
    const shader = this.experience.shader
    if (!shader) return
    for (const [eId, track] of this.tracks) {
      if (track.length === 0) continue
      let v = track.evaluate(this.playhead)
      // Hermite interpolation can overshoot between keys - clamp to the
      // parameter's range so e.g. iterations never go negative
      const input = shader.getInput(eId)
      if (input) {
        v = Math.min(Math.max(v, input.min), input.max)
      }
      shader.uFloatPars[eId] = v
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

    if (snap) {
      this.duration = Number(snap.duration) || 15
      this.mode = snap.mode === 'pingpong' ? 'pingpong' : 'loop'
      if (snap.tracks instanceof Array) {
        for (const trackSnap of snap.tracks) {
          const track = KeyframeTrack.fromSnapshot(trackSnap)
          if (track.length > 0) {
            this.tracks.set(Number(track.eId), track)
          }
        }
      }
    }

    this.apply()
    this.trigger('durationChanged', [this.duration])
    this.trigger('modeChanged', [this.mode])
    this.trigger('tracksChanged')
    this.trigger('playStateChanged', [this.playing])
    this.trigger('timeChanged', [this.playhead])
  }
}
