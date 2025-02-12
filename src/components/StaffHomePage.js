import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/StaffHomePage.css";


const StaffHomePage = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="staff-home">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo-container">
          <img src="/logo192.png" alt="Logo" className="logo" />
          <h2 className="site-name">Doc Assist</h2>
          <button className="sidebar-btn" onClick={() => navigate("/staff-home")}>
          Home
        </button>

        <button className="sidebar-btn" onClick={() => navigate("/saved-patient-info")}>
          Patients Detail
        </button>

        <button className="sidebar-btn" onClick={() => navigate("/staff-appointments")}>
          Appointments
        </button>

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
          {/* Records Entry Button with Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="staff-btn">
              Records Entry ⬇
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <button className="dropdown-item" onClick={() => navigate("/records-ipd")}>
                  Inpatient Department (IPD)
                </button>
                <button className="dropdown-item" onClick={() => navigate("/records-opd")}>
                  Outpatient Department (OPD)
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

export default StaffHomePage;
