import Project from "./Project"

export default class ProjectList {
  // ============================================================
  // INITIALIZATION
  // ============================================================

  /**
   * @param {Project[]} projects
   */
  constructor(projects = []) {
    this.projects = projects
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

  /**
   * @param {string} name
   * @param {string} thumbnail
   */
  updateOrAddProject(name, thumbnail) {
    let found = false
    this.projects.forEach(project => {
      if (project.name == name) {
        project.updateModified()
        project.setImage(thumbnail)
        found = true
      }
    })
    if (!found) {
      this.projects.push(new Project(name, thumbnail))
    }
  }

  /**
   * @param {string} name
   */
  deleteProject(name) {
    for (let i = 0; i < this.projects.length; i++) {
      const project = this.projects[i]
      if (name == project.name) {
        this.projects.splice(i, 1)
        break
      }
    }
  }

  clear() {
    this.projects = []
  }
}
