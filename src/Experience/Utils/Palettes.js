import * as THREE from 'three'
import Palette from './Palette'
import Storage from './Storage'
import defaultPalettes from '../Common/defaultPalettes.js'

export default class Palettes {
  constructor(defaultPalettes) {
    this.load()
  }

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

  getPaletteByIndex(index) {
    return this.palettes[Math.min(index, this.palettes.length - 1)]
  }

  getPaletteIndex(inputPalette) {
    let i
    for (i = 0; i < this.palettes.length; i++) {
      const palette = this.palettes[i]
      if (palette === inputPalette) {
        return i
      }
    }
  }

  getPaletteByName(name) {
    for (const palette of this.palettes) {
      if (palette.name == name) {
        return palette
      }
    }
    return null
  }

  load() {
    this.palettes = this.readDefaultPalettes(defaultPalettes)
    const palettes = Storage.getPalettes()

    palettes.forEach(palette => {
      this.addPalette(palette)
    })
  }

  save() {
    Storage.setPalettes(this.palettes)
  }

  addPalette(palette = new Palette()) {
    this.palettes.push(palette)
    return palette
  }

  // deletes palette and returns next valid palette
  deletePalette(paletteToDelete) {
    const i = this.getPaletteIndex(paletteToDelete)
    this.palettes.splice(i)
    return this.palettes[i < this.palettes.length ? i : this.palettes.length - 1]
  }

  // allow for indexing
  [Symbol.iterator]() {
    var index = -1
    var data = this.palettes

    return {
      next: () => ({ value: data[++index], done: !(index in data) })
    }
  };
}