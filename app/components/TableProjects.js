let React = require('react');

var TablePojects = React.createClass({

  render: function() {

    var lis = this.props.projects.map(function(pro, key) {
      return (<li key={key}> {pro['name']} </li>)
    });

    return (
        <div>
            <hr/>
            <h4>Projetos</h4>
            <ul> {lis} </ul>
        </div>
    )

  }

});

module.exports = TablePojects;
