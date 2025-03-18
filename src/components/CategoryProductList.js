import React, { useEffect, useState } from 'react';
import {getProductsByCategory} from '../services/productService'; // Service for fetching data
import '../css/CategoryProductList.css'; // Importing the CSS for styling
import {  useParams, useNavigate} from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { useCart } from '../context/CartContext';

const CategoryProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {isLoggedIn} = useAuth()
  const {category} = useParams()
  const navigate = useNavigate()
  const {addToCart} = useCart()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProductsByCategory(category);
        setProducts(fetchedProducts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  const addtocart = async(id) => {
    if(!isLoggedIn){
      alert("please Login For Add To Bag")
    }
    else{
      await addToCart(id)
      
    }
  }

  return (
    <div className="product-list">
      {loading ? (
        <p>Loading...</p>
      ) : (
        products.map((product) => (
          <div key={product._id} className="product-card" onClick={() =>
            navigate (`/view-details/${product._id}`)
          } >
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <button onClick={(e)=>addtocart(product._id)} className="cart-button">Add to Bag</button>
            <button className="buy-button">Buy Now</button>
          </div>
        ))
      )}
    </div>
  );
};
// onClick={navigate(`/view-details/${product._id}`)}
export default CategoryProductList;
