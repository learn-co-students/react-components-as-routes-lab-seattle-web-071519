import React from 'react';
import { movies } from '../data';

const Movies = () => {
  // console.log(movies)
  function displayMovies() {
    return movies.map(movie => {
      return (
        <div>
          <h3>{movie.title}</h3>
          <p>Run Time: {movie.time} minutes</p>
          <p>Genres:</p>
          <ul>
            {movie.genres.map(genre => {
              return <li>{genre}</li>
            })}
          </ul>
        </div>
        )

    })
  }
  return (
    <div>
        <h1>Movies Page</h1>
        {displayMovies()}
    </div>
  );
};

export default Movies;
