var App = React.createClass({
    render: function() {
        var names = ['video1', 'video2', 'video3'];
        return (
            <ul>
                {names.map(function(name, index){
                    return <li key={ index }>{name}</li>;
                  })}
            </ul>
        )
    }
});


ReactDOM.render(
  <App/>, 
  document.getElementById('container')
);
