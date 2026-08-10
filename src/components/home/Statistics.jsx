import React from "react";
import "./Statistics.css";
import statisticsData from "../../data/statisticsData";

function Statistics() {
  return (
    <section className="statistics" id="statistics">
      <p className="section-tag" data-aos="fade-up">
        OUR IMPACT
      </p>

      <h2 className="section-title" data-aos="fade-up">
        Making Cities Cleaner Together
      </h2>

      <div className="statistics-container">
        {statisticsData.map((item, index) => (
          <div
            className="stat-card"
            key={item.id}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <h3>{item.number}</h3>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Statistics;