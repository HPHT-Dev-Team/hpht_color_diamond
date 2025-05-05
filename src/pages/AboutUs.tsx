import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS JavaScript
import { Link } from 'react-router-dom';

const AboutUs: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Longer duration for a smooth effect
      easing: 'ease-in-out',
      once: true, // Animate only once
    });
  }, []);

  return (
    <div style={{ padding: '0 0rem' }}>
      <div style={{ padding: '60px 40px' }}>
        {/* Page Title */}
        <h2 className="text-center mb-5 text-primary" style={{ fontSize: '36px' }} data-aos="fade-up">
          About HPHT Diamonds
        </h2>

        {/* Company Overview */}
        <div className="row">
          <div className="col-lg-6" data-aos="fade-right">
            <h3>Who We Are</h3>
            <p className="lead">
              HPHT Diamonds is a premium diamond enhancement company specializing in the High Pressure High Temperature (HPHT) process. We transform ordinary diamonds into extraordinary pieces of art, enhancing their natural color, brilliance, and overall value. Our goal is to create diamonds that capture the essence of elegance and exclusivity.
            </p>
            <p>
              We work with leading experts in the field of diamond enhancement, ensuring that every piece of jewelry we offer is of the highest quality. We are committed to innovation, sustainability, and customer satisfaction, making us the go-to choice for diamond connoisseurs worldwide.
            </p>
          </div>

          {/* Company Mission & Values */}
          <div className="col-lg-6" data-aos="fade-left">
            <h3>Our Mission & Values</h3>
            <ul>
              <li><i className="bi bi-check-circle"></i> <strong>Innovation:</strong> Harnessing cutting-edge HPHT technology to create stunning diamonds.</li>
              <li><i className="bi bi-check-circle"></i> <strong>Transparency:</strong> We believe in honesty and integrity with our clients at every stage of the process.</li>
              <li><i className="bi bi-check-circle"></i> <strong>Excellence:</strong> Only the finest diamonds make it through our quality assurance process.</li>
              <li><i className="bi bi-check-circle"></i> <strong>Sustainability:</strong> Eco-friendly and ethical diamond enhancement practices for a sustainable future.</li>
            </ul>
          </div>
        </div>

        {/* HPHT Process Section */}
        <div className="row mt-5">
          <div className="col-lg-6" data-aos="fade-up">
            <h3>The HPHT Process</h3>
            <p className="lead">
              The HPHT process involves recreating the extreme conditions found deep within the Earth to enhance the color and clarity of diamonds. This process allows us to transform diamonds into vivid blue, intense yellow, and rare pink diamonds. HPHT is a sophisticated, high-tech method that not only improves the color but also increases the diamond's value.
            </p>
            <p>
              Our experienced technicians utilize state-of-the-art equipment to apply precise pressure and temperature conditions to the diamonds, allowing them to reach their full potential. The results are diamonds with exceptional colors that reflect the natural beauty of these precious stones.
            </p>
          </div>

          <div className="col-lg-6" data-aos="zoom-in">
            <img
              src="https://via.placeholder.com/600x400" // Replace with actual image showing the process
              alt="HPHT Diamond Process"
              className="img-fluid rounded shadow-lg"
            />
          </div>
        </div>

        {/* Why Choose Us? Section */}
        {/* <div className="row mt-5" data-aos="fade-up">
          <div className="col-lg-12 text-center">
            <h3 className="mb-4">Why Choose HPHT Diamonds?</h3>
            <div className="row">
              <div className="col-md-4">
                <div className="card p-4 shadow-sm">
                  <h5>Unmatched Expertise</h5>
                  <p>With years of experience and a team of skilled professionals, we are experts in the HPHT diamond enhancement process.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-4 shadow-sm">
                  <h5>High Quality Standards</h5>
                  <p>We ensure that only the best diamonds pass through our rigorous quality checks, guaranteeing the highest level of craftsmanship.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-4 shadow-sm">
                  <h5>Competitive Pricing</h5>
                  <p>We offer high-end diamonds at competitive prices, giving you excellent value for your investment.</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Customer Testimonials Section */}
        {/* <div className="row mt-5" data-aos="fade-up">
          <div className="col-lg-12 text-center">
            <h3 className="mb-4">What Our Clients Say</h3>
            <div className="carousel slide" id="carouselTestimonial" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <p>
                    "The HPHT process transformed my diamond into something extraordinary. The color is breathtaking, and the quality is unmatched. Highly recommend!"
                  </p>
                  <footer>- John Doe, New York</footer>
                </div>
                <div className="carousel-item">
                  <p>
                    "I was amazed at the attention to detail and the clarity of the diamond I received. HPHT Diamonds truly delivers exceptional products."
                  </p>
                  <footer>- Sarah Lee, Los Angeles</footer>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselTestimonial" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselTestimonial" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div> */}

        {/* Contact Us CTA */}
        <div className="row mt-5" data-aos="fade-up">
          <div className="col-lg-12 text-center">
            <h3>Interested in Learning More?</h3>
            <p>Get in touch with us today to discover how we can transform your diamonds and increase their value!</p>
            <Link to="/contact-us" className="btn btn-primary btn-lg">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
