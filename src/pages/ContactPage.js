import React from "react";
import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Let&#39;s talk about your next build.</h1>
          <p className="section-lead">
            Reach out for quotes, technical discussions, or production support.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="surface-card contact-info">
            <h3>Get in touch</h3>
            <p>Email: phoenixenin@gmail.com</p>
            <p>Phone: +91 90355 45189</p>
            <p>#130/187, 6th Main, B-Narayanapura, Bangalore 560016</p>
            <p className="contact-note">
              We typically respond within one business day.
            </p>
          </div>
          <form
            className="surface-card contact-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <h3>Send a message</h3>
            <label>
              Name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="Your email" />
            </label>
            <label>
              Message
              <textarea rows="4" placeholder="Tell us about your requirements"></textarea>
            </label>
            <button className="btn btn-primary" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="section">
        <div className="container map-card">
          <iframe
            title="Phoenix Engineering Industries location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0000000000005!2d77.68400000000001!3d13.000222222222223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzAwLjgiTiA3N8KwNDEnMDYuMSJF!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
