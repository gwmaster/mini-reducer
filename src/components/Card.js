import React from 'react';
import './card.css'
const Card = (props) => {
        return (
            <div className="card">
                Card {props.children} - 11111
            </div>
    );
};

export default Card;