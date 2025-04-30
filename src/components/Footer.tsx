import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#0a0a23', color: '#fff', padding: '40px 0', marginTop: '60px' }}>
      <div className="container">
        <div className="row">

          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h5 style={{ color: '#F4C430' }}>HPHT Diamonds</h5>
            <p>Specializing in enhancing the natural beauty of diamonds through advanced HPHT technology. We create brilliance that lasts forever.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 style={{ color: '#F4C430' }}>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/products" className="text-white text-decoration-none">Our Diamonds</Link></li>
              <li><Link to="/technology" className="text-white text-decoration-none">HPHT Technology</Link></li>
              <li><Link to="/about-us" className="text-white text-decoration-none">About Us</Link></li>
              <li><Link to="/contact-us" className="text-white text-decoration-none">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 style={{ color: '#F4C430' }}>Contact Us</h5>
            <p>
              📍 123 Diamond Street, Surat, India<br />
              📞 +91 98765 43210<br />
              ✉️ info@hphtdiamonds.com
            </p>

            {/* Social Icons */}
            <div className="mt-3">
              <a href="#" className="text-white me-3 fs-4"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-white me-3 fs-4"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white me-3 fs-4"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="text-center mt-4">
          <small>&copy; {new Date().getFullYear()} HPHT Diamonds. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
