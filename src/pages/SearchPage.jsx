// src/components/SearchPage.jsx

import React from 'react';

const SearchPage = ({ searchResults }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {searchResults.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-lg font-medium">{product.title}</h3>
              <p className="text-gray-600">${product.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found for your search.</p>
      )}
    </div>
  );
};

export default SearchPage;