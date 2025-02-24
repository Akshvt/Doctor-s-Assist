// import React, { useState } from "react";
// import "../styles/DiabetesPrediction.css";

// const DiabetesPrediction = () => {
//   const [formData, setFormData] = useState({
//     pregnancies: "",
//     glucose: "",
//     bloodPressure: "",
//     skinThickness: "",
//     insulin: "",
//     bmi: "",
//     dpf: "",
//     age: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data Submitted:", formData);
//   };

//   return (
//     <div className="form-container">
//       <h2 className="form-title">Diabetes Prediction Form</h2>
//       <form className="prediction-form" onSubmit={handleSubmit}>
//         <div className="input-group">
//           <label>Pregnancies:</label>
//           <input type="number" name="pregnancies" value={formData.pregnancies} onChange={handleChange} required />
//         </div>
//         <div className="input-group">
//           <label>Glucose:</label>
//           <input type="number" name="glucose" value={formData.glucose} onChange={handleChange} required />
//         </div>
//         <div className="input-group">
//           <label>Blood Pressure:</label>
//           <input type="number" name="bloodPressure" value={formData.bloodPressure} onChange={handleChange} required />
//         </div>
//         <div className="input-group">
//           <label>Skin Thickness:</label>
//           <input type="number" name="skinThickness" value={formData.skinThickness} onChange={handleChange} required />
//         </div>
//         <div className="input-group">
//           <label>Insulin:</label>
//           <input type="number" name="insulin" value={formData.insulin} onChange={handleChange} required />
//         </div>
//         <div className="input-group">
//           <label>BMI:</label>
//           <input type="number" step="any" name="bmi" value={formData.bmi} onChange={handleChange} required />
//         </div>
//         <div className="input-group">
//           <label>Diabetes Pedigree Function:</label>
//           <input type="number" step="any" name="dpf" value={formData.dpf} onChange={handleChange} required />
//         </div>
//         <div className="input-group">
//           <label>Age:</label>
//           <input type="number" name="age" value={formData.age} onChange={handleChange} required />
//         </div>
//         <button type="submit" className="submit-btn">Predict</button>
//       </form>
//     </div>
//   );
// };

// export default DiabetesPrediction;


import React, { useState } from "react";
import "../styles/DiabetesPrediction.css"; // Ensure you have the correct path

const DiabetesPrediction = () => {
  const [formData, setFormData] = useState({
    pregnancies: "",
    glucose: "",
    bloodPressure: "",
    skinThickness: "",
    insulin: "",
    bmi: "",
    dpf: "",
    age: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="diabetes-container">
      <div className="form-wrapper">
        <h2>Diabetes Prediction</h2>
        <form className="diabetes-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Pregnancies:</label>
              <input type="number" name="pregnancies" value={formData.pregnancies} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Glucose:</label>
              <input type="number" name="glucose" value={formData.glucose} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Blood Pressure:</label>
              <input type="number" name="bloodPressure" value={formData.bloodPressure} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Skin Thickness:</label>
              <input type="number" name="skinThickness" value={formData.skinThickness} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Insulin:</label>
              <input type="number" name="insulin" value={formData.insulin} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>BMI:</label>
              <input type="number" step="0.1" name="bmi" value={formData.bmi} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Diabetes Pedigree Function:</label>
              <input type="number" step="0.01" name="dpf" value={formData.dpf} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Age:</label>
              <input type="number" name="age" value={formData.age} onChange={handleChange} required />
            </div>
          </div>

          <button type="submit" className="submit-btn">Predict</button>
        </form>
      </div>
    </div>
  );
};

export default DiabetesPrediction;
