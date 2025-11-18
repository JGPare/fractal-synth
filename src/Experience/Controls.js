import * as THREE from 'three'
import Experience from "./Experience"
import ExperienceRepo from './ExperienceRepo'
import ProjectList from './ProjectList'
import Project from './Project'
import NumberInput from './Inputs/NumberInput'

const modes = 
{
  mandle : 0,
  julia : 1,
  sinJulia : 2,
  burningShip : 3,
  neuton : 4,
  phoenix : 5
}

const ui2ShaderMap = {
    constantSlider : "uIterBase",
    powerSlider : "uPower",
    rotationSlider : "uRotation",
    positionXSlider : "uCx",
    positionYSlider : "uCy",
    velocityDistortionDirection : "uVelocityDistortionDirection",
    velocityDistortionAmount : "uVelocityDistortionAmount",
    sinJuliaXcoeff : "uSinJuliaXCoeff",
    sinJuliaYcoeff : "uSinJuliaYCoeff",
    areaModOn : "uAreaModOn",
    areaModXoffset : "uAreaModXOffset",
    areaModYoffset : "uAreaModYOffset",
    areaModX : "uAreaModX",
    areaModY : "uAreaModY",
    modeIndex : "uMode",
    numberOfColors : "uPaletteLen",
    numberOfColorsSlider : "uPaletteLen",
}

