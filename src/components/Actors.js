import { render } from 'enzyme';
import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const renderActors = () => {
    return actors.map(actor => {
      return (
        <div key={actor.name}>
          <p>{actor.name}</p>
          <ul>
            {renderMovies(actor.movies)}
          </ul>
        </div>
      )
    })
  }

  const renderMovies = movies => {
    return movies.map(movie => <li key={movie}>{movie}</li>)
  }
  
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
