import React from "react";
import "./Services.css";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import GroupsIcon from "@mui/icons-material/Groups";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
function Services() {

  const services = [
  {
    icon: <ReportProblemIcon />,
    title: "Report Cleaning Issues",
    text: "Quickly report garbage, waste, and cleanliness problems in your area."
  },
  {
    icon: <TrackChangesIcon />,
    title: "Track Requests",
    text: "Follow your cleaning request status from submission to completion."
  },
  {
    icon: <GroupsIcon />,
    title: "Community Cleaning",
    text: "Work together with citizens to maintain a cleaner environment."
  },
  {
    icon: <DeleteSweepIcon />,
    title: "Smart Waste Management",
    text: "Use smart solutions for efficient waste collection and management."
  }
];


  return (
    <section
  className="services"
  id="services"
  data-aos="fade-up"
>

      <p className="section-tag">
        OUR SERVICES
      </p>

      <h2>
        Smart solutions for a cleaner city.
      </h2>


      <div className="service-container">

        {services.map((service, index) => (
          <div className="service-card" key={index}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>
              {service.title}
            </h3>

            <p>
              {service.text}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;