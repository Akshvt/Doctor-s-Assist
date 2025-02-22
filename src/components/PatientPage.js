import React from "react";
import "../styles/PatientPage.css";

const PatientPage = () => {
  return (
    <div className="patient-page">
      <nav className="navbar-patient">
        <div className="logo">
        <img src="/logo192.png" alt="Doctor's Aid Logo" className="sidebar-logo" />
         
          Doc Assist
        </div>
        <ul className="nav-links">
          <li><a href="#personal-info">Personal Info</a></li>
          <li><a href="#medical-history">Medical History</a></li>
          <li><a href="#prediction">Prediction</a></li>
          <li><a href="#requirements">Requirements</a></li>
        </ul>
      </nav>

      <section className="hero">
        <h1>Welcome to Doc Assist</h1>
        <p>Your trusted healthcare assistant</p>
        <div className="cta-buttons">
          <button className="btn">Sign Up Now!</button>
          <button className="btn">Book Appointment</button>
        </div>
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
        <form className="login-form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
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
