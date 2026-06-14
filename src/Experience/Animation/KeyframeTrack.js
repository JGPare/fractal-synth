/**
 * KeyframeTrack - Sorted keyframes for a single shader parameter
 * Each keyframe: { t: time (s), v: value, s: sharpness 0..1 }
 * Interpolation is cubic Hermite with Catmull-Rom tangents; sharpness
 * blends each keyframe's tangent toward the segment chord, so s=1 on
 * both ends of a segment is exactly linear.
 */
export default class KeyframeTrack {
  /**
   * @param {number} eId - index into eNumInput / uFloatPar
   */
  constructor(eId) {
    this.eId = eId
    this.keys = []
    this.muted = false
  }

  // ============================================================
  // KEYFRAME MANAGEMENT
  // ============================================================

  /**
   * Add a keyframe, or replace one within eps of t (preserving its
   * sharpness unless one is passed explicitly)
   * @param {number} t
   * @param {number} v
   * @param {number|null} s
   * @param {number} eps
   * @returns {number} index of the keyframe
   */
  setKeyframe(t, v, s = null, eps = 0.005) {
    const existing = this.indexOfKeyAt(t, eps)
    if (existing >= 0) {
      this.keys[existing].v = v
      if (s !== null) {
        this.keys[existing].s = s
      }
      return existing
    }
    const key = { t, v, s: s ?? 0 }
    this.keys.push(key)
    this.sortKeys()
    return this.keys.indexOf(key)
  }

  /**
   * @param {number} index
   */
  removeKeyframe(index) {
    this.keys.splice(index, 1)
  }

  /**
   * @param {number} t
   * @param {number} eps
   * @returns {number} index of keyframe within eps of t, or -1
   */
  indexOfKeyAt(t, eps) {
    for (let i = 0; i < this.keys.length; i++) {
      if (Math.abs(this.keys[i].t - t) <= eps) {
        return i
      }
    }
    return -1
  }

  /**
   * Move a keyframe in time, keeping the list sorted
   * @param {number} index
   * @param {number} newT
   * @returns {number} the keyframe's new index
   */
  moveKeyframe(index, newT) {
    const key = this.keys[index]
    if (!key) return index
    key.t = Math.max(0, newT)
    this.sortKeys()
    return this.keys.indexOf(key)
  }

  sortKeys() {
    this.keys.sort((a, b) => a.t - b.t)
  }

  get length() {
    return this.keys.length
  }

  // ============================================================
  // EVALUATION
  // ============================================================

  /**
   * Evaluate the track at an arbitrary time
   * @param {number} t
   * @returns {number}
   */
  evaluate(t) {
    const keys = this.keys
    const n = keys.length
    if (n === 0) return 0
    if (n === 1 || t <= keys[0].t) return keys[0].v
    if (t >= keys[n - 1].t) return keys[n - 1].v

    // Find segment i with keys[i].t <= t < keys[i+1].t
    let i = 0
    while (i < n - 2 && t >= keys[i + 1].t) {
      i++
    }

    const k0 = keys[i]
    const k1 = keys[i + 1]
    const h = k1.t - k0.t
    if (h <= 0) return k1.v
    const u = (t - k0.t) / h
    const chord = (k1.v - k0.v) / h

    // Catmull-Rom tangents (non-uniform), chord at the endpoints
    const mL = i > 0
      ? (k1.v - keys[i - 1].v) / (k1.t - keys[i - 1].t)
      : chord
    const mR = i + 2 < n
      ? (keys[i + 2].v - k0.v) / (keys[i + 2].t - k0.t)
      : chord

    // Sharpness blends each tangent toward the chord (s=1 -> linear)
    const m1 = mL + (chord - mL) * k0.s
    const m2 = mR + (chord - mR) * k1.s

    const u2 = u * u
    const u3 = u2 * u
    return (2 * u3 - 3 * u2 + 1) * k0.v
      + (u3 - 2 * u2 + u) * h * m1
      + (-2 * u3 + 3 * u2) * k1.v
      + (u3 - u2) * h * m2
  }

  // ============================================================
  // SERIALIZATION
  // ============================================================

  /**
   * @returns {Object} { eId, keys: [[t, v, s], ...] }
   */
  getSnapshot() {
    const snap = {
      eId: this.eId,
      keys: this.keys.map(k => [
        Math.round(k.t * 1000) / 1000,
        Math.round(k.v * 1000000) / 1000000,
        Math.round(k.s * 100) / 100
      ])
    }
    if (this.muted) snap.muted = true
    return snap
  }

  /**
   * @param {Object} snap
   * @returns {KeyframeTrack}
   */
  static fromSnapshot(snap) {
    const track = new KeyframeTrack(snap.eId)
    if (snap.keys instanceof Array) {
      for (const k of snap.keys) {
        track.keys.push({ t: k[0], v: k[1], s: k[2] ?? 0 })
      }
      track.sortKeys()
    }
    track.muted = snap.muted ?? false
    return track
  }
}
