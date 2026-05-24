import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-bar">
        <NavLink className="brand" to="/" onClick={closeMenu}>
          <img src={logo} alt="Phoenix Engineering Industries logo" />
          <span className="brand-text">
            Phoenix <span>Engineering Industries</span>
          </span>
        </NavLink>
        <button
          className="nav-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
        </button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            to="/"
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            to="/products"
            onClick={closeMenu}
          >
            Products
          </NavLink>
          <NavLink
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            to="/about"
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            to="/contact"
            onClick={closeMenu}
          >
            Contact
          </NavLink>
          <NavLink className="nav-cta" to="/contact" onClick={closeMenu}>
            Request a Quote
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
