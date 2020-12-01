import React from 'react';
import './Card.css';

export const Card = ({ monster }) => (
  <div className="card-container">
    <h1 key={monster.id}>{monster.name}</h1>;
  </div>
);
