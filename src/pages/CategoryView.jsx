import React from 'react';

const CategoryView = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6">Category: Electronics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Category Products */}
        <div className="bg-white p-4 shadow rounded">
          <img src="https://via.placeholder.com/200" alt="Product" className="w-full h-48 object-cover" />
          <h4 className="text-lg font-semibold mt-2">Product Name</h4>
          <p className="text-gray-600">Short description of the product...</p>
          <p className="text-gray-800 font-bold">$30</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryView;