import React, { useState } from 'react';
import '../styles/product.css';
export default function ProductDetailPage() {
  // Sample array of products with unique IDs and dummy image paths
  const products = [
    // Add 10 products here with id, name, description, price, imageUrl, availability
    {
      id: 1,
      name: 'Example Product',
      description: 'This is a detailed description of the Example Product.',
      price: 29.99,
      imageUrl: 'path_to_dummy_image', // replace with your image path
      availability: 'In Stock'
    },
    {
      id: 1,
      name: 'Example Product',
      description: 'This is a detailed description of the Example Product.',
      price: 29.99,
      imageUrl: 'path_to_dummy_image', // replace with your image path
      availability: 'In Stock'
    },
    {
      id: 1,
      name: 'Example Product',
      description: 'This is a detailed description of the Example Product.',
      price: 29.99,
      imageUrl: 'path_to_dummy_image', // replace with your image path
      availability: 'In Stock'
    },
    {
      id: 1,
      name: 'Example Product',
      description: 'This is a detailed description of the Example Product.',
      price: 29.99,
      imageUrl: 'path_to_dummy_image', // replace with your image path
      availability: 'In Stock'
    },
    {
      id: 1,
      name: 'Example Product',
      description: 'This is a detailed description of the Example Product.',
      price: 29.99,
      imageUrl: 'path_to_dummy_image', // replace with your image path
      availability: 'In Stock'
    },
    {
      id: 1,
      name: 'Example Product',
      description: 'This is a detailed description of the Example Product.',
      price: 29.99,
      imageUrl: 'path_to_dummy_image', // replace with your image path
      availability: 'In Stock'
    },
    {
      id: 1,
      name: 'Example Product',
      description: 'This is a detailed description of the Example Product.',
      price: 29.99,
      imageUrl: 'path_to_dummy_image', // replace with your image path
      availability: 'In Stock'
    },
    {
      id: 1,
      name: 'Example Product',
      description: 'This is a detailed description of the Example Product.',
      price: 29.99,
      imageUrl: 'path_to_dummy_image', // replace with your image path
      availability: 'In Stock'
    },
    {
      id: 1,
      name: 'Example Product',
      description: 'This is a detailed description of the Example Product.',
      price: 29.99,
      imageUrl: 'path_to_dummy_image', // replace with your image path
      availability: 'In Stock'
    },
    {
      id: 1,
      name: 'Example Product',
      description: 'This is a detailed description of the Example Product.',
      price: 29.99,
      imageUrl: 'path_to_dummy_image', // replace with your image path
      availability: 'In Stock'
    }
  ];

  // State for tracking cart count
  const [cartCount, setCartCount] = useState(0);

  // Function to handle adding to cart
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

