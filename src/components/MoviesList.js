import React from 'react';
import useMovies from '../hooks/useMovies';

function MoviesList() {
  const [movies, loading] = useMovies();

  if (loading) {
    return (
      <div className="movies-list">
        <p>Loading ....</p>
      </div>
    );
  }

  return (
    <ul className="movies-list">
      {movies.map((movie) => {
        return (
          <li key={movie.id} className="movies-list-item">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default MoviesList;
