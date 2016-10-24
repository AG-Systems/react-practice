return (
  <div>
    <h1>Sample data block</h1>
    {this.state.data.movies.map(function(movie, i) {
      return <h3 key={'movie-'+ i}>{movie.title}</h3>
    })}
  </div>
);
