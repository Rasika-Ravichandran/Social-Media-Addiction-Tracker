import React from "react";
import "./About.css";

function About() {
  return (
    <section 
  className="about" 
  id="about"
  data-aos="fade-up"
>

      <div className="about-image">

        <div className="about-circle">
          🌱
        </div>

      </div>


      <div className="about-content">

        <p className="section-tag">
          ABOUT SMART CITY
        </p>


        <h2>
          Creating cleaner communities with smart technology.
        </h2>


        <p>
          Our Smart City Cleaning Portal helps citizens report
          cleanliness issues, connect with authorities, and track
          cleaning activities easily.
        </p>


        <p>
          Together, we can build a healthier, greener, and smarter
          environment for everyone.
        </p>


        <button>
          LEARN MORE
        </button>

      </div>

    </section>
  );
}

export default About;