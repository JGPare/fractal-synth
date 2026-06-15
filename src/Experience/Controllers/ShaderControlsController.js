import BaseController from './BaseController'

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
   * Add a number input control with keyframe button
   * @param {NumberInput} input - Input to create control for
   * @param {HTMLElement} parentElement - Container element
   */
  addNumberControl(input, parentElement) {
    const inputId = input.getId()

    // Soft-card number control: top row is label | value | reset | gear | keyframe,
    // slider underneath. Gear expands the card to reveal min/max Set & Reset.
    const container = document.createElement("div")
    container.setAttribute("class", "slider-container nc-card")

    const label = document.createElement("label")
    label.textContent = input.name
    label.setAttribute("class", "label-text")
    label.setAttribute("for", inputId)

    const grid = document.createElement("div")
    grid.setAttribute("class", "number-input-grid")

    const keyBtn = document.createElement("button")
    keyBtn.setAttribute("class", "keyframe-btn")
    keyBtn.setAttribute("title", "Add / update keyframe at playhead")
    keyBtn.setAttribute("id", inputId + "-key-btn")
    keyBtn.textContent = "◇"
    input.elements["keyBtn"] = keyBtn

    const slider = document.createElement("input")
    slider.setAttribute("type", "range")
    slider.setAttribute("min", input.min)
    slider.setAttribute("max", input.max)
    slider.setAttribute("step", input.step)
    slider.setAttribute("value", input.value)
    slider.setAttribute("class", "control-slider")
    slider.setAttribute("id", inputId + "-slider")
    input.elements["slider"] = slider

    const value = document.createElement("input")
    value.setAttribute("type", "number")
    value.setAttribute("step", input.step)
    value.setAttribute("class", "control-number control-number-ease")
    value.setAttribute("id", inputId + "-value")
    value.value = slider.value
    input.elements["value"] = value

    // Reset button — revert the parameter to its previous value (toggles).
    // Disabled until an edit has produced a previous value worth reverting to.
    const back = document.createElement("button")
    back.setAttribute("class", "nc-back")
    back.setAttribute("title", "Revert to previous value")
    back.textContent = "↺"
    back.disabled = true

    // Config gear — expands the card to reveal min/max Set & Reset
    const gear = document.createElement("button")
    gear.setAttribute("class", "nc-gear")
    gear.setAttribute("title", "Edit range (min / max)")
    gear.textContent = "⚙"

    // --- previous-value history for the back button ----------------------
    let prevValue = input.value   // restorable value
    let editAnchor = input.value  // value captured at the start of an edit
    const anchor = () => { editAnchor = input.value }
    const commitPrev = () => { prevValue = editAnchor; back.disabled = false }

    keyBtn.addEventListener('click', () => {
      this.trigger('keyframeRequested', [input])
    })

    slider.addEventListener('pointerdown', anchor)
    slider.addEventListener('input', () => {
      if (value.value > slider.max) value.value = slider.max
      if (value.value < slider.min) value.value = slider.min
      value.value = slider.value
      input.setValue(slider.value)
      this.trigger('parameterEdited', [input])
    })
    slider.addEventListener('change', commitPrev)

    value.addEventListener('focus', anchor)
    value.addEventListener('change', () => {
      slider.value = value.value
      input.setValue(slider.value)
      commitPrev()
      this.trigger('parameterEdited', [input])
    })

    back.addEventListener('click', () => {
      const current = input.value
      input.setValue(prevValue)
      slider.value = input.value
      value.value = input.value
      prevValue = current   // so the back button toggles between the two
      this.trigger('parameterEdited', [input])
    })

    // --- min/max editor (revealed when the gear expands the card) --------
    const origMin = input.min
    const origMax = input.max

    const config = document.createElement("div")
    config.setAttribute("class", "nc-config")

    const makeBound = (boundLabel, setBound, origBound) => {
      const cell = document.createElement("div")
      cell.setAttribute("class", "nc-bound")

      const cellLabel = document.createElement("span")
      cellLabel.setAttribute("class", "nc-bound-label")
      cellLabel.textContent = boundLabel

      const setBtn = document.createElement("button")
      setBtn.setAttribute("class", "nc-bound-btn")
      setBtn.setAttribute("title", `Set ${boundLabel.toLowerCase()} to current value`)
      setBtn.textContent = "Set"
      setBtn.addEventListener('click', () => setBound(input.value))

      const resetBtn = document.createElement("button")
      resetBtn.setAttribute("class", "nc-bound-btn nc-bound-reset")
      resetBtn.setAttribute("title", `Reset ${boundLabel.toLowerCase()} to default`)
      resetBtn.textContent = "Reset"
      resetBtn.addEventListener('click', () => setBound(origBound))

      cell.append(cellLabel, setBtn, resetBtn)
      return cell
    }

    config.appendChild(makeBound("Min",
      (n) => { input.min = n; slider.setAttribute("min", n) }, origMin))
    config.appendChild(makeBound("Max",
      (n) => { input.max = n; slider.setAttribute("max", n) }, origMax))

    gear.addEventListener('click', (e) => {
      e.stopPropagation()
      const expanded = container.classList.toggle('expanded')
      gear.classList.toggle('active', expanded)
    })

    container.appendChild(label)
    container.appendChild(back)
    container.appendChild(gear)
    container.appendChild(grid)
    container.appendChild(config)
    grid.appendChild(keyBtn)
    grid.appendChild(slider)
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
   * Reflect keyframe state on the ◇ buttons:
   * .has-track when the parameter is animated, .on-key when a keyframe
   * exists at the playhead
   */
  refreshKeyButtons() {
    const shader = this.experience.shader
    if (!shader) return
    for (const input of shader.getNumInputs()) {
      const keyBtn = input.elements.keyBtn
      if (!keyBtn) continue
      const hasTrack = Boolean(this.animation.getTrack(input.eId))
      const onKey = hasTrack && this.animation.hasKeyAtPlayhead(input.eId)
      keyBtn.classList.toggle('has-track', hasTrack)
      keyBtn.classList.toggle('on-key', onKey)
      keyBtn.textContent = onKey ? '◆' : '◇'
    }
  }

  /**
   * Sync slider/number DOM elements of animated parameters to the
   * current shader uniform values (so sliders follow the animation)
   */
  syncSlidersToShader() {
    const shader = this.experience.shader
    if (!shader) return
    for (const input of shader.getNumInputs()) {
      if (!this.animation.getTrack(input.eId)) continue
      input.setFromShader()
      if (input.elements.slider && document.activeElement !== input.elements.slider) {
        input.elements.slider.value = input.value
      }
      if (input.elements.value && document.activeElement !== input.elements.value) {
        input.elements.value.value = Math.round(input.value * 10000) / 10000
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
