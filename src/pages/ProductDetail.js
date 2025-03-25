// frontend/src/components/ProductDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { useCart } from '../context/CartContext';
import '../css/ProductDetail.css'

const ProductDetail = () => {
const { id } = useParams();
const [product, setProduct] = useState(null);
 const {isLoggedIn} = useAuth()
const {addToCart} = useCart()

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)

      .then(response => {
        setProduct(response.data.product);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  }, [id]);

  const addtocart = async(id) => {
    if(!isLoggedIn){
      alert("please Login For Add To Bag")
    }
    else{
      await addToCart(id)
      
    }
  }

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
        {
          isLoggedIn &&
          <>
           <button onClick={(e)=>addtocart(product._id)} className="cart-button-user">Add to Bag</button>
            <button className="buy-button-user">Buy Now</button>
          </>
        }
       </div>
  );
};

export default ProductDetail;
