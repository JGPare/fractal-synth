import Project from "./Project"

const defaultProjectName = "NewProject"
const defaultProjectID = 0

export default class ProjectList {
  // ============================================================
  // INITIALIZATION
  // ============================================================

  /**
   * @param {Project[]} projects
   */
  constructor(projects = []) {
    this.projects = projects
    this.currentProject = null
    this.currentProjectName = defaultProjectName
    this.currentProjectID = defaultProjectID
  }

  // ============================================================
  // SNAPSHOT
  // ============================================================

  /**
   * @returns {Object[]}
   */
  getSnapshot() {
    const snapshot = []
    this.projects.forEach(project => {
      snapshot.push(project.getSnapshot())
    })
    return snapshot
  }

  // ============================================================
  // PROJECT MANAGEMENT
  // ============================================================

  /**
   * @param {Project} project
   */
  addProject(project) {
    this.projects.push(project)
  }

  setCurrentProject(id) {
    
    this.projects.forEach(project => {
      if (project.id == id) {
        this.currentProject = project
        this.currentProjectName = project.name
        this.currentProjectID = project.id
      }
    })
  }

  /**
   * @param {int} id
   * @param {string} name
   * @param {string} thumbnail
   */
  updateOrAddProject(id, name, thumbnail) {
    let found = false
    let projectID = 0
    this.projects.forEach(project => {
      if (project.id == id) {
        project.name = name
        project.updateModified()
        project.setImage(thumbnail)
        found = true
        projectID = project.id
      }
      else if (!found) {
        projectID = Math.max(projectID, project.id)
      }
    })
    if (!found) {
      projectID += 1
      this.projects.push(new Project(projectID, name, thumbnail))
    }
    return projectID
  }

  /**
   * @param {int} id
   */
  deleteProject(id) {
    for (let i = 0; i < this.projects.length; i++) {
      const project = this.projects[i]
      if (id == project.id) {
        this.projects.splice(i, 1)
        break
      }
    }
    this.setDefaultProject()
  }

  setDefaultProject() {
    this.currentProjectName = defaultProjectName
    this.currentProjectID = defaultProjectID
  }

  clear() {
    this.projects = []
  }
}
