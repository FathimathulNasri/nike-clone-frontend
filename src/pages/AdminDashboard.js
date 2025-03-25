import React from 'react';
import Header from '../pages/Header';
import Sidebar from '../pages/Sidebar';
import '../css/AdminDashboard.css';

const AdminDashboard = () => {
  

  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="dashboard">
          <h1>Welcome to the Admin Dashboard</h1>
          </div>
        </div>
      </div>
  );
};

export default AdminDashboard;
