

export default class Shader 
{
  constructor(name) 
  {
    this.groups = {}
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
      inputs.forEach(element => {
        this.groups[groupName].push(element)
      })
    }
    else{
      console.log("Group does not exist")
    }
  }

}
