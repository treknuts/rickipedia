import React, { useEffect } from 'react';
import './CharacterCard.scss';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';


const CharacterCard = ({ character }) => {
    return (
        <Card style={{ width: '20em'}}>
            <Card.Img variant="left" src={character.image} className="h-auto"/>
            <Card.Body>
                <Card.Title>{ character.name }</Card.Title>
                <Card.Text>
                    <p>{ character.status }</p>
                    <p>{ character.gender }</p>
                    <p>{ character.location.name }</p>
                </Card.Text>
                <Button variant="success">Show More</Button>
            </Card.Body>
        </Card>
    );
}

export default CharacterCard;