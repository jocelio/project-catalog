var React = require('react')
var ReactDOM = require('react-dom')
var Form = require('./components/Form');
var TableProjects = require('./components/TableProjects');
let axios = require('axios');

var Tela = React.createClass({

  getInitialState: function() {
    return {
      projects: [],
    }
  },

  render: function() {
      return (<div>
        <Form getAxios={this.getAxios} updateList={this.updateList} />
        <TableProjects projects={this.state.projects} />
      </div>)
  },
  updateList: function(item){
      this.setState({projects: this.state.projects.concat([item])});
  },
  componentDidMount: function(){
    this.getAxios().get('/projects/').then(function(resp){
      this.setState({projects: resp.data});
    }.bind(this));
  },

  getAxios: function(){
      return axios.create({
        baseURL: 'http://localhost:5000/',
        timeout: 1000,
        headers: {'x-catalog-token': 'o brave new world'}
      });
  }

});

module.exports = Tela;
ReactDOM.render( <Tela />, document.querySelector('#app'));
