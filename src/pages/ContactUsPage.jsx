import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const ContactUsPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Form submitted successfully!");
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      easing: 'ease-in-out', // Easing function for smoothness
      once: true, // Animation triggers only once
    });
  }, []);

  return (
    <div className="p-6">
      {/* Contact Us Title */}
      <h2
        className="text-3xl font-semibold mb-4 text-center text-blue-600"
        data-aos="fade-up"
      >
        Contact Us
      </h2>
      <p className="text-center mb-6 text-gray-700" data-aos="fade-up">
        For any inquiries, please fill out the form below:
      </p>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="mt-6 bg-white p-6 rounded-lg shadow-lg"
        data-aos="fade-up"
      >
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleInputChange}
            value={formData.name}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleInputChange}
            value={formData.email}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-6">
          <textarea
            name="message"
            placeholder="Your message..."
            onChange={handleInputChange}
            value={formData.message}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
          data-aos="fade-up"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUsPage;
