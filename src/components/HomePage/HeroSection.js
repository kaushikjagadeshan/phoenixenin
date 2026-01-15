import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import heroImage from "../../assets/hero-capabilities.png";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-backdrop"></div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Precision. Reliability. Momentum.</p>
          <h1>
            Phoenix Engineering Industries builds the tools behind the
            world&#39;s most demanding production lines.
          </h1>
          <p className="hero-lead">
            We craft gauges, press tools, machined parts, and automation systems
            with meticulous quality control and an engineering-first mindset.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/products">
              Explore Products
            </Link>
            <Link className="btn btn-ghost" to="/contact">
              Request a Quote
            </Link>
          </div>
          <div className="hero-stats">
            <div>
              <h3>2017</h3>
              <p>Founded in Bengaluru</p>
            </div>
            <div>
              <h3>6+</h3>
              <p>Industries served globally</p>
            </div>
            <div>
              <h3>End-to-End</h3>
              <p>Design to finished parts</p>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image surface-card">
            <img src={heroImage} alt="Press tools and tooling capabilities" />
            <div className="hero-caption">
              <p className="eyebrow">Capabilities</p>
              <h4>Press Tools, CNC, Gauges, Fabrication</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
