import Palette from './Palette'
import Storage from './Storage'
import defaultPalettes from '../Common/defaultPalettes.js'

export default class Palettes {
  // ============================================================
  // INITIALIZATION
  // ============================================================

  constructor() {
    this.load()
  }

  load() {
    this.palettes = this.readDefaultPalettes()
    const palettes = Storage.getPalettes()

    palettes.forEach(palette => {
      this.addPalette(palette)
    })
  }

  /**
   * @returns {Palette[]}
   */
  readDefaultPalettes() {
    let palettes = []
    for (const paletteData of defaultPalettes) {
      const palette = new Palette(paletteData.palette, paletteData.name, paletteData.length)
      palette.lock()
      palettes.push(palette)
    }
    this.length = palettes.length
    return palettes
  }

  // ============================================================
  // PALETTE ACCESS
  // ============================================================

  /**
   * @param {number} index
   * @returns {Palette}
   */
  getPaletteByIndex(index) {
    return this.palettes[Math.min(index, this.palettes.length - 1)]
  }

  /**
   * @param {Palette} inputPalette
   * @returns {number|undefined}
   */
  getPaletteIndex(inputPalette) {
    for (let i = 0; i < this.palettes.length; i++) {
      const palette = this.palettes[i]
      if (palette === inputPalette) {
        return i
      }
    }
  }

  /**
   * @param {string} name
   * @returns {Palette|null}
   */
  getPaletteByName(name) {
    for (const palette of this.palettes) {
      if (palette.name == name) {
        return palette
      }
    }
    return null
  }

  [Symbol.iterator]() {
    var index = -1
    var data = this.palettes

    return {
      next: () => ({ value: data[++index], done: !(index in data) })
    }
  }

  // ============================================================
  // PALETTE MANAGEMENT
  // ============================================================

  /**
   * @param {Palette} palette
   * @returns {Palette}
   */
  addPalette(palette = new Palette()) {
    this.palettes.push(palette)
    return palette
  }

  /**
   * @param {Palette} paletteToDelete
   * @returns {Palette}
   */
  deletePalette(paletteToDelete) {
    const i = this.getPaletteIndex(paletteToDelete)
    this.palettes.splice(i, 1)
    return this.palettes[i < this.palettes.length ? i : this.palettes.length - 1]
  }

  save() {
    Storage.setPalettes(this.palettes)
  }
}
