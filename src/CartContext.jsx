import React, { createContext, useState } from 'react';
import img1 from "./img/lap2.jpeg";
import img2 from "./img/head.jpeg";
import img3 from "./img/watch.jpeg"

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: 'Laptop', image: img1, price: 500, quantity: 2 },
    { id: 2, title: 'Smart Watch', image: img3, price: 300, quantity: 1 },
    { id: 3, title: 'Headphones', image: img2, price: 100, quantity: 3 },
  ]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
