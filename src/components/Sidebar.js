import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src="https://cdn.discordapp.com/attachments/1260256752566403174/1317872781467324416/logo1.png?ex=6760442b&is=675ef2ab&hm=16fb03a9898a9dea53236e3eeb7318a622c96caa3482e39fa0166a56cb65628e&" alt="Doctor's Aid Logo" className="logo" />
        <h2>Doctor's Aid</h2>
      </div>
      <nav className="nav-menu">
        <NavLink
          to="/doctor"
          className="nav-item"
          activeClassName="active"
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/appointments"
          className="nav-item"
          activeClassName="active"
        >
          Appointments
        </NavLink>
        <NavLink
          to="/patients"
          className="nav-item"
          activeClassName="active"
        >
          Patient Info
        </NavLink>
        <NavLink
          to="/profile"
          className="nav-item"
          activeClassName="active"
        >
          Profile
        </NavLink>
        <NavLink
          to="/logout"
          className="nav-item"
        >
          Logout
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
