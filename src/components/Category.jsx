import React from 'react';

const Category = () => {
  const categories = ['Electronics', 'Clothing', 'Home Appliances', 'Toys'];

  return (
    <div className="py-12">
      <h3 className="text-2xl font-semibold mb-4">Shop by Category</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="bg-gray-200 rounded-lg p-6 text-center">
            <h4 className="text-xl font-medium">{category}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;