import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
const axios = require('axios');

const Characters = (props) => {
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
        { props.characters.map((character) => <CharacterCard key={character.id} character={character}/> )}
      </div>
    );
}

export default Characters;