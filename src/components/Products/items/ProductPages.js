import React from "react";
import { Link } from "react-router-dom";
import "../Products.css";
import plugGaugesImg from "../../../assets/plug_gauges.jpg";
import ringGaugesImg from "../../../assets/ring_gauges.jpg";
import airPlugGaugesImg from "../../../assets/air_plug_gauges.jpg";
import airRingGaugesImg from "../../../assets/air_ring_gauges.jpg";
import gaugeMasterBlocksImg from "../../../assets/gauge_master_blocks.jpg";
import customGaugesImg from "../../../assets/custom_gauges.jpg";
import stampingToolsImg from "../../../assets/stamping_tools.jpg";
import fineBlankingToolsImg from "../../../assets/fine_blanking_tools.jpg";
import drawToolsImg from "../../../assets/draw_tools.jpg";
import progressiveToolsImg from "../../../assets/progressive_tools.jpg";
import mouldToolsImg from "../../../assets/mould_tools.jpg";
import weldingFixturesImg from "../../../assets/custom_welding_fixtures.jpg";
import assemblyFixturesImg from "../../../assets/assembly_fixtures.jpg";
import automationImg from "../../../assets/automation.jpg";
import cncMachinedPartsImg from "../../../assets/cnc_machined_parts.jpg";
import highPrecisionSparesImg from "../../../assets/high_precision_machine_spares.jpg";
import gearedPartsImg from "../../../assets/geared_parts.jpg";
import customShapedPartsImg from "../../../assets/custom_shaped_parts.jpg";

const ProductPage = ({ title, image, description }) => {
  return (
    <div className="product-detail">
      <h1>{title}</h1>
      <img src={image} alt={title} className="product-image" />
      <p>{description}</p>
      <Link to="/products" className="back-button"style={{ textDecoration: "none" }}>Back to Products</Link>
    </div>
  );
};

export const PlugGauges = () => <ProductPage title="Plug Gauges" image={plugGaugesImg} description="Precision-engineered plug gauges for accurate measurements." />;
export const RingGauges = () => <ProductPage title="Ring Gauges" image={ringGaugesImg} description="Durable ring gauges designed for industrial applications." />;
export const AirPlugGauges = () => <ProductPage title="Air Plug Gauges" image={airPlugGaugesImg} description="High-precision air plug gauges for various engineering uses." />;
export const AirRingGauges = () => <ProductPage title="Air Ring Gauges" image={airRingGaugesImg} description="Quality air ring gauges for precise calibration." />;
export const GaugeMasterBlocks = () => <ProductPage title="Gauge Master Blocks" image={gaugeMasterBlocksImg} description="Master blocks for gauge calibration and testing." />;
export const CustomGauges = () => <ProductPage title="Custom Gauges" image={customGaugesImg} description="Custom-designed gauges tailored for specific needs." />;
export const StampingTools = () => <ProductPage title="Stamping Tools" image={stampingToolsImg} description="Efficient stamping tools for sheet metal processing." />;
export const FineBlankingTools = () => <ProductPage title="Fine Blanking Tools" image={fineBlankingToolsImg} description="Precision fine blanking tools for detailed work." />;
export const DrawTools = () => <ProductPage title="Draw Tools" image={drawToolsImg} description="Specialized draw tools for shaping and forming materials." />;
export const ProgressiveTools = () => <ProductPage title="Progressive Tools" image={progressiveToolsImg} description="Advanced progressive tools for continuous operations." />;
export const MouldTools = () => <ProductPage title="Mould Tools" image={mouldToolsImg} description="High-quality mould tools for plastic and metal fabrication." />;
export const WeldingFixtures = () => <ProductPage title="Custom Welding Fixtures" image={weldingFixturesImg} description="Welding fixtures designed for precision and efficiency." />;
export const AssemblyFixtures = () => <ProductPage title="Assembly Fixtures" image={assemblyFixturesImg} description="Fixtures that enhance the assembly process." />;
export const Automation = () => <ProductPage title="Automation" image={automationImg} description="Automation solutions for industrial applications." />;
export const CNCMachinedParts = () => <ProductPage title="CNC Machined Parts" image={cncMachinedPartsImg} description="High-precision CNC machined parts for engineering solutions." />;
export const HighPrecisionSpares = () => <ProductPage title="High Precision Machine Spares" image={highPrecisionSparesImg} description="Precision spares for various machine applications." />;
export const GearedParts = () => <ProductPage title="Geared Parts" image={gearedPartsImg} description="Durable geared parts for mechanical operations." />;
export const CustomShapedParts = () => <ProductPage title="Custom Shaped Parts" image={customShapedPartsImg} description="Custom-shaped parts for specialized needs." />;

export default ProductPage;
