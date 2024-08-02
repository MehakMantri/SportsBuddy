import React from 'react';

function Works() {
  return (
    <div id="how-it-works" className="container mx-auto text-center py-40">
      <h2 className="text-4xl font-bold mb-8 text-white">How It Works</h2>
      <p className="text-2xl mb-12 text-white">Connecting Players, One Game at a Time</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-silver p-8 rounded-lg shadow-lg max-w-sm mx-auto">
          <h3 className="text-2xl font-bold mb-4">Sign Up</h3>
          <p className="text-sm">Create your free account and tell us about the sports you love.</p>
        </div>
        <div className="bg-silver p-8 rounded-lg shadow-lg max-w-sm mx-auto">
          <h3 className="text-2xl font-bold mb-4">Match</h3>
          <p className="text-sm">Our smart algorithm matches you with potential teammates based on your preferences and skill level.</p>
        </div>
        <div className="bg-silver p-8 rounded-lg shadow-lg max-w-sm mx-auto">
          <h3 className="text-2xl font-bold mb-4">Play</h3>
          <p className="text-sm">Connect with your new teammates, schedule games, and hit the field or court!</p>
        </div>
      </div>
    </div>
  );
}

export default Works;
