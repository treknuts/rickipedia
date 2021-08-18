import React, { useState, useEffect } from 'react';
import './Characters.css';
import CharacterCard from './CharacterCard';
const axios = require('axios');

const Characters = () => {
    const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character', { params: { page: 1 } }).then(function (response) {
      setCharacters(response.data.results);
      console.log(response.data.results);
    }).catch(function (error) {
      console.log(error);
    });
  }, []);

    return (
    <div className="content">
        { characters.map((character) => <CharacterCard key={character.id} character={character}/> )}
      </div>
    );
}

export default Characters;