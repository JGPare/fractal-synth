

export default class NumberInput
{
  /**
   * 
   * @param {String} name 
   * @param {Number} value 
   * @param {Number} min 
   * @param {Number} max 
   * @param {Number} step 
   * @param {Number} channel 
   */
  constructor(nameOrObj, value = 0, min = 0, max = 1, step = 0.1, channel = 0) 
  {
    if (typeof nameOrObj === 'object'){
      this.name = new String(nameOrObj.name)
      this.value = nameOrObj.value
      this.min = nameOrObj.min
      this.max = nameOrObj.max
      this.step = nameOrObj.step
      this.channel = nameOrObj.channel
    }
    else {
      this.name = new String(nameOrObj)
      this.value = value
      this.min = min
      this.max = max
      this.step = step
      this.channel = channel
    }
    
    this.output = null
    this.startVal = 0
    this.endVal = 0
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

  setStart()
  {
    this.startVal = this.value
  }

  setEnd()
  {
    this.endVal = this.value
  }

  getId()
  {
    return this.name.toLowerCase().split(' ').join('-')
  }

} 