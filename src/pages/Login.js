import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../css/Login.css'; // Importing the CSS for styling


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setErrorMessage('Please fill in both fields');
    } else {
      setErrorMessage('');
    try {
        await axios.post('https://nike-clone-backend-nahc.onrender.com/api/auth/login', { email, password}).then(response => {
        // Get the token and role from the response
        const { token, user } = response.data;
  
        // Store token in localStorage (you can also use cookies)
        localStorage.setItem('token', token);

        // Redirect based on role
        if (user.role === 'admin') {
          navigate('/dashboard'); // Redirect to Admin page
        } else {
          navigate('/'); // Redirect to User page(home page)
        }
        })
        
      } catch (err) {
        setErrorMessage(err.message);
      }
      setEmail("");
      setPassword("");
    //   // Perform login logic, such as calling an API to authenticate
    //   axios.post('http://localhost:5000/api/users/login',{email,password})
    //   // Get the token and role from the response
    //   const { token, role } = response.data;
  };

      

  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
