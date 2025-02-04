import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/cart')
      .then(response => setCartItems(response.data))
      .catch(error => console.error('Error fetching cart:', error));
  }, []);

  const removeItem = (id) => {
    axios.delete(`http://localhost:5000/api/cart/${id}`)
      .then(() => {
        setCartItems(cartItems.filter(item => item.id !== id));
      })
      .catch(error => console.error('Error removing item:', error));
  };

  const updateQuantity = (id, quantity) => {
    axios.put(`http://localhost:5000/api/cart/${id}`, { quantity })
      .then(() => {
        setCartItems(cartItems.map(item => 
          item.id === id ? { ...item, quantity } : item
        ));
      })
      .catch(error => console.error('Error updating quantity:', error));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <div className="cart-card">
        <h2 className="cart-title">Your Cart</h2>
        <hr/>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty. Add some books!</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image_url} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <p className="cart-item-name">{item.title}</p>
                  <p className="cart-item-price">Rs.{item.price}</p>
                  <input 
                    type="number" 
                    value={item.quantity} 
                    min="1"
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  />
                </div>
                <button className="remove-button" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            ))}
          </div>
        )}

        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs.{calculateTotal()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs.250</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rs.{calculateTotal() + 250}</b>
            </div>
            <div className='button'>
            <button className='cart-promocode-input'>
              promocode
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;