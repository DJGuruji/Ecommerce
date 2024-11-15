// src/components/ContactUsPage.jsx

import React, { useState } from 'react';

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

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
      <p>For any inquiries, please fill out the form below:</p>

      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleInputChange}
          className="block w-full mb-4 p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleInputChange}
          className="block w-full mb-4 p-2 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your message..."
          onChange={handleInputChange}
          className="block w-full mb-4 p-2 border rounded"
          required
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUsPage;