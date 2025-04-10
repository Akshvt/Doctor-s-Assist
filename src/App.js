
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Doctor_Login_Page from "./components/Doctor_Login_Page";
import Staff_Login_Page from "./components/Staff_Login_Page";
import Doctor_Main_Page from "./components/Doctor_Main_Page";
import PatientPage from "./components/PatientPage";
import Appointments from "./components/Appointments_View_Doctor";
import PatientInfo from "./components/PatientInfo";
import Doctor_Profile from "./components/Doctor_Profile";
import Logout from "./components/Logout";
import Staff_Main_Page from "./components/Staff_Main_Page";
import StaffProfile from "./components/Staff_Profile";
import Appointments_Detail_Form from "./components/Appointments_Detail_Form";
// import Patient_Detail_Form from "./components/Patient_Detail_Form";
import Appointments_View_Staff from "./components/Appointments_View_Staff";
import SavedPatientInfo from "./components/Patient_Details_View";
import Patient_Detail_Form from "./components/Patient_Detail_Form";
import Heart_Prediction from "./components/Heart_Prediction";  // New Import
import Diabetic_Prediction from "./components/Diabetic_Prediction";  // New Import
import OPDRecords from "./components/OPDRecords"; 
import IPD_Records_Form from './components/IPD_Records_Form';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Existing Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/doctor-login" element={<Doctor_Login_Page />} />
        <Route path="/staff-login" element={<Staff_Login_Page />} /> 
        <Route path="/doctor" element={<Doctor_Main_Page />} />
        <Route path="/patient" element={<PatientPage />} />

        {/* New Routes */}
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/patients" element={<PatientInfo />} />
        <Route path="/profile" element={<Doctor_Profile />} />
        <Route path="/logout" element={<Logout />} />

        {/* Staff Pages */}
        <Route path="/staff-home" element={<Staff_Main_Page />} />
        <Route path="/staff-patient-info" element={<Patient_Detail_Form />} />
        <Route path="/book-appointment" element={<Appointments_Detail_Form />} />
        <Route path="/staff-appointments" element={<Appointments_View_Staff />} />
        <Route path="/saved-patient-info" element={<SavedPatientInfo />} />
        {/* <Route path="/patient-detail/:id" element={<Patient_Detail_Form />} /> */}
        <Route path="/prediction/heart-diseases" element={<Heart_Prediction />} />
        <Route path="/prediction/diabetes" element={<Diabetic_Prediction />} />
        <Route path="/opd-records" element={<OPDRecords />} />
        <Route path="/ipd-records" element={<IPD_Records_Form />} />
        <Route path="/staff-profile" element={<StaffProfile />} />


      </Routes>
    </Router>
  );
};

export default App;



