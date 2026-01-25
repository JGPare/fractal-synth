import Experience from "../Experience.js"
import Project from "../Project.js"
import ProjectList from "../ProjectList.js"
import Shader from "../Shaders/Shader.js"
import Controls from "../Controls.js"
import Channel from "../Channel.js"
import { eShaders } from "../Common/eNums.js"

const debug = true

export default class ProjectRepo {
  // ============================================================
  // SAVE OPERATIONS
  // ============================================================

  /**
   * @param {int} id
   * @param {string} name
   * @param {Experience} experience
   */
  static saveProject(id, name, experience) {
    const projectSnapshot = {}

    projectSnapshot.name = name
    if (debug) {
      console.log(experience.shader)
    }
    projectSnapshot.shader = this.getShaderSnapshot(experience.shader)
    projectSnapshot.channels = this.getChannelSnapshot(experience.channels)
    const thumbnail = experience.screen.captureImage('image/jpeg', 0.05)
    console.log("input id: ",id);
    
    const actualId = experience.projectList.updateOrAddProject(id, name, thumbnail)
    projectSnapshot.id = actualId
    experience.projectList.setCurrentProject(actualId)

    console.log("projectList after save",experience.projectList);
    

    if (debug) {
      console.log("snapshot:", projectSnapshot)
    }

    localStorage.setItem("project" + projectSnapshot.id, JSON.stringify(projectSnapshot))
    localStorage.setItem("lastProject", id)
    this.saveProjectList(experience.projectList)
  }

  /**
   * @param {ProjectList} projectList
   */
  static saveProjectList(projectList) {
    localStorage.setItem("projects", JSON.stringify(projectList.getSnapshot()))
  }

    /**
   * @param {Experience} experience
   */
  static newProject(experience)
  {
    experience.setShader(eShaders.mandle)
    experience.projectList.setDefaultProject()
    experience.controls.setProject()
  }

  // ============================================================
  // LOAD OPERATIONS
  // ============================================================

  /**
   * @param {int} id
   * @param {Experience} experience
   */
  static loadProject(id, experience) {
    const projectSnapshot = JSON.parse(localStorage.getItem("project"+id))

    if (debug) {
      console.log("loaded snapshot:", projectSnapshot)
    }
    if (projectSnapshot) {

      console.log(projectSnapshot);

      experience.projectList.setCurrentProject(projectSnapshot.id)

      console.log(experience.projectList.currentProject);
      
      this.setShaderFromSnapshot(experience, projectSnapshot.shader)
      this.setChannelsFromSnapshot(experience, projectSnapshot.channels)

      
      experience.controls.setProject()
    }
  }

  /**
   * @param {Experience} experience
   */
  static loadProjectList(experience) {
    experience.projectList.clear()
    if (localStorage.projects){
      const projectList = JSON.parse(localStorage.projects)
      let i = 1
      console.log(projectList);
      
      projectList.forEach(projectSnapshot => {
        const id = projectSnapshot.id ? projectSnapshot.id : i
        experience.projectList.addProject(new Project(id, projectSnapshot.name, projectSnapshot.image, projectSnapshot.lastModified))
        i++
      })
    }
  }

  /**
   * @param {Experience} experience
   */
  static loadLastProject(experience) {
    // this.deleteAllStorage()
    const id = localStorage.getItem("lastProject")
    if (id) {
      this.loadProject(id, experience)
    }
  }

  // ============================================================
  // DELETE OPERATIONS
  // ============================================================

  /**
   * @param {int} id
   */
  static deleteProject(id) {
    localStorage.removeItem("project"+id)
  }

  static deleteAllStorage() {
    localStorage.clear()
  }

  // ============================================================
  // SNAPSHOT GETTERS
  // ============================================================

  /**
   * @param {Shader} shader
   * @returns {Object}
   */
  static getShaderSnapshot(shader) {
    const shaderSnapshot = shader.getSnapshot()
    return shaderSnapshot
  }

  /**
   * @param {Channel[]} channels
   * @returns {Object[]}
   */
  static getChannelSnapshot(channels) {
    const channelSnapshot = []

    for (const channel of channels) {
      channelSnapshot.push({
        duration: channel.duration,
        ease: channel.ease,
        on: channel.on
      })
    }

    return channelSnapshot
  }

  // ============================================================
  // SNAPSHOT SETTERS
  // ============================================================

  /**
   * @param {Experience} experience
   * @param {Object} shaderSnapshot
   */
  static setShaderFromSnapshot(experience, shaderSnapshot) {
    experience.setShader(shaderSnapshot.eShader)
    const shader = experience.shader
    shader.paletteIndex = shaderSnapshot.paletteIndex

    shader.setFromSnapshot(shaderSnapshot)
    shader.setInputs()
  }

  /**
   * @param {Experience} experience
   * @param {Object[]} channelsSnapshot
   */
  static setChannelsFromSnapshot(experience, channelsSnapshot) {
    if (!channelsSnapshot) return
    if (debug) {
      console.log(channelsSnapshot)
    }

    for (let i = 0; i < channelsSnapshot.length; i++) {
      const channelSnap = channelsSnapshot[i]
      const channel = experience.channels[i]
      if (channel && channelSnap) {
        channel.duration = channelSnap.duration
        channel.ease = channelSnap.ease
        channel.on = false
        if (debug) {
          console.log("setting ", i, channel, channelSnap)
        }
      }
    }
    
    experience.controls.setAllTimelines()

    if (debug) {
      console.log(experience.channels[0])
    }
  }

  // ============================================================
  // EXPORT/IMPORT OPERATIONS
  // ============================================================

  /**
   * Export project as JSON file download
   * @param {string} name
   * @param {Experience} experience
   */
  static exportProject(name, experience) {
    const projectSnapshot = {
      name: name,
      shader: this.getShaderSnapshot(experience.shader),
      channels: this.getChannelSnapshot(experience.channels)
    }

    const json = JSON.stringify(projectSnapshot, null, 2)
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = `${name}.json`
    a.click()

    URL.revokeObjectURL(url)
  }

  /**
   * Import project from JSON file
   * @param {File} file
   * @param {Experience} experience
   * @returns {Promise<void>}
   */
  static async importProject(file, experience) {
    const text = await file.text()
    const projectSnapshot = JSON.parse(text)

    if (debug) {
      console.log("imported snapshot:", projectSnapshot)
    }

    if (projectSnapshot) {
      this.setShaderFromSnapshot(experience, projectSnapshot.shader)
      this.setChannelsFromSnapshot(experience, projectSnapshot.channels)

      const name = projectSnapshot.name || file.name.replace('.json', '')
      experience.projectList.setDefaultProject()
      experience.projectList.currentProjectName = name
      experience.controls.setProject()
    }
  }
}
