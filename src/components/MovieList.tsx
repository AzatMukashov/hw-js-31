import React from 'react';
import { Movie } from '../types';
import MovieItem from './MovieItem.tsx';
interface MovieListProps {
  movies: Movie[];
  updateMovie: (movie: Movie) => void;
  deleteMovie: (id: number) => void;
}
const MovieList: React.FC<MovieListProps> = ({movies, updateMovie, deleteMovie}) => {
  return (
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
  );
};

export default MovieList;