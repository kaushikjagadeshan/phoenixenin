import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

// Import images
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
import mouldToolsImg from "../../assets/mould_tools.jpg";
import weldingFixturesImg from "../../assets/custom_welding_fixtures.jpg";
import assemblyFixturesImg from "../../assets/assembly_fixtures.jpg";
import automationImg from "../../assets/automation.jpg";
import cncMachinedPartsImg from "../../assets/cnc_machined_parts.jpg";
import highPrecisionSparesImg from "../../assets/high_precision_machine_spares.jpg";
import gearedPartsImg from "../../assets/geared_parts.jpg";
import customShapedPartsImg from "../../assets/custom_shaped_parts.jpg";

const Products = () => {
  return (
    <div className="products-page">
      <h1>Our Products</h1>
      
      <section className="category">
        <h2>Gauges</h2>
        <div className="product-grid">
          <Product name="Plug Gauges" image={plugGaugesImg} link="/products/plug-gauges" />
          <Product name="Ring Gauges" image={ringGaugesImg} link="/products/ring-gauges" />
          <Product name="Air Plug Gauges" image={airPlugGaugesImg} link="/products/air-plug-gauges" />
          <Product name="Air Ring Gauges" image={airRingGaugesImg} link="/products/air-ring-gauges" />
          <Product name="Gauge Master Blocks" image={gaugeMasterBlocksImg} link="/products/gauge-master-blocks" />
          <Product name="Custom Gauges" image={customGaugesImg} link="/products/custom-gauges" />
        </div>
      </section>

      <section className="category">
        <h2>Tooling</h2>
        <h3>Press Tools</h3>
        <div className="product-grid">
          <Product name="Stamping Tools" image={stampingToolsImg} link="/products/stamping-tools" />
          <Product name="Fine Blanking Tools" image={fineBlankingToolsImg} link="/products/fine-blanking-tools" />
          <Product name="Draw Tools" image={drawToolsImg} link="/products/draw-tools" />
          <Product name="Progressive Tools" image={progressiveToolsImg} link="/products/progressive-tools" />
        </div>
      </section>

      <section className="category">
        <h3>Mould Tools</h3>
        <div className="product-grid">
          <Product name="Mould Tools" image={mouldToolsImg} link="/products/mould-tools" />
        </div>
      </section>

      <section className="category">
        <h3>Fixtures</h3>
        <div className="product-grid">
          <Product name="Custom Welding Fixtures" image={weldingFixturesImg} link="/products/welding-fixtures" />
          <Product name="Assembly Fixtures" image={assemblyFixturesImg} link="/products/assembly-fixtures" />
          <Product name="Automation" image={automationImg} link="/products/automation" />
        </div>
      </section>

      <section className="category">
        <h2>Machined Parts</h2>
        <div className="product-grid">
          <Product name="CNC Machined Parts" image={cncMachinedPartsImg} link="/products/cnc-machined-parts" />
          <Product name="High Precision Machine Spares" image={highPrecisionSparesImg} link="/products/high-precision-spares" />
          <Product name="Geared Parts" image={gearedPartsImg} link="/products/geared-parts" />
          <Product name="Custom Shaped Parts" image={customShapedPartsImg} link="/products/custom-shaped-parts" />
        </div>
      </section>
    </div>
  );
};

const Product = ({ name, image, link }) => {
  return (
    <div className="product">
      <Link to={link}> {/* ✅ Wrap image and name in Link */}
        <img src={image} alt={name} />
        <p>{name}</p>
      </Link>
    </div>
  );
};

export default Products;
