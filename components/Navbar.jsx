import React from 'react';

function Navbar() {
  return (
    
      <nav className="bg-vibrantBlue py-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-white font-bold text-xl">SportsBuddy</a>
            <ul className="flex space-x-4">
              <li><a href="#how-it-works" className="text-white">How It Works</a></li>
              <li><a href="#about-us" className="text-white">About Us</a></li>
              <li><a href="#features" className="text-white">Features</a></li>
              <li><a href="#testimonials" className="text-white">Testimonials</a></li>
              <li><a href="#join" className="text-white">Join</a></li>
            </ul>
          </div>
        </div>
      </nav>
   
  );
}

export default Navbar;
