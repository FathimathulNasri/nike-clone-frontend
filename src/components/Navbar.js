// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'; // Include styling for the navbar and dropdown
import logo from '../assets/nike.png'
import { BsCart4 } from "react-icons/bs";


const Navbar = () => {
  // State to manage dropdown visibility
  const [isMenDropdownOpen, setMenDropdownOpen] = useState(false);
  const [isWomenDropdownOpen, setWomenDropdownOpen] = useState(false);
  const [isKidsDropdownOpen, setKidsDropdownOpen] = useState(false);

  const toggleMenDropdown = () => setMenDropdownOpen(!isMenDropdownOpen);
  const toggleWomenDropdown = () => setWomenDropdownOpen(!isWomenDropdownOpen);
  const toggleKidsDropdown = () => setKidsDropdownOpen(!isKidsDropdownOpen);

  const handleLogout = () => {
    localStorage.removeItem('token')
  }


  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Nike logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="Nike Logo" className="logo-img" />
        </Link>

        {/* Navbar links */}
        <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
          {/* Men Dropdown */}
          <div className="dropdown" onMouseEnter={toggleMenDropdown} onMouseLeave={toggleMenDropdown}>
            <Link to="#" className="navbar-link">
              Men
            </Link>
            {isMenDropdownOpen && (
              <div className="dropdown-content" >
                <div className="drp">
                    <h2 className="dropdown-heading">Shoes</h2>
                    <Link to="/category/Jordan" className="dropdown-item">Jordan</Link>
                    <Link to="/category/Running" className="dropdown-item">Running</Link>
                    <Link to="/category/Football" className="dropdown-item">Football</Link>
                    <Link to="/category/Slipers-Slides" className="dropdown-item">Slipers and Slides</Link>
                    <Link to="/category/GymandTraining" className="dropdown-item">Gym and Training</Link>
                </div>
                <div className="drp">
                  <h2 className="dropdown-heading">Clothing</h2>
                  <Link to="/category/T-Shirts" className="dropdown-item">T-Shirts</Link>
                  <Link to="/category/Shorts" className="dropdown-item">Shorts</Link>
                  <Link to="/category/PantsandLeggings" className="dropdown-item">Pants and Leggings</Link>
                </div>
                <div className="drp">
                <h2 className="dropdown-heading">Accessories</h2>
                <Link to="/category/BagsandBackpacks" className="dropdown-item">Bags and Backpacks</Link>
                  <Link to="/category/Socks" className="dropdown-item">Socks</Link>
                  <Link to="/category/HatsandHeadwear" className="dropdown-item">Hats and Headwear</Link>

                </div>
              </div>
            )}
          </div>

          {/* Women Dropdown */}
          <div className="dropdown" onMouseEnter={toggleWomenDropdown} onMouseLeave={toggleWomenDropdown}>
            <Link to="#" className="navbar-link">
              Women
            </Link>
            {isWomenDropdownOpen && (
              <div className="dropdown-content" >
              <div className="drp">
              <h2 className="dropdown-heading">Shoes</h2>
                    <Link to="/category/Jordan" className="dropdown-item">Jordan</Link>
                    <Link to="/category/Running" className="dropdown-item">Running</Link>
                    <Link to="/category/Football" className="dropdown-item">Football</Link>
                    <Link to="/category/Slipers-Slides" className="dropdown-item">Slipers and Slides</Link>
                    <Link to="/category/GymandTraining" className="dropdown-item">Gym and Training</Link>
              </div>
              <div className="drp">
                <h2 className="dropdown-heading">Clothing</h2>
                 <Link to="/category/T-Shirts" className="dropdown-item">T-Shirts</Link>
                 <Link to="/category/Shorts" className="dropdown-item">Shorts</Link>
                 <Link to="/category/PantsandLeggings" className="dropdown-item">Pants and Leggings</Link>              
                 <Link to="/women/maternity" className="dropdown-item">Nike Maternity</Link>
              </div>
              <div className="drp">
                  <h2 className="dropdown-heading">Accessories</h2>
                  <Link to="/category/BagsandBackpacks" className="dropdown-item">Bags and Backpacks</Link>
                  <Link to="/category/Socks" className="dropdown-item">Socks</Link>
                  <Link to="/category/HatsandHeadwear" className="dropdown-item">Hats and Headwear</Link>             
              </div>
            </div>
            )}
          </div>

          {/* Kids Dropdown */}
          <div className="dropdown" onMouseEnter={toggleKidsDropdown} onMouseLeave={toggleKidsDropdown}>
            <Link to="#" className="navbar-link">
              Kids
            </Link>
            {isKidsDropdownOpen && (
              <div className="dropdown-content" >
              <div className="drp">
              <h2 className="dropdown-heading">Shoes</h2>
                    <Link to="/category/Jordan" className="dropdown-item">Jordan</Link>
                    <Link to="/category/Running" className="dropdown-item">Running</Link>
                    <Link to="/category/Football" className="dropdown-item">Football</Link>
              </div>
              <div className="drp">
              <h2 className="dropdown-heading">Clothing</h2>
              <Link to="/category/T-Shirts" className="dropdown-item">Tops and T-Shirts</Link>
              <Link to="/category/Shorts" className="dropdown-item">Shorts</Link>
              <Link to="/category/PantsandLeggings" className="dropdown-item">Pants and Leggings</Link>
              <Link to="/category/HoodiesandSWeatshirts" className="dropdown-item">Hoodies and SWeatshirts</Link>
              <Link to="/category/Jacketsand Glients" className="dropdown-item">Jackets and Glients</Link>
              </div>
              <div className="drp">
              <h2 className="dropdown-heading">Accessories</h2>
              <Link to="/category/BagsandBackpacks" className="dropdown-item">Bags and Backpacks</Link>
                  <Link to="/category/Socks" className="dropdown-item">Socks</Link>
                  <Link to="/category/HatsandHeadwear" className="dropdown-item">Hats and Headwear</Link>              
              </div>
            </div>
            )}
          </div>
          <Link to="/about" className="navbar-link">About Us</Link>
        </div>

        {/* Right-side icons */}
        <div className="navbar-icons">
          <Link to="/cart" className="navbar-icon">
            {/* <img src="/path/to/cart-icon.png" alt="Cart" /> */}
            <BsCart4 style={{color: "white",fontSize:"30px"}}/>
          </Link>
          {
            localStorage.getItem('token')?<Link to="/login" onClick={handleLogout} className="navbar-link">
            LOGOUT      
         </Link>
         :<>
          <Link to="/login" className="navbar-link">
          LOGIN      
       </Link>
          <Link to="/signup" className="navbar-link">
             SIGN UP     
           </Link></>
         }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;