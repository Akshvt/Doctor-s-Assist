// PatientInfo.js
import React from "react";
import Sidebar from "./Sidebar";
import "../styles/PatientInfo.css";

const PatientInfo = () => {
  const patients = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Patient ${i + 1}`,
    dateRegistered: "2024-12-10",
  }));

  const handleUpload = (id) => {
    console.log(`Upload report for Patient ${id}`);
  };

  return (
    <div className="main-container">
      <Sidebar />
      <div className="content-container">
        <h1>Patient Info</h1>
        <ul>
          {patients.map((patient) => (
            <li key={patient.id}>
              {patient.name} (Registered: {patient.dateRegistered}){" "}
              <button onClick={() => handleUpload(patient.id)}>View</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PatientInfo;
