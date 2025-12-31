

export default class NumberInput
{
  /**
   * 
   * @param {String} name 
   * @param {Number} value 
   * @param {Number} min 
   * @param {Number} max 
   * @param {Number} step 
   * @param {Number} channelIndex 
   */
  constructor(eIdOrObj, name = "", value = 0, min = 0, max = 1, step = 0.1, channelIndex = 0, startVal = 0, endVal = 0) 
  {
    if (typeof eIdOrObj === 'object'){
      this.eId = eIdOrObj.eId
      this.name = new String(eIdOrObj.name)
      this.value = eIdOrObj.value
      this.min = eIdOrObj.min
      this.max = eIdOrObj.max
      this.step = eIdOrObj.step
      this.channelIndex = eIdOrObj.channelIndex ?? 0
      this.startVal = eIdOrObj.startVal ?? 0
      this.endVal = eIdOrObj.endVal ?? 0
    }
    else {
      this.eId = eId
      this.name = new String(eIdOrObj)
      this.value = value
      this.min = min
      this.max = max
      this.step = step
      this.channelIndex = channelIndex
      this.startVal = 0
      this.endVal = 0
    }
    
    this.output = null
    this.type = "number"
    
    this.uFloatPar = null
    this.elements = {
      easeChannel : null,
      value : null,
      slider : null,
    }
  }

  setFromSnap(inputSnap)
  {
      // this.eId = inputSnap.eId
      this.name = new String(inputSnap.name)
      this.value = inputSnap.value
      // for now these are not set from snap
      // this.min = inputSnap.min
      // this.max = inputSnap.max
      // this.step = inputSnap.step
      this.channelIndex = inputSnap.channelIndex ?? 0
      this.startVal = inputSnap.startVal ?? 0
      this.endVal = inputSnap.endVal ?? 0
  }


  linkInput(item)
  {
    item.addEventListener('input', (event) => {      
      this.value = event.target.value
      if (this.output){
        this.output.value = this.value
      }
    })
  }

  linkOutput(shaderOutput)
  {
    this.output = shaderOutput
  }

  clearOutput()
  {
    this.output = null
  }

  setValue(value)
  {
    this.value = Number(value)
    this.uFloatPar[this.eId] = this.value
    console.log(this.name, this.eId, this.value);
    
  }

  getValue()
  {
    return this.uFloatPar[this.eId]
  }

  setStart()
  {
    this.startVal = this.value
  }

  setEnd()
  {
    this.endVal = this.value
  }

  setChannelIndex(index)
  {
    this.channelIndex = Number(index)
  }

  setUfloatPars(uFloatPar)
  {
    this.uFloatPar = uFloatPar
    this.uFloatPar[this.eId] = this.value
  }

  getId()
  {
    return this.name.toLowerCase().split(' ').join('-')
  }

  setInputElement(element)
  {
    this.inputElem = element
  }

  setElementFromInput()
  {
    this.inputElem.value = this.value
  }

  setFromShader()
  {
    this.value = this.uFloatPar[this.eId]
  }

  getShaderValue()
  {
    return this.uFloatPar[this.eId]
  }

  getSnapshot()
  {
    return {
      type : this.type,
      eId : this.eId,
      name : this.name,
      value : this.value,
      min : this.min,
      max : this.max,
      step : this.step,
      channelIndex : this.channelIndex,
      startVal : this.startVal,
      endVal : this.endVal
    }
  }

} 