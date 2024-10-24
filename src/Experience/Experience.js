import * as THREE from 'three'
import Sizes from "./Utils/Sizes.js"
import Time from "./Utils/Time.js"
import Camera from './Camera.js'
import Debug from './Utils/Debug.js'
import Mouse from './Utils/Mouse.js'
import Render from './Render.js'
import Screen from './Screen.js'
import Cookies from './Utils/Cookies.js'
import Palettes from './Utils/Palettes.js'
import defaultPalettes from './defaultPalettes.js'

THREE.ColorManagement.enabled = true;

let instance = null

export default class Experience
{
  constructor(canvas)
  {
    // Singleton
    if (instance) 
    {
      return instance
    }
    instance = this

    // Global
    window.experience = this

    // Options
    this.canvas = canvas

    // Setup
    this.debug = new Debug()
    this.sizes = new Sizes()
    this.time = new Time()
    this.scene = new THREE.Scene() 
    this.palettes = new Palettes(defaultPalettes)
    this.cookies = new Cookies()
    this.camera = new Camera()
    this.renderer = new Render()
    this.mouse = new Mouse()
    this.screen = new Screen()

    this.sizes.on('resize', () =>
    {
      this.resize()
    })

    this.time.on('tick', () =>
    {
      this.update()
    })

    this.mouse.on('mousemove', () =>
    {
      this.mousemove()
    })
    
    this.mouse.on('touchmove', () =>
    {
      this.touchmove()
    })

    this.mouse.on('doubleClick', () =>
    {
      this.doubleClick()
    })

    this.mouse.on('scroll', () =>
    {
      this.scroll()
    })

    this.onLoad()
  }

  resize()
  {
    this.camera.resize()
    this.renderer.resize()
    this.screen.resize()
  }
  
  update()
  {
    this.renderer.update()
    this.screen.update()
  }

  mousemove()
  {
    this.screen.mousemove()
  }

  touchmove()
  {
    this.screen.touchmove()
  }

  doubleClick()
  {
    this.renderer.doubleClick()
  }

  scroll()
  {
    this.screen.scroll()
  }

  onLoad()
  {
    this.renderer.onLoad()
  }

  onBeforeUnload()
  {
    this.palettes.updateCookie()
  }
}