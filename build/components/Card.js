import React from 'react';
import './card.css';

const Card = props => {
  return React.createElement("div", {
    className: "card"
  }, "Card ", props.children);
};

export default Card;