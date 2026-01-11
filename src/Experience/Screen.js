import * as THREE from 'three'
import Experience from "./Experience"
import ShaderMaterial from './ShaderMaterial'
import { eNumInput } from './Common/eNums'


export default class Screen {
  constructor() {
    this.experience = new Experience()
    this.debug = this.experience.debug
    this.canvas = this.experience.canvas
    this.sizes = this.experience.sizes
    this.time = this.experience.time
    this.mouse = this.experience.mouse
    this.scene = this.experience.scene
    this.shaderMaterial = this.experience.shaderMaterial
    this.shaderUniforms = this.shaderMaterial.getUniforms()
    this.shader = null

    this.x = 0
    this.y = 0
    this.zoom = 2.47

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder('Screen')
      this.debugFolder.close()
    }

    this.setInstance()
  }

  setInstance() {
    const geometry = new THREE.PlaneGeometry(2, 2, 32, 32)
    this.instance = new THREE.Mesh(geometry, this.shaderMaterial.material)
    this.scene.add(this.instance)
  }

  resize() {
    this.shaderUniforms.uAspect.value = this.sizes.aspect
  }

  touchmove() {
    const shader = this.experience.shader
    const deltaX = -this.mouse.deltaX / this.sizes.width * 2
    const deltaY = this.mouse.deltaY / this.sizes.height * 2
    if (this.mouse.clickHeld) {

      this.shaderUniforms.uFloatPar.value[eNumInput.posX] -= deltaX * this.zoom / 2 * this.sizes.aspect
      this.shaderUniforms.uFloatPar.value[eNumInput.posY] -= deltaY * this.zoom / 2
      this.shader.getInput(eNumInput.posX).setFromShader()
      this.shader.getInput(eNumInput.posY).setFromShader()
    }
    this.x += deltaX
    this.y += deltaY
  }

  mousemove() {
    const shader = this.experience.shader
    const newX = -this.mouse.x / this.sizes.width * 2 + 1
    const newY = this.mouse.y / this.sizes.height * 2 - 1
    if (this.mouse.clickHeld) {
      const deltaX = this.x - newX
      const deltaY = this.y - newY

      this.shaderUniforms.uFloatPar.value[eNumInput.posX] -= deltaX * this.zoom / 2 * this.sizes.aspect
      this.shaderUniforms.uFloatPar.value[eNumInput.posY] -= deltaY * this.zoom / 2

      this.shader.getInput(eNumInput.posX).setFromShader()
      this.shader.getInput(eNumInput.posY).setFromShader()
    }
    this.x = newX
    this.y = newY
  }

  scroll() {

    this.zoom = this.shaderUniforms.uFloatPar.value[eNumInput.zoom]
    this.x = -this.mouse.x / this.sizes.width * 2 + 1
    this.y = this.mouse.y / this.sizes.height * 2 - 1
    const prevzoom = this.zoom
    const adjDeltaY = Math.exp(this.mouse.scrollDeltaY / 2000)
    this.zoom *= adjDeltaY

    const zoomMag = prevzoom - this.zoom
    this.shaderUniforms.uFloatPar.value[eNumInput.zoom] = this.zoom
    this.shaderUniforms.uFloatPar.value[eNumInput.posX] -= this.x * zoomMag * this.sizes.aspect / 2
    this.shaderUniforms.uFloatPar.value[eNumInput.posY] -= this.y * zoomMag / 2

    this.shader.getInput(eNumInput.zoom).setFromShader()
    this.shader.getInput(eNumInput.posX).setFromShader()
    this.shader.getInput(eNumInput.posY).setFromShader()
  }

  update() {
    this.shaderUniforms.uTime.value = this.time.elapsed / 1000
  }

  setShader() {
    this.shader = this.experience.shader
  }

  /**
 * Capture the current canvas as an image data URL
 * @param {string} format - 'image/png' or 'image/jpeg'
 * @param {number} quality - 0 to 1 for jpeg quality
 * @returns {string} Data URL of the image
 */
  captureImage(format = 'image/jpeg', quality = 0.8) {
    // Render one more frame to ensure it's up to date
    this.experience.renderer.instance.render(this.scene, this.experience.camera.instance)

    // Capture the canvas as data URL
    return this.canvas.toDataURL(format, quality)
  }
}