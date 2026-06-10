import { eNumInput } from "../Common/eNums"
import NumberInput from "../Inputs/NumberInput"

export default class Shader {
  // ============================================================
  // INITIALIZATION
  // ============================================================

  /**
   * @param {string} name
   * @param {number} eShader
   * @param {number} paletteIndex
   */
  constructor(name, eShader, paletteIndex = 0) {
    this.name = name
    this.groups = {}
    this.uFloatPars = new Float32Array(Object.keys(eNumInput).length)
    this.eShader = eShader
    this.paletteIndex = paletteIndex
  }

  // ============================================================
  // GROUP MANAGEMENT
  // ============================================================

  /**
   * @param {string} name
   * @param {Array} inputs
   */
  addGroup(name, inputs = []) {
    this.groups[name] = []
    if (inputs) {
      this.addToGroup(name, inputs)
    }
  }

  /**
   * @param {string} groupName
   * @param {Array} inputs
   */
  addToGroup(groupName, inputs) {
    if (this.groups[groupName]) {
      inputs.forEach(input => {
        this.groups[groupName].push(input)
      })
    }
    else {
      console.log("Group does not exist")
    }
  }

  /**
   * @returns {Object}
   */
  getGroups() {
    return this.groups
  }

  /**
   * @param {string} name
   * @returns {Array}
   */
  getGroup(name) {
    return this.groups[name]
  }

  // ============================================================
  // INPUT MANAGEMENT
  // ============================================================

  setInputs() {
    for (const [key, group] of Object.entries(this.groups)) {
      for (const input of group) {
        switch (input.type) {
          case "number":
            input.setUfloatPars(this.uFloatPars)
            break
          default:
            break
        }
      }
    }
  }

  /**
   * @param {number} eNumInput
   * @returns {NumberInput}
   */
  getInput(eNumInput) {
    for (const [key, group] of Object.entries(this.groups)) {
      for (const input of group) {
        if (input.eId == eNumInput) {
          return input
        }
      }
    }
  }

  /**
   * @returns {NumberInput[]}
   */
  getNumInputs() {
    const inputs = []
    for (const [key, group] of Object.entries(this.groups)) {
      for (const input of group) {
        if (input.type == "number") {
          inputs.push(input)
        }
      }
    }
    return inputs
  }

  /**
   * @returns {Float32Array}
   */
  getUfloatPars() {
    return this.uFloatPars
  }

  // ============================================================
  // SERIALIZATION
  // ============================================================

  /**
   * @returns {Object}
   */
  getGroupsSnapshot() {
    const groupsSnap = {}
    for (const [key, group] of Object.entries(this.groups)) {
      const groupSnap = {
        name: key,
        numInputs: []
      }
      for (const input of group) {
        groupSnap.numInputs.push(input.getSnapshot())
      }
      groupsSnap[key] = groupSnap
    }
    return groupsSnap
  }

  /**
   * @returns {Object}
   */
  getSnapshot() {
    return {
      name: this.name,
      groups: this.getGroupsSnapshot(),
      eShader: this.eShader,
      paletteIndex: this.paletteIndex
    }
  }

  /**
   * @param {Object} snapshot
   */
  setFromSnapshot(snapshot) {
    this.paletteIndex = snapshot.paletteIndex
    for (const [key, group] of Object.entries(snapshot.groups)) {
      for (const input of group.numInputs) {
        switch (input.type) {
          case "number":
            this.setInputFromSnapshot(input.name, input)
            break
          default:
            break
        }
      }
    }
  }

  /**
   * @param {Object} inputByEId - map of eId → { value }
   */
  setFromSnapshotByEId(inputByEId) {
    for (const input of this.getNumInputs()) {
      const snap = inputByEId[input.eId]
      if (snap) {
        input.value = snap.value
      }
    }
  }

  /**
   * @param {string} inputName
   * @param {Object} inputSnap
   */
  setInputFromSnapshot(inputName, inputSnap) {
    for (const [key, group] of Object.entries(this.groups)) {
      for (let i = 0; i < group.length; i++) {
        if (group[i].name == inputName) {
          group[i].setFromSnapshot(inputSnap)
        }
      }
    }
  }

  // ============================================================
  // UTILITY
  // ============================================================

  /**
   * @returns {Shader}
   */
  clone() {
    const newShader = new Shader(this.name, this.eShader, this.paletteIndex)

    for (const [groupName, inputs] of Object.entries(this.groups)) {
      newShader.addGroup(groupName)

      for (const input of inputs) {
        const clonedInput = new NumberInput({
          eId: input.eId,
          name: input.name,
          value: input.value,
          min: input.min,
          max: input.max,
          step: input.step
        })

        newShader.groups[groupName].push(clonedInput)
      }
    }

    newShader.uFloatPars = this.uFloatPars
    newShader.setInputs()

    return newShader
  }
}
