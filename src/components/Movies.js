import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const renderMovies = () => {
    return movies.map(movie => {
      return (
        <div key={movie.title}>
          <p>{movie.title}</p>
          <p>{movie.time}</p>
          <ul>  
            {renderGenres(movie.genres)}
          </ul>
        </div>
      )
    })
  }

  const renderGenres = genres => {
    return genres.map(genre => <li key="genre">{genre}</li>)
  }

  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
