import React from "react";
import { Link } from "react-router-dom";
import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="section contact-section">
      <div className="container contact-card">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2 className="section-title">Let&#39;s build the right solution</h2>
          <p className="section-lead">
            From one-off tooling to full production runs, our team responds
            quickly with engineering clarity.
          </p>
        </div>
        <div className="contact-actions">
          <p>Email: phoenixenin@gmail.com</p>
          <p>Phone: +91 90355 45189</p>
          <p>#130/187, 6th Main, B-Narayanapura, Bangalore 560016</p>
          <Link className="btn btn-primary" to="/contact">
            Start a Project
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
