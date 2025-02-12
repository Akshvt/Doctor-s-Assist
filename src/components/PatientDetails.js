import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/PatientDetails.css"; // Import CSS

const PatientDetails = () => {
  const { id } = useParams();
  
  // Dummy data (Replace with API call)
  const patientsData = {
    1: {
      firstName: "Aman",
      mid: "Raj",
      surname: "Kumar",
      dob: "1995-10-12",
      gender: "Male",
      phone: "9876543210",
      email: "aman@example.com",
      allergies: "None",
      medicalHistory: "Asthma",
      aadhar: "123456789012",
      address: "New Delhi, India",
      emergencyContact: {
        name: "Ravi Kumar",
        relation: "Father",
        phone: "9876543210",
        address: "New Delhi, India",
      },
    },
    // Add other patient records similarly
  };

  const [patient, setPatient] = useState(null);

  useEffect(() => {
    // Fetch patient details using ID (Here using dummy data)
    setPatient(patientsData[id]);
  }, [id]);

  if (!patient) {
    return <h2>Loading patient details...</h2>;
  }

  return (
    <div className="patient-details">
      <h1>Patient Details</h1>
      <div className="patient-card">
        <h2>{patient.firstName} {patient.mid} {patient.surname}</h2>
        <p><strong>DOB:</strong> {patient.dob}</p>
        <p><strong>Gender:</strong> {patient.gender}</p>
        <p><strong>Phone:</strong> {patient.phone}</p>
        <p><strong>Email:</strong> {patient.email}</p>
        <p><strong>Allergies:</strong> {patient.allergies}</p>
        <p><strong>Medical History:</strong> {patient.medicalHistory}</p>
        <p><strong>Aadhar No:</strong> {patient.aadhar}</p>
        <p><strong>Address:</strong> {patient.address}</p>
        <h3>Emergency Contact</h3>
        <p><strong>Name:</strong> {patient.emergencyContact.name}</p>
        <p><strong>Relation:</strong> {patient.emergencyContact.relation}</p>
        <p><strong>Phone:</strong> {patient.emergencyContact.phone}</p>
        <p><strong>Address:</strong> {patient.emergencyContact.address}</p>
      </div>
    </div>
  );
};

export default PatientDetails;
