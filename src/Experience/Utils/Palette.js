import * as THREE from 'three'

// This must be coordinated with shader
const defaultPaletteLength = 10
// This is how many colors are used by default
const defaultPaletteDisplayLength = 5

export default class Palette {
  // ============================================================
  // INITIALIZATION
  // ============================================================

  /**
   * @param {THREE.Color[]} palette
   * @param {string} name
   * @param {number} length
   */
  constructor(palette = [], name = "", length = null) {
    this.name = name
    this.palette = palette
    this.locked = false
    this.displayLength = length

    if (palette.length == 0) {
      this.setDefaultPalette(length ?? defaultPaletteLength)
      this.length = this.palette.length
      this.displayLength = defaultPaletteDisplayLength
    }

    if (name.length == 0) {
      this.setDefaultName()
    }
  }

  /**
   * @returns {Palette}
   */
  clone() {
    const palette = new Palette()
    for (let i = 0; i < this.palette.length; i++) {
      const color = this.getColor(i).clone()
      palette.setColor(i, color)
    }
    palette.displayLength = this.displayLength
    return palette
  }

  lock() {
    this.locked = true
  }

  // ============================================================
  // PALETTE MANAGEMENT
  // ============================================================

  /**
   * @param {THREE.Color[]} palette
   */
  setPalette(palette) {
    this.palette = palette
  }

  /**
   * @param {number} length
   */
  setDefaultPalette(length) {
    this.clearPalette()
    for (let i = 0; i < length; i++) {
      this.addColor()
    }
  }

  clearPalette() {
    this.palette.length = 0
  }

  setDefaultName() {
    this.name = ''
    for (let i = 0; i < this.palette.length && i < 8; i++) {
      this.name += this.getHexOfIndex(i)[0]
    }
  }

  /**
   * @param {number} length
   */
  setLength(length) {
    this.displayLength = length
  }

  randomize() {
    for (const color of this.palette) {
      this.setColorAsRandom(color)
    }
  }

  // ============================================================
  // COLOR MANAGEMENT
  // ============================================================

  /**
   * @param {number} index
   * @returns {THREE.Color}
   */
  getColor(index) {
    return this.palette[Math.min(index, this.palette.length - 1)]
  }

  /**
   * @param {number} index
   * @param {THREE.Color} color
   */
  setColor(index, color) {
    this.palette[index] = color
  }

  /**
   * @param {number} index
   * @param {HTMLInputElement} element
   */
  setColorFromElement(index, element) {
    const color = new THREE.Color(element.value)
    color.convertLinearToSRGB()
    this.palette[index] = color
  }

  /**
   * @param {THREE.Color} color
   */
  setColorAsRandom(color) {
    color.setRGB(Math.random(), Math.random(), Math.random())
  }

  /**
   * @param {number} index
   * @returns {string}
   */
  getHexOfIndex(index) {
    const color = this.palette[index].clone()
    color.convertSRGBToLinear()
    return color.getHexString()
  }

  /**
   * @param {THREE.Color} color
   * @param {boolean} random
   * @returns {THREE.Color}
   */
  addColor(color = new THREE.Color(), random = false) {
    if (random) {
      this.setColorAsRandom(color)
    }
    this.palette.push(color)
    this.length = this.palette.length
    return color
  }

  /**
   * @param {number} colorHex
   */
  addColorByHex(colorHex) {
    const color = new THREE.Color()
    color.setHex(colorHex, THREE.SRGBColorSpace)
    this.addColor(color)
  }

  /**
   * @param {number} index
   */
  removeColor(index = this.palette.length - 1) {
    this.palette.pop(index)
  }

  // ============================================================
  // SNAPSHOT
  // ============================================================

  getSnapshot() {
    const paletteSnapshot = {}
    paletteSnapshot.name = palette.name
    paletteSnapshot.length = palette.displayLength
    paletteSnapshot.colorHexes = []
    for (const color of palette.palette) {
      paletteSnapshot.colorHexes.push(color.getHex())
    }
    return paletteSnapshot
  }
}
