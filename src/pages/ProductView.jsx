import React from 'react';

const ProductPage = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex">
        <div className="w-1/4 p-4">
          <h3 className="font-semibold mb-4">Filter by Category</h3>
          {/* Category Filter */}
          <ul className="space-y-2">
            <li><input type="checkbox" /> Electronics</li>
            <li><input type="checkbox" /> Clothing</li>
            <li><input type="checkbox" /> Home Appliances</li>
          </ul>

          <h3 className="font-semibold mt-8 mb-4">Filter by Price</h3>
          {/* Price Filter */}
          <input type="range" min="0" max="500" className="w-full" />
        </div>

        <div className="w-3/4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Product Cards */}
          {/* This would ideally be a mapped array */}
          <div className="bg-white p-4 shadow rounded">
            <img src="https://via.placeholder.com/200" alt="Product" className="w-full h-48 object-cover" />
            <h4 className="text-lg font-semibold mt-2">Product Name</h4>
            <p className="text-gray-600">$20</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;