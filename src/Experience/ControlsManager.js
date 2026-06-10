import EventEmitter from './Utils/EventEmitter'
import Experience from './Experience'

// Import all controllers
import UtilityController from './Controllers/UtilityController'
import VideoExportController from './Controllers/VideoExportController'
import ViewModalController from './Controllers/ViewModalController'
import PaletteController from './Controllers/PaletteController'
import ProjectController from './Controllers/ProjectController'
import KeyframeTimelineController from './Controllers/KeyframeTimelineController'
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
    this.keyframeTimeline = new KeyframeTimelineController()
    this.shaderControls = new ShaderControlsController()
  }

  /**
   * Wire event handlers between controllers
   */
  wireControllers() {
    const animation = this.experience.animation

    // ShaderControls → Animation: ◇ button adds/updates a keyframe at the playhead
    this.shaderControls.on('keyframeRequested', (input) => {
      animation.addOrUpdateKeyframe(input.eId, animation.playhead, Number(input.value))
    })

    // ShaderControls → Animation: auto-key - editing a slider while paused
    // updates an existing keyframe at the playhead
    this.shaderControls.on('parameterEdited', (input) => {
      if (animation.playing) return
      const track = animation.getTrack(input.eId)
      if (!track) return
      const index = track.indexOfKeyAt(animation.playhead, animation.keyEpsilon)
      if (index >= 0) {
        track.keys[index].v = Number(input.value)
        animation.trigger('tracksChanged')
      }
    })

    // ShaderControls → Project: When mode index changes
    this.shaderControls.on('modeIndexChanged', (modeIndex) => {
      this.project.setModeFromIndex(modeIndex)
    })

    // ShaderControls → Palette: When shader is updated
    this.shaderControls.on('shaderUpdated', (shader) => {
      this.palette.setPaletteFromIndex(shader.paletteIndex)
    })

    // Animation → UI: playhead moved (playback or scrub)
    animation.on('timeChanged', () => {
      this.keyframeTimeline.updatePlayhead()
      this.shaderControls.syncSlidersToShader()
      this.shaderControls.refreshKeyButtons()
    })

    // Animation → UI: keyframes added/removed/moved
    animation.on('tracksChanged', () => {
      this.keyframeTimeline.rebuild()
      this.shaderControls.refreshKeyButtons()
    })

    // Animation → UI + VideoExport: play state changed
    animation.on('playStateChanged', (playing) => {
      this.keyframeTimeline.updatePlayButton(playing)
      if (playing && this.videoExport.isVideoArmed()) {
        this.videoExport.startVideoExport()
      }
    })

    // Animation → UI: duration changed
    animation.on('durationChanged', () => {
      this.keyframeTimeline.updateRuler()
      this.keyframeTimeline.updateDurationInput()
      this.keyframeTimeline.rebuild()
    })

    // Animation → UI: loop mode changed
    animation.on('modeChanged', (mode) => {
      this.keyframeTimeline.updateModeButton(mode)
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

    // Project → Animation: When clear animations is requested
    this.project.on('clearAnimationsRequested', () => {
      animation.clear()
    })

    // ViewModal → VideoExport: Setup escape handler
    this.viewModal.setupEscapeHandler(this.videoExport)
  }

  /**
   * Final setup after all controllers are wired
   */
  finalizeSetup() {
    this.updateFromShader()
  }

  /**
   * PUBLIC API - Update UI from current shader
   * Called by Experience when shader changes
   */
  updateFromShader() {
    this.shaderControls.updateFromShader()
    this.keyframeTimeline.rebuild()
    this.shaderControls.refreshKeyButtons()
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
