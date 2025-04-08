import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SavedPatientInfo.css"; // Import CSS

const SavedPatientInfo = () => {
  const navigate = useNavigate();

  const [patients, setPatients] = useState([
    { id: 1, firstName: "Aman", lastName: "Kumar", dob: "1995-10-12", phone: "9876543210", email: "aman@example.com" },
    { id: 2, firstName: "Neha", lastName: "Singh", dob: "1998-06-25", phone: "8765432109", email: "neha@example.com" },
    { id: 3, firstName: "Rahul", lastName: "Sharma", dob: "2000-03-14", phone: "7654321098", email: "rahul@example.com" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredPatients = patients.filter((patient) =>
    `${patient.firstName} ${patient.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="saved-patient-info">
      <h1>Saved Patient Information</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Patient Table */}
      <table className="patient-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>DOB</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Action</th> {/* View Details Button */}
          </tr>
        </thead>
        <tbody>
          {filteredPatients.length > 0 ? (
            filteredPatients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.firstName} {patient.lastName}</td>
                <td>{patient.dob}</td>
                <td>{patient.phone}</td>
                <td>{patient.email}</td>
                <td>
                  <button
                    className="view-details-btn"
                    onClick={() => navigate(`/patient-details/${patient.id}`)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="no-data">No records found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SavedPatientInfo;
