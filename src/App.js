import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import AdminDashboard from './pages/AdminDashboard';
import AddProductsAdmin from './pages/AddProductsAdmin';
import AdminProductList from './pages/AdminProductList';
import About from './pages/About';
import ContactPage from './components/ContactPage';
import CategoryProductList from './components/CategoryProductList';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.css';
import Cart from './components/Cart';
import UsersList from './pages/UsersList';
import EditProduct from './pages/EditProduct';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/category/:category" element={<CategoryProductList />} />
        <Route path="/product-list" element={<AdminProductList />} />
        <Route path="/view-details/:id" element={<ProductDetail />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/add-products" element={<AddProductsAdmin />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/editProduct/:id' element={<EditProduct/>} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
