import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const renderDirectors = () => {
    return directors.map(dir => {
      return (
        <div key={dir.name}>
          <p>{dir.name}</p>
          <ul>
            {renderMovies(dir.movies)}
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
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
