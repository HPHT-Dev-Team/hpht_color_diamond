import React from 'react'
import { Link } from 'react-router-dom'
import aboutImg from '../assets/about.jpeg'

const AboutSection: React.FC = () => {
  return (
    <div style={{ display: 'flex', padding: '60px 40px', alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', paddingRight: '20px', minWidth: '300px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>About Our Company</h2>
        <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
          We specialize in HPHT color-enhanced diamonds, bringing out the vibrant hues and beauty of each gem using advanced technology.
          Trusted by jewelers and diamond enthusiasts globally.
        </p>
        <Link to="/about-us">
          <button style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#D4AF37', border: 'none', borderRadius: '8px', fontWeight: 'bold' }}>
            Learn More
          </button>
        </Link>
      </div>
      <div style={{ flex: '1', minWidth: '300px' }}>
        <img src={aboutImg} alt="About" style={{ width: '100%', borderRadius: '8px' }} />
      </div>
    </div>
  )
}

export default AboutSection
