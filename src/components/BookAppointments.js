import React, { useState } from "react";
import "../styles/BookAppointments.css";

const BookAppointments = () => {
  const [formData, setFormData] = useState({
    pId: "",
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    aadhar: "",
    preferredDate: "",
    preferredTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment Booked Successfully!");
  };

  return (
    <div className="appointment-container">
      <h2 className="form-title">Book Appointment</h2>
      <form className="appointment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>P_ID:</label>
          <input type="text" name="pId" value={formData.pId} onChange={handleChange} required />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>First Name:</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Age:</label>
            <input type="number" name="age" value={formData.age} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Phone:</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-group">
          <label>Address:</label>
          <textarea name="address" value={formData.address} onChange={handleChange} required></textarea>
        </div>

        <div className="form-group">
          <label>Aadhar No.:</label>
          <input type="text" name="aadhar" value={formData.aadhar} onChange={handleChange} required />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Preferred Date:</label>
            <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Preferred Time:</label>
            <input type="time" name="preferredTime" value={formData.preferredTime} onChange={handleChange} required />
          </div>
        </div>

        <button type="submit" className="submit-btn">Book Appointment</button>
      </form>
    </div>
  );
};

export default BookAppointments;
