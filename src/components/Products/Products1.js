import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import plugGaugesImg from "../../assets/plug_gauges.jpg";
import ringGaugesImg from "../../assets/ring_gauges.jpg";
import airPlugGaugesImg from "../../assets/air_plug_gauges.jpg";
import airRingGaugesImg from "../../assets/air_ring_gauges.jpg";
import gaugeMasterBlocksImg from "../../assets/gauge_master_blocks.jpg";
import customGaugesImg from "../../assets/custom_gauges.jpg";
import stampingToolsImg from "../../assets/stamping_tools.jpg";
import fineBlankingToolsImg from "../../assets/fine_blanking_tools.jpg";
import drawToolsImg from "../../assets/draw_tools.jpg";
import progressiveToolsImg from "../../assets/progressive_tools.jpg";
import mouldToolsImg from "../../assets/mould.webp";
import weldingFixturesImg from "../../assets/custom_welding_fixtures.jpg";
import assemblyFixturesImg from "../../assets/assembly_fixtures.jpg";
import automationImg from "../../assets/automation.jpg";
import cncMachinedPartsImg from "../../assets/cnc_machined_parts.jpg";
import highPrecisionSparesImg from "../../assets/high_precision_machine_spares.jpg";
import gearedPartsImg from "../../assets/geared_parts.jpg";
import customShapedPartsImg from "../../assets/custom_shaped_parts.jpg";

const categories = [
  {
    title: "Press Tools",
    description: "Blanking, progressive, draw, and fine-blanking tools for high-speed production.",
    items: [
      { name: "Stamping Tools", image: stampingToolsImg, link: "/products/stamping-tools" },
      { name: "Fine Blanking Tools", image: fineBlankingToolsImg, link: "/products/fine-blanking-tools" },
      { name: "Draw Tools", image: drawToolsImg, link: "/products/draw-tools" },
      { name: "Progressive Tools", image: progressiveToolsImg, link: "/products/progressive-tools" }
    ]
  },
  {
    title: "Mould Tools",
    description: "Injection, compression, and blow moulding tools for robust plastic parts.",
    items: [
      { name: "Mould Tools", image: mouldToolsImg, link: "/products/mould-tools" }
    ]
  },
  {
    title: "Fixtures & Automation",
    description: "Custom fixtures and automation that streamline production lines.",
    items: [
      { name: "Custom Welding Fixtures", image: weldingFixturesImg, link: "/products/welding-fixtures" },
      { name: "Assembly Fixtures", image: assemblyFixturesImg, link: "/products/assembly-fixtures" },
      { name: "Automation", image: automationImg, link: "/products/automation" }
    ]
  },
  {
    title: "Gauges",
    description: "Ring, plug, air, snap, and custom gauges for high-accuracy inspections.",
    items: [
      { name: "Plug Gauges", image: plugGaugesImg, link: "/products/plug-gauges" },
      { name: "Ring Gauges", image: ringGaugesImg, link: "/products/ring-gauges" },
      { name: "Air Plug Gauges", image: airPlugGaugesImg, link: "/products/air-plug-gauges" },
      { name: "Air Ring Gauges", image: airRingGaugesImg, link: "/products/air-ring-gauges" },
      { name: "Gauge Master Blocks", image: gaugeMasterBlocksImg, link: "/products/gauge-master-blocks" },
      { name: "Custom Gauges", image: customGaugesImg, link: "/products/custom-gauges" }
    ]
  },
  {
    title: "Machined Parts",
    description: "CNC and precision machined components built to exacting tolerances.",
    items: [
      { name: "CNC Machined Parts", image: cncMachinedPartsImg, link: "/products/cnc-machined-parts" },
      { name: "High Precision Machine Spares", image: highPrecisionSparesImg, link: "/products/high-precision-spares" },
      { name: "Geared Parts", image: gearedPartsImg, link: "/products/geared-parts" },
      { name: "Custom Shaped Parts", image: customShapedPartsImg, link: "/products/custom-shaped-parts" }
    ]
  }
];

const capabilityList = [
  "Laser cutting parts",
  "High precision welded parts",
  "Waterjet cutting parts",
  "CNC turret punched parts",
  "CNC routed parts",
  "3D design solutions",
  "Tool design",
  "Prototyping parts",
  "Engineering parts solutions"
];

const Products = () => {
  return (
    <div className="products-page">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Products</p>
          <h1>Tooling and components engineered for precision.</h1>
          <p className="section-lead">
            Explore our range of gauges, press tools, moulds, fixtures, and
            automation solutions tailored for demanding industrial environments.
          </p>
        </div>
      </section>

      <div className="container">
        {categories.map((category) => (
          <section className="category-block" key={category.title}>
            <div className="category-header">
              <div>
                <h2>{category.title}</h2>
                <p>{category.description}</p>
              </div>
            </div>
            <div className="product-grid">
              {category.items.map((item) => (
                <Product key={item.name} {...item} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="section capability-section">
        <div className="container capability-grid">
          <div>
            <p className="eyebrow">Fabrication & Custom Solutions</p>
            <h2 className="section-title">Built around your processes</h2>
            <p className="section-lead">
              We support advanced fabrication and custom engineering, from
              prototype tooling to production-ready parts.
            </p>
          </div>
          <ul className="capability-list">
            {capabilityList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

const Product = ({ name, image, link }) => {
  return (
    <Link className="product-card" to={link}>
      <img src={image} alt={name} />
      <div className="product-card-body">
        <h3>{name}</h3>
        <span>View details</span>
      </div>
    </Link>
  );
};

export default Products;
