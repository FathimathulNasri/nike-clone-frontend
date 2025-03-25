// src/components/ProductSection.js
import React from 'react';
import '../css/ProductSection.css';
import running from '../assets/running.jpeg'

const ProductSection = () => {
  return (
    <section clasProductsName="products">
      <h2>Shop by Sports</h2>
      <div className="product-list">
        <div className="product-item">
          <img src={running} alt="Product 1" />
          <p> Running</p>
          <button className="buy-now">Buy Now</button>
        </div>
        <div className="product-item">
          <img src="../assets/nike.png" alt="Product 2" />
          <p>Football </p>
          <button className="buy-now">Buy Now</button>
        </div>
        <div className="product-item">
          <img src="../assets/nike.png" alt="Product 2" />
          <p>Product Name</p>
          <button className="buy-now">Buy Now</button>
        </div><div className="product-item">
          <img src="../assets/nike.png" alt="Product 2" />
          <p>Product Name</p>
          <button className="buy-now">Buy Now</button>
        </div><div className="product-item">
          <img src="../assets/nike.png" alt="Product 2" />
          <p>Product Name</p>
          <button className="buy-now">Buy Now</button>
        </div><div className="product-item">
          <img src="../assets/nike.png" alt="Product 2" />
          <p>Product Name</p>
          <button className="buy-now">Buy Now</button>
        </div>
        {/* Add more product items as needed */}
      </div>
    </section>
  );
};

export default ProductSection;
