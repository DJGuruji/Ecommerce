import React from 'react';

const Features = () => {
  const features = [
    { title: 'Free Shipping', description: 'On all orders over $50' },
    { title: '24/7 Support', description: 'Dedicated support' },
    { title: 'Secure Payment', description: '100% secure payment' },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="p-6 text-center bg-white shadow rounded-lg">
            <h4 className="text-xl font-bold">{feature.title}</h4>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;