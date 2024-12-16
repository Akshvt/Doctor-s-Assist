import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import DoctorLoginPage from "./components/DoctorLoginPage";
import DoctorPage from "./components/DoctorPage";
import PatientPage from "./components/PatientPage";
import Appointments from "./components/Appointments"; // New route
import PatientInfo from "./components/PatientInfo"; // New route
import Profile from "./components/Profile"; // New route
import Logout from "./components/Logout"; // New route

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Existing Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/doctor-login" element={<DoctorLoginPage />} />
        <Route path="/doctor" element={<DoctorPage />} />
        <Route path="/patient" element={<PatientPage />} />

        {/* New Routes */}
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/patients" element={<PatientInfo />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
};

export default App;
