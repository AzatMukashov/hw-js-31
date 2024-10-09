import React, { useCallback, useEffect, useState } from 'react';
import { Movie } from '../types';

interface MovieProps {
  movie: Movie;
  updateMovie: (movie: Movie) => void;
  deleteMovie: (id: number) => void;
}

const MovieItem: React.FC<MovieProps> = ({movie, updateMovie, deleteMovie}) => {
  const [editMovie, setEditMovie] = useState(movie);
  useEffect(() => {
    updateMovie(editMovie);
  }, [editMovie, updateMovie]);
  const handleEditMovie = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setEditMovie({...editMovie, [name]: value});
  }, [editMovie]);
  return (
    <li>
      <input type="text" name='title' value={editMovie.title} onChange={handleEditMovie}/>
      <button onClick={() => deleteMovie(movie.id)}>Delete</button>
    </li>
  );
};

export default React.memo(MovieItem, (prevProps, nextProps) => {
  return prevProps.movie === nextProps.movie;
});