import Palette from "../Utils/Palette"
import * as THREE from 'three'
import Palettes from "../Utils/Palettes"

const debug = true

export default class PaletteRepo {
  // ============================================================
  // SAVE OPERATIONS
  // ============================================================

  /**
   * @param {string} name
   * @param {Palettes} palettes
   */
  static savePalettes(palettes) {
    const palettesSnapshot = this.getPalettesSnapshot(palettes)
    localStorage.setItem("palettes", JSON.stringify(palettesSnapshot))
  }

  // ============================================================
  // LOAD OPERATIONS
  // ============================================================

  /**
   * @param {Palettes} palettes
   */
  static loadPalettes(palettes) {
    const palettesSnapshot = JSON.parse(localStorage.getItem('palettes'))
    this.setPalettesFromSnapshot(palettes, palettesSnapshot)
  }

  // ============================================================
  // SNAPSHOT GETTERS
  // ============================================================

  /**
  * @param {Palettes} palettes
  * @returns {Object}
  */
  static getPalettesSnapshot(palettes) {
    const palettesSnapshot = palettes.getSnapshot()
    return palettesSnapshot
  }

  // ============================================================
  // SNAPSHOT SETTERS
  // ============================================================

  /**
   * @param {Object} paletteSnapshot
   * @param {Palettes} palettes
   * @returns {Object}
   */
  static setPalettesFromSnapshot(palettes, palettesSnapshot) {
    for (const paletteSnapshot of palettesSnapshot) {
      const name = paletteSnapshot.name
      const colors = []
      const displayLength = paletteSnapshot.length
      
      for (const colorHex of paletteSnapshot.colorHexes) {
        let color = new THREE.Color()
        color.setHex(colorHex)
        colors.push(color)
      }
      palettes.addPalette(new Palette(colors, name, displayLength))
    }
  }
}
