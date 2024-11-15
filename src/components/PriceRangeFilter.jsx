// src/components/PriceRangeFilter.jsx

import React, { useState } from 'react';

const PriceRangeFilter = ({ onPriceRangeChange }) => {
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  const handlePriceChange = (event) => {
    const value = event.target.value;
    setSelectedPriceRange(value);
    onPriceRangeChange(value);  // Pass the selected range to the parent component
  };

  return (
    <div className="space-y-2">
      <label className="flex items-center">
        <input
          type="radio"
          name="price"
          value="under-50"
          checked={selectedPriceRange === 'under-50'}
          onChange={handlePriceChange}
          className="mr-2"
        />
        Under $50
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name="price"
          value="50-100"
          checked={selectedPriceRange === '50-100'}
          onChange={handlePriceChange}
          className="mr-2"
        />
        $50 - $100
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name="price"
          value="100-200"
          checked={selectedPriceRange === '100-200'}
          onChange={handlePriceChange}
          className="mr-2"
        />
        $100 - $200
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name="price"
          value="above-200"
          checked={selectedPriceRange === 'above-200'}
          onChange={handlePriceChange}
          className="mr-2"
        />
        Above $200
      </label>
    </div>
  );
};

export default PriceRangeFilter;