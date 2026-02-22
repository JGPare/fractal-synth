import BaseController from './BaseController'
import ProjectRepo from '../Repo/ProjectRepo'
import URLShare from '../Repo/URLShare'

/**
 * ProjectController - Manages project operations and file I/O
 * Handles project name, mode selection, save/load/import/export operations
 */
export default class ProjectController extends BaseController {
  constructor() {
    super()
    this.getElements()
    this.linkProjectInfo()
    this.linkMenuBar()
  }

  getElements() {
    this.projectNameElem = document.getElementById('project-name')
    this.modeSelect = document.getElementById('mode-select')
    this.loaderElement = document.getElementById('loader')

    // Menu bar items
    this.menuSave = document.getElementById('menu-save')
    this.menuNew = document.getElementById('menu-new')
    this.menuCopy = document.getElementById('menu-copy')
    this.menuLoad = document.getElementById('menu-load')
    this.menuDelete = document.getElementById('menu-delete')
    this.menuImport = document.getElementById('menu-import')
    this.menuExport = document.getElementById('menu-export')
    this.menuShare = document.getElementById('menu-share')
    this.menuResetShader = document.getElementById('menu-reset-shader')
    this.menuClearAnimations = document.getElementById('menu-clear-animations')
  }

  linkProjectInfo() {
    this.projectNameElem.addEventListener('change', (event) => {
      const project = this.projectList.currentProject
      if (project) {
        project.name = this.projectNameElem.value
        this.projectList.currentProjectName = project.name
        project.updateModified()
        ProjectRepo.saveProjectList(this.projectList)
      }
    })

    this.modeSelect.addEventListener('change', (event) => {
      const modeIndex = event.target.selectedIndex
      this.trigger('modeChanged', [modeIndex])
    })
  }

  linkMenuBar() {
    this.menuSave.addEventListener('click', () => {
      ProjectRepo.saveProject(this.projectList.currentProjectID, this.projectList.currentProjectName, this.experience)
    })

    this.menuNew.addEventListener('click', () => {
      ProjectRepo.newProject(this.experience)
    })

    this.menuCopy.addEventListener('click', () => {
      this.projectList.currentProjectID = 0
      this.projectList.currentProjectName = this.projectList.currentProjectName + '_' + 'copy'
      this.projectNameElem.value = this.projectList.currentProjectName
      ProjectRepo.saveProject(this.projectList.currentProjectID, this.projectList.currentProjectName, this.experience)
    })

    this.menuLoad.addEventListener('click', () => {
      this.trigger('loadRequested')
    })

    this.menuDelete.addEventListener('click', () => {
      ProjectRepo.deleteProject(this.projectList.currentProjectID)
      this.projectList.deleteProject(this.projectList.currentProjectID)
      ProjectRepo.saveProjectList(this.projectList)
      ProjectRepo.newProject(this.experience)
    })

    this.menuResetShader.addEventListener('click', () => {
      this.trigger('resetShaderRequested')
    })

    this.menuClearAnimations.addEventListener('click', () => {
      this.trigger('clearAnimationsRequested')
    })

    this.menuExport.addEventListener('click', () => {
      ProjectRepo.exportProject(this.projectList.currentProjectName, this.experience)
    })

    this.menuShare.addEventListener('click', async () => {
      URLShare.encode(this.experience)
      await URLShare.copyShareURL()
      const orig = this.menuShare.textContent
      this.menuShare.textContent = 'Copied!'
      setTimeout(() => { this.menuShare.textContent = orig }, 1500)
    })

    this.menuImport.addEventListener('click', () => {
      const input = document.createElement('input')
      input.type = 'file'
      input.accept = '.json'
      input.onchange = async (e) => {
        const file = e.target.files[0]
        if (file) {
          await ProjectRepo.importProject(file, this.experience)
        }
      }
      input.click()
    })
  }

  /**
   * Set project name in UI
   */
  setProject() {
    this.projectNameElem.value = this.projectList.currentProjectName
  }

  /**
   * Set mode select from index
   * @param {number} modeIndex - Mode index to set
   */
  setModeFromIndex(modeIndex) {
    const modeSelect = this.modeSelect
    const modeOption = modeSelect.options[modeIndex]
    modeSelect.value = modeOption.value
  }

  /**
   * Create project cards for loader view
   */
  createProjectCards() {
    const projectList = this.experience.projectList

    const modal = this.loaderElement.querySelector('.modal')
    const existingContainer = modal.querySelector('.projects-container')
    if (existingContainer) {
      existingContainer.innerHTML = ""
    }
    const projectsContainer = existingContainer || document.createElement('div')
    projectsContainer.className = "projects-container"
    if (!existingContainer) {
      modal.appendChild(projectsContainer)
    }

    if (projectList && projectList.projects) {
      projectList.projects.forEach(project => {
        projectsContainer.appendChild(this.createProjectCard(project))
      })
    }
  }

  /**
   * Create a single project card
   * @param {Object} project - Project data
   * @returns {HTMLElement} Project card element
   */
  createProjectCard(project) {
    const card = document.createElement('div')
    card.className = 'project-card'

    const img = document.createElement('img')
    img.className = 'project-image'
    img.src = project.image || null
    img.alt = project.name

    const name = document.createElement('div')
    name.className = 'project-name'
    name.textContent = project.name

    card.appendChild(img)
    card.appendChild(name)

    card.addEventListener('click', () => {
      ProjectRepo.loadProject(project.id, this.experience)
      this.trigger('projectLoaded')
    })

    return card
  }
}
