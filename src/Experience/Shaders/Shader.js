import { eNumInput } from "../Common/eNums"
import NumberInput from "../Inputs/NumberInput"

export default class Shader 
{
  constructor(name, eShader, paletteIndex = 0) 
  {
    this.name = name
    this.groups = {}
    this.uFloatPars = new Float32Array(Object.keys(eNumInput).length)
    this.eShader = eShader
    this.paletteIndex = paletteIndex
  }

  addGroup(name, inputs = [])
  {
    this.groups[name] = []
    if (inputs){
      this.addToGroup(name, inputs)
    }
  }

  addToGroup(groupName, inputs)
  {
    if (this.groups[groupName]){
      inputs.forEach(input => {
        this.groups[groupName].push(input)
      })
    }
    else{
      console.log("Group does not exist")
    }
  }

  setInputs()
  {
    for (const [key, group] of Object.entries(this.groups)){
      for (const input of group){
        switch (input.type) {
        case "number":
          input.setUfloatPars(this.uFloatPars)
          break;
        default:
          break;
        }
      }
    }
  }

  getInput(eNumInput)
  {
    for (const [key, group] of Object.entries(this.groups)){
      for (const input of group){        
        if (input.eId == eNumInput){
          return input
        }
      }
    }
  }

  getNumInputs()
  {
    const inputs = [];
    for (const [key, group] of Object.entries(this.groups)){
      for (const input of group){        
        if (input.type == "number"){
          inputs.push(input)
        }
      }
    }
    return inputs;
  }

  setStartValFromUniforms(channelIndex)
  {
    const numInputs = this.getNumInputs()
    
    for (let i = 0; i < numInputs.length; i++) {
      if (numInputs[i].channelIndex == channelIndex){
        numInputs[i].startVal = numInputs[i].getValue()
      }
    }
  }

  setEndValFromUniforms(channelIndex)
  {
    const numInputs = this.getNumInputs()
    for (let i = 0; i < numInputs.length; i++) {
      if (numInputs[i].channelIndex == channelIndex){
        numInputs[i].endVal = numInputs[i].getValue()
      }
    }
  }

  getUfloatPars()
  {
    return this.uFloatPars
  }


  getGroups()
  {
    return this.groups
  }

  getGroup(name)
  {
    return groups[name]
  }

  getGroupsSnapshot()
  {
    const groupsSnap = {}
    for (const [key, group] of Object.entries(this.groups)){
      const groupSnap = { 
        name : key,
        numInputs : []
      }
      for (const input of group){
        groupSnap.numInputs.push(input.getSnapshot())
      }
      groupsSnap[key] = groupSnap
    }

    return groupsSnap
  }

  getSnapshot()
  {
    return {
      name : this.name,
      groups : this.getGroupsSnapshot(),
      eShader : this.eShader,
      paletteIndex : this.paletteIndex
    }
  }

  setFromSnapshot(snapshot)
  {
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

  setInputFromSnapshot(inputName, inputSnap)
  {
    for (const [key, group] of Object.entries(this.groups)){
      for (let i = 0; i < group.length; i++){
        if (group[i].name == inputName){
          group[i].setFromSnapshot(inputSnap)
        }
      }
    }
  }

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
          step: input.step,
          channelIndex: input.channelIndex,
          startVal: input.startVal,
          endVal: input.endVal
        }
        )

        newShader.groups[groupName].push(clonedInput)
      }
    }

    newShader.setUfloatPars = this.uFloatPars
    newShader.setInputs()

    return newShader
  }
  
}
