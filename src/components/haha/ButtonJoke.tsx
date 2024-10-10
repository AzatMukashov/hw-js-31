import React from 'react';

interface ButtonJokeProps {
  fetchJoke: () => void;
}

const ButtonJoke: React.FC<ButtonJokeProps> = ({fetchJoke}) => {
  return (
    <button onClick={fetchJoke}>New joke</button>
  );
};

export default ButtonJoke;