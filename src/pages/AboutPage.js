import React from "react";
import "./AboutPage.css";
import aboutImage from "../assets/aboutus.jpg";

function AboutPage() {
  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About Us</p>
          <h1>Precision engineering with a human touch.</h1>
          <p className="section-lead">
            Phoenix Engineering Industries delivers end-to-end solutions from
            concept design and R&amp;D to manufacturing finished parts for
            complex assemblies.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-story">
          <div>
            <h2 className="section-title">Who we are</h2>
            <p className="section-lead">
              Established in 2017 under the leadership of Proprietor Mr.
              Kaushik, we partner with industrial teams that demand accuracy,
              resilience, and on-time delivery. Our work spans aerospace,
              automotive, electronics, energy, medical, and telecommunication
              sectors.
            </p>
            <p className="section-lead">
              We focus on tooling and components that keep production lines
              moving: press tools, mould tools, gauges, fixtures, and CNC machined
              parts built to exacting standards.
            </p>
            <p className="section-lead">
              From early-stage design support to final inspection, our process
              is centered on measurable quality, fast turnaround, and transparent
              collaboration.
            </p>
          </div>
          <img src={aboutImage} alt="Phoenix Engineering operations" />
        </div>
      </section>

      <section className="section about-highlights-section">
        <div className="container about-highlights-grid">
          <div className="surface-card">
            <h3>What we deliver</h3>
            <ul>
              <li>Press tools for high-speed production</li>
              <li>Injection and compression mould tooling</li>
              <li>Precision gauges for inspection</li>
              <li>Fixtures for welding and assembly</li>
              <li>CNC machined parts and spares</li>
            </ul>
          </div>
          <div className="surface-card">
            <h3>How we work</h3>
            <ul>
              <li>Design for manufacturability and long tool life</li>
              <li>Material and process control at every stage</li>
              <li>Quality checks aligned to customer standards</li>
              <li>Clear documentation and delivery timelines</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section mission-vision">
        <div className="container mission-grid">
          <div className="surface-card">
            <p className="eyebrow">Mission</p>
            <h3>Deliver uncompromising quality.</h3>
            <p>
              We engineer high-precision products that exceed expectations,
              combining innovation, efficiency, and reliability in every
              project.
            </p>
          </div>
          <div className="surface-card">
            <p className="eyebrow">Vision</p>
            <h3>Shape the future of engineering.</h3>
            <p>
              We aim to be a global leader recognized for innovation,
              sustainability, and a customer-first approach across industries.
            </p>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container values-grid">
          <div className="surface-card">
            <h3>Quality at every step</h3>
            <p>
              From material selection to final inspection, we maintain tight
              controls that protect part accuracy and tool longevity.
            </p>
          </div>
          <div className="surface-card">
            <h3>Speed with accountability</h3>
            <p>
              We commit to realistic timelines and clear communication so your
              production plans stay on track.
            </p>
          </div>
          <div className="surface-card">
            <h3>Collaborative engineering</h3>
            <p>
              Our team works closely with customers to translate requirements
              into reliable, production-ready tooling.
            </p>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container process-grid">
          <div>
            <p className="eyebrow">Our Process</p>
            <h2 className="section-title">Built for repeatable excellence</h2>
            <p className="section-lead">
              We combine design review, precision machining, and structured
              inspection so every delivery meets your press tool and assembly
              requirements.
            </p>
          </div>
          <div className="surface-card">
            <ol>
              <li>Requirement review and tooling strategy</li>
              <li>Design validation and DFM alignment</li>
              <li>Machining, grinding, and fitting</li>
              <li>Quality inspection and documentation</li>
              <li>Delivery support and feedback loop</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
