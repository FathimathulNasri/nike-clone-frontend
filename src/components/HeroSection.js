import React from 'react';
import './HeroSection.css'; // External CSS for styling
// import {Link} from 'react-router-dom'

const HeroSection = () => {
  return (
    <div className="hero-container">
    <div className="video-player">
    <iframe width="100%" height="550" margin-top="20px" src="https://www.youtube.com/embed/0K9cDQd27KU"  frameborder="0"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
    </iframe>"
      <div className="hero-content">
        <h1>Just Do It</h1>
        <p>Unleash your potential</p>
           <button>Shop Now</button>
        
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
