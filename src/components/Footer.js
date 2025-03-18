// components/Footer.js
import React from 'react';
import logo from '../assets/nike.png'
import '../css/Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img
            src={logo} // Nike logo
            alt="Nike Logo"
            className="footer-logo-img"
          />
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com/nike" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/nike" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com/nike" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Nike, Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
