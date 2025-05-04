import * as THREE from 'three'
import Experience from "./Experience"
import ExperienceRepo from './ExperienceRepo'

const modes = 
{
  mandle : 0,
  julia : 1,
  sinJulia : 2
}

export default class Controls 
{
  constructor() 
  {
    this.experience = new Experience()
    this.debug = this.experience.debug
    this.canvas = this.experience.canvas
    this.sizes = this.experience.sizes
    this.time = this.experience.time
    this.mouse = this.experience.mouse
    this.shader = this.experience.shader
    this.timeline = this.experience.timeline
    this.shaderUniforms = this.shader.getUniforms()
    this.palettes = this.experience.palettes
    this.palette = this.palettes.getPaletteByIndex(0)

    this.numberOfColors = 6

    this.modeIndex = 0

    this.animateSet = false

    // Debug
    if (this.debug.active)
    {
      this.debugFolder = this.debug.ui.addFolder('Screen')
      this.debugFolder.close()
    }
    this.createColorElements()
    this.getElements()
    this.linkUI()
  }

  getElements()
  {
    this.constantSlider = document.getElementById('constant-slider')
    this.powerSlider = document.getElementById('power-slider')
    this.rotationSlider = document.getElementById('rotation-slider')
    this.positionXSlider = document.getElementById('position-x-slider')
    this.positionYSlider = document.getElementById('position-y-slider')
    this.modeSelect = document.getElementById('mode-select')
    this.numberOfColors = document.getElementById('number-of-colors')
    this.velocityDistortionDirection = document.getElementById('velocity-distortion-direction')
    this.velocityDistortionAmount = document.getElementById('velocity-distortion-amount')
    this.sinJuliaXcoeff = document.getElementById('sin-julia-x-coeff')
    this.sinJuliaYcoeff = document.getElementById('sin-julia-y-coeff')
    this.areaModOn = document.getElementById('area-mod-on')
    this.areaModXoffset = document.getElementById('area-mod-x-offset')
    this.areaModYoffset = document.getElementById('area-mod-y-offset')
    this.areaModX = document.getElementById('area-mod-x')
    this.areaModY = document.getElementById('area-mod-y')
    this.deleteSceneButton = document.getElementById('delete-scene-button')
    this.saveSceneButton = document.getElementById('save-scene-button')
    this.loadSceneButton = document.getElementById('load-scene-button')
    this.timelineSlider = document.getElementById('timeline-slider')
    this.playTimelineButton = document.getElementById('play-timeline-button')
    this.pauseTimelineButton = document.getElementById('pause-timeline-button')
    this.setTimelineButton = document.getElementById('set-timeline-button')
  }

  setUIfromShader()
  {
    const uniforms = this.shaderUniforms
    this.constantSlider.value = this.shaderUniforms.uIterBase.value
    this.powerSlider.value = this.shaderUniforms.uPower.value
    this.rotationSlider.value = this.shaderUniforms.uRotation.value
    this.positionXSlider.value = this.shaderUniforms.uCx.value
    this.positionYSlider.value = this.shaderUniforms.uCy.value
    this.velocityDistortionDirection.value = this.shaderUniforms.uVelocityDistortionDirection.value
    this.velocityDistortionAmount.value = this.shaderUniforms.uVelocityDistortionAmount.value
    this.sinJuliaXcoeff.value = this.shaderUniforms.uSinJuliaXCoeff.value
    this.sinJuliaYcoeff.value = this.shaderUniforms.uSinJuliaYCoeff.value
    this.areaModOn.value = this.shaderUniforms.uAreaModOn.value
    this.areaModXoffset.value = this.shaderUniforms.uAreaModXOffset.value
    this.areaModYoffset.value = this.shaderUniforms.uAreaModYOffset.value
    this.areaModX.value = this.shaderUniforms.uAreaModX.value
    this.areaModY.value = this.shaderUniforms.uAreaModY.value
    this.modeIndex = this.shaderUniforms.uMode.value
    this.numberOfColors = this.shaderUniforms.uPaletteLen.value

    this.setDisplayedInputs()
    this.setModeFromIndex()

  }

