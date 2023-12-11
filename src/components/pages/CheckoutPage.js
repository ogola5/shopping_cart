import React, { useState } from 'react';
import '../styles/checkout.css';

export default function CheckoutPage({ cartItems, total, placeOrder }) {
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    address: '',
    email: '',
    
  });

  const handleInputChange = (e) => {
    setCustomerDetails({ ...customerDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    placeOrder(customerDetails);
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="cart-summary">
        
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleInputChange} />
        <input type="text" name="address" placeholder="Address" onChange={handleInputChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
        
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}
