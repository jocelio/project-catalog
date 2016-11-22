var axios = require('axios');

class ProjectCatalogService{

  construct(){

  }

   getProjects() {
    return axios.get(`http://localhost:5000/projects/`);
  };

   getProject(projectName) {
    return axios.get(`http://localhost:5000/project/${projectName}`);
  };

   addProject(projectName) {
    return axios.post('http://localhost:5000/project/', {
        'proj-name': "React Happy",
        'name': "React Happy Project",
        'framework': "Pedestal/React",
        'lang': "Clojure and js"
      });
  };

}
