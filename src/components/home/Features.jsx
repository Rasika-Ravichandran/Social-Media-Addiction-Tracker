import React from "react";
import "./Features.css";
import featuresData from "../../data/featuresData";

function Features() {
  return (
    <section className="features" id="features">

      <p
        className="section-tag"
        data-aos="fade-up"
      >
        WHY CHOOSE US
      </p>

      <h2
        className="section-title"
        data-aos="fade-up"
      >
        Smart Features For Everyone
      </h2>

      <div className="features-container">

        {featuresData.map((feature, index) => {
            const Icon = feature.icon;

            return (
                <div
                className="feature-card"
                key={feature.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                >
                <div className="feature-icon">
                    <Icon />
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
                </div>
            );
            })}

      </div>

    </section>
  );
}

export default Features;