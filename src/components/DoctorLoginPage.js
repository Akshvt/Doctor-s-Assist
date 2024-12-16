import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/DoctorLoginPage.css";

const DoctorLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // For now, we simply redirect to the Doctor page after "logging in"
    if (username && password) {
      navigate('/doctor');
    }
  };

  return (
    <div className="login-page">
      {/* Background Layer with Blur */}
      <div className="background-layer"></div>

      {/* Login Form Container */}
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
            className="login-input"
          />
          <button onClick={handleLogin} className="login-btn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorLoginPage;
