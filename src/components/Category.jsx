import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import Select from 'react-select';

const Category = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000, 
      easing: 'ease-in-out', 
      once: true,
    });
  }, []);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    'Electronics',
    'Clothing',
    'Home Appliances',
    'Toys',
    'Books',
    'Furniture',
    'Beauty & Personal Care',
    'Sports & Outdoors',
  ];

  const categoryOptions = categories.map(category => ({
    value: category,
    label: category,
  }));

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
    // You can handle the selected category here or pass it to a parent component
    console.log("Selected category:", selectedOption ? selectedOption.value : '');
  };

  return (
    <div>
      <h3 className="font-semibold mb-2">Shop by Category</h3>
      {/* Searchable select dropdown */}
      <Select
        value={selectedCategory}
        onChange={handleCategoryChange}
        options={categoryOptions}
        placeholder="Select a category"
        isClearable={true}
        className="w-full mb-4"
      />
      {/* Optionally, show selected category */}
      <div>
        {selectedCategory && <p className="text-gray-600">You selected: {selectedCategory.label}</p>}
      </div>
    </div>
  );
};

export default Category;
