export default class Project {
  // ============================================================
  // INITIALIZATION
  // ============================================================

  /**
   * @param {int} index
   * @param {string} name
   * @param {string|null} image
   * @param {string|null} lastModified
   */
  constructor(id, name, image = null, lastModified = null) {
    this.id = id
    this.name = name
    this.image = image
    this.lastModified = lastModified ? Date.parse(lastModified) : Date.now()
  }

  // ============================================================
  // SNAPSHOT
  // ============================================================

  /**
   * @returns {Object}
   */
  getSnapshot() {
    return {
      id: this.id,
      name: this.name,
      image: this.image,
      lastModified: this.lastModified.toString()
    }
  }

  // ============================================================
  // MUTATORS
  // ============================================================

  /**
   * @param {string} image
   */
  setImage(image) {
    this.image = image
  }

  updateModified() {
    this.lastModified = Date.now()
  }
}
