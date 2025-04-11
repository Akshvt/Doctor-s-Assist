import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PatientPage.css";

const PatientPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/patient-main");
  };

  return (
    <div className="patient-page">
      <section className="hero">
        <h1>Welcome to Doctor's Aid</h1>
        <p>Your trusted healthcare assistant</p>
      </section>

      <section className="key-features">
        <h2>Key Features</h2>
        <div className="features">
          <div className="feature">Patient Data Security</div>
          <div className="feature">Help Maintaining Records</div>
          <div className="feature">Virtual Consultation</div>
          <div className="feature">Provide Assistance</div>
        </div>
      </section>

      <section className="login-section">
        <h3>Login</h3>
        <form className="login-form" onSubmit={handleLogin}>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </section>

      <footer className="footer">
        <p>© 2024 Doc Assist. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default PatientPage;
