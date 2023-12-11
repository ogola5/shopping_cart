import React from 'react';
import ProductDetailPage from './ProductDetailPage'; 
import '../styles/home.css';


export default function HomePage({ products }) {
  return (
    <div className="home-page">
      <h1>Welcome to Our Store</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductDetailPage key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

