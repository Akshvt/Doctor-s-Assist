// Profile.js
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "../styles/Profile.css";

const Profile = () => {
  const [form, setForm] = useState({
    name: "Dr. John Doe",
    specialization: "Cardiologist",
    email: "john.doe@example.com",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile submitted:", form);
  };

  return (
    <div className="main-container">
      <Sidebar />
      <div className="content-container">
        <h1>Profile</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input name="name" value={form.name} onChange={handleChange} />
          </label>
          <label>
            Specialization:
            <input
              name="specialization"
              value={form.specialization}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input name="email" value={form.email} onChange={handleChange} />
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
