import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import AddProductForm from './AddProductForm';


const AddProductsAdmin = () => {
  

  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="dashboard">
          <AddProductForm />
        </div>
      </div>
    </div>
  );
};

export default AddProductsAdmin;
