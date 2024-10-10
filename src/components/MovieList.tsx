import React, { useState, useCallback } from 'react';
import MovieItem from './MovieItem.tsx';
import MovieForm from './MovieForm.tsx';
import { Movie } from '../types';

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const addMovie = (name: string) => {
    setMovies([{id: Date.now(), name}, ...movies]);
  };

  const updateMovie = useCallback((id: number, name: string) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) => (movie.id === id ? {...movie, name} : movie)),
    );
  }, []);

  const deleteMovie = useCallback((id: number) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  }, []);

  return (
    <>
      <MovieForm addMovie={addMovie}/>
      <>
        <h4>To watch list:</h4>
        {movies.map((movie) => (
          <MovieItem
            key={movie.id}
            movie={movie}
            updateMovie={updateMovie}
            deleteMovie={deleteMovie}
          />
        ))}
      </>
    </>
  );
};

export default MovieList;
