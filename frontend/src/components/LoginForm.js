import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

import Google from '../assets/images/Google.svg';
import Apple from '../assets/images/Apple.svg';

function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevents the form from submitting and reloading the page
    // In a real app, you would handle authentication here
    navigate('/home'); // This navigates the user to the /home URL
  };

  const toggleForm = () => {
    setIsLogin(prevIsLogin => !prevIsLogin);
  };

  return (
    <div className="login-form-container">
      <div className="auth-nav">
        <button
          className={`nav-button ${isLogin ? 'active' : ''}`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={`nav-button ${!isLogin ? 'active' : ''}`}
          onClick={() => setIsLogin(false)}
        >
          Sign Up
        </button>
      </div>

     <div className="form-card">
      {isLogin ? (
        // Login Form
        <form className="auth-form" onSubmit={handleLogin}>
          <div className="input-group">
           <div className="input-header">
            <label htmlFor="email">Email address</label><br/> 
           </div> 
            <input type="email" id="email" placeholder="Enter your email address" />
          </div>
          <div className="input-group">
           <div className="input-header">
            <label htmlFor="password">Password</label>
            <a href="#" className="forgot-password">Forgot password?</a>
           </div>  
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="auth-button signup-login-button">Log In</button>
        </form>
      ) : (
        // Sign-Up Form
        <form className="auth-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" placeholder="Enter your full name" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" placeholder="Enter your email address" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="Re-enter your password" />
          </div>
          <button type="submit" className="auth-button signup-login-button">Sign Up</button>
        </form>
      )}
     </div> 

      <div className="or-separator">
        <span>OR</span>
      </div>

      <button className="social-button google">
        <img src={Google} alt="Google" />
        Continue with Google
      </button>
      <button className="social-button apple">
        <img src={Apple} alt="Apple" />
        Continue with Apple
      </button>

      <div className="signup-text">
        Don't have an account yet?{' '}
        <span className="toggle-link" onClick={() => setIsLogin(false)}>
          Sign up
        </span>
      </div>
    </div>
  );
}



export default LoginForm;