import * as THREE from 'three'

// this must be coordinate with shader
const defaultPaletteLength = 10
// this is how many colors are used by default
const defaultPaletteDisplayLength = 5

export default class Palette
{
  constructor(palette = [], name = "", length = null) 
  {
    this.name = name
    this.palette = palette
    this.locked = false
    this.displayLength = length
    
    if (palette.length == 0)
    {
      this.setDefaultPalette(length ?? defaultPaletteLength)
      this.length = this.palette.length
      this.displayLength = defaultPaletteDisplayLength
    }

    if (name.length == 0)
    {
      this.setDefaultName()
    }
  }

  clone()
  {
    const palette = new Palette()
    for (let i = 0; i < palette.length; i++) {
      const color = this.getColor(i).clone()
      palette.setColor(i,color)
    }
    palette.displayLength = this.displayLength
    return palette
  }

  lock()
  {
    this.locked = true
  }

  setPalette(palette)
  {
    this.palette = palette
  }

  setColor(index, color)
  {
    this.palette[index] = color
  }

  setColorFromElement(index,element)
  {
    const color = new THREE.Color(element.value)
    color.convertLinearToSRGB()
    palette[i] = color
  }

  setDefaultPalette(length)
  {
    this.clearPalette()
    for (let i = 0; i < length; i++) {
      this.addColor()
    }
  }

  clearPalette()
  {
    this.palette.length = 0
  }

  setDefaultName()
  {
    this.name = ''
    for (let i = 0; i < this.palette.length && i < 8; i++)
    {
      this.name += this.getHexOfIndex(i)[0]
    }
  }

  getColor(index)
  {
    return this.palette[Math.min(index,this.palette.length-1)]
  }

  getHexOfIndex(index)
  {
    const color = this.palette[index].clone()
    color.convertSRGBToLinear()
    return color.getHexString()
  }

  addColor(color = new THREE.Color(), random=false)
  {
    if(random){
      this.setColorAsRandom(color)
    }
    this.palette.push(color)
    this.length = this.palette.length
    return color
  }

  setColorAsRandom(color)
  {
    color.setRGB(Math.random(),
                 Math.random(),
                 Math.random())
  }

  randomize()
  {
    for (const color of this.palette) {
      this.setColorAsRandom(color)
    }
  }

  addColorByHex(colorHex)
  {
    const color = new THREE.Color()
    color.setHex(colorHex, THREE.SRGBColorSpace)
    this.addColor(color)
  }

  removeColor(index = this.palette.length-1)
  {
    this.palette.pop(index)
  }

  setLength(length)
  {
    this.displayLength = length
  }

}