import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TestimonialsSection.css";

const testimonials = [
  {
    name: "Rajesh Kumar",
    position: "CEO, Bharat Engineering",
    feedback: "Phoenix Engineering Industries provides top-notch precision tools. Their quality and service are unmatched!",
    image: "../../assets/testimonial1.jpg"
  },
  {
    name: "Priya Sharma",
    position: "Production Manager, Zenith Manufacturing",
    feedback: "Their expertise in manufacturing has helped us improve our production process significantly.",
    image: "../../assets/testimonial2.jpg"
  },
  {
    name: "Amit Verma",
    position: "Head of Engineering, TechnoFab",
    feedback: "Highly professional team delivering exceptional solutions with great attention to detail.",
    image: "../../assets/testimonial3.jpg"
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
              <img className="testimonial-image" src={testimonial.image} alt={testimonial.name} />
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <h4 className="testimonial-name">{testimonial.name}</h4>
              <p className="testimonial-position">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;