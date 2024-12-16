// Appointments.js
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "../styles/Appointments.css";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  // Dummy data (you can replace this with real data fetching from the backend)
  useEffect(() => {
    const data = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      patientName: `Patient ${i + 1}`,
      date: "2024-12-15",
      time: "10:00 AM",
      reason: "General Checkup",
    }));
    setAppointments(data);
  }, []);

  return (
    <div className="main-container">
      <Sidebar />
      <div className="content-container">
        <h1>Appointments</h1>
        <table>
          <thead>
            <tr>
              <th>SNo.</th>
              <th>Patient Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt) => (
              <tr key={appt.id}>
                <td>{appt.id}</td>
                <td>{appt.patientName}</td>
                <td>{appt.date}</td>
                <td>{appt.time}</td>
                <td>{appt.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;
