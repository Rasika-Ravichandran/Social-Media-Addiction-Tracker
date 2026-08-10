import React from "react";
import "./Process.css";

function Process() {

  const steps = [
    {
      number: "01",
      title: "Submit Your Request",
      description:
        "Citizens can easily report cleaning issues through our smart portal."
    },
    {
      number: "02",
      title: "Team Takes Action",
      description:
        "Our cleaning team receives the request and works on the solution."
    },
    {
      number: "03",
      title: "Enjoy A Cleaner City",
      description:
        "Track progress and experience a cleaner and healthier environment."
    }
  ];


  return (
    <section
  className="process"
  id="features"
  data-aos="fade-up"
>

      <div className="process-header">

        <div>
          <p className="section-tag">
            YOUR CLEAN PARTNER
          </p>

          <h2>
            How we deliver perfect clean.
          </h2>
        </div>


        <div className="process-content">

          <p>
            Our smart cleaning platform connects citizens,
            authorities, and cleaning teams to create a better city.
          </p>

          <button>
            GET STARTED
          </button>

        </div>

      </div>


      <div className="steps">

        {steps.map((step, index) => (

          <div className="step-card" key={index}>

            <h3>
              {step.number}
            </h3>

            <h4>
              {step.title}
            </h4>

            <p>
              {step.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Process;