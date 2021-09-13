import React from 'react';
import './CharacterCard.css';

const CharacterCard = (props) => {
    return (
        <div className="card surface1 shadow">
            <div className="card-header text-blue">
                <h2>{props.character.name} <i className="fas fa-external-link-alt"></i></h2>
                <div className={props.character.status}>{props.character.status}</div>
            </div>
            <div className="card-body">
                <img src={props.character.image} className="card-image" />
                <div className="info">
                    <div className="body-item">
                        <p className="text2">Species </p><p className="text-blue">{props.character.species}</p>
                    </div>
                    <div className="body-item">
                        <p className="text2">Origin </p><p className="text-blue">{props.character.origin.name}</p>
                    </div>
                    <div className="body-item">
                        <p className="text2">Gender </p><p className="text-blue">{props.character.gender}</p>
                    </div>
                    <div className="body-item">
                        <p className="text2">Last Known Location </p><p className="text-blue">{props.character.location.name}</p>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default CharacterCard;