var data =
  [
    {
      "text": "Home",
      "url": "index.html"
    },
    {
      "text": "About",
      "url": "about.html"
    },
  ]
var List = React.createClass({
    render: function() {
      return (
        <div>
          <ul>
            {this.props.list.map( data =>
               <li><a href={data.url}>{data.text}</a></li>
            )}
        </ul>
      </div>
      )
    }
  });
var App = React.createClass({
  render() {
    return (
      // call the List function and pass a data array
        <List list={data} />
    )
  }
});


ReactDOM.render(
  <App/>, 
  document.getElementById('container')
);
