import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../CartContext';
import { toast } from 'react-toastify';

const CheckoutPage = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [shippingInfo, setShippingInfo] = useState({ name: '', address: '', city: '', zip: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Order Placed Success");
    const orderNumber = Math.floor(100000 + Math.random() * 900000);

   
    setCartItems([]);

  
    navigate('/order-confirmation', { state: { orderNumber } });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
      <ul className="mb-6">
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between">
            <span>{item.title}</span>
            <span>${item.price * item.quantity}</span>
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold">Total Amount: ${calculateTotalAmount().toFixed(2)}</div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Shipping Information</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleInputChange}
          className="block w-full mb-4 p-2 border rounded"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleInputChange}
          className="block w-full mb-4 p-2 border rounded"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleInputChange}
          className="block w-full mb-4 p-2 border rounded"
        />
        <input
          type="text"
          name="zip"
          placeholder="Zip Code"
          onChange={handleInputChange}
          className="block w-full mb-4 p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
