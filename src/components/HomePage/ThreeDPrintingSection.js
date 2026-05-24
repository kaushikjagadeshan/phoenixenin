import React from "react";
import { Link } from "react-router-dom";
import "./ThreeDPrintingSection.css";
import printerImage from "../../assets/bambu_a1_combo_official.jpg";
import sampleImage from "../../assets/bambu_a1_official_print_sample.png";

const highlights = [
  "Rapid prototypes and concept models",
  "Jigs, fixtures, brackets, and custom holders",
  "Small-batch plastic parts for fit and function checks",
  "Useful before machining, tooling, or production fixture investment"
];

function ThreeDPrintingSection() {
  return (
    <section className="section printing-section">
      <div className="container printing-grid">
        <div className="printing-copy">
          <p className="eyebrow">3D Printing Services</p>
          <h2 className="section-title">Fast prototypes with our Bambu Lab A1</h2>
          <p className="section-lead">
            Get functional plastic parts quickly for design validation, sample
            reviews, assembly trials, and shop-floor support.
          </p>
          <ul className="printing-list">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="printing-actions">
            <Link className="btn btn-primary" to="/products/3d-printing-services">
              View 3D Printing
            </Link>
            <Link className="btn btn-ghost" to="/contact">
              Request a Print
            </Link>
          </div>
        </div>
        <div className="printing-visuals">
          <img
            className="printing-main"
            src={printerImage}
            alt="Bambu Lab A1 3D printer"
          />
          <img
            className="printing-sample"
            src={sampleImage}
            alt="3D printed product example"
          />
        </div>
      </div>
    </section>
  );
}

export default ThreeDPrintingSection;
