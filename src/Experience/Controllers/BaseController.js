import EventEmitter from '../Utils/EventEmitter'
import Experience from '../Experience'

/**
 * Base controller class providing common initialization and Experience references
 * All controllers extend this base class
 */
export default class BaseController extends EventEmitter {
  constructor() {
    super()
    this.initExperienceReferences()
    this.initDebug()
  }

  initExperienceReferences() {
    this.experience = new Experience()
    this.debug = this.experience.debug
    this.canvas = this.experience.canvas
    this.sizes = this.experience.sizes
    this.time = this.experience.time
    this.mouse = this.experience.mouse
    this.shaderMaterial = this.experience.shaderMaterial
    this.timeline = this.experience.timeline
    this.keyboard = this.experience.keyboard
    this.curveEditor = this.experience.curveEditor
    this.channels = this.experience.channels
    this.projectList = this.experience.projectList
    this.project = this.experience.project
    this.shader = this.experience.shader
    this.shaderUniforms = this.shaderMaterial.getUniforms()
    this.palettes = this.experience.palettes
  }

  initDebug() {
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder(this.constructor.name)
      this.debugFolder.close()
    }
  }
}
