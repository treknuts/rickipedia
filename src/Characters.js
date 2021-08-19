import React, { useState, useEffect } from 'react';
import './Characters.css';
import CharacterCard from './CharacterCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const axios = require('axios');

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character', {
      params:
      {
        page: currentPage,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST'
        }
      }
    }).then(function (response) {
      setCharacters(response.data.results);
      console.log(response.data.results);
    }).catch(function (error) {
      console.log(error);
    });
  }, [currentPage]);

  const movePage = (increment) => {
    setCurrentPage(currentPage + increment);
  }

  return (
    <div>
      <div class="pagination-row">
        <button className="pag-button" onClick={() => movePage(-1)}>
          <FontAwesomeIcon icon={faArrowLeft} size="2x" />
        </button>
        <button className="pag-button" onClick={() => movePage(1)}>
          <FontAwesomeIcon icon={faArrowRight} size="2x" />
        </button>
      </div>
      <div className="card-container">
        {characters.map((character) => <CharacterCard key={character.id} character={character} />)}
      </div>
    </div>
  );
}

export default Characters;