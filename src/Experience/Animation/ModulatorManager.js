import Modulator from './Modulator.js'

/**
 * ModulatorManager - owns the list of Modulators and bridges them to the
 * animation timeline (whose apply() reads each modulator's output every
 * frame) and to persistence.
 */
export default class ModulatorManager {
  /**
   * @param {import('../Experience.js').default} experience
   */
  constructor(experience) {
    this.experience = experience
    this.modulators = []
    this._nextId = 1
  }

  list() {
    return this.modulators
  }

  get(id) {
    return this.modulators.find(m => m.id === id)
  }

  /**
   * @param {string} type - 'lfo' | 'dbFollower'
   * @param {Object} defaults - target/center/range overrides
   * @returns {Modulator}
   */
  add(type, defaults = {}) {
    const mod = new Modulator({ id: this._nextId++, type, ...defaults })
    this.modulators.push(mod)
    return mod
  }

  /**
   * Remove a modulator and any keyframe tracks it owned.
   * @param {number} id
   */
  remove(id) {
    const mod = this.get(id)
    if (!mod) return
    const anim = this.experience.animation
    anim.removeTrack(mod.centerTrackId)
    anim.removeTrack(mod.rangeTrackId)
    this.modulators = this.modulators.filter(m => m.id !== id)
  }

  clear() {
    this.modulators = []
    this._nextId = 1
  }

  getSnapshot() {
    return this.modulators.map(m => m.getSnapshot())
  }

  /**
   * @param {Array|null} snap
   */
  setFromSnapshot(snap) {
    this.clear()
    if (snap instanceof Array) {
      for (const s of snap) {
        const mod = Modulator.fromSnapshot(s)
        this.modulators.push(mod)
        this._nextId = Math.max(this._nextId, Number(mod.id) + 1)
      }
    }
  }
}
