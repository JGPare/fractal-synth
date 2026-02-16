import * as THREE from 'three'
import BaseController from './BaseController'

/**
 * PaletteController - Manages palette selection and color picker operations
 * Handles palette CRUD operations and color element generation
 */
export default class PaletteController extends BaseController {
  constructor() {
    super()
    this.initState()
    this.getElements()
    this.createColorElements()
    this.linkPalette()
  }

  initState() {
    this.numberOfColors = 5
    this.palette = this.palettes.getPaletteByIndex(0)
  }

  getElements() {
    this.paletteSelect = document.getElementById('palette-select')
    this.numberOfColorsSlider = document.getElementById('number-of-colors')
    this.colorsContainer = document.getElementById('colors-container')
    this.paletteInput = document.getElementById('palette-input')
  }

  linkPalette() {
    this.linkPaletteSelect()
    this.linkPaletteInput()
    this.setPaletteInputFromSelect()
    this.linkNewPaletteButton()
    this.linkRandomPaletteButton()
    this.linkDeletePaletteButton()

    this.numberOfColorsSlider.addEventListener('change', (event) => {
      this.numberOfColors = event.target.value
      this.setNumberOfColors()
    })
  }

  linkPaletteSelect() {
    this.setPaletteSelectOptions()
    this.paletteSelect.addEventListener('change', () => {
      this.setPaletteInputFromSelect()
      const palette = this.palettes.getPaletteByName(this.paletteSelect.value)
      this.setPalette(palette)
      if (palette.locked) {
        this.lockPaletteInput()
      } else {
        this.unlockPaletteInput()
      }
    })
  }

  linkPaletteInput() {
    this.paletteInput.addEventListener('change', () => {
      const paletteOption = this.paletteSelect.options[this.paletteSelect.selectedIndex]
      this.paletteIndex = this.paletteSelect.selectedIndex
      if (this.shader) {
        this.shader.paletteIndex = this.paletteSelect.selectedIndex
      }
      paletteOption.value = this.paletteInput.value
      paletteOption.innerHTML = this.paletteInput.value
      this.palette.name = this.paletteInput.value
    })
  }

  /**
   * Set palette from index
   * @param {number} index - Palette index
   */
  setPaletteFromIndex(index) {
    const paletteOption = this.paletteSelect.options[index]
    this.paletteSelect.value = paletteOption.value
    const palette = this.palettes.getPaletteByName(this.paletteSelect.value)
    this.setPalette(palette)
    this.setPaletteInputFromSelect()
  }

  setPaletteInputFromSelect() {
    this.paletteIndex = this.paletteSelect.selectedIndex
    if (this.shader) {
      this.shader.paletteIndex = this.paletteIndex
    }
    this.paletteInput.value = this.paletteSelect.value
  }

  linkNewPaletteButton() {
    const newPaletteButton = document.getElementById('new-palette-button')
    newPaletteButton.addEventListener('click', () => {
      const palette = this.palette.clone()
      palette.setDefaultName()
      this.palettes.addPalette(palette)
      this.setPalette(palette)
      this.setPaletteSelectOptions()
      this.setPaletteInputFromSelect()
      this.unlockPaletteInput()
    })
  }

  linkRandomPaletteButton() {
    const newPaletteButton = document.getElementById('random-palette-button')
    newPaletteButton.addEventListener('click', () => {
      if (this.palette.locked) {
        const palette = this.palettes.addPalette()
        this.setPalette(palette)
      } else {
        this.palette.randomize()
        this.refreshPaletteElements()
      }
      this.setPaletteSelectOptions()
      this.setPaletteInputFromSelect()
      this.unlockPaletteInput()
    })
  }

  linkDeletePaletteButton() {
    const deletePaletteButton = document.getElementById('delete-palette-button')
    deletePaletteButton.addEventListener('click', () => {
      if (!this.palette.locked) {
        const palette = this.palettes.deletePalette(this.palette)
        this.setPalette(palette)
        this.setPaletteSelectOptions()
        this.setPaletteInputFromSelect()
      }
    })
  }

  setNumberOfColors() {
    this.shaderUniforms.uPaletteLen.value = this.numberOfColors
    this.palette.displayLength = this.numberOfColors
    this.numberOfColorsSlider.value = this.numberOfColors
    this.removeColorElements()
    this.createColorElements()
  }

  createColorElements() {
    const colorGrid = document.getElementById('colors-container')
    let colorElement
    let color

    for (let i = 0; i < this.numberOfColors; i++) {
      colorElement = document.createElement("input")
      color = this.palette.getColor(i).clone()
      color.convertSRGBToLinear()
      colorElement.setAttribute("type", "color")
      colorElement.setAttribute("class", "colorpicker")
      colorElement.setAttribute("data", i)
      colorElement.setAttribute("value", "#" + color.getHexString())
      colorElement.addEventListener('input', (event) => {
        this.setColorFromElement(event.target, i)
      })
      colorGrid.appendChild(colorElement)
      if (i == 0) {
        this.setColorFromElement(colorElement, 0)
      }
    }
  }

  /**
   * Set palette and update UI
   * @param {Palette} palette - Palette to set
   */
  setPalette(palette) {
    this.palette = palette
    this.numberOfColors = palette.displayLength
    this.shaderUniforms.uPalette.value = this.palette.palette
    this.setNumberOfColors()
    this.refreshPaletteElements()
    this.trigger('paletteChanged', [palette])
  }

  refreshPaletteElements() {
    this.removeColorElements()
    this.createColorElements()
  }

  removeColorElements() {
    const colorGrid = this.colorsContainer
    while (colorGrid.firstChild) {
      colorGrid.removeChild(colorGrid.lastChild)
    }
  }

  /**
   * Set color from HTML element
   * @param {HTMLElement} element - Color input element
   * @param {number} i - Color index
   */
  setColorFromElement(element, i) {
    const color = new THREE.Color(element.value)
    color.convertLinearToSRGB()
    this.palette.setColor(i, color)
    this.shaderUniforms.uPalette.value[i] = color
  }

  lockPaletteInput() {
    this.paletteInput.disabled = true
  }

  unlockPaletteInput() {
    this.paletteInput.disabled = false
  }

  setPaletteSelectOptions() {
    this.paletteSelect.innerHTML = ''
    for (const palette of this.palettes) {
      const paletteOption = document.createElement("option")
      paletteOption.setAttribute("value", palette.name)
      paletteOption.innerHTML = palette.name
      this.paletteSelect.appendChild(paletteOption)
    }
    this.paletteSelect.selectedIndex = this.palettes.getPaletteIndex(this.palette)
  }

  /**
   * Get current palette
   * @returns {Palette}
   */
  getCurrentPalette() {
    return this.palette
  }
}
