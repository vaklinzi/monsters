import React from 'react';
import './Card.css';

export const Card = ({ monster }) => {
  return (
    <div className="card-container">
      <img alt="cats" src={`https://robohash.org/${monster.id}`} />
      <h2>{monster.name}</h2>
    </div>
  );
};
