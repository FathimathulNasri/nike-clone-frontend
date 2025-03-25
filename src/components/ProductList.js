// frontend/src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {deleteProduct} from '../services/productService'
import '../css/ProductList.css'
import {useAuth} from '../context/authContext'

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const {isAdmin} = useAuth()

  useEffect(() => {
    axios.get('http://localhost:5000/api/products/')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

const handleDelete =async(id)=>{
  await deleteProduct(id)
}



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
            <Link to={`/view-details/${product._id}`}><button className="View-button">View Details</button></Link>
            
            {isAdmin && 
              <>
                <Link to={`/editProduct/${product._id}`}><button className="Edit-button">Edit</button></Link>
                <button onClick={()=>handleDelete(product._id)} className="Delete-button">Delete</button>
              </>
            }
            
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;