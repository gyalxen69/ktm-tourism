import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (activity) => {
    setCartItems((prevItems) => {
      // Check if activity already exists in cart
      const existingItem = prevItems.find((item) => item.id === activity.id);
      if (existingItem) {
        return prevItems; // Don't add duplicates
      }
      return [...prevItems, activity];
    });
  };

  const removeFromCart = (activityId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== activityId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const isInCart = (activityId) => {
    return cartItems.some((item) => item.id === activityId);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    isInCart,
    getTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
