import React from 'react';
import '../card/card.styles.css';

export const Card = (props) => {
    return (
        <div className='card-containers'>
            <h1>{props.monsters.name}</h1>
        </div>
    )
}