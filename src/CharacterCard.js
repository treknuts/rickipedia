import React from 'react';
import './CharacterCard.css';

const CharacterCard = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                <h2>{ props.character.name } <i class="fas fa-external-link-alt"></i></h2>
                <div className={ props.character.status }>{ props.character.status }</div>
            </div>
            <img src={ props.character.image } className="card-image" />
            <div className="card-body">
                <div className="body-item">
                    <p style={{ fontWeight: 'bold'}}>Species </p><p>{ props.character.species }</p>
                </div>
                <div className="body-item">
                    <p style={{ fontWeight: 'bold'}}>Origin </p><p>{ props.character.origin.name }</p>
                </div>
                <div className="body-item">
                    <p style={{ fontWeight: 'bold'}}>Gender </p><p>{ props.character.gender }</p>
                </div>
                <div className="body-item">
                    <p style={{ fontWeight: 'bold'}}>Last Known Location </p><p>{ props.character.location.name }</p>
                </div>
            </div>
        </div>
    );
}

export default CharacterCard;