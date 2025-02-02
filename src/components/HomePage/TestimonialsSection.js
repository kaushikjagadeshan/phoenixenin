import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TestimonialsSection.css";

const testimonials = [
  {
    name: "Rajesh Kumar",
    position: "CEO, Bharat Engineering",
    feedback: "Phoenix Engineering Industries provides top-notch precision tools. Their quality and service are unmatched!",
    
  },
  {
    name: "Priya Sharma",
    position: "Production Manager, Zenith Manufacturing",
    feedback: "Their expertise in manufacturing has helped us improve our production process significantly.",
    
  },
  {
    name: "Amit Verma",
    position: "Head of Engineering, TechnoFab",
    feedback: "Highly professional team delivering exceptional solutions with great attention to detail.",
    
  }
];

function TestimonialsSection() {
  return (
    <section className="testimonials-section py-5">
      <div className="container text-center">
        <h2 className="mb-4 section-title">What Our Clients Say</h2>
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-header">                
                <h4 className="testimonial-name">{testimonial.name}</h4>
              </div>
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <p className="testimonial-position">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;

