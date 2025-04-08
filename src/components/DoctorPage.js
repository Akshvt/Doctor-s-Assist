import React from "react";
import Sidebar from "./Sidebar"; // Import Sidebar
import "../styles/DoctorPage.css"; // Ensure CSS is linked for the Doctor page styling
{/* <img src="/logo192.png" alt="Doctor's Aid Logo" className="sidebar-logo" /> */}


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
          
        </div>
      </header>
    </div>
  );
};

export default DoctorPage;
