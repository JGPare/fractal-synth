import BaseController from './BaseController'
import NumberInput from '../Inputs/NumberInput'

/**
 * ShaderControlsController - Manages dynamic shader input UI generation
 * Handles shader control creation, updates, and synchronization with shader data
 */
export default class ShaderControlsController extends BaseController {
  constructor() {
    super()
    this.getElements()
    this.linkDualInputs()
  }

  getElements() {
    this.leftInputsContainer = document.getElementById('left-inputs')
    this.paperCanvas = document.getElementById('paper-canvas')
  }

  /**
   * Update controls from current shader
   */
  updateFromShader() {
    if (this.experience.shader) {
      this.shader = this.experience.shader
      this.clearControls()
      this.setControls(this.shader)
      this.setUIfromShader()
      this.trigger('shaderUpdated', [this.shader])
    }
  }

  /**
   * Set controls for a shader
   * @param {Shader} shader - Shader to create controls for
   */
  setControls(shader) {
    const parentElement = document.getElementById('left-inputs')
    this.clearControls(parentElement)
    this.addControls(shader, parentElement)
  }

  /**
   * Add all controls for a shader
   * @param {Shader} shader - Shader to add controls for
   * @param {HTMLElement} parentElement - Container element
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
   * Add a single control
   * @param {NumberInput} input - Input to create control for
   * @param {HTMLElement} parentElement - Container element
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
   * Add a separator break
   * @param {HTMLElement} parentElement - Container element
   */
  addBreak(parentElement) {
    const breakElem = document.createElement("div")
    breakElem.setAttribute("class", "bottom-outline")
    parentElement.appendChild(breakElem)
  }

  /**
   * Add a number input control with channel selector
   * @param {NumberInput} input - Input to create control for
   * @param {HTMLElement} parentElement - Container element
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
    value.setAttribute("step", input.step)
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
      this.trigger('timelineUpdateRequested', [input.channelIndex])
      this.setInputElementActive(input)
    })

    endBtn.addEventListener('click', () => {
      input.endVal = input.value
      this.trigger('timelineUpdateRequested', [input.channelIndex])
      this.setInputElementActive(input)
    })

    // Slider and value input handlers
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
      this.trigger('timelineUpdateRequested', prevIndex)
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
   * Clear all controls
   * @param {HTMLElement} parentElement - Container element
   */
  clearControls(parentElement) {
    if (parentElement) {
      parentElement.innerHTML = ''
    }
  }

  /**
   * Set UI state from shader data
   */
  setUIfromShader() {
    if (!this.shader) return

    const modeIndex = this.shader.eShader
    this.shaderUniforms.uMode.value = this.shader.eShader

    this.trigger('modeIndexChanged', [modeIndex])
  }

  /**
   * Set input element as visually active
   * @param {NumberInput} input - Input to activate
   */
  setInputElementActive(input) {
    const easeChannel = input.elements.easeChannel
    easeChannel.classList.remove("channel-color")
    easeChannel.classList.add("channel-color-active")
  }

  /**
   * Set input element as visually inactive
   * @param {NumberInput} input - Input to deactivate
   */
  setInputElementInactive(input) {
    const easeChannel = input.elements.easeChannel
    easeChannel.classList.add("channel-color")
    easeChannel.classList.remove("channel-color-active")
  }

  /**
   * Clear animation for a specific input
   * @param {NumberInput} input - Input to clear
   */
  clearInputAnimation(input) {
    input.startVal = input.endVal = input.getValue()
    this.setInputElementInactive(input)
  }

  /**
   * Clear inputs for a specific channel
   * @param {number} index - Channel index
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
   * Link dual input controls (sliders and number inputs)
   */
  linkDualInputs() {
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
}
