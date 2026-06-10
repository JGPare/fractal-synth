import Experience from "../Experience.js"
import Project from "../Project.js"
import ProjectList from "../ProjectList.js"
import Shader from "../Shaders/Shader.js"
import { eShaders } from "../Common/eNums.js"
import { Output, Mp4OutputFormat, BufferTarget, StreamTarget, EncodedVideoPacketSource, EncodedPacket } from 'mediabunny'

const debug = false

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
    projectSnapshot.timeline = experience.animation.getSnapshot()
    const thumbnail = experience.screen.captureImage('image/jpeg', 0.05)
    const actualId = experience.projectList.updateOrAddProject(id, name, thumbnail)
    projectSnapshot.id = actualId
    experience.projectList.setCurrentProject(actualId)

    if (debug) {
      console.log("snapshot:", projectSnapshot)
    }

    localStorage.setItem("project" + projectSnapshot.id, JSON.stringify(projectSnapshot))
    localStorage.setItem("lastProject", actualId)
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
    experience.updateFromShader()
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

      experience.projectList.setCurrentProject(projectSnapshot.id)

      this.setShaderFromSnapshot(experience, projectSnapshot.shader)
      // Old project formats have no timeline - setFromSnapshot clears it
      experience.animation.setFromSnapshot(projectSnapshot.timeline)

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
    experience.updateFromShader()
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
      timeline: experience.animation.getSnapshot()
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
      experience.animation.setFromSnapshot(projectSnapshot.timeline)

      const name = projectSnapshot.name || file.name.replace('.json', '')
      experience.projectList.setDefaultProject()
      experience.projectList.currentProjectName = name
      experience.controls.setProject()
    }
  }

  // ============================================================
  // IMAGE / VIDEO EXPORT
  // ============================================================

  /**
   * Export the current canvas as a PNG download
   * @param {string} name
   * @param {Experience} experience
   */
  static async exportImage(name, experience) {
    const blob = await experience.screen.captureBlob('image/png', 1.0)
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${name}.png`
    a.click()
    URL.revokeObjectURL(url)
  }

  /**
   * Export animation as MP4 video using WebCodecs + mp4-muxer
   * Renders exactly one timeline cycle (two passes for ping-pong) so
   * the resulting video loops seamlessly
   * @param {string} name
   * @param {Experience} experience
   * @param {number} fps
   * @param {function} onProgress - callback(0..1)
   * @param {AbortSignal} signal - for cancellation
   */
  static async exportVideo(name, experience, fps = 30, onProgress, signal) {
    const animation = experience.animation
    const canvas = experience.canvas

    // Save current playback state
    const savedState = {
      playhead: animation.playhead,
      playing: animation.playing,
      direction: animation.direction
    }
    animation.pause()

    const duration = animation.duration
    const cycleDuration = animation.mode === 'pingpong' ? duration * 2 : duration
    const totalFrames = Math.round(cycleDuration * fps)

    const resolutions = {
      '720p':  { width: 1280, height: 720 },
      '1080p': { width: 1920, height: 1080 },
      '1440p': { width: 2560, height: 1440 },
      '4k':    { width: 3840, height: 2160 },
    }
    const res = resolutions[experience.settings.exportResolution]
    const width = res ? res.width : canvas.width
    const height = res ? res.height : canvas.height

    experience.renderer.instance.setSize(width, height)
    experience.renderer.instance.setPixelRatio(1)
    experience.screen.shaderUniforms.uAspect.value = width / height

    // Use File System Access API to stream to disk when available, fall back to in-memory buffer
    let fileHandle = null
    let writableStream = null
    let target
    if (typeof showSaveFilePicker === 'function') {
      fileHandle = await showSaveFilePicker({
        suggestedName: `${name}.mp4`,
        types: [{ description: 'MP4 Video', accept: { 'video/mp4': ['.mp4'] } }]
      })
      writableStream = await fileHandle.createWritable()
      target = new StreamTarget(writableStream, { chunked: true })
    } else {
      target = new BufferTarget()
    }
    const output = new Output({
      format: new Mp4OutputFormat({ fastStart: fileHandle ? 'fragmented' : 'in-memory' }),
      target
    })
    const videoSource = new EncodedVideoPacketSource('avc')
    output.addVideoTrack(videoSource, { frameRate: fps })
    await output.start()

    let encoderError = null
    const encoder = new VideoEncoder({
      output: (chunk, meta) => videoSource.add(EncodedPacket.fromEncodedChunk(chunk), meta),
      error: (e) => { encoderError = e }
    })

    // Choose AVC level based on coded area (width rounded up to multiple of 16)
    const codedArea = (Math.ceil(width / 16) * 16) * (Math.ceil(height / 16) * 16)
    let avcLevel = '42001f' // 3.1 – up to 921,600
    if (codedArea > 921_600) avcLevel = '420028'   // 4.0 – up to 2,097,152
    if (codedArea > 2_097_152) avcLevel = '42002a'  // 4.2 – up to 2,228,224
    if (codedArea > 2_228_224) avcLevel = '420032'  // 5.0 – up to 5,652,480
    if (codedArea > 5_652_480) avcLevel = '420033'  // 5.1 – up to 9,437,184
    if (codedArea > 9_437_184) avcLevel = '420034'  // 5.2 – up to 9,437,184 (higher bitrate)

    // Scale bitrate with pixel count (~4 bits per pixel per frame)
    const bitrate = Math.max(5_000_000, width * height * fps * 4)

    encoder.configure({
      codec: `avc1.${avcLevel}`,
      width,
      height,
      bitrate,
      framerate: fps
    })

    try {
      for (let i = 0; i < totalFrames; i++) {
        if (signal && signal.aborted) throw new DOMException('Export cancelled', 'AbortError')
        if (encoderError) throw encoderError

        const time = i / fps

        // Seek the timeline; the second half of a ping-pong cycle plays back in reverse
        const playhead = (animation.mode === 'pingpong' && time > duration)
          ? 2 * duration - time
          : time % (duration + 1e-9)
        animation.setTime(playhead)

        // Render the frame
        experience.renderer.update()

        const frame = new VideoFrame(canvas, {
          timestamp: i * (1_000_000 / fps),
          duration: 1_000_000 / fps
        })

        const keyFrame = i % (fps * 2) === 0
        encoder.encode(frame, { keyFrame })
        frame.close()

        if (onProgress) onProgress(i / totalFrames)

        // Wait for encoder queue to drain to avoid backpressure stalls on large frames
        while (encoder.encodeQueueSize > 5) {
          await new Promise(r => setTimeout(r, 10))
        }

        // Yield to the browser to keep UI responsive
        if (i % 5 === 0) await new Promise(r => setTimeout(r, 0))
      }

      await encoder.flush()
      await output.finalize()

      if (writableStream) {
        await writableStream.close()
      } else {
        const blob = new Blob([target.buffer], { type: 'video/mp4' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${name}.mp4`
        a.click()
        URL.revokeObjectURL(url)
      }

      if (onProgress) onProgress(1)
    } finally {
      // Restore renderer size
      experience.renderer.instance.setSize(experience.sizes.width, experience.sizes.height)
      experience.renderer.instance.setPixelRatio(experience.sizes.pixelRatio)
      experience.screen.shaderUniforms.uAspect.value = experience.sizes.aspect

      // Restore playback state
      animation.playhead = savedState.playhead
      animation.direction = savedState.direction
      animation.apply()
      animation.trigger('timeChanged', [animation.playhead])
      if (savedState.playing) animation.play()

      if (encoder.state !== 'closed') encoder.close()
    }
  }
}
