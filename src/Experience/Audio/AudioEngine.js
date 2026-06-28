/**
 * AudioEngine - Web Audio for music mode
 *
 * Owns a single AudioContext and the currently-loaded track. Three jobs:
 *  1. Decode an uploaded file into an AudioBuffer.
 *  2. Offline analysis: per-band loudness envelopes (deterministic, sampled
 *     at a fixed hop so the dB follower can be looked up at any time, in both
 *     live preview and frame-by-frame export) plus an approximate BPM.
 *  3. Synced playback: an AudioBufferSourceNode glued to the timeline playhead.
 *
 * The envelopes are the deterministic source of truth - playback is only for
 * the user to hear the track while editing.
 */

const BANDS = {
  low:  { type: 'lowpass',  freq: 200 },
  mid:  { type: 'bandpass', freq: 1000, q: 0.7 },
  high: { type: 'highpass', freq: 2000 },
}

const HOP_SEC = 0.01 // 100 Hz envelope resolution

export default class AudioEngine {
  constructor() {
    this.ctx = null
    this.buffer = null
    this.fileName = ''
    this.bpm = 0
    this.hopSec = HOP_SEC

    // band -> Float32Array of normalized loudness (0..1) at hopSec spacing
    this.envelopes = {}
    // cache of damped envelopes keyed by `${band}:${damping}` (deterministic
    // one-pole smoothing baked over the raw envelope so seeks stay seek-safe)
    this._smoothCache = {}

    // playback
    this.source = null
    this.gain = null
    this.playing = false

    // original encoded bytes of the loaded track (for persistence)
    this.fileBlob = null

    // monotonic token so a newer load (manual upload or project switch)
    // invalidates an older in-flight async restore - see ProjectRepo.restoreAudio
    this._loadToken = 0
  }

  hasAudio() {
    return !!this.buffer
  }

  /** Claim a new load; any in-flight load with an older token is now stale */
  beginLoad() {
    return ++this._loadToken
  }

  /** @param {number} token @returns {boolean} true if superseded by a newer load */
  isStale(token) {
    return token !== this._loadToken
  }

