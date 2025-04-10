import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Staff_Main_Page.css";

const Staff_Main_Page = () => {
  const navigate = useNavigate();
  const [recordsDropdownOpen, setRecordsDropdownOpen] = useState(false);
  const [predictionDropdownOpen, setPredictionDropdownOpen] = useState(false);

  return (
    <div className="staff-home">
      {/* Sidebar / Nav Bar */}
      <div className="sidebar">
        <div className="logo-container">
          <img src="/logo192.png" alt="Logo" className="logo" />
          <h2 className="site-name">Doc Assist</h2>

          <button className="sidebar-btn" onClick={() => navigate("/staff-home")}>
            Home
          </button>

          <button onClick={() => navigate("/staff-profile")} className="sidebar-btn">
            View Profile
          </button>

          <button className="sidebar-btn" onClick={() => navigate("/saved-patient-info")}>
            Patients Detail
          </button>

          <button className="sidebar-btn" onClick={() => navigate("/staff-appointments")}>
            Appointments
          </button>

          {/* Prediction Dropdown in Sidebar */}
          <div
            className="dropdown"
            onMouseEnter={() => setPredictionDropdownOpen(true)}
            onMouseLeave={() => setPredictionDropdownOpen(false)}
          >
            <button className="sidebar-btn">
              Prediction ⬇
            </button>
            {predictionDropdownOpen && (
              <div className="dropdown-menu">
                <button className="dropdown-item" onClick={() => navigate("/prediction/heart-diseases")}>
                  Heart Diseases
                </button>
                <button className="dropdown-item" onClick={() => navigate("/prediction/diabetes")}>
                  Diabetes
                </button>
              </div>
            )}
          </div>

          <button className="sidebar-btn logout" onClick={() => navigate("/logout")}>
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="circle-container">
          <h1 className="welcome-text">Welcome, Staff Member!</h1>
        </div>
        <p className="sub-text">Manage records and appointments efficiently.</p>

        <div className="button-container">
          {/* Records Entry Dropdown remains in Main Content */}
          <div
            className="dropdown"
            onMouseEnter={() => setRecordsDropdownOpen(true)}
            onMouseLeave={() => setRecordsDropdownOpen(false)}
          >
            <button className="staff-btn">
              Records Entry ⬇
            </button>
            {recordsDropdownOpen && (
              <div className="dropdown-menu">
                <button className="dropdown-item" onClick={() => navigate("/ipd-records")}>
                  Inpatient Department (IPD)
                </button>
              </div>
            )}
          </div>

          <button className="staff-btn" onClick={() => navigate("/staff-patient-info")}>
            Patient Information
          </button>
          <button className="staff-btn" onClick={() => navigate("/book-appointment")}>
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Staff_Main_Page;
