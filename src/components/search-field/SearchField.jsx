import React from 'react';
import './SearchField.css';

export const SearchField = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
