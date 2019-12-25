import React from 'react';
import './card.css';
const Box = (props) => {
    return (
        <div className="card">
            Box {props.children}
        </div>
    );
};

export default Box;