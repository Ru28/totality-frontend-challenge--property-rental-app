/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from 'react';

// Create a context for the booking system
export const BookingContext = createContext();

export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (property) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === property.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === property.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...property, quantity: 1 }];
    });
  };

  const updateCartItem = (propertyId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === propertyId ? { ...item, quantity } : item
      ).filter((item) => item.quantity > 0) // Filter out items with quantity 0
    );
  };

  const removeFromCart = (propertyId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== propertyId));
  };

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalBookings = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <BookingContext.Provider
      value={{
        cartItems,
        addToCart,
        updateCartItem,
        removeFromCart,
        totalCost,
        totalBookings,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
