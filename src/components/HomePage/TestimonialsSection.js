import React, { useEffect, useMemo, useRef, useState } from "react";
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
    
  },
  {
    name: "Suresh Iyer",
    position: "Plant Head, Vertex Components",
    feedback: "Consistent tooling quality and quick turnaround have made Phoenix a dependable partner for our press shop."
  },
  {
    name: "Neha Reddy",
    position: "QA Lead, Axis Precision",
    feedback: "Their gauges meet our inspection standards every time, helping us reduce rework and inspection delays."
  },
  {
    name: "Vikram Singh",
    position: "Operations Manager, Nova Plastics",
    feedback: "The mould tools delivered were robust, accurate, and ready for production with minimal adjustments."
  },
  {
    name: "Ananya Das",
    position: "Manufacturing Engineer, Orion Systems",
    feedback: "Phoenix understands complex requirements and provides clear communication throughout the project."
  },
  {
    name: "Karthik Balaji",
    position: "Tool Room Incharge, MagnaTech",
    feedback: "Their press tool designs improved throughput and reduced setup time on our line."
  },
  {
    name: "Meera Joshi",
    position: "Supply Chain Lead, Apex Industrial",
    feedback: "Reliable lead times and consistent quality keep our production schedules on track."
  },
  {
    name: "Arjun Nair",
    position: "R&D Manager, Helix Manufacturing",
    feedback: "Strong technical support and detailed documentation made validation straightforward."
  },
  {
    name: "Pooja Kulkarni",
    position: "Process Engineer, Delta Automation",
    feedback: "Their fixtures are precise and durable, helping us achieve stable assembly quality."
  },
  {
    name: "Rahul Mehta",
    position: "Director, Stellar Components",
    feedback: "Phoenix delivers solutions that balance precision, durability, and cost efficiency."
  },
  {
    name: "Swati Nambiar",
    position: "Production Lead, Sigma Tools",
    feedback: "Great responsiveness and clear engineering guidance throughout the build cycle."
  }
];

function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const startXRef = useRef(null);
  const isDraggingRef = useRef(false);

  const visibleCount = 3;
  const visibleTestimonials = useMemo(() => {
    const items = [];
    for (let i = 0; i < visibleCount; i += 1) {
      items.push(testimonials[(startIndex + i) % testimonials.length]);
    }
    return items;
  }, [startIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const moveNext = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const movePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handlePointerDown = (event) => {
    startXRef.current = event.clientX;
    isDraggingRef.current = true;
  };

  const handlePointerMove = (event) => {
    if (!isDraggingRef.current || startXRef.current === null) return;
    const deltaX = event.clientX - startXRef.current;
    if (Math.abs(deltaX) > 60) {
      if (deltaX > 0) {
        movePrev();
      } else {
        moveNext();
      }
      isDraggingRef.current = false;
      startXRef.current = null;
    }
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
    startXRef.current = null;
  };

  return (
    <section className="section testimonials-section">
      <div className="container">
        <p className="eyebrow">Testimonials</p>
        <h2 className="section-title">What our partners say</h2>
        <div
          className="testimonials-container"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          {visibleTestimonials.map((testimonial, index) => (
            <div
              className="testimonial-card reveal"
              style={{ "--delay": `${index * 0.12}s` }}
              key={`${startIndex}-${index}`}
            >
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

