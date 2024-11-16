import React, { useContext, useEffect } from 'react';
import { CartContext } from '../CartContext';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast } from 'react-toastify';

const CartPage = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const calculateTotalAmount = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleRemoveItem = (itemId, name) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
    toast.success(`${name} removed from cart`);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600" data-aos="fade-up">
        Cart Products List
      </h2>

      <div className="space-y-4">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center border p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
            >
              <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-sm text-gray-600">Price: ${item.price}</p>
              </div>
              <button
                onClick={() => handleRemoveItem(item.id, item.title)}
                className="text-red-600 hover:text-red-800 text-sm"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">Your cart is empty!</div>
        )}
      </div>

      <div className="mt-6 text-2xl font-semibold text-center">
        Total Amount: ${calculateTotalAmount().toFixed(2)}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-6 text-center">
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition-colors"
            onClick={() => navigate('/checkout')}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
