import Controls from "./Controls.js"
import Experience from "./Experience.js"
import Shader from "./Shader.js"
import Timeline from "./Utils/Timeline.js"

export default class ExperienceRepo
{
  /**
 * Save experience snapshot
 * @param {Experience} experience
 */
  static saveExperience(name, experience)
  {
   const experienceSnapshot = {}

   experienceSnapshot.controls = this.getControlsSnapshot(experience.controls)
   experienceSnapshot.shader = this.getShaderSnapshot(experience.shader)
   experienceSnapshot.timeline = this.getTimelineSnapshot(experience.timeline)

   console.log("snapshot", experienceSnapshot);
   
   localStorage.setItem(name,JSON.stringify(experienceSnapshot))
  }


  static loadExperience(name, experience)
  {
    const experienceSnapshot = JSON.parse(localStorage.getItem(name))

    console.log(experienceSnapshot);
  
    this.setShader(experience.shader, experienceSnapshot.shader)
    this.setTimeline(experience.timeline, experienceSnapshot.timeline)
    this.setControls(experience.controls, experienceSnapshot.controls)
  }

  /**
   * Get controls snapshot
   * @param {Controls} controls
   */
  static getControlsSnapshot(controls)
  {
    const snapshot = {}
    
    return snapshot
  }

  /**
   * Get shader snapshot
   * @param {Shader} shader
   */
  static getShaderSnapshot(shader)
  {
    const snapshot = {}
    const uniformSnapshot = {}
    const shaderUniforms = shader.getUniforms()

    for (const [key, value] of Object.entries(shaderUniforms)) {
      uniformSnapshot[key] = value
      delete uniformSnapshot[key]._gsap
    }
    delete shaderUniforms._gsap

    snapshot.uniforms = uniformSnapshot
    return snapshot
  }

  /**
   * 
   * @param {Timeline} timeline 
   * @returns 
   */
  static getTimelineSnapshot(timeline)
  {
    return timeline.getSnapshot()
  }

  /**
   * Set controls from snapshot
   * @param {Controls} controls
   */
  static setControls(controls, controlsSnapshot)
  {
    controls.setUIfromShader()
  }

  /**
   * Set shader snapshot
   * @param {Shader} shader
   */
  static setShader(shader, shaderSnapshot)
  {
    const shaderUniforms = shader.getUniforms()
    const uniformSnapshot = shaderSnapshot.uniforms
    for (const [key, value] of Object.entries(shaderUniforms)) {
      if (uniformSnapshot[key] && key != "uPalette"){
        shaderUniforms[key] = uniformSnapshot[key]
      }
    }
  }

  /**
   * Set timeline snapshot
   * @param {Timeline} timeline 
   */
  static setTimeline(timeline, timelineSnapshot)
  {
    timeline.setFromSnapshot(timelineSnapshot)
  }
}