const shader2UImap = {}
// create an inverted map
for (const [key, value] of Object.entries(ui2ShaderMap)) {
  shader2UImap[value] = key
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
    this.keyboard = this.experience.keyboard
    this.curveEditor = this.experience.curveEditor

    this.shaderUniforms = this.shader.getUniforms()
    this.palettes = this.experience.palettes
    this.palette = this.palettes.getPaletteByIndex(0)
    this.projectList = new ProjectList("project-list",[])

    this.numberOfColors = 6

    this.modeIndex = 0
    this.paletteIndex = 0
    this.timelineIndex = 0

    this.settingStart = false
    this.settingFinal = false

    this.loopTimeline = false

    this.initialValues = [{},{}]
    this.finalValues = [{},{}]

    // Debug
    if (this.debug.active)
    {
      this.debugFolder = this.debug.ui.addFolder('Screen')
      this.debugFolder.close()
    }
    this.createColorElements()
    this.getElements()
    this.linkUI()

    this.test()

    this.setEase("sine")
  }

  getElements()
  {

    this.sceneName = document.getElementById('scene-name')

    this.constantSlider = document.getElementById('constant-slider')
    this.powerSlider = document.getElementById('power-slider')
    this.rotationSlider = document.getElementById('rotation-slider')
    this.positionXSlider = document.getElementById('position-x-slider')
    this.positionYSlider = document.getElementById('position-y-slider')
    this.modeSelect = document.getElementById('mode-select')
    this.paletteSelect = document.getElementById('palette-select')
    this.numberOfColorsSlider = document.getElementById('number-of-colors')
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
    this.setStartTimelineButton = document.getElementById('set-start-timeline-button')
    this.setEndTimelineButton = document.getElementById('set-end-timeline-button')
    this.loopTimelineButton = document.getElementById('loop-timeline-button')
    this.durationSlider = document.getElementById('duration')
    this.colorOffsetSlider = document.getElementById('color-offset')
    this.timelineCountSlider = document.getElementById('timeline-count-slider')
    this.timelineSelectSlider = document.getElementById('timeline-select-slider')
    this.colorsContainer = document.getElementById('colors-container')
    this.clearTlButton = document.getElementById('clear-tl-button')
    this.easeSelect = document.getElementById('ease-select')
    this.paperCanvas = document.getElementById('paper-canvas')
    
  }
  // temp testing function remove %JPA
  test()
  {
    const iters = new NumberInput({
      name : "Iterations", 
      value : 0.75, 
      min : 0.1, 
      max : 1, 
      step : 0.001, 
      channel : 0
    })

    const parent = document.getElementById('ui-grid-l')

    this.addNumberControl(iters, parent)

  }

  addControls()
  {

  }

  addControl(input, parentElement)
  {

  }

  /**
   * 
   * @param {NumberInput} input 
   */
  addNumberControl(input, parentElement)
  {
    const inputId = input.getId()

    const container = document.createElement("div")
    container.setAttribute("class","slider-text inconsolata-main")

    const label = document.createElement("label")
    label.textContent = input.name
    label.setAttribute("class", "slider-text inconsolata-main")
    label.setAttribute("for", inputId)

    const grid = document.createElement("div")
    grid.setAttribute("class", "number-input-grid")

    const easeChannel = document.createElement("input")
    easeChannel.setAttribute("type", "number")
    easeChannel.setAttribute("min", "0")
    easeChannel.setAttribute("max", "5")
    easeChannel.setAttribute("step", "1")
    easeChannel.setAttribute("value", "0")
    easeChannel.setAttribute("class", "control-ease inconsolata-main")
    easeChannel.setAttribute("id", inputId + "-ease-channel")

    const slider = document.createElement("input")
    slider.setAttribute("type", "range")
    slider.setAttribute("min", input.min)
    slider.setAttribute("max", input.max)
    slider.setAttribute("step", input.step)
    slider.setAttribute("value", input.value)
    slider.setAttribute("class", "control-slider")
    slider.setAttribute("id", inputId + "-slider")

    const value = document.createElement("input")
    value.setAttribute("type", "number" )
    value.setAttribute("class", "control-number control-number-ease inconsolata-main")
    value.setAttribute("id", inputId + "-value")

    slider.addEventListener('input',(event) =>{
        value.value = slider.value
    })
    value.addEventListener('change',(event) =>{
      if (value.value > slider.max) value.value = slider.max
      if (value.value < slider.min) value.value = slider.min
      slider.value = value.value
    })

    container.appendChild(label)
    container.appendChild(grid)
    grid.appendChild(easeChannel)
    grid.appendChild(slider)
    grid.appendChild(value)

    parentElement.appendChild(container)
  }

  setUIfromShader()
  {
    console.log("setting ui from shader");
    
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
    this.numberOfColorsSlider.value = this.shaderUniforms.uPaletteLen.value

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

    this.numberOfColorsSlider.addEventListener('change', (event) =>
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

    this.durationSlider.addEventListener('input', (event) => {      
      this.timeline.setDuration(event.target.value)
    })

    this.colorOffsetSlider.addEventListener('input', (event) => {      
      this.shaderUniforms.uColorOffset.value = event.target.value
    })

    this.timelineCountSlider.addEventListener('input', (event) => {
      this.timeline.setTimelineCount(event.target.value)
      this.timelineSelectSlider.max = event.target.value
      if (this.timelineSelectSlider.value > event.target.value){
        this.timelineSelectSlider.value = event.target.value - 1
      }
    })

    this.timelineSelectSlider.addEventListener('input', (event) => {
      if (event.target.value){
        this.timelineIndex = event.target.value
        this.timeline.setTimeline(event.target.value)
      }
    })

    this.deleteSceneButton.addEventListener('click', (event) => {
      this.timeline.clearAll()
    })

    this.easeSelect.addEventListener('change', (event) => {
      this.setEase(event.target.value)
    })

    this.saveSceneButton.addEventListener('click', (event) => {
      console.log("save scene");
      ExperienceRepo.saveExperience(this.sceneName.value, this.experience)
    })
    
    this.loadSceneButton.addEventListener('click', (event) => {
      console.log("load scene");
      ExperienceRepo.loadExperience(this.sceneName.value, this.experience)
    })

    this.keyboard.on('togglePlay', () => {
      console.log("toggled play");
      
      this.timeline.togglePlay()
    })
    this.keyboard.on('seekStart', () => {
      this.timeline.seekStart()
      this.setTimelineSlider(0)
      this.setUIfromShader()
    })
    this.keyboard.on('seekEnd', () => {
      this.timeline.seekEnd()
      this.setUIfromShader()
    })

    this.timeline.on('setSegment', () => {
      this.segmentSlider.value = this.timeline.segmentIndex
      var event = new Event('input', {
        bubbles: true,
        value: null
      });
      //this.segmentSlider.dispatchEvent(event);
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
      this.setUIfromShader()
    })

    this.playTimelineButton.addEventListener('click', (event) => {
      this.timeline.play()
    })

    this.pauseTimelineButton.addEventListener('click', (event) => {
      this.timeline.pause()
    })

    this.setStartTimelineButton.addEventListener('click', (event) => {
      this.setStartTimelineButton.classList.toggle('selected-button');
      if (this.settingStart)
      {
        this.initialValues[this.timelineIndex] = this.getUniformValues()
        this.setTimeline()
        this.timeline.pause()
        this.settingStart = false
      }
      else {
        // this.timeline.seekStart()
        this.timeline.pause()
        this.settingStart = true
      }
    })

    this.setEndTimelineButton.addEventListener('click', (event) => {      
      this.setEndTimelineButton.classList.toggle('selected-button');
      if (this.settingFinal){
        this.finalValues[this.timelineIndex] = this.getUniformValues()
        this.setTimeline()
        this.timeline.pause()
        this.settingFinal = false
      }
      else{
        // this.timeline.seekEnd()
        this.timeline.pause()
        this.settingFinal = true
      }
    })

    this.loopTimelineButton.addEventListener('click', (event) => {
      this.loopTimelineButton.classList.toggle('selected-button');
      this.loopTimeline = this.loopTimeline ? false : true      
      this.timeline.setRepeat(this.loopTimeline)
    })

    this.clearTlButton.addEventListener('click', (event) => {
      this.timeline.renew()
    })
  }

  setTimeline()
  {
    if (!this.finalValues[this.timelineIndex] || !this.initialValues[this.timelineIndex]){
      return
    }
    const initialValues = this.initialValues[this.timelineIndex]
    const finalValues = this.finalValues[this.timelineIndex]
    this.timeline.renew()
    // this.timeline.fromTo(this, {value : 0}, {value : 1}, 0,  ["timelineSlider"])
    for (const [key, value] of Object.entries(this.finalValues)) {
      if (initialValues[key]){
        if (initialValues[key] != finalValues[key]){
          switch (key){
            case "uZoom": case "uFocusX": case "uFocusY":
              if (this.timelineIndex == 0){
                this.timeline.fromTo(this.shaderUniforms,
                  {"value" : initialValues[key].value},
                  {"value" : finalValues[key].value},
                  0,
                  [key],
                )
              }
              break;
            default:              
              if (!isNaN(value.value)){
                this.timeline.fromTo(this.shaderUniforms,
                  {"value" : initialValues[key].value},
                  {"value" : finalValues[key].value},
                  0,
                  [key],
                )
              }
              break;
          }
        }
      }
    }
    this.timeline.setDuration(this.durationSlider.value)
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
    console.log("set uniforms with",input.uZoom);
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
      case modes.burningShip:
        this.showElements("julia")
        this.showElements("sinJulia")
      case modes.neuton:
        this.showElements("julia")
        this.showElements("sinJulia")
      case modes.phoenix:
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

  // %JPA finish!!!
  linkEaseInputs()
  {
    // set it so sliders change numbers
    const easeInputs = document.getElementsByClassName('ease-input-grid')
    for (const element of easeInputs) {
      const ease = element.children[0]
      const range = element.children[1]
      const number = element.children[2]
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
    this.paletteSelect.addEventListener('change', () =>
    {
      this.setPaletteInputFromSelect()
      const palette = this.palettes.getPaletteByName(this.paletteSelect.value)
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
      this.paletteIndex = paletteSelect.selectedIndex
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
    const palette = this.palettes.getPaletteByName(this.paletteSelect.value)
    this.setPalette(palette)
    this.setPaletteInputFromSelect()
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
    this.paletteIndex = paletteSelect.selectedIndex
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
    const colorGrid = this.colorsContainer
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

  setName(name)
  {
    this.sceneName.value = name
  }

  getName()
  {
    return this.sceneName.value
  }

  setTimelineSlider(value)
  {
    this.timelineSlider.value = value
  }

  setEase(newEase)
  {
    this.currentEase = newEase
      switch (this.currentEase) {
        case "custom":
          this.paperCanvas.hidden = false;
          this.curveEditor.updateCurve()
          break;
        default:
          this.paperCanvas.hidden = true;
          this.timeline.setEase(this.currentEase, "inOut")
          break;
      }
  }
}