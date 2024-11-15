import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const AboutUsPage = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration for animations
      easing: 'ease-in-out', // Set the easing function for smooth transitions
      once: true, // Trigger animation only once
    });
  }, []);

  return (
    <div className="p-6">
      {/* About Us Heading */}
      <h2 
        className="text-3xl font-semibold mb-4 text-center text-blue-600"
        data-aos="fade-up"
      >
        About Us
      </h2>

      {/* Mission Section */}
      <div 
        className="mb-6 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-100 p-6 rounded-lg shadow-xl"
        data-aos="fade-right"
      >
        <h3 className="text-2xl font-medium text-indigo-800">Our Mission</h3>
        <p className="text-gray-700">
          We aim to provide the best products and services with a focus on quality, customer satisfaction, and innovation.
        </p>
      </div>

      {/* Features Section */}
      <div 
        className="mb-6 bg-gradient-to-r from-green-50 via-yellow-50 to-orange-100 p-6 rounded-lg shadow-xl"
        data-aos="fade-left"
      >
        <h3 className="text-2xl font-medium text-green-800">Features</h3>
        <ul className="list-disc ml-6 text-gray-700">
          <li>High-quality products</li>
          <li>24/7 Customer support</li>
          <li>Fast delivery</li>
        </ul>
      </div>

      {/* Testimonials Section */}
      <div 
        className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 p-6 rounded-lg shadow-xl"
        data-aos="fade-up"
      >
        <h3 className="text-2xl font-medium text-gray-800">Testimonials</h3>
        <p className="text-gray-700">
          "Excellent service and great products!" - Customer A
        </p>
        <p className="text-gray-700">
          "I love shopping here. Highly recommend!" - Customer B
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
