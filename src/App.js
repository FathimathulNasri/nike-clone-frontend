// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import UserPage from './pages/UserPage';
// import AddProductForm from './pages/AddProductForm';
// import AdminDashboard from './pages/AdminDashboard';
// import ProductsAdmin from './pages/ProductsAdmin';
// import Footer from './components/Footer';
// import About from './pages/About';
// import ContactPage from './components/ContactPage';
// import './css/Styles.css';
// import '@fortawesome/fontawesome-free/css/all.css';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/userpage" element={<UserPage />} />
//         <Route path="/add-product" element={<AddProductForm />} />
//         <Route path="/dashboard" element={<AdminDashboard />} />
//         <Route path="/products" element={<ProductsAdmin />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<ContactPage />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;


// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import UserPage from './pages/UserPage';
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


const App = () => {
  return (
    <Router>
    <div className="app">
      <Navbar />
      {/* <ProductSection /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/category/:category" element={<CategoryProductList />} />
        <Route path="/product-list" element={<AdminProductList />} />
        <Route path="/view-details/:id" element={<ProductDetail />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/add-products" element={<AddProductsAdmin />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path='/cart' element={<Cart/>} />

      </Routes>
      <Footer />
    </div>
    </Router>
  );
};

export default App;
