/**
 * Modulator - an "instrument" that drives a shader parameter in place of
 * direct keyframing. Two kinds:
 *   - 'lfo'        : a waveform whose rate is set in beats
 *   - 'dbFollower' : follows a frequency band's loudness envelope (Phase D)
 *
 * The output is  center + range * signal , clamped to the target's range.
 * `center` and `range` are the keyframeable quantities (the modulator is a
 * stand-in for animating the target directly); their per-modulator track ids
 * are `mod:<id>:center` and `mod:<id>:range`.
 */
export default class Modulator {
  constructor({
    id,
    type = 'lfo',
    targetEId = 0,
    center = 0,
    range = 0,
    enabled = true,
    // lfo
    waveform = 'sine',
    rateBeats = 1,
    phase = 0,
    // dbFollower
    band = 'low',
    damping = 0.2,
  }) {
    this.id = id
    this.type = type
    this.targetEId = Number(targetEId)
    this.center = center
    this.range = range
    this.enabled = enabled

    this.waveform = waveform
    this.rateBeats = rateBeats
    this.phase = phase

    this.band = band
    this.damping = damping
  }

  get centerTrackId() { return `mod:${this.id}:center` }
  get rangeTrackId() { return `mod:${this.id}:range` }

  /**
   * Bipolar/unipolar source signal at the current playhead.
   *   lfo        -> [-1, 1]
   *   dbFollower -> [0, 1]
   * @param {import('./AnimationTimeline.js').default} animation
   * @returns {number}
   */
  signal(animation) {
    if (this.type === 'lfo') {
      const beats = animation.beatsAt(animation.playhead)
      const phase = beats / Math.max(1e-6, this.rateBeats) + this.phase
      return Modulator.wave(this.waveform, phase)
    }
    if (this.type === 'dbFollower') {
      const ae = animation.experience.audioEngine
      return ae ? ae.sampleEnvelope(this.band, animation.playhead, this.damping) : 0
    }
    return 0
  }

  /**
   * Evaluate one cycle of a waveform.
   * @param {string} waveform
   * @param {number} phase - cycles (integer part is dropped)
   * @returns {number} -1..1
   */
  static wave(waveform, phase) {
    const p = phase - Math.floor(phase) // 0..1
    switch (waveform) {
      case 'saw': return 2 * p - 1
      case 'square': return p < 0.5 ? 1 : -1
      case 'triangle': return 2 * (1 - 2 * Math.abs(p - 0.5)) - 1
      case 'sine':
      default: return Math.sin(p * 2 * Math.PI)
    }
  }

  getSnapshot() {
    const s = {
      id: this.id,
      type: this.type,
      targetEId: this.targetEId,
      center: this.center,
      range: this.range,
      enabled: this.enabled,
    }
    if (this.type === 'lfo') {
      s.waveform = this.waveform
      s.rateBeats = this.rateBeats
      s.phase = this.phase
    } else if (this.type === 'dbFollower') {
      s.band = this.band
      s.damping = this.damping
    }
    return s
  }

  static fromSnapshot(snap) {
    return new Modulator(snap)
  }
}
