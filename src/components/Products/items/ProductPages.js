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
import mouldToolsImg from "../../../assets/mould.webp";
import weldingFixturesImg from "../../../assets/custom_welding_fixtures.jpg";
import assemblyFixturesImg from "../../../assets/assembly_fixtures.jpg";
import automationImg from "../../../assets/automation.jpg";
import cncMachinedPartsImg from "../../../assets/cnc_machined_parts.jpg";
import highPrecisionSparesImg from "../../../assets/high_precision_machine_spares.jpg";
import gearedPartsImg from "../../../assets/geared_parts.jpg";
import customShapedPartsImg from "../../../assets/custom_shaped_parts.jpg";

const ProductPage = ({ title, image, description, paragraphs }) => {
  return (
    <div className="product-detail">
      <h1>{title}</h1>
      <img src={image} alt={title} className="product-image" />
      <p>{description}</p>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <Link to="/products" className="back-button">Back to Products</Link>
    </div>
  );
};

export const PlugGauges = () => (
  <ProductPage
    title="Plug Gauges"
    image={plugGaugesImg}
    description="Precision-engineered plug gauges for accurate measurements."
    paragraphs={[
      "Our plug gauges are ground to tight tolerances to verify internal diameters quickly on the shop floor. Each gauge is built for repeatability to support high-volume inspection.",
      "We support custom sizes, materials, and surface finishes to match your part specifications and operating conditions.",
      "Every gauge is designed for long service life with stable performance across repeated cycles."
    ]}
  />
);
export const RingGauges = () => (
  <ProductPage
    title="Ring Gauges"
    image={ringGaugesImg}
    description="Durable ring gauges designed for industrial applications."
    paragraphs={[
      "Ring gauges are essential for validating external diameters, threads, and cylindrical features. Our gauges are manufactured for reliable go/no-go checks.",
      "We can tailor hardness, coatings, and inspection grades based on your tolerance stack and production needs.",
      "Consistent accuracy means faster approvals and fewer rework cycles on the line."
    ]}
  />
);
export const AirPlugGauges = () => (
  <ProductPage
    title="Air Plug Gauges"
    image={airPlugGaugesImg}
    description="High-precision air plug gauges for various engineering uses."
    paragraphs={[
      "Air plug gauges provide non-contact measurement for delicate or high-precision bores, delivering fast and repeatable inspection results.",
      "We build systems compatible with a wide range of flow and pressure requirements so they integrate cleanly with your existing inspection setup.",
      "Expect consistent measurement stability with minimal operator variability."
    ]}
  />
);
export const AirRingGauges = () => (
  <ProductPage
    title="Air Ring Gauges"
    image={airRingGaugesImg}
    description="Quality air ring gauges for precise calibration."
    paragraphs={[
      "Air ring gauges allow rapid, non-contact verification of external diameters, improving throughput on critical components.",
      "Our designs focus on repeatable airflow characteristics for dependable results across long production runs.",
      "We can customize diameters and mounting configurations to suit your inspection stations."
    ]}
  />
);
export const GaugeMasterBlocks = () => (
  <ProductPage
    title="Gauge Master Blocks"
    image={gaugeMasterBlocksImg}
    description="Master blocks for gauge calibration and testing."
    paragraphs={[
      "Gauge master blocks help maintain accuracy by providing a stable reference for calibration and verification.",
      "We supply hardened, lapped blocks with traceable dimensions to support quality systems and audits.",
      "These blocks are designed for longevity and consistent readings in controlled inspection environments."
    ]}
  />
);
export const CustomGauges = () => (
  <ProductPage
    title="Custom Gauges"
    image={customGaugesImg}
    description="Custom-designed gauges tailored for specific needs."
    paragraphs={[
      "When standard gauges cannot address complex geometry, we create custom solutions to fit your parts and workflow.",
      "Our team collaborates on material, geometry, and inspection method to ensure robust measurement performance.",
      "The result is faster inspection cycles and reduced inspection ambiguity on the floor."
    ]}
  />
);
export const StampingTools = () => (
  <ProductPage
    title="Stamping Tools"
    image={stampingToolsImg}
    description="Efficient stamping tools for sheet metal processing."
    paragraphs={[
      "Our stamping tools are engineered for repeatable accuracy in high-speed production environments.",
      "We focus on robust tool life, optimized strip layout, and maintainable die design to reduce downtime.",
      "Each tool is built to align with your press capacity and material specifications."
    ]}
  />
);
export const FineBlankingTools = () => (
  <ProductPage
    title="Fine Blanking Tools"
    image={fineBlankingToolsImg}
    description="Precision fine blanking tools for detailed work."
    paragraphs={[
      "Fine blanking tools deliver superior edge quality and tight tolerances for precision components.",
      "We design tooling for consistent pressure distribution and extended tool life, even on demanding materials.",
      "This approach ensures clean cuts, minimal secondary finishing, and reliable production output."
    ]}
  />
);
export const DrawTools = () => (
  <ProductPage
    title="Draw Tools"
    image={drawToolsImg}
    description="Specialized draw tools for shaping and forming materials."
    paragraphs={[
      "Draw tools are built for deep and complex forming operations where material flow and accuracy are critical.",
      "Our engineers tune radii, clearances, and surface finishes to minimize wrinkling and tearing.",
      "The result is smoother formed parts and improved first-pass yields."
    ]}
  />
);
export const ProgressiveTools = () => (
  <ProductPage
    title="Progressive Tools"
    image={progressiveToolsImg}
    description="Advanced progressive tools for continuous operations."
    paragraphs={[
      "Progressive tools combine multiple operations in a single press cycle, improving throughput and consistency.",
      "We optimize station layout, guiding, and stripping to ensure stable production at speed.",
      "These tools are built for durability, easy maintenance, and repeatable output."
    ]}
  />
);
export const MouldTools = () => (
  <ProductPage
    title="Mould Tools"
    image={mouldToolsImg}
    description="High-quality mould tools for plastic and metal fabrication."
    paragraphs={[
      "We manufacture injection, compression, and blow moulding tools for consistent part quality.",
      "Tooling is built to maintain dimensional stability and surface finish over long production runs.",
      "Our process emphasizes precision machining, polished cavities, and reliable cooling design."
    ]}
  />
);
export const WeldingFixtures = () => (
  <ProductPage
    title="Custom Welding Fixtures"
    image={weldingFixturesImg}
    description="Welding fixtures designed for precision and efficiency."
    paragraphs={[
      "Custom welding fixtures ensure repeatable alignment and stable clamping during fabrication.",
      "We design fixtures to reduce setup time and improve weld consistency across batches.",
      "Each fixture is tailored to your part geometry and shop workflow."
    ]}
  />
);
export const AssemblyFixtures = () => (
  <ProductPage
    title="Assembly Fixtures"
    image={assemblyFixturesImg}
    description="Fixtures that enhance the assembly process."
    paragraphs={[
      "Assembly fixtures support accurate positioning and faster build cycles for complex components.",
      "We design for ergonomics, repeatability, and easy part loading to reduce operator fatigue.",
      "This leads to consistent assemblies and improved line productivity."
    ]}
  />
);
export const Automation = () => (
  <ProductPage
    title="Automation"
    image={automationImg}
    description="Automation solutions for industrial applications."
    paragraphs={[
      "Our automation solutions are built to improve throughput, quality, and operator safety.",
      "We integrate tooling, fixtures, and process controls that align with your production goals.",
      "Every system is designed for reliability and scalable future expansion."
    ]}
  />
);
export const CNCMachinedParts = () => (
  <ProductPage
    title="CNC Machined Parts"
    image={cncMachinedPartsImg}
    description="High-precision CNC machined parts for engineering solutions."
    paragraphs={[
      "We produce CNC machined parts with tight tolerances and consistent surface finishes.",
      "Our process supports complex geometry and specialized materials for demanding applications.",
      "Parts are delivered inspection-ready, helping you reduce downstream rework."
    ]}
  />
);
export const HighPrecisionSpares = () => (
  <ProductPage
    title="High Precision Machine Spares"
    image={highPrecisionSparesImg}
    description="Precision spares for various machine applications."
    paragraphs={[
      "We supply high-precision spares that keep your critical equipment running efficiently.",
      "Manufacturing is aligned to original specifications with attention to fit and function.",
      "Consistent quality reduces downtime and extends equipment life."
    ]}
  />
);
export const GearedParts = () => (
  <ProductPage
    title="Geared Parts"
    image={gearedPartsImg}
    description="Durable geared parts for mechanical operations."
    paragraphs={[
      "Our geared parts are machined for reliable transmission of torque and smooth operation.",
      "We focus on tooth profile accuracy and surface integrity to reduce noise and wear.",
      "Custom gearing options are available to match unique mechanical requirements."
    ]}
  />
);
export const CustomShapedParts = () => (
  <ProductPage
    title="Custom Shaped Parts"
    image={customShapedPartsImg}
    description="Custom-shaped parts for specialized needs."
    paragraphs={[
      "We manufacture custom-shaped parts when standard components do not meet design intent.",
      "Our team supports complex shapes, tight tolerances, and application-specific materials.",
      "Each part is built for fit, function, and consistent performance in your assembly."
    ]}
  />
);

export default ProductPage;
