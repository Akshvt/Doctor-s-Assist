import React from "react";
import "./../styles/NavbarPatient.css";

const NavbarPatient = () => {
  return (
    <nav className="navbar-patient">
      <div className="logo">
        <img
          src="https://cdn.discordapp.com/attachments/1260256752566403174/1296824547349237800/image.png"
          alt="Logo"
        />
        Doc Assist
      </div>
      <ul className="nav-links">
        <li><a href="#personal-info">Personal Info</a></li>
        <li><a href="#medical-history">Medical History</a></li>
        <li><a href="#prediction">Prediction</a></li>
        <li><a href="#requirements">Requirements</a></li>
      </ul>
    </nav>
  );
};

export default NavbarPatient;
