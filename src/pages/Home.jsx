// src/pages/Home.js

import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Category from '../components/Category';
import LatestProducts from '../components/LatestProducts';
import Features from '../components/Features';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Home = () => {
  return (
    <div className="bg-gray-100">
  

      {/* Main Slider */}
      <div className="mt-4">
        <Slider />
      </div>

      {/* Shop by Category */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-center mb-6">Shop by Category</h2>
        <Category />
      </div>

      {/* Latest Products */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-center mb-6">Latest Products</h2>
        <LatestProducts />
      </div>

      {/* Features Section */}
      <div className="mt-12">
        <Features />
      </div>
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Home;