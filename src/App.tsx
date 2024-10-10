import React, { useEffect, useState } from 'react';
import MovieList from './components/MovieList.tsx';
import axios from 'axios';
import Joke from './components/haha/Joke.tsx';
import ButtonJoke from './components/haha/ButtonJoke.tsx';

const App: React.FC = () => {
  const [joke, setJoke] = useState('');
  const fetchJoke = async () => {
    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      setJoke(response.data.value);
    } catch (error) {
      console.error('error from get joke:', error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchJoke();
      } catch (error) {
        console.error('(useEffect) error from get joke:', error);
      }
    };
    fetchData().catch((error) => {
      console.error('(catch) error from get joke:', error);
    });
  }, []);
  return (
    <>
      <MovieList/>
      <h1>Joke this day</h1>
      <Joke joke={joke}/>
      <ButtonJoke fetchJoke={fetchJoke}/>
    </>
  );
};

export default App;
