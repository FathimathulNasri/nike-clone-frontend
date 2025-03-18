// frontend/src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/ProductList.css'

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products/')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="product-list">
      <h1>Products</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product._id} className="product-item">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>${product.price}</span>
            <Link to={`/view-details/${product._id}`}>View Details</Link>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;