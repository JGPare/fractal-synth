import Project from "./Project"

export default class ProjectList {
      /**
       * 
       * @param {[Project]} projects 
       */
      constructor(projects = []) {
        this.projects = projects
      }

      addProject(project) 
      {
        this.projects.push(project)
      }

      updateOrAddProject(name, thumbnail)
      {
        let found = false
        this.projects.forEach(project => {
          if (project.name == name){
            project.updateModified()
            project.setImage(thumbnail)
            found = true
          }
        })
        if (!found){
          this.projects.push(new Project(name, thumbnail))
        }
      }

      deleteProject(name) {
        for (let i = 0; i < this.projects.length; i++) {
          const project = this.projects[i]
          if (name == project.name) {
            this.projects.pop(i)
            break;
          }
        }
      }

      clear() 
      {
        this.projects = []
      }

      getSnapshot()
      {
        const snapshot = []
        this.projects.forEach(project => {
          snapshot.push(project.getSnapshot())
        })
        return snapshot
      }
    }