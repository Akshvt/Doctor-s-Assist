// Profile.js
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import "../styles/Doctor_Profile.css";

const Doctor_Profile = () => {
  const [doctor, setDoctor] = useState({
    D_Id: "D123",
    First_Name: "John",
    Last_Name: "Doe",
    Email: "john.doe@example.com",
    Specialty: "Cardiologist",
    Phone: "+1-234-567-8901",
  });

  // Simulating data fetch from backend
  useEffect(() => {
    // TODO: Replace with actual API call
    // fetchDoctorProfile().then(data => setDoctor(data));
  }, []);

  return (
    <div className="main-container">
      <Sidebar />
      <div className="profile-container">
        <h1>Doctor Profile</h1>
        <div className="profile-info">
          <p><strong>Doctor ID:</strong> {doctor.D_Id}</p>
          <p><strong>First Name:</strong> {doctor.First_Name}</p>
          <p><strong>Last Name:</strong> {doctor.Last_Name}</p>
          <p><strong>Email:</strong> {doctor.Email}</p>
          <p><strong>Specialty:</strong> {doctor.Specialty}</p>
          <p><strong>Phone:</strong> {doctor.Phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Doctor_Profile;
