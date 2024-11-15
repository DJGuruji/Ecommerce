import React from 'react';
import img1 from "../img/prod.jpeg";

const Slider = () => {
  return (
    <div className="h-96 bg-cover bg-center" style={{ backgroundImage: `url(${img1})` }}>
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <h2 className="text-4xl font-bold text-white">Welcome to Our Store</h2>
      </div>
    </div>
  );
};

export default Slider;