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
      <ContactUs />
    </div>
  )
}

export default Home
