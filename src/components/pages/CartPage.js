import React from 'react';
import '../../styles/cart.css';
export default function CartPage({ cartItems, removeFromCart, adjustQuantity }) {
  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>
              <p>Quantity: <input type="number" value={item.quantity} onChange={(e) => adjustQuantity(item.id, e.target.value)} /></p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
