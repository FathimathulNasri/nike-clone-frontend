// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';


const Home = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get('https://nike-clone-backend-nahc.onrender.com/api/products/');
  //       setProducts(response.data);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  return (
    <div className="card-container">  
        <Hero />
        <CategorySection />
    </div>
  );
};

export default Home;
