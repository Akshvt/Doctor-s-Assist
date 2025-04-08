import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import DoctorLoginPage from "./components/DoctorLoginPage";
import DoctorPage from "./components/DoctorPage";
import PatientPage from "./components/PatientPage";
import Appointments from "./components/Appointments";
import PatientInfo from "./components/PatientInfo";
import Profile from "./components/Profile";
import Logout from "./components/Logout";
import StaffHomePage from "./components/StaffHomePage";
import BookAppointments from "./components/BookAppointments";
import StaffPatientInfo from "./components/StaffPatientInfo";
import StaffAppointments from "./components/StaffAppointments";
import SavedPatientInfo from "./components/SavedPatientInfo";
import PatientDetails from "./components/PatientDetails"; // ✅ Ensure this matches the filename
import HeartDiseasePrediction from "./components/HeartDiseasePrediction";
import DiabetesPrediction from "./components/DiabetesPrediction";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Common Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/doctor-login" element={<DoctorLoginPage />} />
        <Route path="/doctor" element={<DoctorPage />} />
        <Route path="/patient" element={<PatientPage />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/patients" element={<PatientInfo />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/patient-details" element={<SavedPatientInfo />} />

        {/* Staff Routes */}
        <Route path="/staff-home" element={<StaffHomePage />} />
        <Route path="/staff-patient-info" element={<StaffPatientInfo />} />
        <Route path="/book-appointment" element={<BookAppointments />} />
        <Route path="/staff-appointments" element={<StaffAppointments />} />

        {/* Patient Info & Details */}
        <Route path="/saved-patient-info" element={<SavedPatientInfo />} />
        <Route path="/patient-details/:id" element={<PatientDetails />} /> {/* ✅ Route for detail view */}

        {/* Prediction Routes */}
        <Route path="/prediction/heart-diseases" element={<HeartDiseasePrediction />} />
        <Route path="/prediction/diabetes" element={<DiabetesPrediction />} />
      </Routes>
    </Router>
  );
};

export default App;
