import React from "react";
import Sidebar from "./Sidebar"; // Import Sidebar
import "../styles/DoctorPage.css"; // Ensure CSS is linked for the Doctor page styling

const DoctorPage = () => {
  return (
    <div className="doctor-page">
      {/* Navbar for Doctor */}
      <Sidebar />

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome, Doctor!</h1>
          <p>Empower your practice with seamless patient management.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </header>
    </div>
  );
};

export default DoctorPage;
