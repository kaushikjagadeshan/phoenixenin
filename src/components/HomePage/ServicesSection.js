import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ServicesSection.css";
import Gauge1 from "../../assets/automation_solutions.png";
import Gauge2 from "../../assets/fixtures_cnc.png";
import Gauge3 from "../../assets/gauge 2.jpg";
import Gauge4 from "../../assets/gauge 4.jpg";
import Stamping1 from "../../assets/gauges_manufacturing.png";
import Stamping2 from "../../assets/machined_parts.png";
import Stamping3 from "../../assets/machined_parts.png";
import Stamping4 from "../../assets/machined_parts.png";
import Machined1 from "../../assets/machined_parts.png";
import Machined2 from "../../assets/machined_parts.png";
import Machined3 from "../../assets/machined_parts.png";
import Machined4 from "../../assets/machined_parts.png";

function ServicesSection() {
  return (
    <section className="services-section py-5">
      <div className="container text-center">
        <h2 className="mb-4">Our Services</h2>
        
        {/* Gauges Manufacturing */}
        <div className="service-category">
          <h3>Gauges Manufacturing</h3>
          <p>High-precision ring and plug gauges for various industrial applications.</p>
          <div className="service-images-container">
            <img className="service-image" src={Gauge1} alt="Gauge 1" />
            <img className="service-image" src={Gauge2} alt="Gauge 2" />
            <img className="service-image" src={Gauge3} alt="Gauge 3" />
            <img className="service-image" src={Gauge4} alt="Gauge 4" />
          </div>
        </div>
        
        {/* Stamping & Mould Tools */}
        <div className="service-category">
          <h3>Stamping & Mould Tools</h3>
          <p>Top-quality stamping and mould tools for precise metal fabrication.</p>
          <div className="service-images-container">
            <img className="service-image" src={Stamping1} alt="Stamping 1" />
            <img className="service-image" src={Stamping2} alt="Stamping 2" />
            <img className="service-image" src={Stamping3} alt="Stamping 3" />
            <img className="service-image" src={Stamping4} alt="Stamping 4" />
          </div>
        </div>
        
        {/* Machined Parts */}
        <div className="service-category">
          <h3>Machined Parts</h3>
          <p>Custom machined components crafted with high accuracy and durability.</p>
          <div className="service-images-container">
            <img className="service-image" src={Machined1} alt="Machined 1" />
            <img className="service-image" src={Machined2} alt="Machined 2" />
            <img className="service-image" src={Machined3} alt="Machined 3" />
            <img className="service-image" src={Machined4} alt="Machined 4" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;