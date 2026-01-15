import * as THREE from 'three'
import Experience from "./Experience"
import vertexShader from './Shaders/glsl/vertex.glsl?raw'
import fragmentShader from './Shaders/glsl/fragment.glsl?raw'

export default class ShaderMaterial {
  // ============================================================
  // INITIALIZATION
  // ============================================================

  constructor() {
    this.experience = new Experience()
    this.debug = this.experience.debug
    this.sizes = this.experience.sizes
    this.time = this.experience.time
    this.palettes = this.experience.palettes
    this.palette = this.palettes.getPaletteByIndex(0)

    this.mode = 0
    this.numberOfColors = 6

    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder('Shader')
      this.debugFolder.close()
    }

    this.material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      side: THREE.DoubleSide,
      uniforms: {
        uPalette: {
          type: "v3v",
          value: this.palette.palette
        },
        uFloatPar: { value: new Float32Array(25) },
        uTime: { value: 0 },
        uAspect: { value: this.sizes.aspect },
        uMode: { value: this.mode },
        uPaletteLen: { value: this.numberOfColors },
      }
    })
  }

  // ============================================================
  // UNIFORMS
  // ============================================================

  /**
   * @returns {Object}
   */
  getUniforms() {
    return this.material.uniforms
  }

  /**
   * @param {Shader} shader
   */
  setShader(shader) {
    const uniforms = this.material.uniforms
    shader.uFloatPars = uniforms.uFloatPar.value
    shader.setInputs()
  }
}
