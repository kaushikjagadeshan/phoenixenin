// HomePage/HomePage.js
import React from "react";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import IndustriesSection from "./IndustriesSection";
import TestimonialsSection from "./TestimonialsSection";
import ContactSection from "./ContactSection";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-container">
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}

export default HomePage;
