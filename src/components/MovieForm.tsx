import React, { useState } from 'react';

interface MovieFormProps {
  addMovie: (name: string) => void;
}

const MovieForm: React.FC<MovieFormProps> = ({addMovie}) => {
  const [newMovie, setNewMovie] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMovie.trim()) {
      addMovie(newMovie);
      setNewMovie('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newMovie}
        onChange={(e) => setNewMovie(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default MovieForm;
