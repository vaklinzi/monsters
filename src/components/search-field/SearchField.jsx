import React from 'react';

export const SearchField = ({ value, onChange }) => (
  <input
    type="search"
    placeholder="search monsters"
    onChange={(e) => onChange(e)}
    value={value}
  />
);
