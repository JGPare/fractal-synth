export default class Project {
  constructor(name) {
    this.name = name
    this.parameters = { }
  }

  addParameter(name, value, type)
  {
    switch (type) {
      case "number":
        this.parameters[name] = Number(value)
        break;
      default:
        break;
    }
  }

  clearParameters()
  {
    this.parameters = {}
  }

}