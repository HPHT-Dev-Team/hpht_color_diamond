import React from 'react'
import Banner from '../components/Banner'
import AboutSection from '../components/AboutSection'
import ProductCard from '../components/ProductCard'
import ContactUs from '../pages/ContactUs'

import product1 from '../assets/product1.jpeg'
import product2 from '../assets/product2.jpeg'
import product3 from '../assets/product3.jpeg'

const Home: React.FC = () => {
  return (
    <div style={{ padding: '0 0rem' }}>
      <Banner />
      <AboutSection />

      <div style={{ padding: '60px 40px' }}>
        <h2 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '40px' }}>Our Products</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <ProductCard
            title="Blue HPHT Diamond"
            image={product1}
            description="A beautiful pink diamond treated using HPHT technology for enhanced color brilliance."
          />
          <ProductCard
            title="Yellow HPHT Diamond"
            image={product2}
            description="Vivid blue HPHT diamond, perfect for custom fine jewelry."
          />
          <ProductCard
            title="White HPHT Diamond"
            image={product3}
            description="Sunny yellow diamond, HPHT enhanced for extra saturation and shine."
          />
        </div>
      </div>
      <div style={{ padding: '60px 40px' }}>
        <h2 className="text-center mb-5" style={{ color: '#0A2F3D' }} data-aos="fade-up">
          Contact Us
        </h2>

        <div className="row mx-0">
          {/* Contact Form */}
          <div className="col-lg-6 px-3" data-aos="fade-right">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" className="form-control" placeholder="Your Name" required />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className="form-control" placeholder="you@example.com" required />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" className="form-control" rows={5} placeholder="Your message" required />
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
                We'd love to hear from you. Whether you have a question about our diamonds, pricing,
                or anything else—our team is ready to assist you.
              </p>
              <div className="mb-3">
                <strong>Email:</strong>{' '}
                <a href="mailto:info@hphtdiamonds.com" style={{ color: '#0A2F3D' }}>
                  info@hphtdiamonds.com
                </a>
              </div>
              <div className="mb-3">
                <strong>Phone:</strong>{' '}
                <a href="tel:+18001234567" style={{ color: '#0A2F3D' }}>
                  +1 (800) 123-4567
                </a>
              </div>
              <div>
                <strong>Address:</strong> Surat, Gujarat, India
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
