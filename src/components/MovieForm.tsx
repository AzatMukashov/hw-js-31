import React, { useState } from 'react';
import { Movie } from '../types';

interface MovieFormProps {
  addMovie: (movie: Movie) => void;
}

const MovieForm: React.FC<MovieFormProps> = ({addMovie}) => {
  const [movie, setMovie] = useState<Movie>({id: 0, title: ''});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setMovie({...movie, [name]: value});
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addMovie(movie);
    setMovie({id: 0, title: ''});
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={movie.title} onChange={handleChange} placeholder="title" required/>
      <button type='submit'>Add</button>
    </form>
  );
};

export default MovieForm;