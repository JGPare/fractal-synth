import BaseController from './BaseController'

/**
 * UtilityController - Manages uniform value operations
 * Pure utility methods with no DOM dependencies
 */
export default class UtilityController extends BaseController {
  constructor() {
    super()
  }

  /**
   * Get a copy of all current uniform values
   * @returns {Object} Copy of uniform values
   */
  getUniformValues() {
    const copy = {}
    for (const [key, value] of Object.entries(this.shaderUniforms)) {
      copy[key] = { value: value.value }
    }
    return copy
  }

  /**
   * Set uniform values from input object
   * @param {Object} input - Object containing uniform values
   */
  setUniformValues(input) {
    if (!input) return
    for (const [key, value] of Object.entries(input)) {
      if (typeof value == Object) {
        this.shaderUniforms[key].value = value.value
      }
    }
  }
}
