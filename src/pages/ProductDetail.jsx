import React from 'react';

const ProductView = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <img src="" alt="Product" className="w-full h-auto rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-semibold">Product Title</h2>
          <p className="mt-4 text-gray-600">Detailed description of the product...</p>
          <div className="flex items-center mt-4">
            <span className="text-xl font-bold">$50</span>
            <span className="ml-4">⭐⭐⭐⭐⭐</span>
          </div>
          <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductView;