var React = require('react');
var CatalogService = require('../services/ProjectCatalogService');


class Form extends React.Component {

  handleSubmit(e) {
      e.preventDefault();

      CatalogService.addProject(this.refs.projname.value).then(function(response) {

      }.bind(this));
  }

  render() {
    return (<form method="post" action="addproject" onSubmit={this.handleSubmit}>
                <div className="mdl-textfield mdl-js-textfield">
                    <input className="mdl-textfield__input" type="text" id="" red="projname"/>
                    <label className="mdl-textfield__label" >Project Name</label>
                </div>
                <br/><br/>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                    Send
                </button>
           </form>);
  };
}

module.exports = Form;
