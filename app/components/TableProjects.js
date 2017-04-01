let React = require('react');

var TablePojects = React.createClass({

  render: function() {

    var lines = this.props.projects.map(function(project, key) {
      return (<tr key={key} >
                  <td className="mdl-data-table__cell--non-numeric">{project.name}</td>
                  <td>{project.lang}</td>
                  <td>{project.framework}</td>
              </tr>)
    });

    return (
        <div>
            <hr/>
            <h4>Projetos</h4>
            <table className="mdl-data-table mdl-js-data-table">
              <thead>
                <tr>
                  <th className="mdl-data-table__header--sorted-ascending ">Project Name</th>
                  <th>Project Language</th>
                  <th>Project Framework</th>
                </tr>
              </thead>
              <tbody>
              {lines}
              </tbody>
            </table>
        </div>
    )

  }

});

module.exports = TablePojects;
