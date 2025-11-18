import * as THREE from 'three'
import Experience from "./Experience"
import ShaderMaterial from './ShaderMaterial'


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
    this.shader = this.experience.shader
    this.shaderUniforms = this.shader.getUniforms()

    this.x = 0
    this.y = 0
    this.zoom = 2.47

    // Debug
    if (this.debug.active)
    {
      this.debugFolder = this.debug.ui.addFolder('Screen')
      this.debugFolder.close()
    }

    this.setInstance()
  }

  setInstance()
  {
    const geometry = new THREE.PlaneGeometry(2, 2, 32, 32)
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
    this.instance = new THREE.Mesh(geometry, this.shader.material)
    this.scene.add(this.instance)
  }

  resize()
  {
    this.shaderUniforms.uAspect.value = this.sizes.aspect
  }

  touchmove()
  {
    const deltaX = -this.mouse.deltaX/this.sizes.width * 2
    const deltaY = this.mouse.deltaY/this.sizes.height * 2
    if (this.mouse.clickHeld )
    {
      this.shaderUniforms.uFocusX.value -= deltaX*this.zoom/2*this.sizes.aspect
      this.shaderUniforms.uFocusY.value -= deltaY*this.zoom/2
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
      this.shaderUniforms.uFocusX.value -= deltaX*this.zoom/2*this.sizes.aspect
      this.shaderUniforms.uFocusY.value -= deltaY*this.zoom/2
    }
    this.x = newX
    this.y = newY
  }

  scroll()
  {
    this.zoom = this.shaderUniforms.uZoom.value
    this.x = -this.mouse.x/this.sizes.width * 2 + 1
    this.y = this.mouse.y/this.sizes.height * 2 - 1
    const prevzoom = this.zoom
    const adjDeltaY = Math.exp(this.mouse.scrollDeltaY/2000)
    this.zoom *= adjDeltaY
    
    const zoomMag = prevzoom - this.zoom
    this.shaderUniforms.uZoom.value = this.zoom
    this.shaderUniforms.uFocusX.value -= this.x*zoomMag*this.sizes.aspect/2
    this.shaderUniforms.uFocusY.value -= this.y*zoomMag/2
  }

  update()
  {
    this.shaderUniforms.uTime.value = this.time.elapsed/1000
  }
}