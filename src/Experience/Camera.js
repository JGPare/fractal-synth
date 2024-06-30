import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Experience from './Experience.js'
import gsap from 'gsap'

export default class Camera
{
  constructor() 
  {
    this.experience = new Experience()
    this.debug = this.experience.debug
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.canvas = this.experience.canvas

    // Debug
    if (this.debug.active)
    {
      this.debugFolder = this.debug.ui.addFolder('Camera')
      this.debugFolder.close()
    }
    
    this.setInstance()

  }

  setInstance()
  {
    this.instance = new THREE.OrthographicCamera(-1,1,1,-1)

    this.instance.position.set(0, 0, 1)
    this.scene.add(this.instance)
    
    if(this.debug.active)
    {
      
    }
  }

  resize()
  {
    this.instance.aspect = this.sizes.width / this.sizes.height
  }
}