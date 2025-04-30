import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppRoutes from './router/routes'
// src/index.tsx or src/App.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 


const App: React.FC = () => (
  <>
    <Navbar />
    <div>
      <AppRoutes />
    </div>
    <Footer />
  </>
)

export default App
