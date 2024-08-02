import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Works from './components/Works';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="bg-darkPurple">
     
      <Routes>
        <Route path="/" element={
          <>
           <Navbar />
            <Menu />
            <Works />
            <AboutUs />
            <Features />
            <Testimonials />
            <Footer />
          </>
        } />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
    </div>
  );
}

export default App;