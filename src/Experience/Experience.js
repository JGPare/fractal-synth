import * as THREE from 'three'
import Sizes from "./Utils/Sizes.js"
import Time from "./Utils/Time.js"
import Camera from './Camera.js'
import Debug from './Utils/Debug.js'
import Mouse from './Utils/Mouse.js'
import Render from './Render.js'
import Controls from './ControlsManager.js'
import Screen from './Screen.js'
import Palettes from './Utils/Palettes.js'
import ShaderMaterial from './ShaderMaterial.js'
import AnimationTimeline from './Animation/AnimationTimeline.js'
import ModulatorManager from './Animation/ModulatorManager.js'
import AudioEngine from './Audio/AudioEngine.js'
import ProjectRepo from './Repo/ProjectRepo.js'
import URLShare from './Repo/URLShare.js'
import StatsPanel from './Utils/StatsPanel.js'
import Keyboard from './Utils/Keyboard.js'
import Settings from './Utils/Settings.js'
import Project from './Project.js'
import ShaderUtility from './Shaders/ShaderUtility.js'
import { eShaders } from './Common/eNums.js'
import ProjectList from './ProjectList.js'

THREE.ColorManagement.enabled = true

let instance = null

let debug = false

export default class Experience {
  // ============================================================
  // INITIALIZATION
  // ============================================================

  /**
   * @param {HTMLCanvasElement} canvas
   */
  constructor(canvas) {
    if (instance) {
      return instance
    }
    instance = this
    window.experience = this
    this.canvas = canvas

    this.initComponents()
    this.initEventListeners()
    this.setShader(eShaders.mandle)
    this.updateFromShader()
    this.setKeyMappings()
    this.onLoad()
  }

  initComponents() {
    this.projectList = new ProjectList()
    this.keyboard = new Keyboard()
    this.animation = new AnimationTimeline(this)
    this.modulatorManager = new ModulatorManager(this)
    this.audioEngine = new AudioEngine()
    this.debug = new Debug()
    this.sizes = new Sizes()
    this.time = new Time()
    this.scene = new THREE.Scene()
    this.palettes = new Palettes()
    this.camera = new Camera()
    this.renderer = new Render()
    this.settings = new Settings()
    this.mouse = new Mouse()
    this.shaderMaterial = new ShaderMaterial()
    this.screen = new Screen()
    this.controls = new Controls()
    this.shader = null
    if (debug){
      this.stats = new StatsPanel()
    }
  }

  initEventListeners() {
    this.sizes.on('resize', () => {
      this.resize()
    })

    this.time.on('tick', () => {
      if (debug){
        this.stats.update()
      }
      this.update()
    })

    this.mouse.on('mousemove', () => {
      this.mousemove()
    })

    this.mouse.on('touchmove', () => {
      this.touchmove()
    })

    this.mouse.on('doubleClick', () => {
      this.doubleClick()
    })

    this.mouse.on('scroll', () => {
      this.scroll()
    })
  }

  // ============================================================
  // SHADER & KEYBOARD SETUP
  // ============================================================

  /**
   * @param {number} eShader
   */
  setShader(eShader) {
    this.shader = ShaderUtility.getShader(eShader)
    if (debug) {
      console.log("setting shader: ", this.shader)
    }
  }

  updateFromShader()
  {
    this.shaderMaterial.setShader(this.shader)
    this.shader.setInputs()
    this.controls.updateFromShader()
    this.screen.updateFromShader()
  }

  setKeyMappings() {
    this.keyboard.addMapping("Space", "togglePlay")
    this.keyboard.addMapping("Comma", "seekStart")
    this.keyboard.addMapping("Period", "seekEnd")
  }

  // ============================================================
  // EVENT HANDLERS
  // ============================================================

  resize() {
    this.camera.resize()
    this.renderer.resize()
    this.screen.resize()
  }

  update() {
    this.animation.update(this.time.delta)
    this.renderer.update()
    this.screen.update()
    if (debug){
      this.stats.update()
    }
  }

  mousemove() {
    this.screen.mousemove()
  }

  touchmove() {
    this.screen.touchmove()
  }

  doubleClick() {
    this.renderer.doubleClick()
  }

  scroll() {
    this.screen.scroll()
  }

  // ============================================================
  // LIFECYCLE
  // ============================================================

  onLoad() {
    this.renderer.onLoad()
    ProjectRepo.loadProjectList(this)
    if (URLShare.hasShareHash()) {
      if (!URLShare.decode(this)) {
        ProjectRepo.loadLastProject(this)
      }
    } else {
      ProjectRepo.loadLastProject(this)
    }
  }

  onBeforeUnload() {
    this.palettes.save()
  }
}