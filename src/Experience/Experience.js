import * as THREE from 'three'
import Sizes from "./Utils/Sizes.js"
import Time from "./Utils/Time.js"
import Camera from './Camera.js'
import Debug from './Utils/Debug.js'
import Mouse from './Utils/Mouse.js'
import Render from './Render.js'
import Controls from './Controls.js'
import Screen from './Screen.js'
import Palettes from './Utils/Palettes.js'
import Shader from './Shader.js'
import Timeline from './Utils/Timeline.js'
import ExperienceRepo from './ExperienceRepo.js'
import StatsPanel from './Utils/StatsPanel.js'
import Keyboard from './Utils/Keyboard.js'
import CurveEditor from './CurveEditor.js'

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
    this.keyboard = new Keyboard()
    this.timeline = new Timeline(this)
    this.debug = new Debug()
    this.sizes = new Sizes()
    this.time = new Time()
    this.scene = new THREE.Scene() 
    this.palettes = new Palettes()
    this.camera = new Camera()
    this.renderer = new Render()
    this.mouse = new Mouse()
    this.shader = new Shader()
    this.screen = new Screen()
    this.controls = new Controls()
    this.stats = new StatsPanel()
    this.curveEditor = new CurveEditor("paper-canvas", "paper-output")

    this.setItemIds()
    this.setKeyMappings()

    this.sizes.on('resize', () =>
    {
      this.resize()
    })

    this.time.on('tick', () =>
    {
      this.stats.update()
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

  setKeyMappings()
  {
    this.keyboard.addMapping("Space", "togglePlay")
    this.keyboard.addMapping("Comma", "seekStart")
    this.keyboard.addMapping("Period", "seekEnd")
  }

  setItemIds()
  {
    this.itemIds = {
      controls : this.controls,
      shaderUniforms : this.shader.material.uniforms
    }

    for (const [key, value] of Object.entries(this.itemIds)) {
      console.log(value);
      
      value.localId = key
    }

  }

  getItemById(itemId)
  {
    return this.itemIds[itemId]
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
    this.stats.update()
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
    ExperienceRepo.loadLast(this)
  }

  onBeforeUnload()
  {
    this.palettes.save()
  }
}