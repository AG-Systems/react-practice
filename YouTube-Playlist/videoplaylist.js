{/*
* {margin: 0; padding: 0;}

div {
  margin: 20px;
}

ul {
  list-style-type: none;
  width: 500px;
}

h3 {
  font: bold 20px/1.5 Helvetica, Verdana, sans-serif;
}

li img {
  float: left;
  margin: 0 15px 0 0;
}

li p {
  font: 200 12px/1.5 Georgia, Times New Roman, serif;
  display: inline;
}

li {
  padding: 10px;
  overflow: auto;
}

li:hover {
  background: #eee;
  cursor: pointer;
}

CSS STYLE FOR THE VIDEO

*/}
var List = React.createClass({
    render: function() {
      return (
        <ul>
          {this.props.list.map( videos =>
          <a href={videos.link}>
            <li>
            <p> {videos.id} </p>
            <img src={videos.img} />
              <h3> {videos.title} </h3>
              <p> {videos.author} </p>
            </li>
            </a>
          )}
        </ul>
      )
    }
  });

var Playlist = React.createClass({
  render() {
    var videos = {
          "video": [
            {
              "title": "E46 330ci Turbo",
              "author": "R1 Concepts ",
              "img": "http://placehold.it/150x150",
              "id": "1",
              "link": "https://www.youtube.com/watch?v=dGeYUvUp5Dc&index=487&list=WL"
            },
            {
              "title": "BMW E30 FEST 2016 ",
              "author": "Leafyishere ",
              "img": "http://placehold.it/150x150",
              "id": "2",
              "link": "https://www.youtube.com/watch?v=SyQXG6wzpCw&index=474&list=WL"
            }
          ]
        }
    return (
        <List list={videos.video} />
    )
  }
});


ReactDOM.render(
  <Playlist/>, 
  document.getElementById('container')
);
