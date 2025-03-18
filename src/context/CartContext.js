// context/CartContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import {addtoCartService, getCartService, removeCartService, cleartCartService} from '../services/CartService'

const CartContext = createContext();

export const useCart = () =>  useContext(CartContext);


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCart()
  }, []);
  
  const getCart = async()=>{
      const cart = await getCartService()
      setCart(cart)
  }

  const addToCart = async(productId) => {
   try{
   const res = await addtoCartService(productId)
    alert(res)
   }catch(err){
    alert('error adding cart')
   }
  };

  const removeFromCart = async(productId) => {
    try{
      await removeCartService(productId)
      getCart()
    }
    catch(err){
      alert("error removing cart")
    }
  };

  const clearCart = async() => {
    try{
      await cleartCartService()
    }
    catch(err){
      alert("error removing cart")
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
