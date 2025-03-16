import React from "react";
import { Routes, Route } from "react-router-dom"; // ✅ Only import Routes, not Router
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import Products from "./components/Products/Products1";
import "./components/Navbar/Navbar.css";

// ✅ Import product pages at the top
import {
  PlugGauges, RingGauges, AirPlugGauges, AirRingGauges,
  GaugeMasterBlocks, CustomGauges, StampingTools, FineBlankingTools,
  DrawTools, ProgressiveTools, MouldTools, WeldingFixtures, AssemblyFixtures,
  Automation, CNCMachinedParts, HighPrecisionSpares, GearedParts, CustomShapedParts
} from "./components/Products/items/ProductPages";  // ✅ Ensure the path is correct

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/plug-gauges" element={<PlugGauges />} />
        <Route path="/products/ring-gauges" element={<RingGauges />} />
        <Route path="/products/air-plug-gauges" element={<AirPlugGauges />} />
        <Route path="/products/air-ring-gauges" element={<AirRingGauges />} />
        <Route path="/products/gauge-master-blocks" element={<GaugeMasterBlocks />} />
        <Route path="/products/custom-gauges" element={<CustomGauges />} />
        <Route path="/products/stamping-tools" element={<StampingTools />} />
        <Route path="/products/fine-blanking-tools" element={<FineBlankingTools />} />
        <Route path="/products/draw-tools" element={<DrawTools />} />
        <Route path="/products/progressive-tools" element={<ProgressiveTools />} />
        <Route path="/products/mould-tools" element={<MouldTools />} />
        <Route path="/products/welding-fixtures" element={<WeldingFixtures />} />
        <Route path="/products/assembly-fixtures" element={<AssemblyFixtures />} />
        <Route path="/products/automation" element={<Automation />} />
        <Route path="/products/cnc-machined-parts" element={<CNCMachinedParts />} />
        <Route path="/products/high-precision-spares" element={<HighPrecisionSpares />} />
        <Route path="/products/geared-parts" element={<GearedParts />} />
        <Route path="/products/custom-shaped-parts" element={<CustomShapedParts />} />
      </Routes>
    </div>
  );
}

export default App;