  /** Lazily create the context (after a user gesture, ideally) */
  ensureContext() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext
      this.ctx = new AC()
    }
    return this.ctx
  }

  // ============================================================
  // LOAD + ANALYSIS
  // ============================================================

  /**
   * Decode a file, run offline analysis. Returns { bpm, duration }.
   * @param {File} file
   */
  async load(file) {
    this.ensureContext()
    const arrayBuffer = await file.arrayBuffer()
    // decodeAudioData wants its own copy; slice() guards against detach
    this.buffer = await this.ctx.decodeAudioData(arrayBuffer.slice(0))
    this.fileName = file.name || 'track'
    // Retain the original encoded bytes so the track can be persisted
    this.fileBlob = file

    this.envelopes = await this.computeBandEnvelopes(this.buffer)
    this._smoothCache = {}
    this.bpm = this.detectBPM(this.buffer)

    return { bpm: this.bpm, duration: this.buffer.duration }
  }

  /**
   * Render the buffer through a biquad filter per band offline, then reduce
   * each filtered signal to a normalized RMS envelope at hopSec spacing.
   * @param {AudioBuffer} buffer
   * @returns {Promise<Object>} band -> Float32Array
   */
  async computeBandEnvelopes(buffer) {
    const result = {}
    // The three band renders are independent - run them concurrently
    const entries = Object.entries(BANDS)
    const filtered = await Promise.all(
      entries.map(([, cfg]) => this.renderFiltered(buffer, cfg))
    )
    entries.forEach(([name], i) => {
      result[name] = this.rmsEnvelope(filtered[i], this.hopSec)
    })
    return result
  }

  /**
   * Offline-render `buffer` through one biquad filter, return the mono
   * Float32Array of the result.
   */
  async renderFiltered(buffer, cfg) {
    const OAC = window.OfflineAudioContext || window.webkitOfflineAudioContext
    const offline = new OAC(1, buffer.length, buffer.sampleRate)

    const src = offline.createBufferSource()
    src.buffer = buffer

    const filter = offline.createBiquadFilter()
    filter.type = cfg.type
    filter.frequency.value = cfg.freq
    if (cfg.q != null) filter.Q.value = cfg.q

    src.connect(filter)
    filter.connect(offline.destination)
    src.start(0)

    const rendered = await offline.startRendering()
    return rendered.getChannelData(0)
  }

  /**
   * Reduce a sample array to a per-hop RMS envelope normalized to its peak.
   */
  rmsEnvelope(samples, hopSec) {
    // Use the context sample rate (offline render matches the source rate)
    const sr = this.buffer.sampleRate
    const hop = Math.max(1, Math.round(hopSec * sr))
    const n = Math.ceil(samples.length / hop)
    const env = new Float32Array(n)
    let peak = 0
    for (let i = 0; i < n; i++) {
      let sum = 0
      const start = i * hop
      const end = Math.min(start + hop, samples.length)
      for (let j = start; j < end; j++) sum += samples[j] * samples[j]
      const rms = Math.sqrt(sum / Math.max(1, end - start))
      env[i] = rms
      if (rms > peak) peak = rms
    }
    if (peak > 0) {
      for (let i = 0; i < n; i++) env[i] /= peak
    }
    return env
  }

  /**
   * Sample a band envelope at time t (seconds) with linear interpolation.
   * `damping` (0..~0.95) applies deterministic one-pole smoothing so the
   * follower responds softly. Returns 0 when no audio / unknown band.
   * @param {string} band
   * @param {number} t
   * @param {number} damping
   * @returns {number} 0..1
   */
  sampleEnvelope(band, t, damping = 0) {
    const env = damping > 0
      ? this._smoothedEnvelope(band, damping)
      : this.envelopes[band]
    if (!env || env.length === 0) return 0
    const x = t / this.hopSec
    const i = Math.floor(x)
    if (i < 0) return env[0]
    if (i >= env.length - 1) return env[env.length - 1]
    const frac = x - i
    return env[i] * (1 - frac) + env[i + 1] * frac
  }

  /**
   * Deterministic one-pole low-pass over a raw band envelope. The pole equals
   * `damping`, so higher damping = slower, softer response. Cached per
   * (band, damping) since a full forward pass is needed for seek-safety.
   */
  _smoothedEnvelope(band, damping) {
    const raw = this.envelopes[band]
    if (!raw || raw.length === 0) return raw
    const a = Math.min(0.999, Math.max(0, damping))
    const key = `${band}:${a.toFixed(3)}`
    if (this._smoothCache[key]) return this._smoothCache[key]

    const out = new Float32Array(raw.length)
    let prev = raw[0]
    for (let i = 0; i < raw.length; i++) {
      prev = a * prev + (1 - a) * raw[i]
      out[i] = prev
    }
    this._smoothCache[key] = out
    return out
  }

  /**
   * Approximate tempo: build an onset-strength envelope (positive spectral-
   * flux-ish energy increase), autocorrelate it over a musical lag range, and
   * pick the strongest lag. Folded into 70..160 BPM. Heuristic - the user can
   * always override.
   * @param {AudioBuffer} buffer
   * @returns {number} bpm
   */
  detectBPM(buffer) {
    const sr = buffer.sampleRate
    const hop = Math.round(0.01 * sr) // 10ms frames
    const data = this._monoData(buffer)
    const frames = Math.floor(data.length / hop)
    if (frames < 8) return 120

    // Onset strength: positive change in frame energy
    const onset = new Float32Array(frames)
    let prev = 0
    for (let f = 0; f < frames; f++) {
      let sum = 0
      const start = f * hop
      for (let j = start; j < start + hop; j++) sum += data[j] * data[j]
      const energy = Math.sqrt(sum / hop)
      onset[f] = Math.max(0, energy - prev)
      prev = energy
    }

    const fps = sr / hop // onset frames per second
    const minBpm = 60, maxBpm = 200
    const minLag = Math.floor(fps * 60 / maxBpm)
    const maxLag = Math.ceil(fps * 60 / minBpm)

    let bestLag = minLag
    let bestScore = -Infinity
    for (let lag = minLag; lag <= maxLag; lag++) {
      let score = 0
      for (let f = lag; f < frames; f++) score += onset[f] * onset[f - lag]
      if (score > bestScore) {
        bestScore = score
        bestLag = lag
      }
    }

    let bpm = fps * 60 / bestLag
    // Guard against a non-finite/zero result before the fold loops (a 0 would
    // spin `while (bpm < 70) bpm *= 2` forever and hang the tab)
    if (!isFinite(bpm) || bpm <= 0) return 120
    // Fold into a sensible range
    while (bpm < 70) bpm *= 2
    while (bpm > 160) bpm /= 2
    return Math.round(bpm)
  }

  /**
   * Downmix all channels of a buffer to a single mono Float32Array so analysis
   * doesn't ignore panned energy (decode keeps both channels).
   * @param {AudioBuffer} buffer
   * @returns {Float32Array}
   */
  _monoData(buffer) {
    const ch = buffer.numberOfChannels
    if (ch === 1) return buffer.getChannelData(0)
    const len = buffer.length
    const out = new Float32Array(len)
    for (let c = 0; c < ch; c++) {
      const d = buffer.getChannelData(c)
      for (let i = 0; i < len; i++) out[i] += d[i]
    }
    for (let i = 0; i < len; i++) out[i] /= ch
    return out
  }

  // ============================================================
  // PLAYBACK (synced to the timeline playhead)
  // ============================================================

  /**
   * Start playback from `offsetSec`, looping the [0, loopEnd] window so the
   * audio wraps in step with the looping timeline.
   * @param {number} offsetSec
   * @param {number} loopEnd - timeline duration (seconds)
   */
  play(offsetSec, loopEnd) {
    if (!this.buffer) return
    this.ensureContext()
    if (this.ctx.state === 'suspended') this.ctx.resume()
    this.stop()

    const src = this.ctx.createBufferSource()
    src.buffer = this.buffer
    // Always loop so the track keeps pace with the looping timeline. When the
    // timeline window fits inside the track, loop just that window; otherwise
    // loop the whole track.
    src.loop = true
    src.loopStart = 0
    src.loopEnd = (loopEnd > 0 && loopEnd <= this.buffer.duration)
      ? loopEnd
      : this.buffer.duration
    const gain = this.ctx.createGain()
    src.connect(gain)
    gain.connect(this.ctx.destination)

    const offset = Math.max(0, Math.min(offsetSec, this.buffer.duration - 0.001))
    src.start(0, offset)

    this.source = src
    this.gain = gain
    this.playing = true
  }

  stop() {
    if (this.source) {
      try { this.source.stop() } catch (e) { /* already stopped */ }
      this.source.disconnect()
      this.source = null
    }
    if (this.gain) {
      this.gain.disconnect()
      this.gain = null
    }
    this.playing = false
  }

  /**
   * Reposition during playback (manual seek). No-op when not playing.
   */
  seek(offsetSec, loopEnd) {
    if (!this.playing) return
    this.play(offsetSec, loopEnd)
  }

  clear() {
    this.stop()
    this.buffer = null
    this.fileName = ''
    this.bpm = 0
    this.envelopes = {}
    this._smoothCache = {}
    this.fileBlob = null
  }
}
