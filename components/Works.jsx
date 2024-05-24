import React from 'react';
function Works() {
  return (
    
    <div id="how-it-works" className="container mx-auto text-center ">
      <h2 className="text-3xl font-bold mb-8 text-white">How It Works</h2>
      <p className="text-lg mb-12 text-white">Connecting Players, One Game at a Time</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Sign Up</h3>
          <p>Create your free account and tell us about the sports you love.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Match</h3>
          <p>Our smart algorithm matches you with potential teammates based on your preferences and skill level.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Play</h3>
          <p>Connect with your new teammates, schedule games, and hit the field or court!</p>
        </div>
      </div>
    </div>
  

  );
}

export default Works;
