import React from 'react';
import './Card.css';

export const Card = ({ monster }) => (
  <div className="card-container">
    <img alt="cats" src={`https://robohash.org/${monster.id}?set=set4`} />
    <h1 key={monster.id}>{monster.name}</h1>
  </div>
);
