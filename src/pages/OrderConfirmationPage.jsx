import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderNumber } = location.state || {};

  if (!orderNumber) {
    navigate('/'); // Redirect to home if accessed directly without an order
    return null;
  }

  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-semibold mb-4">Order Confirmation</h2>
      <p>Your order has been placed successfully!</p>
      <p className="mt-4">Order No: <span className="font-bold">{orderNumber}</span></p>
      <button
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition-colors"
        onClick={() => navigate('/')}
      >
        Back to Home
      </button>
    </div>
  );
};

export default OrderConfirmationPage;
