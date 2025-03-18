// src/components/Hero.js
import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Just Do It</h1>
        <p>Shop the latest releases from Nike</p>
        <Link to="/view-details/67ce8d91a95db8470b66aa09">
           <button>Shop Now</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
