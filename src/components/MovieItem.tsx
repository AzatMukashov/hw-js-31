import React, { memo } from 'react';
import { MovieItemProps } from '../types';
import close from '../assets/close.png';

const MovieItem: React.FC<MovieItemProps> = memo(({movie, updateMovie, deleteMovie}) => {
  return (
    <div>
      <input
        type="text"
        value={movie.name}
        onChange={(e) => updateMovie(movie.id, e.target.value)}
      />
      <button onClick={() => deleteMovie(movie.id)}>
        <img src={close} alt="close" width='31px'/>
      </button>
    </div>
  );
});

export default MovieItem;
