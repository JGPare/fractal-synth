import Experience from "../Experience.js"
import Project from "../Project.js"
import ProjectList from "../ProjectList.js"
import Shader from "../Shaders/Shader.js"
import Controls from "../Controls.js"
import Channel from "../Channel.js"

const debug = true

export default class ExperienceRepo {
  // ============================================================
  // SAVE OPERATIONS
  // ============================================================

  /**
   * @param {string} name
   * @param {Experience} experience
   */
  static saveProject(name, experience) {
    const projectSnapshot = {}

    projectSnapshot.name = name
    if (debug) {
      console.log(experience.shader)
    }

    projectSnapshot.shader = this.getShaderSnapshot(experience.shader)
    projectSnapshot.channels = this.getChannelSnapshot(experience.channels)
    const thumbnail = experience.screen.captureImage('image/jpeg', 0.05)

    experience.projectList.updateOrAddProject(name, thumbnail)

    if (debug) {
      console.log("snapshot:", projectSnapshot)
    }

    localStorage.setItem(name, JSON.stringify(projectSnapshot))
    localStorage.setItem("lastExperience", name)
    this.saveProjectList(experience.projectList)
  }

  /**
   * @param {ProjectList} projectList
   */
  static saveProjectList(projectList) {
    localStorage.setItem("projects", JSON.stringify(projectList.getSnapshot()))
  }

  /**
   * @param {string} name
   */
  static deleteProject(name) {
    localStorage.removeItem(name)
  }

  // ============================================================
  // LOAD OPERATIONS
  // ============================================================

  /**
   * @param {string} name
   * @param {Experience} experience
   */
  static loadProject(name, experience) {
    const projectSnapshot = JSON.parse(localStorage.getItem(name))

    if (debug) {
      console.log("loaded snapshot:", projectSnapshot)
      console.log(name)
    }
    if (projectSnapshot) {
      this.setShaderFromSnapshot(experience, projectSnapshot.shader)
      this.setChannelsFromSnapshot(experience, projectSnapshot.channels)

      experience.controls.setName(name)
      experience.controls.setShader()
    }
  }

  /**
   * @param {Experience} experience
   */
  static loadProjectList(experience) {
    experience.projectList.clear()
    const projectList = JSON.parse(localStorage.projects)
    projectList.forEach(projectSnapshot => {
      experience.projectList.addProject(new Project(projectSnapshot.name, projectSnapshot.image, projectSnapshot.lastModified))
    })
  }

  /**
   * @param {Experience} experience
   */
  static loadLastProject(experience) {
    const name = localStorage.getItem("lastExperience")
    if (name) {
      this.loadProject(name, experience)
      this.loadProjectList(experience)
      console.log(experience.projectList)
    }
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
   * @param {Controls} controls
   * @returns {Object}
   */
  static getControlsSnapshot(controls) {
    const snapshot = {
      name: controls.getName(),
      paletteIndex: controls.paletteIndex,
      initialValues: controls.initialValues,
      finalValues: controls.finalValues
    }
    return snapshot
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

    if (debug) {
      console.log(experience.channels[0])
    }
  }
}
