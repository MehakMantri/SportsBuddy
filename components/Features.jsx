import React from 'react'

function Features() {
  return (
    <div id="features" className="py-24">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Features</h2>
          <p className="text-lg mb-12">Everything You Need to Play and Win</p>
          <ul className="text-left grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <li>
              <h3 className="text-xl font-bold mb-4">Personalized Matches</h3>
              <p>Find players who share your passion and skill level.</p>
            </li>
            <li>
              <h3 className="text-xl font-bold mb-4">Scheduling Tools</h3>
              <p>Easily arrange games and practices with your team.</p>
            </li>
            <li>
              <h3 className="text-xl font-bold mb-4">Community Events</h3>
              <p>Participate in local sports events and tournaments.</p>
            </li>
            <li>
              <h3 className="text-xl font-bold mb-4">Rating System</h3>
              <p>Rate your teammates and build your reputation within the community.</p>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default Features
