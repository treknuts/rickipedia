import React, { useEffect } from 'react';
import './CharacterCard.scss';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';


const CharacterCard = ({ character }) => {
    const getCharacterStatus = () => {
        if (character.status === "Alive") {
            return "success";
        } else if (character.status === "Dead") {
            return "danger";
        } else {
            return "secondary"
        }
    } 

    return (
        <div className="col-md-3 mb-3">
        <Card className="light shadow w-100" >
            <Card.Img variant="left" src={character.image} className="h-auto"/>
            <Card.Body>
                <Card.Title>
                    <div className="d-flex justify-content-between align-items-center">
                    <h3>{ character.name }</h3>
                    <Badge bg={getCharacterStatus()}>{ character.status }</Badge>
                    </div>
                </Card.Title>
                <Card.Text>
                    <p><span className="fw-bold">Gender:</span> { character.gender }</p>
                    <p><span className="fw-bold">Last known:</span> { character.location.name }</p>
                </Card.Text>
                <Button variant="success">Show More</Button>
            </Card.Body>
        </Card>
</div>
    );
}

export default CharacterCard;