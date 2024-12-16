import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000); // Redirecting after 3 seconds
  }, [navigate]);

  return (
    <div className="main-container">
      <h2>You have been logged out.</h2>
      <p>Redirecting to homepage...</p>
    </div>
  );
};

export default Logout;
