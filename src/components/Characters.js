import React, { useState, useEffect } from 'react';
import './Characters.css';
import CharacterCard from './CharacterCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
const axios = require('axios');

const Characters = () => {
  const [pageInfo, setPageInfo] = useState({});
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState('https://rickandmortyapi.com/api/character?page=1');

  useEffect(() => {
    axios.get(currentPage, {
      params: {
        'Access-Control-Allor-Origin': '*',
      }
    }).then(function (response) {
      setPageInfo(response.data.info);
      setCharacters(response.data.results);
    }).catch(function (error) {
      console.log(error);
    });
  }, [currentPage]);

  const nextPage = () => {
    if (pageInfo.next) {
      setCurrentPage(pageInfo.next);
    }
  }

  const prevPage = () => {
    if (pageInfo.prev) {
      setCurrentPage(pageInfo.prev);
    }
  }

  return (
    <div>
      <div className="pagination-row">
        <button className="pag-button" onClick={() => prevPage()}>
          <FontAwesomeIcon icon={faArrowCircleLeft} size="4x" />
        </button>
        <button className="pag-button" onClick={() => nextPage()}>
          <FontAwesomeIcon icon={faArrowCircleRight} size="4x" />
        </button>
      </div>
      <div className="card-container">
        {characters.map((character) => <CharacterCard key={character.id} character={character} />)}
      </div>
      <div className="pagination-row">
        <button className="pag-button" onClick={() => prevPage()}>
          <FontAwesomeIcon icon={faArrowCircleLeft} size="4x" />
        </button>
        <button className="pag-button" onClick={() => nextPage()}>
          <FontAwesomeIcon icon={faArrowCircleRight} size="4x" />
        </button>
      </div>
    </div>
  );
}

export default Characters;