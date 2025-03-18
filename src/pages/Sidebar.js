import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">Admin Dashboard</div>
      <ul className="sidebar-menu">
     <li><Link className="sidebar-item" to="/dashboard">Dashboard</Link></li> 
      <li><Link className="sidebar-item" to="/product-list">Products List</Link></li>
      <li><Link className="sidebar-item" to="/add-products">Add Products</Link></li>
      {/* <li><Link className="sidebar-item" to="/">Orders</Link></li> */}
      <li> <Link className="sidebar-item" to="/users">Customers</Link></li>
      </ul>
    </div>
    
  );
};

export default Sidebar;
