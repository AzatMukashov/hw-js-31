import React, { useState, useCallback } from 'react';
import MovieItem from './MovieItem.tsx';
import MovieForm from './MovieForm.tsx';
import { Movie } from '../types';

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const addMovie = (name: string) => {
    setMovies([...movies, {id: Date.now(), name}]);
  };

  const updateMovie = useCallback((id: number, name: string) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) => (movie.id === id ? {...movie, name} : movie))
    );
  }, []);

  const deleteMovie = useCallback((id: number) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  }, []);

  return (
    <>
      <MovieForm addMovie={addMovie}/>
      <ul>
        {movies.map((movie) => (
          <MovieItem
            key={movie.id}
            movie={movie}
            updateMovie={updateMovie}
            deleteMovie={deleteMovie}
          />
        ))}
      </ul>
    </>
  );
};

export default MovieList;