  linkUI() 
  {
    this.constantSlider.addEventListener('input', (event) => {
      this.shaderUniforms.uIterBase.value = event.target.value
    })

    this.powerSlider.addEventListener('input', (event) => {
      this.shaderUniforms.uPower.value = event.target.value
    })

    this.rotationSlider.addEventListener('input', (event) => {
      this.shaderUniforms.uRotation.value = event.target.value
    })

    this.positionXSlider.addEventListener('input', (event) => {
      this.shaderUniforms.uCx.value = event.target.value
    })
    
    this.positionYSlider.addEventListener('input', (event) => {
      this.shaderUniforms.uCy.value = event.target.value
    })
    
    this.modeSelect.addEventListener('change', (event) => {
      this.modeIndex = event.target.selectedIndex
      this.shaderUniforms.uMode.value = this.modeIndex
      this.setDisplayedInputs()
    })

    this.numberOfColors.addEventListener('change', (event) =>
    {
      this.numberOfColors = event.target.value
      this.setNumberOfColors()
    })

    this.velocityDistortionDirection.addEventListener('input', (event) => {
      this.shaderUniforms.uVelocityDistortionDirection.value = event.target.value
    })
    
    this.velocityDistortionAmount.addEventListener('input', (event) => {
      this.shaderUniforms.uVelocityDistortionAmount.value = event.target.value
    })
    
    this.sinJuliaXcoeff.addEventListener('input', (event) => {
      this.shaderUniforms.uSinJuliaXCoeff.value = event.target.value
    })
    
    this.sinJuliaYcoeff.addEventListener('input', (event) => {
      this.shaderUniforms.uSinJuliaYCoeff.value = event.target.value
    })
    
    this.areaModOn.addEventListener('input', (event) => {
      this.shaderUniforms.uAreaModOn.value = event.target.value
    })
    
    this.areaModXoffset.addEventListener('input', (event) => {
      this.shaderUniforms.uAreaModXOffset.value = event.target.value
    })
    
    this.areaModYoffset.addEventListener('input', (event) => {
      this.shaderUniforms.uAreaModYOffset.value = event.target.value
    })
    
    this.areaModX.addEventListener('input', (event) => {
      this.shaderUniforms.uAreaModX.value = event.target.value
    })
    
    this.areaModY.addEventListener('input', (event) => {
      this.shaderUniforms.uAreaModY.value = event.target.value
    })

    this.deleteSceneButton.addEventListener('click', (event) => {
      // add delete scene option
    })

    this.saveSceneButton.addEventListener('click', (event) => {
      console.log("save scene");
      ExperienceRepo.saveExperience(document.getElementById('scene-name').value, this.experience)
    })
    
    this.loadSceneButton.addEventListener('click', (event) => {
      console.log("load scene");
      ExperienceRepo.loadExperience(document.getElementById('scene-name').value, this.experience)
    })

    this.linkTimeline()
    this.linkDualInputs()
    this.linkPaletteSelect()
    this.linkPaletteInput()
    this.setPaletteInputFromSelect()
    this.linkNewPaletteButton()
    this.linkRandomPaletteButton()
    this.linkDeletePaletteButton()
  }

  linkTimeline()
  {
    this.timelineSlider.addEventListener('input', (event) => {
      this.timeline.progress(event.target.value)
    })
    this.playTimelineButton.addEventListener('click', (event) => {
      this.timeline.play()
    })
    this.pauseTimelineButton.addEventListener('click', (event) => {
      this.timeline.pause()
    })
    this.setTimelineButton.addEventListener('click', (event) => {      
      this.setTimelineButton.classList.toggle('selected-button');
      if (this.animateSet){
        for (const [key, value] of Object.entries(this.shaderUniforms)) {
          if (value.value != this.initialValues[key].value){
            switch (key){
              case "uZoom": case "uFocusX": case "uFocusY":
                this.timeline.fromTo(this.shaderUniforms,
                  {"value" : this.initialValues[key].value},
                  {"value" : this.shaderUniforms[key].value, ease: "expo.out"},
                  0,
                  [key],
                )
                break;
              default:              
                if (!isNaN(value.value)){
                  this.timeline.fromTo(this.shaderUniforms,
                    {"value" : this.initialValues[key].value},
                    {"value" : this.shaderUniforms[key].value},
                    0,
                    [key],
                  )
                }
                break;
            }
          }
        }
        this.animateSet = false
        this.timeline.pause()
      }
      else{
        this.initialValues = this.getUniformValues()
        this.timeline.renew()
        this.setUniformValues(this.initialValues)
        this.timeline.fromTo(this, {value : 0}, {value : 1}, 0,  ["timelineSlider"])
        this.animateSet = true
        this.timeline.pause()
      }
    })
  }

  getUniformValues()
  {
    const copy = {}
    for (const [key, value] of Object.entries(this.shaderUniforms)) {
      copy[key] = {value : value.value}
    }
    return copy
  }

  setUniformValues(input)
  {
    if (!input) return
    for (const [key, value] of Object.entries(input)) {     
      if (typeof value == Object) {
        this.shaderUniforms[key].value = value.value
      }
    }
  }

  setDisplayedInputs()
  {
    switch (this.modeIndex) {
      case modes.mandle:
        this.hideElements("julia")
        this.hideElements("sinJulia")
        break;
      case modes.julia:
        this.showElements("julia")
        this.hideElements("sinJulia")
        break;
      case modes.sinJulia:
        this.showElements("julia")
        this.showElements("sinJulia")
        break;
      default:
        break;
    }
  }

  setNumberOfColors()
  {
    this.shaderUniforms.uPaletteLen.value = this.numberOfColors
    this.removeColorElements()
    this.createColorElements()
    this.palette.displayLength = this.numberOfColors
  }

  linkDualInputs()
  {
    // set it so sliders change numbers
    const dualInputs = document.getElementsByClassName('dual-input-grid')
    for (const element of dualInputs) {
      const range = element.children[0]
      const number = element.children[1]
      range.addEventListener('input',(event) =>{
        number.value = range.value
      })
      number.addEventListener('input',(event) =>{
        range.value = number.value
      })
    }
  }

