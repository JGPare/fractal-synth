export default class ProjectList {
      constructor(elementId, projects = []) {
        this.container = document.getElementById(elementId);
        console.log(this.container);
        
        this.projects = projects;
        this.render();
      }

      render() {
        this.container.innerHTML = '';
        for (const proj of this.projects) {
          const li = document.createElement('li');

          const nameSpan = document.createElement('span');
          nameSpan.className = 'project-name';
          nameSpan.textContent = proj.name;

          const paramsSpan = document.createElement('span');
          paramsSpan.className = 'project-params';
          paramsSpan.textContent = this.formatParams(proj.parameters);

          li.appendChild(nameSpan);
          li.appendChild(paramsSpan);
          this.container.appendChild(li);
        }
      }

      formatParams(params) {
        return Object.entries(params)
          .map(([key, val]) => `${key}: ${val}`)
          .join(', ');
      }

      addProject(project) {
        this.projects.push(project);
        this.render();
      }

      clear() {
        this.projects = [];
        this.render();
      }
    }