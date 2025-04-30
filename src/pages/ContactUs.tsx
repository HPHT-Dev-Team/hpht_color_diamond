import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS JavaScript

const ContactUs: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: 'ease-in-out', // Easing function for smooth animations
      once: true, // Ensure animations only run once
    });
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5" style={{ color: '#0A2F3D' }} data-aos="fade-up">
        Contact Us
      </h2>

      <div className="row">
        {/* Contact Form */}
        <div className="col-lg-6" data-aos="fade-right">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                className="form-control"
                rows={5}
                placeholder="Your message"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-warning w-100 py-2" data-aos="fade-up">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="col-lg-6" data-aos="fade-left">
          <div className="bg-light p-4 rounded shadow">
            <h3 style={{ color: '#0A2F3D' }}>Get in Touch</h3>
            <p>
              We'd love to hear from you. Whether you have a question about our diamonds, pricing, or anything else—our team is ready to assist you.
            </p>
            <div className="mb-3">
              <strong>Email:</strong> <a href="mailto:info@hphtdiamonds.com" style={{ color: '#0A2F3D' }}>info@hphtdiamonds.com</a>
            </div>
            <div className="mb-3">
              <strong>Phone:</strong> <a href="tel:+18001234567" style={{ color: '#0A2F3D' }}>+1 (800) 123-4567</a>
            </div>
            <div>
              <strong>Address:</strong> Surat, Gujarat, India
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
