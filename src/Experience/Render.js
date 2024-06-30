import * as THREE from 'three'
import Experience from "./Experience"

export default class Render 
{
  constructor() 
  {
    this.experience = new Experience()
    this.debug = this.experience.debug
    this.canvas = this.experience.canvas
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.camera = this.experience.camera
    this.mouse = null

    // Debug
    if (this.debug.active)
    {
      this.debugFolder = this.debug.ui.addFolder('Renderer')
      this.debugFolder.close()
    }

    this.setInstance()
  }

  setInstance()
  {
    this.instance = new THREE.WebGLRenderer({
      canvas : this.canvas
    })
    this.instance.setSize(this.sizes.width, this.sizes.height)
    this.instance.setPixelRatio(this.sizes.pixelRatio)
  }

  resize()
  {
    this.instance.setSize(this.sizes.width, this.sizes.height)
    this.instance.setPixelRatio(this.sizes.pixelRatio)
  }
  update()
  {
    this.instance.render(this.scene, this.camera.instance)
  }

  onLoad()
  {
    this.mouse = this.experience.mouse
  }

  doubleClick() {
    console.log("trig");
    if (!document.fullscreenElement && this.mouse.target == this.canvas) 
    {
      this.instance.domElement.requestFullscreen()
    } 
    else if (document.fullscreenElement) 
    {
      if (document.exitFullscreen)
      {
        document.exitFullscreen()
      }
    }
  }
}