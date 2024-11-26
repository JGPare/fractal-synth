import * as THREE from 'three'
import Experience from "./Experience"
import testVertexShader from './shaders/test/vertex.glsl'
import testFragmentShader from './shaders/test/fragment.glsl'

const modes = 
{
  mandle : 0,
  julia : 1,
  sinJulia : 2
}

export default class Screen 
{
  constructor() 
  {
    this.experience = new Experience()
    this.debug = this.experience.debug
    this.canvas = this.experience.canvas
    this.sizes = this.experience.sizes
    this.time = this.experience.time
    this.mouse = this.experience.mouse
    this.scene = this.experience.scene
    this.palettes = this.experience.palettes
    this.palette = this.palettes.getPaletteByIndex(0)

    this.mode = 0

    // Mandle
    this.zoom = 2.47
    this.x = -0.65
    this.y = 0

    // Julia
    this.c = {
      x : 0.3,
      y : 0.5
    }

    this.numberOfColors = 6

    // Debug
    if (this.debug.active)
    {
      this.debugFolder = this.debug.ui.addFolder('Screen')
      this.debugFolder.close()
    }

    this.setInstance()
    this.createColorElements()
    this.linkUI()
  }

  setInstance()
  {
    const geometry = new THREE.PlaneGeometry(2, 2, 32, 32)
    this.material = new THREE.ShaderMaterial({
      vertexShader: testVertexShader,
      fragmentShader: testFragmentShader,
      side: THREE.DoubleSide,
      uniforms:
      {
        uPalette : { 
          type : "v3v",
          value : this.palette.palette
        },
        uTime: { value: 0 },
        uFocusX: { value: this.x},
        uFocusY: { value: 0 },
        uZoom: { value: this.zoom },
        uIterVar: { value: 0.0 },
        uIterRate: { value: 1.0},
        uIterBase: { value: 0.75 },
        uAspect: { value: this.sizes.aspect },
        uCx : {value : 0.3},
        uCy : {value : 0.5},
        uCRadius : {value : 0.0},
        uCRate : {value : 1.0},
        uMode : {value : this.mode},
        uPower : {value : 2.0},
        uPaletteLen : {value : this.numberOfColors},
        uVelocityDistortionDirection : {value : 0},
        uVelocityDistortionAmount : {value: 0.5},
        uSinJuliaXCoeff : {value : 0},
        uSinJuliaYCoeff : {value : 0},
        uAreaModOn : {value : 0},
        uAreaModXOffset : {value : 0},
        uAreaModYOffset : {value : 0},
        uAreaModX : {value : 2},
        uAreaModY : {value : 2}
      }
      // wireframe: true,
    })

    if (this.debug.active)
    {
      this.debugFolder.add(this.material.uniforms.uCx,'value')
        .min(-1)
        .max(1)
        .step(0.0001)
        .name('Cx')
      
        this.debugFolder.add(this.material.uniforms.uCy,'value')
        .min(-1)
        .max(1)
        .step(0.0001)
        .name('Cy')
        
        this.debugFolder.add(this.material.uniforms.uPower,'value')
        .min(-10)
        .max(10)
        .step(0.01)
        .name('power')
    }

    this.instance = new THREE.Mesh(geometry, this.material)
    this.scene.add(this.instance)
  }

