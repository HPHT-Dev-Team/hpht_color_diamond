import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#0a0a23' }}>
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/" style={{ color: '#F4C430', fontSize: '24px' }}>
          HPHT Diamonds
        </Link>

        {/* Hamburger Menu */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item ">
              <Link className="nav-link text-white nav_text" to="/">Home</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link text-white" to="/products">Our Diamonds</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/technology">HPHT Technology</Link>
            </li> */}
             <li className="nav-item ">
              <Link className="nav-link text-white nav_text" to="/about-us">About Us</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link text-white nav_text" to="/services">Services</Link>
            </li>
           
            <li className="nav-item ">
              <Link className="nav-link text-white nav_text" to="/contact-us">Contact Us</Link>
            </li>
          </ul>

          {/* Call to Action Button */}
          <div className="ms-lg-3 mt-3 mt-lg-0">
            <Link className="btn btn-outline-warning px-4" to="/contact-us">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
