import Cookies from './Cookies'
import * as THREE from 'three'
import Palette from './Palette'

// Cookie Cutter is for singleton objects
export default class CookieCutter
{
  static updateCookie(object)
  {
    const className = object.constructor.name
    let stringifiedObject
    switch(className){
      case "Palettes":
        stringifiedObject = this.stringifyPalettes(object)
        break;
    }
    Cookies.removeCookie(className)
    Cookies.setCookie(className,stringifiedObject)
  }

  static loadCookie(object)
  {
    const className = object.constructor.name
    const stringifiedObject = Cookies.getCookie(className)
    if (stringifiedObject.length > 0)
    {
      switch(className){
        case "Palettes":
          this.parsePalettes(object,stringifiedObject)
          break;
      }
    }
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
    return JSON.stringify(palettesObject)
  }

  static parsePalettes(palettes, cookieString)
  {
    let palettesObject = JSON.parse(cookieString)
    for (const paletteObject of palettesObject) {
      const name = paletteObject.name
      const colors = []
      for (const colorHex of paletteObject.colorHexes) {
        let color = new THREE.Color()
        color.setHex(colorHex)
        colors.push(color)
      }
      palettes.addPalette(new Palette(colors,name))
    }
  }
}