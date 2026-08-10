import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

function Navbar() {
  return (
    <nav className="navbar">

      <NavLink to="/" className="logo">
        SMART<span>CITY</span>
      </NavLink>


      <ul className="nav-links">

        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink to="/login">
            Login
          </NavLink>
        </li>

        <li>
          <NavLink to="/register">
            Register
          </NavLink>
        </li>

      </ul>


      <div className="nav-actions">

        <div className="contact-box">
          <PhoneIcon />
        </div>

        <div className="contact-box">
          <EmailIcon />
        </div>

      </div>

    </nav>
  );
}

export default Navbar;