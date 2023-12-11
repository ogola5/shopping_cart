import React, { useState } from 'react';
import '../styles/product.css';

export default function ProductDetailPage() {
  const products = [
    // Add 10 unique products here with id, name, description, price, imageUrl, availability
    { id: 1, name: 'Product 1', description: 'Description for Product 1', price: 29.99, imageUrl: 'path_to_image_1', availability: 'In Stock' },
    { id: 2, name: 'Product 2', description: 'Description for Product 2', price: 35.99, imageUrl: 'path_to_image_2', availability: 'In Stock' },
    { id: 1, name: 'Product 3', description: 'Description for Product 1', price: 29.99, imageUrl: 'path_to_image_1', availability: 'In Stock' },
    { id: 2, name: 'Product 4', description: 'Description for Product 2', price: 35.99, imageUrl: 'path_to_image_2', availability: 'In Stock' },
    { id: 1, name: 'Product 5', description: 'Description for Product 1', price: 29.99, imageUrl: 'path_to_image_1', availability: 'In Stock' },
    { id: 2, name: 'Product 6', description: 'Description for Product 2', price: 35.99, imageUrl: 'path_to_image_2', availability: 'In Stock' },
    { id: 1, name: 'Product 7', description: 'Description for Product 1', price: 29.99, imageUrl: 'path_to_image_1', availability: 'In Stock' },
    { id: 2, name: 'Product 8', description: 'Description for Product 2', price: 35.99, imageUrl: 'path_to_image_2', availability: 'In Stock' },
    { id: 1, name: 'Product 9', description: 'Description for Product 1', price: 29.99, imageUrl: 'path_to_image_1', availability: 'In Stock' },
    { id: 2, name: 'Product 10', description: 'Description for Product 2', price: 35.99, imageUrl: 'path_to_image_2', availability: 'In Stock' },
    // ... Add more products up to id: 10
  ];

  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="product-detail-page">
      <h1>Our Products</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <h2>{product.name}</h2>
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Availability: {product.availability}</p>
            <button onClick={addToCart}>Add to Cart</button>
          </div>
        ))}
      </div>
      <p>Items in Cart: {cartCount}</p>
    </div>
  );
}


