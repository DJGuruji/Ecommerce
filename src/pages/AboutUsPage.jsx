// src/components/AboutUsPage.jsx

import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-4">About Us</h2>
      <div className="mb-6">
        <h3 className="text-2xl font-medium">Our Mission</h3>
        <p>We aim to provide the best products and services...</p>
      </div>
      <div className="mb-6">
        <h3 className="text-2xl font-medium">Features</h3>
        <ul className="list-disc ml-6">
          <li>High-quality products</li>
          <li>24/7 Customer support</li>
          <li>Fast delivery</li>
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-medium">Testimonials</h3>
        <p>"Excellent service and great products!" - Customer A</p>
        <p>"I love shopping here. Highly recommend!" - Customer B</p>
      </div>
    </div>
  );
};

export default AboutUsPage;