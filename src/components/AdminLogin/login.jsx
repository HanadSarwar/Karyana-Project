import React, { useState, useEffect, useRef } from 'react';
import './login.css';
import loginDivImg from '../../assets/LoginDiv-Img.png';
import { useNavigate } from 'react-router-dom';

// Input field styles are now handled in the CSS file

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  // Create refs for input fields
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // Focus on email field when component mounts
  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
    return () => {
      // Cleanup if needed
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));  
  };

  function validateEmail(email) {
    // Must contain 'gmail' and end with .gmail, .org, or .com
    const allowedExtensions = ['.gmail', '.org', '.com'];
    const lower = email.toLowerCase();
    if (!lower.includes('gmail')) return false;
    return allowedExtensions.some(ext => lower.endsWith(ext));
  }

  function validatePassword(password) {
    // At least 6 characters, at least one special character, at least one symbol
    if (password.length < 6) return false;
    // Special character: !@#$%^&*()_+[]{}|;:',.<>/?
    const specialChar = /[!@#$%^&*()_+\[\]{}|;:',.<>/?]/;
    // Symbol: any non-alphanumeric (already covered by specialChar)
    return specialChar.test(password);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.email || !formData.password) {
      alert('Please fill in all fields');
      return;
    }
    if (!validateEmail(formData.email)) {
      alert('Email must contain "gmail" and end with .gmail, .org, or .com');
      return;
    }
    if (!validatePassword(formData.password)) {
      alert('Password must be at least 6 characters and contain at least one special character or symbol.');
      return;
    }
    // Check credentials
    if (
      formData.email === 'mohammadhanad896@gmail.com' &&
      formData.password === 'Malik@1'
    ) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/dashboard');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-background">
        <div className="login-box">
          <div className="login-image">
            <img src={loginDivImg} alt="Shopping" />
          </div>
          <div className="login-form">
            <h1>Admin Login</h1>
            <p className="subtitle">Please enter the credentials associated with your account.</p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  ref={emailRef}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={(e) => e.target.select()}
                  placeholder="Enter your email"
                  required
                  autoComplete="username"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  ref={passwordRef}
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  onFocus={(e) => e.target.select()}
                  placeholder="Enter your password"
                  required
                  autoComplete="current-password"
                  className="form-input"
                />
              </div>
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;