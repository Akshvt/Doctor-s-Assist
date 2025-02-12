import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* Background Layer with Blur */}
      <div className="background-layer"></div>

      {/* Content Layer (Text and Buttons) */}
      <div className="home-page-content">
        <h1>Welcome to Doctor's Aid</h1>
        
        {/* Container with button and "Please select" text */}
        <div className="button-box">
          <p className="select-text">You are a.....</p>
          <div className="button-container">
            <button className="doctor-btn" onClick={() => navigate("/doctor-login")}>
              Doctor
            </button>
            <button className="patient-btn" onClick={() => navigate("/patient")}>
              Patient
            </button>
            <button className="staff-btn" onClick={() => navigate("/staff-home")}>
              Staff Member
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

