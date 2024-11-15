// src/components/LatestProduct.jsx

import React from 'react';

const LatestProduct = () => {
  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Latest Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          <div
            className="border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col items-center"
          >
            <img
              src=""
              alt="product name"
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-medium">product name</h3>
            <p className="text-gray-600 mt-2">$new</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              View Details
            </button>
          </div>
  
      </div>
    </div>
  );
};

export default LatestProduct;