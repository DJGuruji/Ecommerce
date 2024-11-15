// src/components/OrderConfirmationPage.jsx

import React from 'react';

const OrderConfirmationPage = ({ orderNumber }) => {
  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-semibold mb-4">Order Confirmation</h2>
      <p>Your order has been placed successfully!</p>
      <p className="mt-4">Order No: <span className="font-bold">{orderNumber}</span></p>
    </div>
  );
};

export default OrderConfirmationPage;