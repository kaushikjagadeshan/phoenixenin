import React from "react";
import { Link } from "react-router-dom";
import "./DieSetsPage.css";

function DieSetsPage() {
  return (
    <div className="diesets-page">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Die Sets</p>
          <h1>Press Tool Die Sets</h1>
          <p className="section-lead">
            Precision-built die sets delivered in 7 working days, designed to
            match your tool layout and press requirements.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container diesets-grid">
          <div className="surface-card diesets-card">
            <h2 className="section-title">Built for speed, aligned for accuracy</h2>
            <p className="section-lead">
              Each die set is manufactured with top and bottom plates guided by
              precision pillars to ensure reliable alignment with your press
              tool design.
            </p>
          </div>
          <div className="surface-card diesets-card">
            <h3>Available configurations</h3>
            <ul>
              <li>2 pillar die sets</li>
              <li>4 pillar die sets</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container diesets-grid">
          <div className="surface-card diesets-card">
            <h3>QDC quick die clamping plate</h3>
            <p>
              We can integrate a QDC quick die clamping plate to match your press
              shut height and speed up setup on the production floor.
            </p>
          </div>
          <div className="surface-card diesets-card">
            <h3>Delivery commitment</h3>
            <p>
              Standard delivery is within 7 working days from design confirmation.
            </p>
          </div>
        </div>
      </section>

      <section className="section diesets-contact">
        <div className="container contact-card">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">Ready to start your die set?</h2>
            <p className="section-lead">
              Share your requirements and we&#39;ll confirm lead time, specs, and
              press compatibility.
            </p>
          </div>
          <div className="contact-actions">
            <p>Email: phoenixenin@gmail.com</p>
            <p>Phone: +91 90355 45189</p>
            <p>#130/187, 6th Main, B-Narayanapura, Bangalore 560016</p>
            <Link className="btn btn-primary" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DieSetsPage;