  linkPaletteSelect()
  {
    this.setPaletteSelectOptions()
    const paletteSelect = document.getElementById('palette-select')
    paletteSelect.addEventListener('change', () =>
    {
      this.setPaletteInputFromSelect()
      const palette = this.palettes.getPaletteByName(paletteSelect.value)
      this.setPalette(palette)
      if (palette.locked)
      {
        this.lockPaletteInput()
      }
      else
      {
        this.unlockPaletteInput()
      }
    })
  }

  linkPaletteInput()
  {
    const paletteInput = document.getElementById('palette-input')
    paletteInput.addEventListener('change', () =>
    {
      const paletteSelect = document.getElementById('palette-select')
      const paletteOption = paletteSelect.options[ paletteSelect.selectedIndex ]
      paletteOption.value = paletteInput.value
      paletteOption.innerHTML = paletteInput.value
      this.palette.name = paletteInput.value
    })
  }

  setPaletteFromIndex(index)
  {
    const paletteSelect = document.getElementById('palette-select')
    const paletteOption = paletteSelect.options[ index ]
    paletteSelect.value = paletteOption.value
  }

  setModeFromIndex()
  {
    const modeSelect = this.modeSelect
    const modeOption = modeSelect.options[ this.modeIndex ]
    modeSelect.value = modeOption.value
  }

  setPaletteInputFromSelect()
  {
    const paletteInput = document.getElementById('palette-input')
    const paletteSelect = document.getElementById('palette-select')
    console.log(paletteSelect);
    
    paletteInput.value = paletteSelect.value
  }

  linkNewPaletteButton()
  {
    const newPaletteButton = document.getElementById('new-palette-button')
    newPaletteButton.addEventListener('click', () =>
    {
      const palette = this.palette.clone()
      palette.setDefaultName()
      this.palettes.addPalette(palette)
      this.setPalette(palette)
      this.setPaletteSelectOptions()
      this.setPaletteInputFromSelect()
      this.unlockPaletteInput()
    })
  }
  
  linkRandomPaletteButton()
  {
    const newPaletteButton = document.getElementById('random-palette-button')
    newPaletteButton.addEventListener('click', () =>
    {
      if (this.palette.locked){
        const palette = this.palettes.addPalette()
        this.setPalette(palette)
      }
      else {
        this.palette.randomize()
        this.updatePalette()
      }
      this.setPaletteSelectOptions()
      this.setPaletteInputFromSelect()
      this.unlockPaletteInput()
    })
  }

  linkDeletePaletteButton()
  {
    const deletePaletteButton = document.getElementById('delete-palette-button')
    deletePaletteButton.addEventListener('click', () =>
    {
      if (!this.palette.locked){
        const palette = this.palettes.deletePalette(this.palette)
        this.setPalette(palette)
        this.setPaletteSelectOptions()
        this.setPaletteInputFromSelect()
      }
    })
  }

  hideElements(dataString)
  {
    const elements = document.querySelectorAll(`[data-${dataString}]`);
    for (const element of elements) {
      element.style.display = "none"
    }
  }

  showElements(dataString)
  {
    const elements = document.querySelectorAll(`[data-${dataString}]`);
    for (const element of elements) {
      element.style.display = ""
    }
  }

  lockPaletteInput()
  {
    const paletteInput = document.getElementById('palette-input')
    paletteInput.readOnly = true
  }

  unlockPaletteInput()
  {
    const paletteInput = document.getElementById('palette-input')
    paletteInput.readOnly = false
  }

  setPaletteSelectOptions()
  {
    const paletteSelect = document.getElementById('palette-select')
    paletteSelect.innerHTML = ''
    for (const palette of this.palettes) {
      const paletteOption = document.createElement("option")
      paletteOption.setAttribute("value",palette.name)
      paletteOption.innerHTML = palette.name
      paletteSelect.appendChild(paletteOption)
    }
    paletteSelect.selectedIndex=this.palettes.getPaletteIndex(this.palette)
  }

  createColorElements()
  {
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
      colorElement.addEventListener('input', (event) =>
      {
        this.setColorFromElement(event.target,i)
      })
      colorGrid.appendChild(colorElement)
      if (i == 0)
      {
        this.setColorFromElement(colorElement,0)
      }
    }
  }

  setPalette(palette)
  {
    this.palette = palette
    this.updatePalette()
  }

  updatePalette()
  {
    this.shaderUniforms.uPalette.value = this.palette.palette
    this.removeColorElements()
    this.createColorElements()
  }

  removeColorElements()
  {
    const colorGrid = document.getElementById('colors-container')
    while (colorGrid.firstChild) {
      colorGrid.removeChild(colorGrid.lastChild);
    }
  }

  setColorFromElement(element,i)
  {
    const color = new THREE.Color(element.value)
    color.convertLinearToSRGB()
    this.palette.setColor(i, color)
    this.shaderUniforms.uPalette.value[i] = color
  }
}