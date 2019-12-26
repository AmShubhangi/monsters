import React from 'react';
import '../card-list/card-list.style.css';
import { Card } from '../card/card.component';

export const CardList = props => {
    console.log(props);
    // Method 1
    // return <div className='card-list'>{props.children}</div>


    // Method 2
    return (<div>
        <div className='card-list'>
            {
                props.monsters.map(monsters => {
                    return <Card key={monsters.id} monsters={monsters} />
                })
            }
        </div>
    </div>)
}