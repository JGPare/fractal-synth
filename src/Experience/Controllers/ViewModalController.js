import BaseController from './BaseController'

/**
 * ViewModalController - Manages modal visibility and view states
 * Handles fullscreen toggle, settings modal, loader modal, and escape key handling
 */
export default class ViewModalController extends BaseController {
  constructor() {
    super()
    this.getElements()
    this.linkExpandButton()
    this.linkLoaderClose()
    this.linkSettings()
  }

  getElements() {
    this.loaderElement = document.getElementById('loader')
    this.loaderCloseBtn = document.getElementById('loader-close-btn')
    this.viewerElement = document.getElementById('viewer')
    this.mainGrid = document.getElementById('main-grid')
    this.menuBar = document.getElementById('menu-bar')
    this.centerGrid = document.getElementById('center-grid')
    this.expandBtn = document.getElementById('fullscreen-btn')
    this.settingsBtn = document.getElementById('settings-btn')
    this.settingsElement = document.getElementById('settings')
    this.settingsCloseBtn = document.getElementById('settings-close-btn')
  }

  linkExpandButton() {
    this.expandBtn.addEventListener('click', () => {
      const isExpanded = this.mainGrid.classList.contains('expanded')

      if (isExpanded) {
        this.mainGrid.classList.remove('expanded')
        this.menuBar.hidden = false
        setTimeout(() => {
          this.centerGrid.classList.remove('expanded')
        }, 400)
      } else {
        this.mainGrid.classList.add('expanded')
        this.menuBar.hidden = true
        this.centerGrid.classList.add('expanded')
      }
    })

    document.addEventListener('mousemove', (e) => {
      if (!this.mainGrid.classList.contains('expanded')) return

      const cornerSize = 100
      const inCorner = (window.innerWidth - e.clientX < cornerSize) && (window.innerHeight - e.clientY < cornerSize)

      this.expandBtn.classList.toggle('visible', inCorner)
    })
  }

  linkLoaderClose() {
    this.loaderCloseBtn.addEventListener('click', () => {
      this.closeLoadView()
    })

    this.loaderElement.addEventListener('click', (e) => {
      if (e.target === this.loaderElement) {
        this.closeLoadView()
      }
    })
  }

  linkSettings() {
    this.settingsBtn.addEventListener('click', () => {
      this.openSettingsView()
    })

    this.settingsCloseBtn.addEventListener('click', () => {
      this.closeSettingsView()
    })

    this.settingsElement.addEventListener('click', (e) => {
      if (e.target === this.settingsElement) {
        this.closeSettingsView()
      }
    })

    const zoomSpeedSlider = document.getElementById('scroll-zoom-speed')
    const zoomSpeedValue = document.getElementById('scroll-zoom-speed-value')
    zoomSpeedSlider.addEventListener('input', () => {
      zoomSpeedValue.textContent = zoomSpeedSlider.value + '%'
      this.experience.settings.scrollZoomSpeed = zoomSpeedSlider.value / 100
    })

    const exportFpsSlider = document.getElementById('export-fps')
    const exportFpsValue = document.getElementById('export-fps-value')
    exportFpsSlider.addEventListener('input', () => {
      exportFpsValue.textContent = exportFpsSlider.value
      this.experience.settings.exportFps = parseInt(exportFpsSlider.value)
    })

    const exportResSelect = document.getElementById('export-resolution')
    exportResSelect.addEventListener('change', () => {
      this.experience.settings.exportResolution = exportResSelect.value
    })
  }

  /**
   * Set up escape key handler - needs reference to videoExport controller
   * @param {VideoExportController} videoExportController
   */
  setupEscapeHandler(videoExportController) {
    this.videoExportController = videoExportController

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.loaderElement.hidden) {
        this.closeLoadView()
      }
      if (e.key === 'Escape' && !this.settingsElement.hidden) {
        this.closeSettingsView()
      }
      if (e.key === 'Escape' && this.videoExportController) {
        this.videoExportController.cancelVideoExport()
      }
    })
  }

  openSettingsView() {
    this.viewerElement.hidden = true
    this.settingsElement.hidden = false
    this.canvas.hidden = true
  }

  closeSettingsView() {
    this.viewerElement.hidden = false
    this.settingsElement.hidden = true
    this.canvas.hidden = false
  }

  openLoadView() {
    this.viewerElement.hidden = true
    this.loaderElement.hidden = false
    this.canvas.hidden = true
    this.trigger('loadViewOpened')
  }

  closeLoadView() {
    this.viewerElement.hidden = false
    this.loaderElement.hidden = true
    this.canvas.hidden = false
  }
}
