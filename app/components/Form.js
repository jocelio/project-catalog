let React = require('react');
let TablePojects = require('./TableProjects');


var Form = React.createClass({

  handleSubmit: function(e) {

      e.preventDefault();

      this.props.getAxios().post('/projects/', {
          'proj-name': this.refs.projname.value,
          'name':  this.refs.projname.value,
          'framework': this.refs.projfw.value,
          'lang': this.refs.projlang.value,
        }).then(function(res){
          this.props.updateList(res.data);
        }.bind(this)).catch(function(res){
          console.log(res);
        });

        this.sendThru();
  },
  sendThru() {
    this.refs.projfw.value='';
    this.refs.projlang.value='';
    this.refs.projname.value ='';
  },
  render: function() {
    return (<form method="post" action="addproject" onSubmit={this.handleSubmit}>
                <div className="mdl-textfield mdl-js-textfield">
                    <input className="mdl-textfield__input" type="text" id="projname" ref="projname"/>
                    <label className="mdl-textfield__label" >Project Name</label>
                </div>
                <div className="mdl-textfield mdl-js-textfield">
                    <input className="mdl-textfield__input" type="text" id="projlang" ref="projlang"/>
                    <label className="mdl-textfield__label" >Language</label>
                </div>
                <div className="mdl-textfield mdl-js-textfield">
                    <input className="mdl-textfield__input" type="text" id="projfw" ref="projfw"/>
                    <label className="mdl-textfield__label" >Framework</label>
                </div>
                <br/>
                <input type="submit" className="mdl-button mdl-js-button mdl-button--raised"/>
           </form>);
  },


});

module.exports = Form;
