import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import HeroSection from '../components/HeroSection';
import Cart from '../components/Cart';
import { CartProvider } from '../context/CartContext';


const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products/');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="card-container">  
        <Hero />
        <CategorySection />
        <HeroSection/>
        
    {/* <CartProvider>
    <div>
      <ProductList products={products} />
      <Cart />
    </div>
    </CartProvider> */}
    </div>
  );
};

export default Home;
