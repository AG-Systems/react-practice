var List = React.createClass({
    render: function() {
      return (
        <ul>
          {this.props.list.map( post =>
            <li>
              <h1> {post.title} </h1>
              <p> {post.body} </p>
            </li>
          )}
        </ul>
      )
    }
  });
var Playlist = React.createClass({
  render() {
    let post = {
          "posts": [
            {
              "title": "Hello ",
              "body": "My name is "
            },
            {
              "title": "send me pics",
              "body": "please"
            }
          ]
        }
    return (
        <List list={post.posts} />
    )
  }
});

ReactDOM.render(
  <Playlist/>, 
  document.getElementById('container')
);
