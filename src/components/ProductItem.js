import React from 'react';
import '../css/ProductItem.css'


const ProductItem = ({ product }) => {

  return (
    <div className="Product">
      <img src={product.image} alt={product.name} width="200" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>MRP: {product.price}</p>
    </div>
  );
};

export default ProductItem;
