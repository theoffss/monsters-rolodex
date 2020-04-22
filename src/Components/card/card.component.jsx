import React from 'react';
import './card.styles.css';


export const Card = (props) =>(
    <div className = 'card-container'>
    <img alt='monster' src={`http://localhost:3000/Components/card/Image/1.jpg`} />
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
)





