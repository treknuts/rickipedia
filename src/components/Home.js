import React, { useEffect, useState } from 'react';
import './Home.css';
const axios = require('axios');

const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character?page=1').then(function (response) {
      setCharacters(response.data.results.slice(0, 5));
    }).catch(function (error) {
      console.log(error);
    });
  }, []);

  return (
    <main className="content">
      {characters.map((character) => <img key={character.id} src={character.image} />)}
    </main>
  );
}

export default Home;