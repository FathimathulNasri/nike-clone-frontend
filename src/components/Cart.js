// components/Cart.js
import React from 'react';
import { useCart } from '../context/CartContext';
import '../css/Cart.css'

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <p>Your cart is empty!</p>;
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cart?.map((item) => (
          <li key={item._id} className='cart-list'>
            <img src={item.image} width="100px" height="100px"/>
            <p>{item.name} - ${item.price}</p>
            <button onClick={() => removeFromCart(item._id)} className='cart-btn'>Remove</button>
          </li>
        ))}
      </ul>
      {/* <button onClick={clearCart}>Clear Cart</button> */}
    </div>
  );
};

export default Cart;
