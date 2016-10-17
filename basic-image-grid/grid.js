var List = React.createClass({
    render: function() {
      return (
        <ul>
          {this.props.list.map( image =>
            <li>
              <img {...image} />
            </li>
          )}
        </ul>
      )
    }
  });
  
var Playlist = React.createClass({
  render() {
    let playlistImages = {
          "images": [
            {
              "src": "http://placehold.it/350x150",
              "className": "playlist-tn"
            },
            {
              "src": "http://placehold.it/350x150",
              "className": "playlist-tn"
            },
            {
              "src": "http://placehold.it/350x150",
              "className": "playlist-tn"
            }
          ]
        }
    return (
        <List list={playlistImages.images} />
    )
  }
});

ReactDOM.render(
  <Playlist />,
  document.getElementById('container')
);
