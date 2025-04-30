// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import AboutUs from '../pages/AboutUs'
import Certifications from '../pages/Certifications'
import ContactUs from '../pages/ContactUs'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import Services from  '../pages/Services'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/certifications" element={<Certifications />} />
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="/Services" element={<Services />} />


  </Routes>
)

export default AppRoutes
