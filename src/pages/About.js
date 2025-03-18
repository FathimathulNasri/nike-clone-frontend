// components/AboutPage.js
import React from 'react';
import '../css/About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Nike Store</h1>
      </div>
      <div className="about-content">
        <p className="about-description">
          Welcome to the Nike Store, where we offer the latest and greatest in sportswear, footwear, and accessories. Whether you're an athlete or a fan, we have everything you need to perform your best and stay stylish.
        </p>
        
        <h2>Our History</h2>
        <p>
          Nike was founded in 1964 by Bill Bowerman and Phil Knight under the name "Blue Ribbon Sports." In 1971, the company changed its name to Nike, after the Greek goddess of victory. Over the years, Nike has become a global leader in sportswear, known for innovation, quality, and supporting athletes around the world.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to bring inspiration and innovation to every athlete in the world. We believe that if you have a body, you are an athlete. We aim to create products that help people of all ages and abilities reach their full potential and inspire them to push the limits.
        </p>

        <h2>Our Vision</h2>
        <p>
          Our vision is to create a sustainable future for sport and athletic performance. We aim to lead the way in sustainable innovation, to create products that not only perform well but are also better for the environment and the communities where we live and work.
        </p>
      </div>
    </div>
  );
};

export default About;
