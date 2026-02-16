import BaseController from './BaseController'
import ProjectRepo from '../Repo/ProjectRepo'

/**
 * VideoExportController - Manages video export workflow and progress
 * Handles screenshot and video recording operations
 */
export default class VideoExportController extends BaseController {
  constructor() {
    super()
    this.initState()
    this.getElements()
    this.linkExportControls()
  }

  initState() {
    this.videoArmed = false
    this.videoExportAbortController = null
  }

  getElements() {
    this.exportImageBtn = document.getElementById('export-image-btn')
    this.armVideoBtn = document.getElementById('arm-video-btn')
    this.exportVideoDuration = document.getElementById('export-video-duration')
    this.exportVideoStatus = document.getElementById('export-video-status')
    this.cancelVideoBtn = document.getElementById('cancel-video-btn')
  }

  linkExportControls() {
    this.exportImageBtn.addEventListener('click', () => {
      ProjectRepo.exportImage(this.projectList.currentProjectName, this.experience)
    })

    this.armVideoBtn.addEventListener('click', () => {
      this.videoArmed = !this.videoArmed
      this.armVideoBtn.classList.toggle('default-button', !this.videoArmed)
      this.armVideoBtn.classList.toggle('selected-button', this.videoArmed)
      this.exportVideoStatus.textContent = this.videoArmed ? 'Armed' : ''
    })

    this.cancelVideoBtn.addEventListener('click', () => {
      this.cancelVideoExport()
    })
  }

  /**
   * Start video export process
   */
  async startVideoExport() {
    this.videoArmed = false
    this.armVideoBtn.classList.add('default-button')
    this.armVideoBtn.classList.remove('selected-button')
    this.exportVideoStatus.textContent = ''

    const duration = parseFloat(this.exportVideoDuration.value)
    if (!duration || duration <= 0) return

    this.videoExportAbortController = new AbortController()

    // Show cancel button during export
    this.cancelVideoBtn.style.display = 'inline-block'

    try {
      await ProjectRepo.exportVideo(
        this.projectList.currentProjectName,
        this.experience,
        duration,
        this.experience.settings.exportFps,
        (progress) => {
          const pct = Math.round(progress * 100)
          this.exportVideoStatus.textContent = 'Recording ' + pct + '%'
        },
        this.videoExportAbortController.signal
      )
    } catch (e) {
      if (e.name !== 'AbortError') console.error('Video export error:', e)
    }

    // Hide cancel button when export completes or is cancelled
    this.cancelVideoBtn.style.display = 'none'
    this.exportVideoStatus.textContent = ''
    this.videoExportAbortController = null
  }

  /**
   * Cancel ongoing video export
   */
  cancelVideoExport() {
    if (this.videoExportAbortController) {
      this.videoExportAbortController.abort()
      this.videoExportAbortController = null
    }
    this.cancelVideoBtn.style.display = 'none'
    this.exportVideoStatus.textContent = 'Cancelled'
    // Clear the cancelled message after a moment
    setTimeout(() => {
      this.exportVideoStatus.textContent = ''
    }, 2000)
  }

  /**
   * Check if video export is armed and ready to record
   * @returns {boolean}
   */
  isVideoArmed() {
    return this.videoArmed
  }
}
