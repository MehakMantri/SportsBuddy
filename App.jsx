import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Footer from './components/Footer'
import Works from './components/Works'
import AboutUs from './components/AboutUs'
import Features from './components/Features'
import Testimonials from './components/Testimonials';
import Join from './components/Join';

function App() {
  return (
    <div className="bg-coolGray">
      <Navbar />
      <Hero />
      <Works />
      <AboutUs />
      <Features />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;