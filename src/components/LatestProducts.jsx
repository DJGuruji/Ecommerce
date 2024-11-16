import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import img1 from "../img/lap1.jpeg";
import img2 from "../img/lap2.jpeg";
import img3 from "../img/lap3.jpeg";
import img4 from "../img/lap4.jpeg";
import img5 from "../img/lap5.jpeg";
import img6 from "../img/lap6.jpeg";

const LatestProduct = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 2000, // Set the duration for animations
      easing: "ease-in-out", // Set the easing function for smooth transitions
      once: true, // Trigger animation only once
    });
  }, []);

  const handleProductNavigation = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handlecart = (productName) => {
    toast.success(`item ${productName} Moved to cart`);
  };

  const products = [
    { id: 1, name: "Hp Laptop", price: "$20", img: img1 },
    { id: 3, name: "Dell Laptop", price: "$40", img:img2 },
    { id: 4, name: "Samsung", price: "$20", img: img3 },
    { id: 5, name: "Victus", price: "$30", img: img4 },
    { id: 6, name: "Mi Note Pro", price: "$40", img: img5 },
    { id: 2, name: "Hp Laptop", price: "$20", img: img6 },
  ];

  return (
    <section className="py-5">
      <div className="container px-12">
        <h3 className="text-2xl font-semibold mb-6">Latest Products</h3>
        <div
          className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6"
          data-aos="fade-up"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg p-4 w-56"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-cover rounded"
              />

              <div className="mt-2 text-xl font-semibold">{product.name}</div>
              <p className="text-gray-600">{product.price}</p>
              <button
                className="mt-4 w-full bg-blue-500 text-white py-2 ml-3 rounded hover:rounded-lg hover:bg-blue-600"
                onClick={() => handleProductNavigation(product.id)}
              >
                Buy Now
              </button>
              <button
                className="mt-4 w-full bg-yellow-500 text-white py-2 ml-3 rounded hover:rounded-lg hover:bg-yellow-600"
                onClick={() => handlecart(product.name)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProduct;
