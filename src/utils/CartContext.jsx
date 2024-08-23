import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=>{
   const [cartItems,setCartItems] = useState([]);

   // Function to add remove and update cart items can go here

   return (
    <CartContext.Provider value={{cartItems,setCartItems}}>
        {children}
    </CartContext.Provider>
   );
};
