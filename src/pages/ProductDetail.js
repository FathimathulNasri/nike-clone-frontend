// frontend/src/components/ProductDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../css/ProductDetail.css'

const ProductDetail = () => {
const { id } = useParams();
const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)

      .then(response => {
        setProduct(response.data.product);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  }, [id]);

  if (!product) return <div>Loading...</div>;
  

  return (
    <div className="product-info">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span>${product.price}</span>
        <p>Category: {product.category}</p>
        <p className="details">Product Details: {product.product_details}</p>
        <p>Size: {product.sizes}</p>
        <p>Offer: {product.offer}</p>
      </div>
  );
};

export default ProductDetail;
