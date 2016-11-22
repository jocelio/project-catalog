let React = require('react');
let TablePojects = require('./TableProjects');


var Form = React.createClass({

  handleSubmit: function(e) {

      e.preventDefault();

      this.props.getAxios().post('/projects/', {
          'proj-name': this.refs.projname.value,
          'name':  this.refs.name.value,
          'framework': "Pedestal/React",
          'lang': "Clojure and js"
        }).then(function(res){
          this.props.updateList(res.data);
        }.bind(this)).catch(function(res){
          console.log(res);
        });

        this.sendThru();
  },
  sendThru() {
    this.refs.projname.value='';
    this.refs.name.value ='';
  },
  render: function() {
    return (<form method="post" action="addproject" onSubmit={this.handleSubmit}>
                <div className="mdl-textfield mdl-js-textfield">
                    <input className="mdl-textfield__input" type="text" id="name" ref="name"/>
                    <label className="mdl-textfield__label" >Name</label>
                </div>
                <div className="mdl-textfield mdl-js-textfield">
                    <input className="mdl-textfield__input" type="text" id="projname" ref="projname"/>
                    <label className="mdl-textfield__label" >Project Name</label>
                </div>
                <br/>
                <input type="submit" className="mdl-button mdl-js-button mdl-button--raised"/>
           </form>);
  },


});

module.exports = Form;
