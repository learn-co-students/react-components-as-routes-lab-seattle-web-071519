import React from 'react';
import { actors } from '../data';

const Actors = () => {
  console.log(actors)
  function displayActors() {
    return actors.map(actor => {
      return (<div>
        <h3>{actor.name}</h3>
        <p>Movies:</p>
        <ul>
          {actor.movies.map(movie => {
            return <li>{movie}</li>
          })}
        </ul>
      </div>)
    })
  }
  return (
    <div>
      <h1>Actors Page</h1>
      {displayActors()}
    </div>
  );
};

export default Actors;
