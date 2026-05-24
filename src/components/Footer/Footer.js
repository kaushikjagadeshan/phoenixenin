import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>Phoenix Engineering Industries</h3>
          <p>
            Precision tools, automation, and engineered components built for
            the industries that move the world.
          </p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Email: phoenixenin@gmail.com</p>
          <p>Phone: +91 90355 45189</p>
          <p>#130/187, 6th Main, B-Narayanapura, Bangalore 560016</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Phoenix Engineering Industries. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
