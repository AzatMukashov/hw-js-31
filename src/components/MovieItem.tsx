import React, { memo } from 'react';
import {MovieItemProps} from '../types';

const MovieItem: React.FC<MovieItemProps> = memo(({ movie, updateMovie, deleteMovie }) => {
  return (
    <li>
      <input
        type="text"
        value={movie.name}
        onChange={(e) => updateMovie(movie.id, e.target.value)}
      />
      <button onClick={() => deleteMovie(movie.id)}>Delete</button>
    </li>
  );
});

export default MovieItem;
