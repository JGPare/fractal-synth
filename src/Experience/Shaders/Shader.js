import { eNumInput } from "../Common/eNums"

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

  setInput(inputName, inputSnap)
  {
    for (const [key, group] of Object.entries(this.groups)){
      for (let i = 0; i < group.length; i++){
        if (group[i].name == inputName){
          group[i].setFromSnap(inputSnap)
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

  setStartValFromUniforms(uniforms, channelIndex)
  {
    const numInputs = this.getNumInputs()
    
    for (let i = 0; i < numInputs.length; i++) {
      if (numInputs[i].channelIndex == channelIndex){
        numInputs[i].startVal = numInputs[i].getValue()
      }
    }
  }

  setEndValFromUniforms(uniforms, channelIndex)
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
}
