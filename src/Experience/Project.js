import Shader from "./Shaders/Shader"
import Palette from "./Utils/Palette"

export default class Project {
  /**
   * 
   * @param {String} name 
   */
  constructor(name, image = null, lastModified = null) {
    this.name = name
    this.image = image
    this.lastModified = lastModified ? Date.now() : Date.parse(lastModified)
  }

  setImage(image)
  {
    this.image = image
  }

  getSnapshot()
  {
    return {
      name : this.name,
      image : this.image,
      lastModified : this.lastModified.toString()
    }
  }

  updateModified()
  {
    this.lastModified = Date.now()
  }

}