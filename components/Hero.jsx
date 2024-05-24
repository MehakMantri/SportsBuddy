import React from 'react';
function Hero() {
  return (
    <div className="bg-cover bg-center py-24 text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Find Your Perfect Playmate with SportsBuddy!</h1>
      <p className="text-lg mb-6">Connect with fellow sports enthusiasts in your area and start playing today!</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Join Now</button>
    </div>
  </div>

  );
}

export default Hero;
