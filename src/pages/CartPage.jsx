import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CartPage = ({ cartItems = [] }) => {
  // Calculate the total amount of the cart
  const calculateTotalAmount = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  // Initialize AOS for animations
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="p-6">
      <h2
        className="text-2xl font-semibold mb-6 text-center text-blue-600"
        data-aos="fade-up"
      >
        Cart Products List
      </h2>

      {/* Cart Items List */}
      <div className="space-y-4">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center border p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-sm text-gray-600">Price: ${item.price}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">Your cart is empty!</div>
        )}
      </div>

      {/* Total Amount */}
      <div
        className="mt-6 text-2xl font-semibold text-center"
        data-aos="fade-up"
      >
        Total Amount: ${calculateTotalAmount().toFixed(2)}
      </div>

      {/* Checkout Button */}
      {cartItems.length > 0 && (
        <div className="mt-6 text-center">
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition-colors"
            data-aos="fade-up"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
