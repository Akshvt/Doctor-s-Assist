import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Staff_Login_Page.css";

const Staff_Login_Page = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const validateUsername = (username) => {
    return username.length >= 6;
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleLogin = () => {
    if (!validateUsername(username)) {
      alert("Username must be at least 6 characters long.");
      return;
    }

    if (!validatePassword(password)) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    navigate('/staff-home');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

return (
  <div className="login-page">
    <div className="background-layer"></div>
    <div className="login-container">
      <h2>Staff Login</h2>
      <div className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
          className="login-input"
        />
        <button onClick={handleLogin} className="login-btn">Login</button>
      </div>
    </div>
  </div>
);
};

export default Staff_Login_Page;
