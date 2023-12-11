import React from 'react';
import { Link } from 'react-router-dom';
import ProductDetailPage from './ProductDetailPage'; 
import '../styles/home.css';

export default function HomePage({ products }) {

    
    if (!products || products.length === 0) {
        return <div>No products found.</div>;
    }

    return (
        <div className="home-page">
            <h1>Welcome to Our Store</h1>
            <div>
                <Link to="/cart">Go to Cart</Link>
                <Link to="/checkout">Go to Checkout</Link>
            </div>
            <div className="product-list">
                {products.map(product => (
                    <ProductDetailPage key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
