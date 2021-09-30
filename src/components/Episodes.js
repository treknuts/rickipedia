import React, { useState, useEffect } from 'react';
import './Episodes.scss';
const axios = require('axios');

const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/episode', {
            params: {
                page: page,
            }
        }).then((response) => {
            console.log(response.data.results);
            setEpisodes(response.data.results);
        }).catch((error) => {
            console.log(error);
        });
    }, [page]);

    return (
        <main className="ep-container">
            { episodes.map((episode) => <p key={episode.id}>{episode.name }</p>)}
        </main>
    );
}

export default Episodes;