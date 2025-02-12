import React, { useState } from "react";
import "../styles/StaffPatientInfo.css";

const StaffPatientInfo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    surname: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    allergies: "",
    medicalHistory: "",
    aadhar: "",
    address: "",
    emergencyName: "",
    emergencyRelation: "",
    emergencyPhone: "",
    emergencyAddress: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Patient information submitted successfully!");
  };

  return (
    <div className="staff-patient-info-container">
      <h1 className="form-title">Staff - Patient Information Form</h1>
      <form onSubmit={handleSubmit} className="patient-form">
        {/* Personal Information */}
        <h2 className="section-title">Personal Details</h2>
        <div className="form-group">
          <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
          <input type="text" name="middleName" placeholder="Middle Name" onChange={handleChange} />
          <input type="text" name="surname" placeholder="Surname" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <input type="date" name="dob" onChange={handleChange} required />
          <select name="gender" onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <input type="text" name="allergies" placeholder="Allergies (if any)" onChange={handleChange} />
          <textarea name="medicalHistory" placeholder="Medical History" onChange={handleChange}></textarea>
        </div>
        <div className="form-group">
          <input type="text" name="aadhar" placeholder="Aadhar Number" onChange={handleChange} required />
          <textarea name="address" placeholder="Address" onChange={handleChange} required></textarea>
        </div>

        {/* Emergency Contact Information */}
        <h2 className="section-title">Emergency Contact</h2>
        <div className="form-group">
          <input type="text" name="emergencyName" placeholder="Name" onChange={handleChange} required />
          <input type="text" name="emergencyRelation" placeholder="Relation" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <input type="tel" name="emergencyPhone" placeholder="Phone Number" onChange={handleChange} required />
          <textarea name="emergencyAddress" placeholder="Address" onChange={handleChange} required></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default StaffPatientInfo;