  linkUI() 
  {
    document.getElementById('constant-slider').addEventListener('input', (event) => {
      this.material.uniforms.uIterBase.value = event.target.value
    })

    document.getElementById('power-slider').addEventListener('input', (event) => {
      this.material.uniforms.uPower.value = event.target.value
    })
    
    document.getElementById('variable-slider').addEventListener('input', (event) => {
      this.material.uniforms.uIterVar.value = event.target.value
    })
    
    document.getElementById('variable-rate-slider').addEventListener('input', (event) => {
      this.material.uniforms.uIterRate.value = event.target.value
    })

    document.getElementById('position-x-slider').addEventListener('input', (event) => {
      this.material.uniforms.uCx.value = event.target.value
    })
    
    document.getElementById('position-y-slider').addEventListener('input', (event) => {
      this.material.uniforms.uCy.value = event.target.value
    })

    document.getElementById('position-variation').addEventListener('input', (event) => {
      this.material.uniforms.uCRadius.value = event.target.value
    })

    document.getElementById('position-rate').addEventListener('input', (event) => {
      this.material.uniforms.uCRate.value = event.target.value
    })
    
    document.getElementById('fractal-select').addEventListener('change', (event) => {
      this.mode = event.target.selectedIndex
      this.material.uniforms.uMode.value = this.mode
      switch (this.mode) {
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
    })

    document.getElementById('number-of-colors').addEventListener('change', (event) =>
    {
      this.numberOfColors = event.target.value
      this.material.uniforms.uPaletteLen.value = this.numberOfColors
      this.removeColorElements()
      this.createColorElements()
      this.palette.displayLength = this.numberOfColors
    })

    document.getElementById('velocity-distortion-direction').addEventListener('input', (event) => {
      this.material.uniforms.uVelocityDistortionDirection.value = event.target.value
    })
    document.getElementById('velocity-distortion-amount').addEventListener('input', (event) => {
      this.material.uniforms.uVelocityDistortionAmount.value = event.target.value
    })
    document.getElementById('sin-julia-x-coeff').addEventListener('input', (event) => {
      this.material.uniforms.uSinJuliaXCoeff.value = event.target.value
    })
    document.getElementById('sin-julia-y-coeff').addEventListener('input', (event) => {
      this.material.uniforms.uSinJuliaYCoeff.value = event.target.value
    })
    document.getElementById('area-mod-on').addEventListener('input', (event) => {
      this.material.uniforms.uAreaModOn.value = event.target.value
    })
    document.getElementById('area-mod-x-offset').addEventListener('input', (event) => {
      this.material.uniforms.uAreaModXOffset.value = event.target.value
    })
    document.getElementById('area-mod-y-offset').addEventListener('input', (event) => {
      this.material.uniforms.uAreaModYOffset.value = event.target.value
    })
    document.getElementById('area-mod-x').addEventListener('input', (event) => {
      this.material.uniforms.uAreaModX.value = event.target.value
    })
    document.getElementById('area-mod-y').addEventListener('input', (event) => {
      this.material.uniforms.uAreaModY.value = event.target.value
    })

    this.linkDualInputs()
    this.linkPaletteSelect()
    this.linkPaletteInput()
    this.setPaletteInputFromSelect()
    this.linkNewPaletteButton()
    this.linkRandomPaletteButton()
    this.linkDeletePaletteButton()
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

  setPaletteInputFromSelect()
  {
    const paletteInput = document.getElementById('palette-input')
    const paletteSelect = document.getElementById('palette-select')
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
    this.material.uniforms.uPalette.value = this.palette.palette
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
    this.material.uniforms.uPalette.value[i] = color
  }

  resize()
  {
    this.material.uniforms.uAspect.value = this.sizes.aspect
  }

  touchmove()
  {
    const deltaX = -this.mouse.deltaX/this.sizes.width * 2
    const deltaY = this.mouse.deltaY/this.sizes.height * 2
    if (this.mouse.clickHeld )
    {
      this.material.uniforms.uFocusX.value -= deltaX*this.zoom/2*this.sizes.aspect
      this.material.uniforms.uFocusY.value -= deltaY*this.zoom/2
    }
    this.x += deltaX
    this.y += deltaY
  }
  
  mousemove()
  {
    const newX = -this.mouse.x/this.sizes.width * 2 + 1
    const newY = this.mouse.y/this.sizes.height * 2 - 1
    if (this.mouse.clickHeld )
    {
      const deltaX = this.x - newX
      const deltaY = this.y - newY
      this.material.uniforms.uFocusX.value -= deltaX*this.zoom/2*this.sizes.aspect
      this.material.uniforms.uFocusY.value -= deltaY*this.zoom/2
    }
    this.x = newX
    this.y = newY
  }

  scroll()
  {
    this.x = -this.mouse.x/this.sizes.width * 2 + 1
    this.y = this.mouse.y/this.sizes.height * 2 - 1
    const prevzoom = this.zoom
    const adjDeltaY = Math.exp(this.mouse.scrollDeltaY/2000)
    this.zoom *= adjDeltaY
    const zoomMag = prevzoom - this.zoom
    this.material.uniforms.uZoom.value = this.zoom
    this.material.uniforms.uFocusX.value -= this.x*zoomMag*this.sizes.aspect/2
    this.material.uniforms.uFocusY.value -= this.y*zoomMag/2
  }

  update()
  {
    this.material.uniforms.uTime.value = this.time.elapsed/1000
  }
}