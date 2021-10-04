import React, { useState, useEffect } from 'react';
import './Characters.scss';
import CharacterCard from './CharacterCard';
import { Container, Row, Col } from 'react-bootstrap';
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
    console.log(characters[0]);
  }, []);

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
    <main>
      <Container fluid>
        <Row className="d-flex justify-content-center">
          { 
            characters && 
            characters.map((character) => <CharacterCard character={character} /> )
          }
        </Row>
      </Container>
    </main>
  );
}

export default Characters;