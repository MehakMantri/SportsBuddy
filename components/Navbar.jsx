import React from 'react';
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-8 py-4 bg-darkPurple text-white">
      {/* Left section - SportsBuddy */}
      <div>
        <h1 className="text-2xl font-bold">SportsBuddy</h1>
      </div>

      {/* Middle section - Navigation options */}
      <div className="flex justify-center space-x-8">
        <a href="#how-it-works" className="text-lg font-semibold hover:text-gray-300">How it Works</a>
        <a href="#about-us" className="text-lg font-semibold hover:text-gray-300">About Us</a>
        <a href="#features" className="text-lg font-semibold hover:text-gray-300">Features</a>
        <a href="#testimonials" className="text-lg font-semibold hover:text-gray-300">Testimonials</a>
      </div>

      {/* Right section - Join Now button */}
      <div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Join Now</button>
      </div>
    </nav>
  );
}

export default Navbar;
