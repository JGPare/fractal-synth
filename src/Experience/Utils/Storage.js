import Palette from './Palette'
import * as THREE from 'three'

export default class Storage
{
  static setItem(name, item) {
    localStorage.setItem(name, JSON.stringify(item))
  }

  static getItem(name){
    return JSON.parse(localStorage.getItem(name))
  }

  static setPalettes(palettes){
    this.setItem('palettes',
      this.stringifyPalettes(palettes)
    )
  }

  static getPalettes(){
    const palettes = this.getItem('palettes')
    return palettes ? this.parsePalettes(palettes) : []
  }

  static stringifyPalettes(palettes)
  {
    let palettesObject = []
    for (const palette of palettes) 
    {
      if (!palette.locked)
      {
        const paletteObject = {}
        paletteObject.name = palette.name
        paletteObject.colorHexes = []
        for (const color of palette.palette)
        {
          paletteObject.colorHexes.push(color.getHex())
        }
        palettesObject.push(paletteObject)
      }
    }
    return palettesObject
  }

  static parsePalettes(palettesObject)
  {
    let palettes = []
    for (const paletteObject of palettesObject) {
      const name = paletteObject.name
      const colors = []
      for (const colorHex of paletteObject.colorHexes) {
        let color = new THREE.Color()
        color.setHex(colorHex)
        colors.push(color)
      }
      palettes.push(new Palette(colors,name))
    }
    return palettes
  }
}