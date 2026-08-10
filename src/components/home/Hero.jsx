import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero-cleaning.jpg";
import smartCityImage from "../../assets/images/hero-cleaning.jpg";
function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <p className="hero-tag">
          YOUR CLEAN CITY PARTNER
        </p>


        <h1>
          Creating a Cleaner
          <br />
          Smarter City
        </h1>


        <p className="hero-description">
          Report cleanliness issues, track complaints,
          and work together to build a cleaner and
          healthier community.
        </p>


        <div className="hero-buttons">

          <Link to="/register" className="primary-btn">
            Report Issue
          </Link>


          <Link to="/contact" className="secondary-btn">
            Contact Us
          </Link>

        </div>

      </div>
      <div className="hero-image">

  <img 
    src={smartCityImage}
    alt="Smart City"
  />

</div>
    </section>
  );
}

export default Hero;