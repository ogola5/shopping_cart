import React, { useState } from 'react';

export default function ProductDetailPage() {
  // Sample array of products
  const products = [
    // Add 10 products here with id, name, description, price, imageUrl, availability
  ];

  // State for tracking cart count
  const [cartCount, setCartCount] = useState(0);

  // Function to handle adding to cart
  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <h1>Our Products</h1>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Availability: {product.availability}</p>
            <button onClick={addToCart}>Add to Cart</button>
          </div>
        ))}
      </div>
      <p>Items in Cart: {cartCount}</p>
    </div>
  );
}

