import React, { useEffect, useState} from 'react';
import './Home.css';
const axios = require('axios');

const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character', { params: { page: 1 } }).then(function (response) {
      console.log(response.data.results);
      setCharacters(response.data.results);
    }).catch(function (error) {
      console.log(error);
    });
  }, []);

  return (
    <div className="content">
        { characters.map((character) => <img key={ character.id } src={ character.image }/>)}
    </div>
  );
}

export default Home;