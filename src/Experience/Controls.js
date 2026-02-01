import * as THREE from 'three'
import Experience from "./Experience"
import ProjectRepo from './Repo/ProjectRepo'
import NumberInput from './Inputs/NumberInput'
import Shader from './Shaders/Shader'
import { eShaders } from './Common/eNums'
import Palette from './Utils/Palette'
import ShaderUtility from './Shaders/ShaderUtility'

const debugObj = {}

export default class Controls {
  // ============================================================
  // INITIALIZATION
  // ============================================================

  constructor() {
    this.initExperienceReferences()
    this.initState()
    this.initDebug()
    this.createColorElements()
    this.getElements()
    this.linkUI()
    this.setShader()
    this.paperCanvas.hidden = true
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
    this.channel = this.experience.channels[0]
    this.projectList = this.experience.projectList
    this.project = this.experience.project
    this.shader = this.experience.shader
    this.shaderUniforms = this.shaderMaterial.getUniforms()
    this.palettes = this.experience.palettes
    this.palette = this.palettes.getPaletteByIndex(0)
  }

  initState() {
    this.numberOfColors = 5
    this.numberOfChannels = 5
    this.modeIndex = eShaders.mandle
    this.loopTimeline = false
    this.videoArmed = false
    this.videoExportAbortController = null
  }

