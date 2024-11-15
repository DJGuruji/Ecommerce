// src/components/CartPage.jsx

import React from 'react';

const CartPage = ({ cartItems }) => {
  const calculateTotalAmount = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Cart Products List</h2>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center border p-4 rounded-lg">
            <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-xl font-semibold">
        Total Amount: ${calculateTotalAmount().toFixed(2)}
      </div>
    </div>
  );
};

export default CartPage;