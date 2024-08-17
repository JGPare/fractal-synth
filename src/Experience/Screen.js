import * as THREE from 'three'
import Experience from "./Experience"
import testVertexShader from './shaders/test/vertex.glsl'
import testFragmentShader from './shaders/test/fragment.glsl'

const palette = [
  new THREE.Color(0.1,0.1,0.35), 
  new THREE.Color(0.7,0.2,0.3),
  new THREE.Color(0.3,0.4,0.9),
  new THREE.Color(0.7,0.4,0.7),
  new THREE.Color(0.2,0.7,0.6),
  new THREE.Color(0.6,0.4,0.8),
  new THREE.Color(0.1,0.1,0.35),
  new THREE.Color(0.8,0.2,0.3),
  new THREE.Color(0.5,0.6,0.7),
  new THREE.Color(0.5,0.6,0.7)
]

export default class Render 
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

    // Mandle
    this.zoom = 2.47
    this.x = -0.65
    this.y = 0

    // Julia
    this.drawJulia = false
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
        uTime: { value: 0 },
        uFocusX: { value: this.x},
        uFocusY: { value: 0 },
        uZoom: { value: this.zoom },
        uIterVar: { value: 1.0 },
        uIterRate: { value: 1.0},
        uIterBase: { value: 1.0 },
        uAspect: { value: this.sizes.aspect },
        uCx : {value : this.c.x},
        uCy : {value : this.c.y},
        uCRadius : {value : 0.0},
        uCRate : {value : 1.0},
        uJulia : {value : this.drawJulia},
        uPower : {value : 2.0},
        uPalette : { 
          type : "v3v",
          value : palette
        },
        uPaletteLen : {value : this.numberOfColors},
        uVelocityDistortionDirection : {value : 0},
        uVelocityDistortionAmount : {value: 0.5}
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
    document.getElementById('variableSlider').addEventListener('input', (event) => {
      const uIter = event.target.value / event.target.max
      this.material.uniforms.uIterVar.value = uIter
    })
    
    document.getElementById('variableRateSlider').addEventListener('input', (event) => {
      this.material.uniforms.uIterRate.value = event.target.value
    })

    document.getElementById('constantSlider').addEventListener('input', (event) => {
      const uBase = event.target.value / event.target.max
      this.material.uniforms.uIterBase.value = uBase
    })
    
    document.getElementById('powerSlider').addEventListener('input', (event) => {
      this.material.uniforms.uPower.value = event.target.value
    })

    document.getElementById('positionXSlider').addEventListener('input', (event) => {
      this.material.uniforms.uCx.value = event.target.value
    })
    
    document.getElementById('positionYSlider').addEventListener('input', (event) => {
      this.material.uniforms.uCy.value = event.target.value
    })

    document.getElementById('positionVariation').addEventListener('input', (event) => {
      this.material.uniforms.uCRadius.value = event.target.value
    })

    document.getElementById('positionRate').addEventListener('input', (event) => {
      this.material.uniforms.uCRate.value = event.target.value
    })
    
    document.getElementById('fractalSelect').addEventListener('change', (event) => {
      this.drawJulia = event.target.value == "julia"
      this.material.uniforms.uJulia.value = this.drawJulia
      if (this.drawJulia) 
      {
        const juliaSliders = document.querySelectorAll('[data-julia]');
        for (const element of juliaSliders) {
          element.style.display = ""
        }
      }
      else
      {
        const juliaSliders = document.querySelectorAll('[data-julia]');
        for (const element of juliaSliders) {
          element.style.display = "none"
        }
      }
    })

    document.getElementById('number-of-colors').addEventListener('change', (event) =>
    {
      this.numberOfColors = event.target.value
      this.material.uniforms.uPaletteLen.value = this.numberOfColors
      this.removeColorElements()
      this.createColorElements()
    })

    document.getElementById('velocity-distortion-direction').addEventListener('input', (event) => {
      this.material.uniforms.uVelocityDistortionDirection.value = event.target.value
    })
    document.getElementById('velocity-distortion-amount').addEventListener('input', (event) => {
      this.material.uniforms.uVelocityDistortionAmount.value = event.target.value
    })

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

  createColorElements()
  {
    const colorGrid = document.getElementById('colors-container')
    for (let i = 0; i < this.numberOfColors; i++) {
      let colorElement = document.createElement("input")
      let color = palette[i].clone()
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
    palette[i] = color
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
    if (this.mouse.clickHeld && this.mouse.target == this.canvas)
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
    if (this.mouse.clickHeld && this.mouse.target == this.canvas)
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