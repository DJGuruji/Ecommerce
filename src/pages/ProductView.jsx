import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img1 from "../img/lap2.jpeg";
import img2 from "../img/head.jpeg";
import img3 from "../img/watch.jpeg";
import img4 from "../img/speaker.jpeg";

const ProductPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      description: 'High-quality sound with active noise cancellation.',
      price: 50,
      rating: 4.5,
      image:img2,
    },
    {
      id: 2,
      name: 'Smart Watch',
      description: 'Track your fitness and stay connected on the go.',
      price: 80,
      rating: 4,
      image: img3,
    },
    {
      id: 3,
      name: 'Portable Speaker',
      description: 'Crystal-clear audio with a compact design.',
      price: 30,
      rating: 3.5,
      image: img4,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating >= i + 1) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (rating > i) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }
    return stars;
  };

  const handleAddToCart = (productName) => {
    toast.success(`${productName} added to cart successfully!`);
  };

  return (
    <div className="p-4">
     <div
            
            className="bg-white p-4 shadow rounded hover:shadow-lg transition-shadow duration-300 w-full md:w-1/2 lg:w-1/2 xl:w-1/2"
            data-aos="fade-up"
          >
            <img
              src={img1}
              alt=""
              className="w-full h-68 object-cover rounded"
            />
            <h4 className="text-lg font-semibold mt-2">HP Laptop</h4>
            <p className="text-gray-600 text-sm text-justify pb-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque ratione odio corrupti inventore, tenetur est assumenda distinctio aliquid voluptatem velit molestias commodi, modi quam excepturi unde nam minima omnis dignissimos!
            </p>
            <div className="flex items-center mb-2">
              {renderStars(4.5)}
              <span className="ml-2 text-gray-600">ratings</span>
            </div>
            <span className="block font-bold text-lg">$500</span>
            <button
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
             
            >
              Buy Now
            </button>
            <button
              className="mt-4 w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
              onClick={() => handleAddToCart("hp Laptop")}
            >
              Add to Cart
            </button>
          </div>
      <h2 className="text-2xl font-bold text-center my-8" >
        Related Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 shadow-xl "
            data-aos="fade-up"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-68 object-cover rounded"
            />
            <h4 className="text-lg font-semibold mt-2">{product.name}</h4>
            <p className="text-gray-600 text-sm text-justify pb-3">
              {product.description}
            </p>
            <div className="flex items-center mb-2">
              {renderStars(product.rating)}
              <span className="ml-2 text-gray-600">({product.rating})</span>
            </div>
            <span className="block font-bold text-lg">${product.price}</span>
            <button
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Buy Now
            </button>
            <button
              className="mt-4 w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
              onClick={() => handleAddToCart(product.name)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
