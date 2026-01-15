import React from "react";
import "./IndustriesSection.css";
import Automotive from "../../assets/automotive.jpg";
import Aerospace from "../../assets/aerospace.jpg";
import Medical from "../../assets/medical.jpg";
import Electronics from "../../assets/electronics.jpg";
import Construction from "../../assets/construction.jpg";
import FMCG from "../../assets/fmcg.jpg";
import Telecommunication from "../../assets/telecommunication.jpg";
import Energy from "../../assets/energy.jpg";
import Defense from "../../assets/defense.jpg";

const industries = [
  { name: "Automotive", image: Automotive },
  { name: "Aerospace", image: Aerospace },
  { name: "Medical", image: Medical },
  { name: "Electronics", image: Electronics },
  { name: "Construction", image: Construction },
  { name: "FMCG", image: FMCG },
  { name: "Telecommunication", image: Telecommunication },
  { name: "Energy", image: Energy },
  { name: "Defense", image: Defense }
];

function IndustriesSection() {
  return (
    <section className="section industries-section" id="industries">
      <div className="container">
        <p className="eyebrow">Industries</p>
        <h2 className="section-title">Trusted across critical sectors</h2>
        <p className="section-lead">
          Our precision engineering expertise supports everything from aerospace
          to energy, delivering dependable performance in every environment.
        </p>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div
              className="industry-card reveal"
              style={{ "--delay": `${index * 0.08}s` }}
              key={industry.name}
            >
              <img src={industry.image} alt={industry.name} />
              <div className="industry-overlay">
                <span>{industry.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;
