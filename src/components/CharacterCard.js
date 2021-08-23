import React from 'react';
import './CharacterCard.css';

const CharacterCard = (props) => {
    return (
        <div className="card surface1">
            <div className="card-header">
                <h2>{props.character.name} <i className="fas fa-external-link-alt"></i></h2>
                <div className={props.character.status}>{props.character.status}</div>
            </div>
            <div className="card-body">
                <img src={props.character.image} className="card-image" />
                <div className="info">
                    <div className="body-item">
                        <p style={{ fontWeight: 'bold', color: 'var(--text-1)' }}>Species </p><p>{props.character.species}</p>
                    </div>
                    <div className="body-item">
                        <p style={{ fontWeight: 'bold', color: 'var(--text-1)' }}>Origin </p><p>{props.character.origin.name}</p>
                    </div>
                    <div className="body-item">
                        <p style={{ fontWeight: 'bold', color: 'var(--text-1)'}}>Gender </p><p>{props.character.gender}</p>
                    </div>
                    <div className="body-item">
                        <p style={{ fontWeight: 'bold', color: 'var(--text-1)' }}>Last Known Location </p><p>{props.character.location.name}</p>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default CharacterCard;