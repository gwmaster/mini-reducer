import React from 'react';
import './card.css';

const Box = props => {
  return React.createElement("div", {
    className: "card"
  }, "Box ", props.children);
};

export default Box;