import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function HeroSection() {
  return (
    <section className="hero-section d-flex align-items-center justify-content-center text-center text-white">
      <div className="container-fluid bg-secondary bg-opacity-75 p-4">
        <h1 className="display-4">Welcome to Phoenix Engineering Industries</h1>
        <p className="lead">We specialize in high-precision manufacturing solutions, offering top-quality gauges, stamping tools, machined parts, sheet metal components, plastic molding, CNC fixtures, and automation systems. Our state-of-the-art facilities and expert engineers ensure exceptional craftsmanship, innovation, and reliability for industries worldwide.</p>
      </div>
    </section>
  );
}

export default HeroSection;