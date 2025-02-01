import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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

function IndustriesSection() {
  return (
    <section className="industries-section py-5">
      <div className="container text-center">
        <h2 className="mb-4">Industries We Serve</h2>
        <p>We provide high-precision solutions to a range of industries.</p>
        <div className="industries-container">
          <div className="industry-item"><img className="industry-image" src={Automotive} alt="Automotive Industry" /><p>Automotive</p></div>
          <div className="industry-item"><img className="industry-image" src={Aerospace} alt="Aerospace Industry" /><p>Aerospace</p></div>
          <div className="industry-item"><img className="industry-image" src={Medical} alt="Medical Industry" /><p>Medical</p></div>
          <div className="industry-item"><img className="industry-image" src={Electronics} alt="Electronics Industry" /><p>Electronics</p></div>
          <div className="industry-item"><img className="industry-image" src={Construction} alt="Construction Industry" /><p>Construction</p></div>
          <div className="industry-item"><img className="industry-image" src={FMCG} alt="FMCG Industry" /><p>FMCG</p></div>
          <div className="industry-item"><img className="industry-image" src={Telecommunication} alt="Telecommunication Industry" /><p>Telecommunication</p></div>
          <div className="industry-item"><img className="industry-image" src={Energy} alt="Energy Industry" /><p>Energy</p></div>
          <div className="industry-item"><img className="industry-image" src={Defense} alt="Defense Industry" /><p>Defense</p></div>
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;
