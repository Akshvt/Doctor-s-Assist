import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/DoctorLoginPage.css";

const DoctorLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      navigate('/doctor');
    }
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
        <h2>Doctor Login</h2>
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
            onKeyDown={handleKeyDown}  // Detect Enter key
            className="login-input"
          />
          <button onClick={handleLogin} className="login-btn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorLoginPage;
