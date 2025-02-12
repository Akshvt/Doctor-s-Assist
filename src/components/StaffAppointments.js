import React, { useState, useEffect } from "react";
import "../styles/StaffAppointments.css"; // Import CSS

const StaffAppointments = () => {
  // Sample data (Replace this with real data from API)
  const [appointments, setAppointments] = useState([
    { id: 1, name: "Amit Kumar", date: "2025-02-15", time: "10:00 AM", phone: "9876543210" },
    { id: 2, name: "Neha Sharma", date: "2025-02-14", time: "12:30 PM", phone: "7896541230" },
    { id: 3, name: "Rahul Verma", date: "2025-02-14", time: "09:00 AM", phone: "9988776655" },
    { id: 4, name: "Priya Das", date: "2025-02-16", time: "03:00 PM", phone: "9087765432" }
  ]);

  // State for search input
  const [searchTerm, setSearchTerm] = useState("");

  // Sort appointments by date & time
  useEffect(() => {
    const sortedAppointments = [...appointments].sort((a, b) => {
      return new Date(`${a.date} ${a.time}`) - new Date(`${b.date} ${b.time}`);
    });
    setAppointments(sortedAppointments);
  }, []);

  // Filter appointments based on search
  const filteredAppointments = appointments.filter((appointment) =>
    appointment.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="staff-appointments">
      <h1>Booked Appointments</h1>
      
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by Patient Name..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Appointments Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Patient Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.id}</td>
                <td>{appointment.name}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffAppointments;
