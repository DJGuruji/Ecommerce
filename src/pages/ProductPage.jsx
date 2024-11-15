// src/pages/ProductPage.js

import React from 'react';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';
import Category from '../components/Category';
import PriceRangeFilter from '../components/PriceRangeFilter';
import Footer from '../components/Footer';

const ProductPage = () => {
  return (
    <div className="bg-gray-100">


      {/* Filters and Products Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-8">Our Products</h2>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Category Filter */}
          <div className="lg:w-1/4 bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold mb-4">Filter by Category</h3>
            <Category />
          </div>

          {/* Price Range Filter */}
          <div className="lg:w-1/4 bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold mb-4">Filter by Price Range</h3>
            <PriceRangeFilter />
          </div>

          {/* Product List */}
          <div className="lg:w-1/2">
            <ProductList />
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductPage;