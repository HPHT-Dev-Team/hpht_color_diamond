import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import serviceImg from '../assets/a.jpg'; // Replace with your actual image

const Services: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations (in ms)
      easing: 'ease-out', // Animation easing (optional)
      once: true, // Ensure animations only trigger once per page load
    });
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5" data-aos="fade-up" style={{ fontFamily: 'Montserrat, sans-serif', color: '#2C3E50' }}>
        Diamond Color Conversion Services
      </h1>

      <div className="row align-items-center mb-5">
        {/* Text Section */}
        <div className="col-md-6" data-aos="fade-right">
          <h2 className="mb-4" style={{ fontFamily: 'Lora, serif', color: '#34495E' }}>Our Expertise: Diamond Color Enhancement</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#7F8C8D' }}>
            At HPHT Diamonds, we specialize in the advanced HPHT (High Pressure High Temperature) process to enhance the color and quality of natural diamonds. 
            Through precise techniques, we transform faint-colored diamonds into stunning vivid colors such as fancy blue, yellow, and pink, significantly increasing their beauty and value.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#7F8C8D' }}>
            Our HPHT process simulates the natural conditions deep within the earth's mantle, allowing the diamond's crystal structure to rearrange and reveal vibrant hues. 
            This service is particularly valuable for diamonds with brownish or pale tones, elevating them to market-desirable shades.
          </p>
        </div>

        {/* Image Section */}
        <div className="col-md-6 text-center" data-aos="fade-left">
          <img src={serviceImg} alt="Diamond Color Conversion" className="img-fluid rounded shadow-lg" />
        </div>
      </div>

      {/* Process Section */}
      <div className="mb-5" data-aos="fade-up">
        <h2 className="mb-3" style={{ fontFamily: 'Lora, serif', color: '#34495E' }}>Our HPHT Process</h2>
        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm border-light" style={{ borderRadius: '8px', backgroundColor: '#F4F4F9' }}>
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#2C3E50' }}>1. Initial Evaluation</h5>
                <p className="card-text" style={{ color: '#7F8C8D' }}>Careful selection of eligible diamonds based on structure and purity.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm border-light" style={{ borderRadius: '8px', backgroundColor: '#F4F4F9' }}>
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#2C3E50' }}>2. HPHT Treatment</h5>
                <p className="card-text" style={{ color: '#7F8C8D' }}>Exposure to extremely high pressure and temperature in a controlled environment.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm border-light" style={{ borderRadius: '8px', backgroundColor: '#F4F4F9' }}>
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#2C3E50' }}>3. Color Enhancement</h5>
                <p className="card-text" style={{ color: '#7F8C8D' }}>Structural changes reveal vivid, pure color tones.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm border-light" style={{ borderRadius: '8px', backgroundColor: '#F4F4F9' }}>
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#2C3E50' }}>4. Final Inspection</h5>
                <p className="card-text" style={{ color: '#7F8C8D' }}>Rigorous quality control to ensure excellence and brilliance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-5" data-aos="fade-up">
        <h2 className="mb-3" style={{ fontFamily: 'Lora, serif', color: '#34495E' }}>Benefits of Our Diamond Color Conversion</h2>
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="p-4 border rounded h-100 shadow-sm bg-light" style={{ borderColor: '#BDC3C7' }}>
              <h5 style={{ color: '#2C3E50' }}>Increased Market Value</h5>
              <p style={{ color: '#7F8C8D' }}>Enhanced color diamonds attract higher prices and stronger demand in the jewelry market.</p>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="p-4 border rounded h-100 shadow-sm bg-light" style={{ borderColor: '#BDC3C7' }}>
              <h5 style={{ color: '#2C3E50' }}>Natural Process Simulation</h5>
              <p style={{ color: '#7F8C8D' }}>HPHT treatment mirrors the earth's natural diamond formation, preserving authenticity and durability.</p>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="p-4 border rounded h-100 shadow-sm bg-light" style={{ borderColor: '#BDC3C7' }}>
              <h5 style={{ color: '#2C3E50' }}>Vivid, Lasting Colors</h5>
              <p style={{ color: '#7F8C8D' }}>Our process produces permanent, intense colors without compromising the diamond's quality or strength.</p>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="p-4 border rounded h-100 shadow-sm bg-light" style={{ borderColor: '#BDC3C7' }}>
              <h5 style={{ color: '#2C3E50' }}>Certified & Ethical</h5>
              <p style={{ color: '#7F8C8D' }}>All our treated diamonds undergo certification and follow strict ethical standards.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-5" data-aos="fade-up">
        <h3 style={{ fontFamily: 'Lora, serif', color: '#2C3E50' }}>Transform Your Diamonds Today</h3>
        <p style={{ color: '#7F8C8D' }}>Contact us to learn how we can enhance the beauty and value of your diamonds through the HPHT color conversion process.</p>
        <a href="/contact-us" className="btn btn-primary btn-lg mt-3">Get in Touch</a>
      </div>
    </div>
  );
};

export default Services;