  initDebug() {
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder('Screen')
      this.debugFolder.close()
    }
  }

  getElements() {
    this.projectNameElem = document.getElementById('project-name')
    this.loaderElement = document.getElementById('loader')
    this.loaderCloseBtn = document.getElementById('loader-close-btn')
    this.viewerElement = document.getElementById('viewer')
    this.mainGrid = document.getElementById('main-grid')
    this.menuBar = document.getElementById('menu-bar')
    this.centerGrid = document.getElementById('center-grid')
    this.expandBtn = document.getElementById('fullscreen-btn')
    this.modeSelect = document.getElementById('mode-select')
    this.paletteSelect = document.getElementById('palette-select')
    this.numberOfColorsSlider = document.getElementById('number-of-colors')
        this.playTimelineButton = document.getElementById('play-timeline-button')
    this.pauseTimelineButton = document.getElementById('pause-timeline-button')
    this.seekStartTimelineButton = document.getElementById('seek-start-timeline-button')
    this.seekEndTimelineButton = document.getElementById('seek-end-timeline-button')
    // this.loopTimelineButton = document.getElementById('loop-timeline-button')
    this.colorOffsetSlider = document.getElementById('color-offset')
    this.timelineSelectSlider = document.getElementById('timeline-select-slider')
    this.colorsContainer = document.getElementById('colors-container')
    this.paperCanvas = document.getElementById('paper-canvas')
    this.paletteInput = document.getElementById('palette-input')
    this.channelCheckboxes = document.querySelectorAll('input.channel-checkbox')
    this.channelDurations = document.querySelectorAll('input.channel-duration')
    const channelsContainer = document.querySelector('#channels')
    this.channelNumberContainers = channelsContainer.querySelectorAll('div.channel-number-container')
    this.channelEases = document.querySelectorAll('select.channel-ease')
    this.channelProgressSliders = document.querySelectorAll('input.timeline-slider')
    this.channelClearBtns = document.querySelectorAll('button.channel-clear-btn')

    // Menu bar items
    this.menuSave = document.getElementById('menu-save')
    this.menuNew = document.getElementById('menu-new')
    this.menuCopy = document.getElementById('menu-copy')
    this.menuLoad = document.getElementById('menu-load')
    this.menuDelete = document.getElementById('menu-delete')
    this.menuImport = document.getElementById('menu-import')
    this.menuExport = document.getElementById('menu-export')
    this.menuResetShader = document.getElementById('menu-reset-shader')
    this.menuClearAnimations = document.getElementById('menu-clear-animations')
    this.settingsBtn = document.getElementById('settings-btn')
    this.settingsElement = document.getElementById('settings')
    this.settingsCloseBtn = document.getElementById('settings-close-btn')

    // Export controls
    this.exportImageBtn = document.getElementById('export-image-btn')
    this.armVideoBtn = document.getElementById('arm-video-btn')
    this.exportVideoDuration = document.getElementById('export-video-duration')
    this.exportVideoStatus = document.getElementById('export-video-status')
  }

  // ============================================================
  // SHADER CONTROLS
  // ============================================================

  setProject()
  {
    this.projectNameElem.value = this.projectList.currentProjectName
    this.setShader()
  }


  setShader() {
    if (this.experience.shader) {
      this.shader = this.experience.shader
      this.shader.setInputs()
      this.shaderMaterial.setShader(this.shader)
      this.clearControls()

      this.setControls(this.shader)
      this.setUIfromShader()
      this.setPaletteFromIndex(this.shader.paletteIndex)
      this.setAllTimelines()
      this.turnOnActiveChannels()
    }
  }

  /**
   * @param {Shader} shader
   */
  setControls(shader) {
    const parentElement = document.getElementById('left-inputs')
    this.clearControls(parentElement)
    this.addControls(shader, parentElement)
  }

  /**
   * 
   * @param {Shader} shader 
   * @param {object} parentElement 
   */
  addControls(shader, parentElement) {
    const groups = shader.getGroups()
    for (const [key, value] of Object.entries(groups)) {
      for (const input of value) {
        this.addControl(input, parentElement)
      }
      this.addBreak(parentElement)
    }
  }

  /**
   * @param {NumberInput} input
   * @param {HTMLElement} parentElement
   */
  addControl(input, parentElement) {
    switch (input.type) {
      case "number":
        this.addNumberControl(input, parentElement)
        break
      default:
        break
    }
  }

  /**
   * @param {HTMLElement} parentElement
   */
  addBreak(parentElement) {
    const breakElem = document.createElement("div")
    breakElem.setAttribute("class", "bottom-outline")
    parentElement.appendChild(breakElem)
  }

  /**
   * 
   * @param {NumberInput} input 
   * @param {object} parentElement 
   */
  addNumberControl(input, parentElement) {
    const inputId = input.getId()

    const container = document.createElement("div")
    container.setAttribute("class", "label-text")

    const label = document.createElement("label")
    label.textContent = input.name
    label.setAttribute("class", "label-text")
    label.setAttribute("for", inputId)

    const grid = document.createElement("div")
    grid.setAttribute("class", "number-input-grid")

    const easeChannel = document.createElement("input")
    easeChannel.setAttribute("type", "number")
    easeChannel.setAttribute("min", "0")
    easeChannel.setAttribute("max", "5")
    easeChannel.setAttribute("step", "1")
    easeChannel.setAttribute("value", "0")
    easeChannel.setAttribute("class", "control-ease channel-color")
    easeChannel.setAttribute("data-channel", input.channelIndex + 1)
    easeChannel.setAttribute("id", inputId + "-ease-channel")

    input.elements["easeChannel"] = easeChannel

    const slider = document.createElement("input")

    slider.setAttribute("type", "range")
    slider.setAttribute("min", input.min)
    slider.setAttribute("max", input.max)
    slider.setAttribute("step", input.step)
    slider.setAttribute("value", input.value)
    slider.setAttribute("class", "control-slider channel-color")
    slider.setAttribute("data-channel", input.channelIndex + 1)
    slider.setAttribute("id", inputId + "-slider")

    input.elements["slider"] = slider

    const value = document.createElement("input")
    value.setAttribute("type", "number")
    value.setAttribute("class", "control-number control-number-ease")
    value.setAttribute("id", inputId + "-value")

    value.value = slider.value
    input.elements["value"] = value

    // Start/End buttons (disabled when no channel assigned)
    const startBtn = document.createElement("button")
    startBtn.setAttribute("class", "set-value-btn")
    startBtn.setAttribute("title", "Set start value")
    startBtn.textContent = "▼"
    startBtn.disabled = input.channelIndex < 0

    const endBtn = document.createElement("button")
    endBtn.setAttribute("class", "set-value-btn")
    endBtn.setAttribute("title", "Set end value")
    endBtn.textContent = "▼"
    endBtn.disabled = input.channelIndex < 0

    startBtn.addEventListener('click', () => {
      input.startVal = input.value
      this.setTimeline(input.channelIndex)
      this.setInputElementActive(input)
    })

    endBtn.addEventListener('click', () => {
      input.endVal = input.value
      this.setTimeline(input.channelIndex)
      this.setInputElementActive(input)
    })

    // handles
    slider.addEventListener('input', () => {
      if (value.value > slider.max) value.value = slider.max
      if (value.value < slider.min) value.value = slider.min
      value.value = slider.value
      input.setValue(slider.value)
    })

    value.addEventListener('change', () => {
      slider.value = value.value
      input.setValue(slider.value)
    })

    easeChannel.addEventListener('change', () => {
      const prevIndex = input.channelIndex
      input.setChannelIndex(easeChannel.value - 1)
      easeChannel.setAttribute("data-channel", input.channelIndex + 1)
      slider.setAttribute("data-channel", input.channelIndex + 1)
      startBtn.disabled = input.channelIndex < 0
      endBtn.disabled = input.channelIndex < 0
      this.setTimeline(prevIndex)
      this.clearInputAnimation(input)
    })

    easeChannel.value = input.channelIndex + 1

    // Header row
    const headerRow = document.createElement("div")
    headerRow.setAttribute("class", "number-input-header")

    const channelHeader = document.createElement("span")
    channelHeader.textContent = "#"
    channelHeader.setAttribute("class", "number-input-header-item")

    const labelWrapper = document.createElement("span")
    labelWrapper.setAttribute("class", "number-input-label-wrapper")
    labelWrapper.appendChild(label)

    headerRow.appendChild(channelHeader)
    headerRow.appendChild(labelWrapper)

    container.appendChild(headerRow)
    container.appendChild(grid)
    grid.appendChild(easeChannel)
    grid.appendChild(startBtn)
    grid.appendChild(slider)
    grid.appendChild(endBtn)
    grid.appendChild(value)

    parentElement.appendChild(container)
  }

  /**
   * @param {HTMLElement} parentElement
   */
  clearControls(parentElement) {
    if (parentElement) {
      parentElement.innerHTML = ''
    }
  }

  setUIfromShader() {
    const debug = false
    if (debug) {
      console.log("setting ui from shader")
    }

    this.modeIndex = this.shader.eShader
    this.shaderUniforms.uMode.value = this.shader.eShader

    this.setModeFromIndex()
    this.setChannelUIFromShader()

  }

  // ============================================================
  // UI EVENT LINKING
  // ============================================================

  linkUI() {

    this.linkProjectInfo()
    this.linkKeyboardEvents()
    this.linkTimeline()
    this.linkDualInputs()
    this.linkPalette()

    this.linkChannels()
    this.linkExpandButton()
    this.linkLoaderClose()
    this.linkMenuBar()
    this.linkSettings()
    this.linkExportControls()

  }

  linkProjectInfo() {
    
    this.projectNameElem.addEventListener('change', (event) => {
      const project = this.projectList.currentProject
      if (project) {
        project.name = this.projectNameElem.value
        this.projectList.currentProjectName = project.name
        project.updateModified()
        ProjectRepo.saveProjectList(this.projectList)
      }
    })

    this.modeSelect.addEventListener('change', (event) => {
      this.modeIndex = event.target.selectedIndex
      this.experience.setShader(this.modeIndex)
    })

    this.numberOfColorsSlider.addEventListener('change', (event) => {
      this.numberOfColors = event.target.value
      this.setNumberOfColors()
    })
  }

  
  linkExpandButton() {
    this.expandBtn.addEventListener('click', () => {
      const isExpanded = this.mainGrid.classList.contains('expanded')

      if (isExpanded) {
        this.mainGrid.classList.remove('expanded')
        this.menuBar.hidden = false
        setTimeout(() => {
          this.centerGrid.classList.remove('expanded')
        }, 400)
      } else {
        this.mainGrid.classList.add('expanded')
        this.menuBar.hidden = true
        this.centerGrid.classList.add('expanded')
      }
    })

    document.addEventListener('mousemove', (e) => {
      if (!this.mainGrid.classList.contains('expanded')) return

      const cornerSize = 100
      const inCorner = (window.innerWidth - e.clientX < cornerSize) && (window.innerHeight - e.clientY < cornerSize)

      this.expandBtn.classList.toggle('visible', inCorner)
    })
  }

  linkLoaderClose() {
    this.loaderCloseBtn.addEventListener('click', () => {
      this.closeLoadView()
    })

    this.loaderElement.addEventListener('click', (e) => {
      if (e.target === this.loaderElement) {
        this.closeLoadView()
      }
    })

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.loaderElement.hidden) {
        this.closeLoadView()
      }
      if (e.key === 'Escape' && !this.settingsElement.hidden) {
        this.closeSettingsView()
      }
      if (e.key === 'Escape' && this.videoExportAbortController) {
        this.cancelVideoExport()
      }
    })
  }

  linkSettings() {
    this.settingsBtn.addEventListener('click', () => {
      this.openSettingsView()
    })

    this.settingsCloseBtn.addEventListener('click', () => {
      this.closeSettingsView()
    })

    this.settingsElement.addEventListener('click', (e) => {
      if (e.target === this.settingsElement) {
        this.closeSettingsView()
      }
    })

    const zoomSpeedSlider = document.getElementById('scroll-zoom-speed')
    const zoomSpeedValue = document.getElementById('scroll-zoom-speed-value')
    zoomSpeedSlider.addEventListener('input', () => {
      zoomSpeedValue.textContent = zoomSpeedSlider.value + '%'
      this.experience.settings.scrollZoomSpeed = zoomSpeedSlider.value / 100
    })

    const exportFpsSlider = document.getElementById('export-fps')
    const exportFpsValue = document.getElementById('export-fps-value')
    exportFpsSlider.addEventListener('input', () => {
      exportFpsValue.textContent = exportFpsSlider.value
      this.experience.settings.exportFps = parseInt(exportFpsSlider.value)
    })

    const exportResSelect = document.getElementById('export-resolution')
    exportResSelect.addEventListener('change', () => {
      this.experience.settings.exportResolution = exportResSelect.value
    })
  }

  openSettingsView() {
    this.viewerElement.hidden = true
    this.settingsElement.hidden = false
    this.canvas.hidden = true
  }

  closeSettingsView() {
    this.viewerElement.hidden = false
    this.settingsElement.hidden = true
    this.canvas.hidden = false
  }

  linkExportControls() {
    this.exportImageBtn.addEventListener('click', () => {
      ProjectRepo.exportImage(this.projectList.currentProjectName, this.experience)
    })

    this.armVideoBtn.addEventListener('click', () => {
      this.videoArmed = !this.videoArmed
      this.armVideoBtn.classList.toggle('default-button', !this.videoArmed)
      this.armVideoBtn.classList.toggle('selected-button', this.videoArmed)
      this.exportVideoStatus.textContent = this.videoArmed ? 'Armed' : ''
    })
  }

  async startVideoExport() {
    this.videoArmed = false
    this.armVideoBtn.classList.add('default-button')
    this.armVideoBtn.classList.remove('selected-button')
    this.exportVideoStatus.textContent = ''

    const duration = parseFloat(this.exportVideoDuration.value)
    if (!duration || duration <= 0) return

    this.videoExportAbortController = new AbortController()

    try {
      await ProjectRepo.exportVideo(
        this.projectList.currentProjectName,
        this.experience,
        duration,
        this.experience.settings.exportFps,
        (progress) => {
          const pct = Math.round(progress * 100)
          this.exportVideoStatus.textContent = 'Recording ' + pct + '%'
        },
        this.videoExportAbortController.signal
      )
    } catch (e) {
      if (e.name !== 'AbortError') console.error('Video export error:', e)
    }

    this.exportVideoStatus.textContent = ''
    this.videoExportAbortController = null
  }

  cancelVideoExport() {
    if (this.videoExportAbortController) {
      this.videoExportAbortController.abort()
      this.videoExportAbortController = null
    }
    this.exportVideoStatus.textContent = ''
  }

  linkMenuBar() {
    this.menuSave.addEventListener('click', () => {
      ProjectRepo.saveProject(this.projectList.currentProjectID, this.projectList.currentProjectName, this.experience)
    })

    this.menuNew.addEventListener('click', () => {
      ProjectRepo.newProject(this.experience)
    })

    
    this.menuCopy.addEventListener('click', () => {
      this.projectList.currentProjectID = 0
      this.projectList.currentProjectName = this.projectList.currentProjectName + '_' + 'copy'
      this.projectNameElem.value = this.projectList.currentProjectName
      ProjectRepo.saveProject(this.projectList.currentProjectID, this.projectList.currentProjectName, this.experience)
    })

    this.menuLoad.addEventListener('click', () => {
      this.openLoadView()
    })

    this.menuDelete.addEventListener('click', () => {
      ProjectRepo.deleteProject(this.projectList.currentProjectID)
      this.projectList.deleteProject(this.projectList.currentProjectID)
      ProjectRepo.saveProjectList(this.projectList)
      ProjectRepo.newProject(this.experience)
    })

    this.menuResetShader.addEventListener('click', () => {
      this.experience.setShader(this.modeIndex)
    })

    this.menuClearAnimations.addEventListener('click', () => {
      for (let i = 0; i < this.channels.length; i++) {
        this.timeline.renew(i)
        this.clearChannelInputs(i)
        this.setChannelAsInactive(i)
      }
    })

    this.menuExport.addEventListener('click', () => {
      ProjectRepo.exportProject(this.projectList.currentProjectName, this.experience)
    })

    this.menuImport.addEventListener('click', () => {
      const input = document.createElement('input')
      input.type = 'file'
      input.accept = '.json'
      input.onchange = async (e) => {
        const file = e.target.files[0]
        if (file) {
          await ProjectRepo.importProject(file, this.experience)
        }
      }
      input.click()
    })
  }

  linkKeyboardEvents() {
    this.keyboard.on('togglePlay', () => {
      const timelineSelections = this.getTimelineSelection()
      if (this.globalPlay){
        this.timeline.pauseTimelinesSelect(timelineSelections)
      }
      else {
        this.timeline.playTimelinesSelect(timelineSelections)
        if (this.videoArmed) {
          this.startVideoExport()
        }
      }
      this.globalPlay = !this.globalPlay
    })

    this.keyboard.on('seekStart', () => {
      this.seekStartOnSelectTimelines()
    })

    this.keyboard.on('seekEnd', () => {
      this.seekEndOnSelectTimelines()
    })

    for (let i = 0; i < this.numberOfChannels; i++) {
      this.keyboard.on(`toggleArm${i + 1}`, () => this.toggleChannelArm(i))
    }

    this.timeline.on('setSegment', () => {
      this.segmentSlider.value = this.timeline.segmentIndex
    })
  }

  linkTimeline() {
    this.playTimelineButton.addEventListener('click', (event) => {
      this.globalPlay = true
      const timelineSelections = this.getTimelineSelection()
      this.timeline.playTimelinesSelect(timelineSelections)
      if (this.videoArmed) {
        this.startVideoExport()
      }
    })

    this.pauseTimelineButton.addEventListener('click', (event) => {
      this.globalPlay = false
      const timelineSelections = this.getTimelineSelection()
      this.timeline.pauseTimelinesSelect(timelineSelections)
    })

    this.seekStartTimelineButton.addEventListener('click', (event) => {
      this.seekStartOnSelectTimelines()
    })

    this.seekEndTimelineButton.addEventListener('click', (event) => {
      this.seekEndOnSelectTimelines()
    })

    // this.loopTimelineButton.addEventListener('click', (event) => {
    //   this.toggleSelectButtonElement(this.loopTimelineButton)
    //   this.loopTimeline = !this.loopTimeline
    //   const timelineSelections = this.getTimelineSelection()
    //   this.timeline.setRepeat(this.loopTimeline, timelineSelections)
    // })

  }

  // ============================================================
  // TIMELINE OPERATIONS
  // ============================================================

  /**
   * @param {HTMLElement} element
   */
  toggleSelectButtonElement(element) {
    element.classList.toggle('selected-button')
    element.classList.toggle('default-button')
  }

  /**
   * @returns {boolean[]}
   */
  getTimelineSelection() {
    return this.channels.map(channel => (channel.on))
  }

  setAllTimelines() {
    for (let i = 0; i < this.channels.length; i++) {
      this.setTimeline(i)
    }
  }

  /**
   * @param {number} index
   */
  setTimeline(index) {
    if (!this.shader || index < 0) {
      return
    }
    let inputSet = false
    const channel = this.channels[index]

    this.timeline.renew(index)

    const numInputs = this.shader.getNumInputs()

    for (const input of numInputs) {
      if (input.channelIndex == index && input.startVal != input.endVal) {
        inputSet = true
        this.timeline.setFromToFromNumInput(input, index)
        this.setInputElementActive(input)
      }
    }
    if (inputSet) {
      this.setChannelAsActive(index)
      this.timeline.fromToTimeline(this.channelProgressSliders[index], index)
      this.timeline.setDuration(channel.duration, index)
      this.timeline.setEase(channel.ease, "inOut", index)
    }
    else {
      this.setChannelAsInactive(index)
    }
  }

  seekStartOnSelectTimelines() {
    const timelineSelections = this.getTimelineSelection()
    for (let i = 0; i < timelineSelections.length; i++) {
      if (timelineSelections[i]) {
        this.timeline.seekStart(i)
      }
    }
    this.setUIfromShader()
  }

  seekEndOnSelectTimelines() {
    const timelineSelections = this.getTimelineSelection()
    for (let i = 0; i < timelineSelections.length; i++) {
      if (timelineSelections[i]) {
        this.timeline.seekEnd(i)
      }
    }
    this.setUIfromShader()
  }

  // ============================================================
  // PROJECT MANAGEMENT
  // ============================================================

  openLoadView() {
    this.createProjectCards()
    this.viewerElement.hidden = true
    this.loaderElement.hidden = false
    this.canvas.hidden = true
  }

  closeLoadView() {
    this.viewerElement.hidden = false
    this.loaderElement.hidden = true
    this.canvas.hidden = false
  }

  createProjectCards() {
    const modal = this.loaderElement.querySelector('.modal')
    const existingContainer = modal.querySelector('.projects-container')
    if (existingContainer) {
      existingContainer.innerHTML = ""
    }
    const projectsContainer = existingContainer || document.createElement('div')
    projectsContainer.className = "projects-container"
    if (!existingContainer) {
      modal.appendChild(projectsContainer)
    }

    this.projectList.projects.forEach(project => {
      projectsContainer.appendChild(this.createProjectCard(project))
    })
  }

  /**
   * @param {Object} project
   * @returns {HTMLElement}
   */
  createProjectCard(project) {
    const card = document.createElement('div')
    card.className = 'project-card'

    const img = document.createElement('img')
    img.className = 'project-image'
    img.src = project.image || null
    img.alt = project.name

    const name = document.createElement('div')
    name.className = 'project-name'
    name.textContent = project.name

    card.appendChild(img)
    card.appendChild(name)

    card.addEventListener('click', () => {
      ProjectRepo.loadProject(project.id, this.experience)
      this.closeLoadView()
    })

    return card
  }

  // ============================================================
  // CHANNEL OPERATIONS
  // ============================================================

  turnOnActiveChannels() {
    for (let i = 0; i < this.channels.length; i++) {
      const channel = this.channels[i]
      if (channel.active) {
        channel.on = true
        this.channelCheckboxes[i].checked = true
      }
    }
  }

  /**
   * @param {number} index
   */
  toggleChannelArm(index) {
    this.channels[index].on = !this.channels[index].on
    this.channelCheckboxes[index].checked = this.channels[index].on
  }

  // ============================================================
  // INPUT STATE MANAGEMENT
  // ============================================================

  /**
   * @param {NumberInput} input
   */
  setInputElementActive(input) {
    const easeChannel = input.elements.easeChannel
    easeChannel.classList.remove("channel-color")
    easeChannel.classList.add("channel-color-active")
  }

  /**
   * @param {NumberInput} input
   */
  setInputElementInactive(input) {
    const easeChannel = input.elements.easeChannel
    easeChannel.classList.add("channel-color")
    easeChannel.classList.remove("channel-color-active")
  }

  /**
   * @param {number} index
   */
  clearChannelInputs(index) {
    const numInputs = this.shader.getNumInputs()
    for (const input of numInputs) {
      if (input.channelIndex == index) {
        this.clearInputAnimation(input)
      }
    }
  }

  /**
   * 
   * @param {NumberInput} input 
   */
  clearInputAnimation(input) {
    input.startVal = input.endVal = input.getValue()
    this.setInputElementInactive(input)
  }

  /**
   * @returns {Object}
   */
  getUniformValues() {
    const copy = {}
    for (const [key, value] of Object.entries(this.shaderUniforms)) {
      copy[key] = { value: value.value }
    }
    return copy
  }

  /**
   * 
   * @param {NumberInput} input 
   */
  setUniformValues(input) {
    if (!input) return
    for (const [key, value] of Object.entries(input)) {
      if (typeof value == Object) {
        this.shaderUniforms[key].value = value.value
      }
    }
  }

  setNumberOfColors() {
    this.shaderUniforms.uPaletteLen.value = this.numberOfColors
    this.palette.displayLength = this.numberOfColors
    this.numberOfColorsSlider.value = this.numberOfColors
    this.removeColorElements()
    this.createColorElements()
  }

  linkDualInputs() {
    // set it so sliders change numbers
    const dualInputs = document.getElementsByClassName('dual-input-grid')
    for (const element of dualInputs) {
      const range = element.children[0]
      const number = element.children[1]
      range.addEventListener('input', (event) => {
        number.value = range.value
      })
      number.addEventListener('input', (event) => {
        range.value = number.value
      })
    }
  }

  // ============================================================
  // PALETTE OPERATIONS
  // ============================================================

  linkPalette() {
    this.linkPaletteSelect()
    this.linkPaletteInput()

    this.setPaletteInputFromSelect()

    this.linkNewPaletteButton()
    this.linkRandomPaletteButton()
    this.linkDeletePaletteButton()
  }

  linkPaletteSelect() {
    this.setPaletteSelectOptions()
    this.paletteSelect.addEventListener('change', () => {
      this.setPaletteInputFromSelect()
      const palette = this.palettes.getPaletteByName(this.paletteSelect.value)
      this.setPalette(palette)
      if (palette.locked) {
        this.lockPaletteInput()
      }
      else {
        this.unlockPaletteInput()
      }
    })
  }

  linkPaletteInput() {
    this.paletteInput.addEventListener('change', () => {
      const paletteOption = this.paletteSelect.options[this.paletteSelect.selectedIndex]
      this.paletteIndex = this.paletteSelect.selectedIndex
      if (this.shader) {
        this.shader.paletteIndex = this.paletteSelect.selectedIndex
      }
      paletteOption.value = this.paletteInput.value
      paletteOption.innerHTML = this.paletteInput.value
      this.palette.name = this.paletteInput.value
    })
  }

  /**
   * @param {number} index
   */
  setPaletteFromIndex(index) {
    const paletteOption = this.paletteSelect.options[index]
    this.paletteSelect.value = paletteOption.value
    const palette = this.palettes.getPaletteByName(this.paletteSelect.value)
    this.setPalette(palette)
    this.setPaletteInputFromSelect()
  }

  setModeFromIndex() {
    const modeSelect = this.modeSelect
    const modeOption = modeSelect.options[this.modeIndex]
    modeSelect.value = modeOption.value
  }

  setPaletteInputFromSelect() {
    this.paletteIndex = this.paletteSelect.selectedIndex
    if (this.shader) {
      this.shader.paletteIndex = this.paletteIndex
    }
    this.paletteInput.value = this.paletteSelect.value
  }

  linkNewPaletteButton() {
    const newPaletteButton = document.getElementById('new-palette-button')
    newPaletteButton.addEventListener('click', () => {
      const palette = this.palette.clone()
      palette.setDefaultName()
      this.palettes.addPalette(palette)
      this.setPalette(palette)
      this.setPaletteSelectOptions()
      this.setPaletteInputFromSelect()
      this.unlockPaletteInput()
    })
  }

  linkRandomPaletteButton() {
    const newPaletteButton = document.getElementById('random-palette-button')
    newPaletteButton.addEventListener('click', () => {
      if (this.palette.locked) {
        const palette = this.palettes.addPalette()
        this.setPalette(palette)
      }
      else {
        this.palette.randomize()
        this.refreshPaletteElements()
      }
      this.setPaletteSelectOptions()
      this.setPaletteInputFromSelect()
      this.unlockPaletteInput()
    })
  }

  linkDeletePaletteButton() {
    const deletePaletteButton = document.getElementById('delete-palette-button')
    deletePaletteButton.addEventListener('click', () => {
      if (!this.palette.locked) {
        const palette = this.palettes.deletePalette(this.palette)
        this.setPalette(palette)
        this.setPaletteSelectOptions()
        this.setPaletteInputFromSelect()
      }
    })
  }

  linkChannels() {
    for (let i = 0; i < this.channels.length; i++) {
      const channel = this.channels[i]
      const channelCheckbox = this.channelCheckboxes[i]
      const channelNumberContainer = this.channelNumberContainers[i]
      const channelDuration = this.channelDurations[i]
      const channelEase = this.channelEases[i]
      const channelProgressSlider = this.channelProgressSliders[i]
      const channelClearBtn = this.channelClearBtns[i]

      channelDuration.addEventListener('change', (event) => {
        channel.duration = channelDuration.value
        this.timeline.setDuration(channel.duration, i)
      })

      channelEase.addEventListener('change', (event) => {
        channel.ease = channelEase.value
        this.timeline.setEase(channel.ease, "inOut", i)
      })

      channelCheckbox.addEventListener('change', (event) => {
        channel.on = channelCheckbox.checked

      })

      channelProgressSlider.addEventListener('input', (event) => {
        this.timeline.progress(event.target.value, i)
      })

      channelClearBtn.addEventListener('click', (event) => {
        this.timeline.renew(i)
        this.clearChannelInputs(i)
        this.setChannelAsInactive(i)
      })
    }
  }

  setChannelUIFromShader() {
    for (let i = 0; i < this.channels.length; i++) {
      const channel = this.channels[i]
      const channelCheckbox = this.channelCheckboxes[i]
      const channelDuration = this.channelDurations[i]
      const channelEase = this.channelEases[i]
      const channelProgressSlider = this.channelProgressSliders[i]

      channelCheckbox.checked = channel.on

      channelDuration.value = channel.duration
      channelEase.value = channel.ease
    }
  }

  /**
   * @param {number} i
   */
  setChannelAsActive(i) {
    this.channels[i].active = true
    this.channelProgressSliders[i].classList.add("timeline-slider-has-content")
    this.channelProgressSliders[i].classList.remove("timeline-slider-default")
    this.channelNumberContainers[i].classList.add("channel-color-active")
    this.channelNumberContainers[i].classList.remove("channel-color")
  }

  /**
   * @param {number} i
   */
  setChannelAsInactive(i) {
    this.channels[i].active = false
    this.channelProgressSliders[i].classList.remove("timeline-slider-has-content")
    this.channelProgressSliders[i].classList.add("timeline-slider-default")
    this.channelNumberContainers[i].classList.remove("channel-color-active")
    this.channelNumberContainers[i].classList.add("channel-color")
  }

  lockPaletteInput() {
    this.paletteInput.disabled = true
  }

  unlockPaletteInput() {
    this.paletteInput.disabled = false
  }

  setPaletteSelectOptions() {
    this.paletteSelect.innerHTML = ''
    for (const palette of this.palettes) {
      const paletteOption = document.createElement("option")
      paletteOption.setAttribute("value", palette.name)
      paletteOption.innerHTML = palette.name
      this.paletteSelect.appendChild(paletteOption)
    }
    this.paletteSelect.selectedIndex = this.palettes.getPaletteIndex(this.palette)
  }

  // ============================================================
  // COLOR OPERATIONS
  // ============================================================

  createColorElements() {
    const colorGrid = document.getElementById('colors-container')
    let colorElement
    let color

    for (let i = 0; i < this.numberOfColors; i++) {
      colorElement = document.createElement("input")
      color = this.palette.getColor(i).clone()
      color.convertSRGBToLinear()
      colorElement.setAttribute("type", "color")
      colorElement.setAttribute("class", "colorpicker")
      colorElement.setAttribute("data", i)
      colorElement.setAttribute("value", "#" + color.getHexString())
      colorElement.addEventListener('input', (event) => {
        this.setColorFromElement(event.target, i)
      })
      colorGrid.appendChild(colorElement)
      if (i == 0) {
        this.setColorFromElement(colorElement, 0)
      }
    }
  }

  /**
   * 
   * @param {Palette} palette 
   */
  setPalette(palette) {
    this.palette = palette
    this.numberOfColors = palette.displayLength
    this.shaderUniforms.uPalette.value = this.palette.palette
    this.setNumberOfColors()
    this.refreshPaletteElements()
  }

  refreshPaletteElements() {
    this.removeColorElements()
    this.createColorElements()
  }

  removeColorElements() {
    const colorGrid = this.colorsContainer
    while (colorGrid.firstChild) {
      colorGrid.removeChild(colorGrid.lastChild)
    }
  }

  /**
   * @param {HTMLElement} element
   * @param {number} i
   */
  setColorFromElement(element, i) {
    const color = new THREE.Color(element.value)
    color.convertLinearToSRGB()
    this.palette.setColor(i, color)
    this.shaderUniforms.uPalette.value[i] = color
  }

  /**
   * @param {string} name
   */
  setName() {
    this.projectNameElem.value = this.projectList.currentProjectName
  }

  /**
   * @param {string} newEase
   */
  setEase(newEase) {
    this.currentEase = newEase
    this.channel.ease = newEase
    switch (this.currentEase) {
      case "custom":
        this.paperCanvas.hidden = false
        this.curveEditor.updateCurve()
        break
      default:
        this.paperCanvas.hidden = true
        this.timeline.setEase(this.currentEase, "inOut")
        break
    }
  }
}