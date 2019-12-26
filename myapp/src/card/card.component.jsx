import React from 'react';
import '../card/card.styles.css';

export const Card = (props) => {
    return (
        <div className='card-containers'>
            <img alt="monstes" src={`https://robohash.org/${props.monsters.id}.png?set=set1&size=180 x 180`} />
            <h1>{props.monsters.name}</h1>
            <p>{props.monsters.email}</p>
        </div >
    )
}