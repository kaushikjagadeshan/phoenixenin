import React from "react";
import "./ServicesSection.css";
import Gauge1 from "../../assets/plug_gauges.jpg";
import Stamping1 from "../../assets/stamping_tools.jpg";
import Machined1 from "../../assets/machined_parts.png";

const services = [
  {
    title: "Gauges Manufacturing",
    description:
      "Ring, plug, snap, and air gauges tuned for repeatable, micron-level inspections.",
    image: Gauge1
  },
  {
    title: "Press & Mould Tooling",
    description:
      "Progressive, draw, and fine-blanking tools engineered for speed, durability, and precision.",
    image: Stamping1
  },
  {
    title: "Machined Components",
    description:
      "CNC milled and turned parts with tight tolerances, ready for complex assemblies.",
    image: Machined1
  }
];

function ServicesSection() {
  return (
    <section className="section services-section">
      <div className="container">
        <p className="eyebrow">Capabilities</p>
        <h2 className="section-title">Built to run relentless production</h2>
        <p className="section-lead">
          From tooling to automation, our teams build high-precision components
          with a focus on throughput, consistency, and scale.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <article
              className="service-card reveal"
              style={{ "--delay": `${index * 0.15}s` }}
              key={service.title}
            >
              <img src={service.image} alt={service.title} />
              <div className="service-card-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
