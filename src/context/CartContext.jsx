import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [dummyState, setDummyState] = useState(false);

  const addToCart = (product) => {
    const productWithUniqueId = { ...product, cartItemId: uuidv4() }; // Add a unique ID
    console.log("Adding to cart:", productWithUniqueId);
    setCartItems((prevItems) => [...prevItems, productWithUniqueId]);
    setIsCartOpen(true);
    setDummyState((prevState) => !prevState);
  };

  const removeFromCart = (cartItemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.cartItemId !== cartItemId)
    );
  };

  const toggleCart = () => {
    setIsCartOpen((prevOpen) => !prevOpen);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, isCartOpen, toggleCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
