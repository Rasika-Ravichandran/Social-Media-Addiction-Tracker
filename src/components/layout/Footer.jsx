import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
  className="footer"
  data-aos="fade-up"
>

      <div className="footer-container">

        <div className="footer-brand">

          <h2>
            SMART<span>CITY</span>
          </h2>

          <p>
            Building cleaner communities through smart
            technology and citizen participation.
          </p>

        </div>


        <div className="footer-links">

          <h3>
            Quick Links
          </h3>

          <ul className="nav-links">

            <li>
            <Link to="/">Home</Link>
            </li>

            <li>
            <Link to="/contact">Contact</Link>
            </li>

            <li>
            <Link to="/login">Login</Link>
            </li>

            <li>
            <Link to="/register">Register</Link>
            </li>

            </ul>

        </div>


        <div className="footer-contact">

          <h3>
            Contact
          </h3>

          <p>
            📞 +91 98765 43210
          </p>

          <p>
            ✉ smartcity@gmail.com
          </p>

        </div>


      </div>


      <div className="copyright">

        © 2026 Smart City Portal. All Rights Reserved.

      </div>


    </footer>
  );
}

export default Footer;