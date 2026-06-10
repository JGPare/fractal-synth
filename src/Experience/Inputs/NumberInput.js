export default class NumberInput {
  // ============================================================
  // INITIALIZATION
  // ============================================================

  /**
   * @param {Object} config
   * @param {number} config.eId
   * @param {string} config.name
   * @param {number} config.value
   * @param {number} config.min
   * @param {number} config.max
   * @param {number} config.step
   */
  constructor({ eId, name, value = 0, min = 0, max = 1, step = 0.1 }) {
    this.eId = eId
    this.name = new String(name)
    this.value = value
    this.min = min
    this.max = max
    this.step = step

    this.output = null
    this.type = "number"
    this.uFloatPar = null
    this.elements = {
      keyBtn: null,
      value: null,
      slider: null,
    }
  }

  /**
   * @param {Object} inputSnap
   */
  setFromSnapshot(inputSnap) {
    this.name = new String(inputSnap.name)
    this.value = inputSnap.value
    this.min = inputSnap.min
    this.max = inputSnap.max
    this.step = inputSnap.step
  }

  /**
   * @returns {Object}
   */
  getSnapshot() {
    return {
      type: this.type,
      eId: this.eId,
      name: this.name,
      value: this.value,
      min: this.min,
      max: this.max,
      step: this.step
    }
  }

  // ============================================================
  // VALUE MANAGEMENT
  // ============================================================

  /**
   * @param {number} value
   */
  setValue(value) {
    this.value = Number(value)
    this.uFloatPar[this.eId] = this.value
  }

  /**
   * @returns {number}
   */
  getValue() {
    return this.uFloatPar[this.eId]
  }

  /**
   * @returns {number}
   */
  getShaderValue() {
    return this.uFloatPar[this.eId]
  }

  setFromShader() {
    this.value = this.uFloatPar[this.eId]
  }

  // ============================================================
  // SHADER BINDING
  // ============================================================

  /**
   * @param {Float32Array} uFloatPar
   */
  setUfloatPars(uFloatPar) {
    this.uFloatPar = uFloatPar
    this.uFloatPar[this.eId] = this.value
  }

  // ============================================================
  // DOM ELEMENT BINDING
  // ============================================================

  /**
   * @param {HTMLElement} item
   */
  linkInput(item) {
    item.addEventListener('input', (event) => {
      this.value = event.target.value
      if (this.output) {
        this.output.value = this.value
      }
    })
  }

  /**
   * @param {Object} shaderOutput
   */
  linkOutput(shaderOutput) {
    this.output = shaderOutput
  }

  clearOutput() {
    this.output = null
  }

  /**
   * @param {HTMLElement} element
   */
  setInputElement(element) {
    this.inputElem = element
  }

  setElementFromInput() {
    this.inputElem.value = this.value
  }

  /**
   * @returns {string}
   */
  getId() {
    return this.name.toLowerCase().split(' ').join('-')
  }
}
