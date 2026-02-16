import EventEmitter from './Utils/EventEmitter'
import Experience from './Experience'

// Import all controllers
import UtilityController from './Controllers/UtilityController'
import VideoExportController from './Controllers/VideoExportController'
import ViewModalController from './Controllers/ViewModalController'
import PaletteController from './Controllers/PaletteController'
import ProjectController from './Controllers/ProjectController'
import TimelineController from './Controllers/TimelineController'
import ChannelController from './Controllers/ChannelController'
import ShaderControlsController from './Controllers/ShaderControlsController'

/**
 * ControlsManager - Root orchestrator for all UI controllers
 * Coordinates communication between specialized controllers via events
 * Maintains backward compatibility with Experience.js
 */
export default class ControlsManager extends EventEmitter {
  constructor() {
    super()
    this.experience = new Experience()

    this.initControllers()
    this.wireControllers()
    this.finalizeSetup()
  }

  /**
   * Initialize all controllers
   */
  initControllers() {
    // Atomic controllers (no dependencies)
    this.utility = new UtilityController()
    this.videoExport = new VideoExportController()
    this.palette = new PaletteController()

    // UI controllers
    this.viewModal = new ViewModalController()
    this.project = new ProjectController()

    // Coordinating controllers
    this.timeline = new TimelineController()
    this.channel = new ChannelController()
    this.shaderControls = new ShaderControlsController()
  }

  /**
   * Wire event handlers between controllers
   */
  wireControllers() {
    // ShaderControls → Timeline: When timeline update is requested
    this.shaderControls.on('timelineUpdateRequested', (channelIndex) => {
      this.setTimeline(channelIndex)
    })

    // ShaderControls → Project: When mode index changes
    this.shaderControls.on('modeIndexChanged', (modeIndex) => {
      this.project.setModeFromIndex(modeIndex)
    })

    // ShaderControls → Palette: When shader is updated
    this.shaderControls.on('shaderUpdated', (shader) => {
      this.palette.setPaletteFromIndex(shader.paletteIndex)
    })

    // Timeline → ShaderControls: When seek is completed, update UI
    this.timeline.on('seekCompleted', () => {
      this.shaderControls.setUIfromShader()
      this.channel.setChannelUIFromShader()
    })

    // Timeline → VideoExport: When play starts, check if video armed
    this.timeline.on('playStarted', () => {
      if (this.videoExport.isVideoArmed()) {
        this.videoExport.startVideoExport()
      }
    })

    // Timeline → Channel: When timeline is set
    this.timeline.on('timelineSet', (index) => {
      this.handleTimelineSet(index)
    })

    // Channel → ShaderControls: When channel inputs need clearing
    this.channel.on('clearChannelInputsRequested', (index) => {
      this.shaderControls.clearChannelInputs(index)
    })

    // Project → Experience: When mode changes
    this.project.on('modeChanged', (modeIndex) => {
      this.experience.setShader(modeIndex)
      this.experience.updateFromShader()
    })

    // Project → ViewModal: When load is requested
    this.project.on('loadRequested', () => {
      this.project.createProjectCards()
      this.viewModal.openLoadView()
    })

    // Project → ViewModal: When project is loaded, close view
    this.project.on('projectLoaded', () => {
      this.viewModal.closeLoadView()
    })

    // Project → Experience: When reset shader is requested
    this.project.on('resetShaderRequested', () => {
      const modeIndex = this.experience.shader.eShader
      this.experience.setShader(modeIndex)
      this.experience.updateFromShader()
    })

    // Project → Channel: When clear animations is requested
    this.project.on('clearAnimationsRequested', () => {
      this.channel.clearAllChannelAnimations()
    })

    // ViewModal → VideoExport: Setup escape handler
    this.viewModal.setupEscapeHandler(this.videoExport)
  }

  /**
   * Final setup after all controllers are wired
   */
  finalizeSetup() {
    this.updateFromShader()
    const paperCanvas = document.getElementById('paper-canvas')
    if (paperCanvas) {
      paperCanvas.hidden = true // Hide paper canvas initially
    }
  }

  /**
   * Handle timeline set logic
   * @param {number} index - Channel index
   */
  handleTimelineSet(index) {
    const shader = this.experience.shader
    if (!shader || index < 0) {
      return
    }

    let inputSet = false
    const channel = this.experience.channels[index]
    const timeline = this.experience.timeline

    timeline.renew(index)

    const numInputs = shader.getNumInputs()

    for (const input of numInputs) {
      if (input.channelIndex == index && input.startVal != input.endVal) {
        inputSet = true
        timeline.setFromToFromNumInput(input, index)
        this.shaderControls.setInputElementActive(input)
      }
    }

    if (inputSet) {
      this.channel.setChannelAsActive(index)
      const progressSlider = this.channel.getChannelProgressSlider(index)
      timeline.fromToTimeline(progressSlider, index)
      timeline.setDuration(channel.duration, index)
      timeline.setEase(channel.ease, "inOut", index)
    } else {
      this.channel.setChannelAsInactive(index)
    }
  }

  /**
   * Set a specific timeline
   * @param {number} index - Channel index
   */
  setTimeline(index) {
    this.timeline.setTimeline(index)
  }

  /**
   * PUBLIC API - Update UI from current shader
   * Called by Experience when shader changes
   */
  updateFromShader() {
    this.shaderControls.updateFromShader()
    this.timeline.setAllTimelines()
    this.channel.turnOnActiveChannels()
    this.channel.setChannelUIFromShader()
  }

  /**
   * PUBLIC API - Set project in UI
   * Called by Experience when project changes
   */
  setProject() {
    this.project.setProject()
    this.updateFromShader()
  }

  /**
   * PUBLIC API - Set all timelines
   * Called by ProjectRepo when loading projects
   */
  setAllTimelines() {
    this.timeline.setAllTimelines()
  }

  /**
   * PUBLIC API - Start video export
   * Called externally when needed
   */
  async startVideoExport() {
    await this.videoExport.startVideoExport()
  }

  /**
   * Get uniform values (for backward compatibility)
   * @returns {Object}
   */
  getUniformValues() {
    return this.utility.getUniformValues()
  }

  /**
   * Set uniform values (for backward compatibility)
   * @param {Object} input
   */
  setUniformValues(input) {
    this.utility.setUniformValues(input)
  }
}
