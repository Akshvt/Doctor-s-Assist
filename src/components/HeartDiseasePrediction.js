// import React, { useState } from "react";
// import "../styles/HeartDiseasePrediction.css"; // Import CSS for styling

// const HeartDiseasePrediction = () => {
//   const [formData, setFormData] = useState({
//     age: "",
//     gender: "",
//     chestPainType: "",
//     restingBP: "",
//     cholesterol: "",
//     fastingBloodSugar: "",
//     restingECG: "",
//     maxHeartRate: "",
//     exerciseAngina: "",
//     oldpeak: "",
//     slope: "",
//   });

//   const [prediction, setPrediction] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data Submitted:", formData);
//     setPrediction("Prediction result will be displayed here.");
//   };

//   return (
//     <div className="prediction-container">
//       <h2 className="form-title">Heart Disease Prediction</h2>
//       <form className="prediction-form" onSubmit={handleSubmit}>
//         <label>Age:</label>
//         <input type="number" name="age" value={formData.age} onChange={handleChange} required />

//         <label>Gender:</label>
//         <select name="gender" value={formData.gender} onChange={handleChange} required>
//           <option value="">Select</option>
//           <option value="1">Male</option>
//           <option value="0">Female</option>
//         </select>

//         <label>Chest Pain Type:</label>
//         <select name="chestPainType" value={formData.chestPainType} onChange={handleChange} required>
//           <option value="">Select</option>
//           <option value="1">Typical Angina</option>
//           <option value="2">Atypical Angina</option>
//           <option value="3">Non-Anginal Pain</option>
//           <option value="4">Asymptomatic</option>
//         </select>

//         <label>Resting Blood Pressure:</label>
//         <input type="number" name="restingBP" value={formData.restingBP} onChange={handleChange} required />

//         <label>Cholesterol:</label>
//         <input type="number" name="cholesterol" value={formData.cholesterol} onChange={handleChange} required />

//         <label>Fasting Blood Sugar - 120 mg/dl:</label>
//         <select name="fastingBloodSugar" value={formData.fastingBloodSugar} onChange={handleChange} required>
//           <option value="">Select</option>
//           <option value="1">Yes</option>
//           <option value="0">No</option>
//         </select>

//         <label>Resting ECG:</label>
//         <select name="restingECG" value={formData.restingECG} onChange={handleChange} required>
//           <option value="">Select</option>
//           <option value="0">Normal</option>
//           <option value="1">ST-T Wave Abnormality</option>
//           <option value="2">Left Ventricular Hypertrophy</option>
//         </select>

//         <label>Max Heart Rate:</label>
//         <input type="number" name="maxHeartRate" value={formData.maxHeartRate} onChange={handleChange} required />

//         <label>Exercise Induced Angina:</label>
//         <select name="exerciseAngina" value={formData.exerciseAngina} onChange={handleChange} required>
//           <option value="">Select</option>
//           <option value="1">Yes</option>
//           <option value="0">No</option>
//         </select>

//         <label>Oldpeak (ST Depression):</label>
//         <input type="number" step="0.1" name="oldpeak" value={formData.oldpeak} onChange={handleChange} required />

//         <label>Slope of Peak Exercise ST Segment:</label>
//         <select name="slope" value={formData.slope} onChange={handleChange} required>
//           <option value="">Select</option>
//           <option value="1">Upsloping</option>
//           <option value="2">Flat</option>
//           <option value="3">Downsloping</option>
//         </select>

//         <button type="submit" className="predict-btn">Predict</button>
//       </form>

//       <h3 className="prediction-result">{prediction}</h3>
//     </div>
//   );
// };

// export default HeartDiseasePrediction;

import React, { useState } from "react";
import "../styles/HeartDiseasePrediction.css"; // Import the CSS

const HeartDiseasePrediction = () => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    chestPain: "",
    restingBP: "",
    cholesterol: "",
    fastingBloodSugar: "",
    restingECG: "",
    maxHeartRate: "",
    exerciseAngina: "",
    oldPeak: "",
    slope: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="heart-disease-container">
      <form className="heart-disease-form" onSubmit={handleSubmit}>
        <h2>Heart Disease Prediction</h2>

        <label>Age</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} required />

        <label>Gender</label>
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <label>Chest Pain Type</label>
        <select name="chestPain" value={formData.chestPain} onChange={handleChange} required>
          <option value="">Select Type</option>
          <option value="1">Typical Angina</option>
          <option value="2">Atypical Angina</option>
          <option value="3">Non-Anginal Pain</option>
          <option value="4">Asymptomatic</option>
        </select>

        <label>Resting BP</label>
        <input type="number" name="restingBP" value={formData.restingBP} onChange={handleChange} required />

        <label>Cholesterol</label>
        <input type="number" name="cholesterol" value={formData.cholesterol} onChange={handleChange} required />

        <label>Fasting Blood Sugar (1 = True, 0 = False)</label>
        <select name="fastingBloodSugar" value={formData.fastingBloodSugar} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="1">True</option>
          <option value="0">False</option>
        </select>

        <label>Resting ECG</label>
        <select name="restingECG" value={formData.restingECG} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="0">Normal</option>
          <option value="1">ST-T Wave Abnormality</option>
          <option value="2">Left Ventricular Hypertrophy</option>
        </select>

        <label>Max Heart Rate</label>
        <input type="number" name="maxHeartRate" value={formData.maxHeartRate} onChange={handleChange} required />

        <label>Exercise Angina (1 = Yes, 0 = No)</label>
        <select name="exerciseAngina" value={formData.exerciseAngina} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>

        <label>Oldpeak (ST Depression)</label>
        <input type="number" step="0.1" name="oldPeak" value={formData.oldPeak} onChange={handleChange} required />

        <label>Slope</label>
        <select name="slope" value={formData.slope} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="1">Upsloping</option>
          <option value="2">Flat</option>
          <option value="3">Downsloping</option>
        </select>

        <button type="submit">Predict</button>
      </form>
    </div>
  );
};

export default HeartDiseasePrediction;

