import BaseController from './BaseController'

/**
 * ViewModalController - Manages modal visibility and view states
 * Handles fullscreen toggle, settings modal, loader modal, and escape key handling
 */
export default class ViewModalController extends BaseController {
  constructor() {
    super()
    this.currentTutorialPage = 1
    this.totalTutorialPages = 2
    this.getElements()
    this.linkExpandButton()
    this.linkLoaderClose()
    this.linkSettings()
    this.linkHelpMenu()
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

    // Help menu modals
    this.menuTutorial = document.getElementById('menu-tutorial')
    this.menuHotkeys = document.getElementById('menu-hotkeys')
    this.tutorialModal = document.getElementById('tutorial-modal')
    this.tutorialCloseBtn = document.getElementById('tutorial-close-btn')
    this.hotkeysModal = document.getElementById('hotkeys-modal')
    this.hotkeysCloseBtn = document.getElementById('hotkeys-close-btn')

    // Tutorial navigation
    this.tutorialPrevBtn = document.getElementById('tutorial-prev-btn')
    this.tutorialNextBtn = document.getElementById('tutorial-next-btn')
    this.tutorialPageIndicator = document.getElementById('tutorial-page-indicator')
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
      if (e.key === 'Escape' && !this.tutorialModal.hidden) {
        this.closeTutorialModal()
      }
      if (e.key === 'Escape' && !this.hotkeysModal.hidden) {
        this.closeHotkeysModal()
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

  linkHelpMenu() {
    // Tutorial modal
    this.menuTutorial.addEventListener('click', () => {
      this.openTutorialModal()
    })

    this.tutorialCloseBtn.addEventListener('click', () => {
      this.closeTutorialModal()
    })

    this.tutorialModal.addEventListener('click', (e) => {
      if (e.target === this.tutorialModal) {
        this.closeTutorialModal()
      }
    })

    // Tutorial navigation
    this.tutorialPrevBtn.addEventListener('click', () => {
      this.goToTutorialPage(this.currentTutorialPage - 1)
    })

    this.tutorialNextBtn.addEventListener('click', () => {
      this.goToTutorialPage(this.currentTutorialPage + 1)
    })

    // Hotkeys modal
    this.menuHotkeys.addEventListener('click', () => {
      this.openHotkeysModal()
    })

    this.hotkeysCloseBtn.addEventListener('click', () => {
      this.closeHotkeysModal()
    })

    this.hotkeysModal.addEventListener('click', (e) => {
      if (e.target === this.hotkeysModal) {
        this.closeHotkeysModal()
      }
    })
  }

  openTutorialModal() {
    this.currentTutorialPage = 1
    this.goToTutorialPage(1)
    this.viewerElement.hidden = true
    this.tutorialModal.hidden = false
    this.canvas.hidden = true
  }

  closeTutorialModal() {
    this.viewerElement.hidden = false
    this.tutorialModal.hidden = true
    this.canvas.hidden = false
  }

  goToTutorialPage(pageNumber) {
    if (pageNumber < 1 || pageNumber > this.totalTutorialPages) return

    // Hide all pages
    for (let i = 1; i <= this.totalTutorialPages; i++) {
      const page = document.getElementById(`tutorial-page-${i}`)
      if (page) page.hidden = true
    }

    // Show current page
    const currentPage = document.getElementById(`tutorial-page-${pageNumber}`)
    if (currentPage) currentPage.hidden = false

    // Update state
    this.currentTutorialPage = pageNumber

    // Update navigation buttons
    this.tutorialPrevBtn.disabled = pageNumber === 1
    this.tutorialNextBtn.disabled = pageNumber === this.totalTutorialPages

    // Update page indicator
    this.tutorialPageIndicator.textContent = `Page ${pageNumber} of ${this.totalTutorialPages}`
  }

  openHotkeysModal() {
    this.viewerElement.hidden = true
    this.hotkeysModal.hidden = false
    this.canvas.hidden = true
  }

  closeHotkeysModal() {
    this.viewerElement.hidden = false
    this.hotkeysModal.hidden = true
    this.canvas.hidden = false
  }
}
