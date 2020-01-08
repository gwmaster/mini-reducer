import React from 'react';
import './box.css';
const Box = (props) => {
    return (
        <div className="box">
            Box {props.children}
        </div>
    );
};

export default Box;