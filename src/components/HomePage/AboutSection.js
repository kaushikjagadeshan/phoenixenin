import React from "react";
import "./AboutSection.css";
import aboutImage from "../../assets/aboutus.jpg";

function AboutSection() {
  return (
    <section className="section about-section">
      <div className="container about-grid">
        <div className="about-copy">
          <p className="eyebrow">About Phoenix</p>
          <h2 className="section-title">Engineering solutions built on trust</h2>
          <p className="section-lead">
            Established in 2017 under the leadership of Proprietor Mr. Kaushik,
            Phoenix Engineering Industries delivers end-to-end tooling and
            manufacturing solutions across aerospace, automotive, electronics,
            energy, medical, and telecommunication sectors.
          </p>
          <div className="about-highlights">
            <div className="surface-card">
              <h4>Design + R&amp;D</h4>
              <p>Concept-to-production collaboration with in-house expertise.</p>
            </div>
            <div className="surface-card">
              <h4>Precision Manufacturing</h4>
              <p>Quality-first processes for complex assemblies.</p>
            </div>
          </div>
        </div>
        <div className="about-visual">
          <img src={aboutImage} alt="Phoenix Engineering team at work" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
