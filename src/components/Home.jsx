import React from 'react';
import img1 from "../img/prod.jpeg";

const Home = () => {
  return (
    <section
      className="bg-cover bg-center h-96"
      style={{ backgroundImage: `url(${img1})` }} 
    >
      <div className="flex items-center justify-center h-full bg-gray-900 bg-opacity-50">
        <h2 className="text-4xl text-white font-bold">Welcome to MyEcommerce</h2>
      </div>
    </section>
  );
};

export default Home;
