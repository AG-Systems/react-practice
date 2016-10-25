var App = React.createClass({
    getInitialState: function() {
    return {
      text: ""
    };
  },
  overflowAlert: function() {
if (this.remainingCharacters() < 0) {
  var beforeOverflowText = this.state.text.substring(35 - 10, 35);
  var overflowText = this.state.text.substring(35);
  }
},

  remainingCharacters: function() 
  {
      return 35 - this.state.text.length;
  },
  handleChange: function(event) 
  {
     this.setState({ text: event.target.value });
     console.log(event.target.value);
  },
  render: function() 
  {
    let userMessage;
    const divStyle = {
      fontSize: 80,
      };
    if (this.state.text.length > 35) {
      userMessage =( 
          <textarea style={divStyle} className="form-control" onChange={this.handleChange}></textarea>
      ) 
    }
    else
    {
      userMessage = (
        <textarea className="form-control" onChange={this.handleChange}></textarea> 
      )
    }
    return (
      <div className="well clearfix">
      
        { userMessage }
        <br/>
        <span>{35 - this.state.text.length}</span>
        <button className="btn btn-primary pull-right" disabled={this.state.text.length === 0}>Tweet</button>
      </div>
      )
  }
});


ReactDOM.render(
  <App/>, 
  document.getElementById('container')
);
