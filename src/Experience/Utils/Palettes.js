import * as THREE from 'three'
import Palette from './Palette'
import Cookies from './Cookies'
import CookieCutter from './CookieCutter'

export default class Palettes
{
  constructor(defaultPalettes) 
  {
    //Cookies.removeAllCookies()
    this.palettes = this.readDefaultPalettes(defaultPalettes)
    this.loadAllPalettes()
  }

  readDefaultPalettes(defaultPalettes)
  {
    let palettes = []
    for (const paletteData of defaultPalettes) {
      const palette = new Palette(paletteData.palette, paletteData.name)
      palette.lock()
      palettes.push(palette)
    }
    this.length = palettes.length
    return palettes
  }

  getPaletteByIndex(index)
  {
    return this.palettes[Math.min(index,this.palettes.length-1)]
  }

  getPaletteIndex(inputPalette)
  {
    let i;
    for (i = 0; i  < this.palettes.length; i++) {
      const palette = this.palettes[i];
      if (palette === inputPalette){
        return i;
      }
    }
  }

  getPaletteByName(name)
  {
    for (const palette of this.palettes) {
      if (palette.name == name)
      {
        return palette
      }
    }
    return null
  }
  
  loadAllPalettes()
  {
    CookieCutter.loadCookie(this)
  }
  
  addPalette(palette = new Palette())
  {
    this.palettes.push(palette)
    return palette
  }

  // deletes palette and returns next valid palette
  deletePalette(paletteToDelete)
  {
    const i = this.getPaletteIndex(paletteToDelete)
    this.palettes.splice(i)
    return this.palettes[i < this.palettes.length ? i : this.palettes.length-1]
  }

  updateCookie()
  {
    CookieCutter.updateCookie(this)
  }
  
  // allow for indexing
  [Symbol.iterator]() {
    var index = -1;
    var data  = this.palettes;

    return {
      next: () => ({ value: data[++index], done: !(index in data) })
    };
  };
}