// src/components/PatientMainPage.js
import React from "react";
import { useNavigate } from "react-router-dom";

const PatientMainPage = () => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate("/saved-patient-info");
  };

  const handleAppointmentsClick = () => {
    navigate("/appointments");
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .patient-btn {
            margin: 0 20px;
            padding: 16px 36px;
            font-size: 20px;
            border-radius: 12px;
            border: none;
            cursor: pointer;
            color: white;
            transition: transform 0.2s, background-color 0.3s;
          }

          .patient-btn:hover {
            transform: scale(1.05);
            filter: brightness(0.9);
          }

          .details-btn {
            background-color: #4CAF50;
          }

          .appointments-btn {
            background-color: #2196F3;
          }
        `}
      </style>

      <h1 style={styles.heading}>Welcome to Patient's Page</h1>
      

      <div>
        <button
          className="patient-btn details-btn"
          onClick={handleDetailsClick}
        >
          Patient Details
        </button>

        <button
          className="patient-btn appointments-btn"
          onClick={handleAppointmentsClick}
        >
          Appointments
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    animation: "gradientAnimation 15s ease infinite",
    background: "linear-gradient(-45deg, #e3ffe7, #d9e7ff, #ffe3e3, #f6f0ff)",
    backgroundSize: "400% 400%",
    padding: "20px",
  },
  heading: {
    fontSize: "36px",
    marginBottom: "10px",
    color: "#333",
  },
  subtext: {
    fontSize: "20px",
    marginBottom: "40px",
    color: "#555",
  },
};

export default PatientMainPage;
