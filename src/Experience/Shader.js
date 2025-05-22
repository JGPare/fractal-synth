
import * as THREE from 'three'
import Experience from "./Experience"
import testVertexShader from './shaders/test/vertex.glsl?raw' // %JPA get rid of test?
import testFragmentShader from './shaders/test/fragment.glsl?raw'

const modes = 
{
  mandle : 0,
  julia : 1,
  sinJulia : 2
}

export default class Shader 
{
  constructor() 
  {
    this.experience = new Experience()
    this.debug = this.experience.debug
    this.sizes = this.experience.sizes
    this.time = this.experience.time
    this.palettes = this.experience.palettes
    this.palette = this.palettes.getPaletteByIndex(0)

    this.mode = 0
    this.numberOfColors = 6

    // Debug
    if (this.debug.active)
    {
      this.debugFolder = this.debug.ui.addFolder('Shader')
      this.debugFolder.close()
    }
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
        uFocusX: { value: -0.65 },
        uFocusY: { value: 0 },
        uZoom: { value: 2.47 },
        uIterBase: { value: 0.75 },
        uAspect: { value: this.sizes.aspect },
        uCx : {value : 0.3},
        uCy : {value : 0.5},
        uMode : {value : this.mode},
        uPower : {value : 2.0},
        uRotation : {value : 0.0},
        uPaletteLen : {value : this.numberOfColors},
        uVelocityDistortionDirection : {value : 0},
        uVelocityDistortionAmount : {value: 0.5},
        uSinJuliaXCoeff : {value : 0},
        uSinJuliaYCoeff : {value : 0},
        uAreaModOn : {value : 0},
        uAreaModXOffset : {value : 0},
        uAreaModYOffset : {value : 0},
        uAreaModX : {value : 2},
        uAreaModY : {value : 2},
        uColorOffset : {value : 0},
      }
    })
  }

  getUniforms()
  {
    return this.material.uniforms
  }
}

