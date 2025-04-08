import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../styles/PatientInfo.css";

const PatientInfo = () => {
  const navigate = useNavigate();

  const [patients] = useState([
    { applicationId: "A001", patientId: "P001", name: "John Doe", date: "2024-12-10" },
    { applicationId: "A002", patientId: "P002", name: "Jane Smith", date: "2024-12-09" },
    { applicationId: "A003", patientId: "P003", name: "Robert Brown", date: "2024-12-11" },
    { applicationId: "A004", patientId: "P004", name: "Emily Davis", date: "2024-12-08" },
    { applicationId: "A005", patientId: "P005", name: "Michael Johnson", date: "2024-12-10" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  const today = formatDate(new Date());
  const yesterday = formatDate(new Date(Date.now() - 86400000));
  const tomorrow = formatDate(new Date(Date.now() + 86400000));

  const getDateLabel = (dateString) => {
    if (dateString === today) return "Today";
    if (dateString === yesterday) return "Yesterday";
    if (dateString === tomorrow) return "Tomorrow";
    return dateString;
  };

  const filteredPatients = patients.filter((patient) => {
    const nameMatch = patient.name.toLowerCase().includes(searchTerm.toLowerCase());
    const dateMatch = selectedDate ? patient.date === selectedDate : true;
    return nameMatch && dateMatch;
  });

  return (
    <div className="main-container">
      <Sidebar />
      <div className="content-container">
        <h1>Patient Info</h1>

        {/* Search and Date Filter */}
        <div className="filter-container">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search by name..."
              className="search-bar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="search-icon">🔍</span>
          </div>

          <div className="date-filter-wrapper">
            <label className="filter-label">View by date:</label>
            <input
              type="date"
              className="date-picker"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
            {selectedDate && (
              <button onClick={() => setSelectedDate("")} className="clear-btn">
                Clear
              </button>
            )}
            {selectedDate && (
              <span className="date-label">
                Showing entries for <strong>{getDateLabel(selectedDate)}</strong>
              </span>
            )}
          </div>
        </div>

        {/* Patient Table */}
        <table className="patient-table">
          <thead>
            <tr>
              <th>Application ID</th>
              <th>Patient ID</th>
              <th>Patient Name</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.length > 0 ? (
              filteredPatients.map((patient, index) => (
                <tr key={index}>
                  <td>{patient.applicationId}</td>
                  <td>{patient.patientId}</td>
                  <td>{patient.name}</td>
                  <td>{patient.date}</td>
                  <td>
                    <button
                      className="view-details-btn"
                      onClick={() => navigate(`/patient-details/${patient.patientId}`)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="no-data">No records found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientInfo;
