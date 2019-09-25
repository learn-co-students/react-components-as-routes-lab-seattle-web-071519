import React from 'react';
import { directors } from '../data';

const Directors = () => {
  // console.log(directors)
  function displayDirectors() {
    return directors.map(director => {
      return (
        <div>
          <h3>{director.name}</h3>
          <p>Movies:</p>
          <ul>
            {director.movies.map(movie => {
              return <li>{movie}</li>
            })}
          </ul>
        </div>
      )
    })
  }
  return (
    <div>
      <h1>Directors Page</h1>
      {displayDirectors()}
    </div>
  );
}

export default Directors
