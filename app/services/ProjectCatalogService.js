var axios = require('axios');

class ProjectCatalogService{

  construct(){

  }

  getProject(projectName) {
    return axios.get('http://localhost:5000/project/'+projectName);
  }

}
