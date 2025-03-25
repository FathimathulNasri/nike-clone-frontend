import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ProductList from '../components/ProductList';
import '../css/AdminDashboard.css';


const AdminProductList = () => {
  

  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="dashboard">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default AdminProductList;
