import React from 'react'

function Testimonials() {
  return (
    <div id="testimonials" className="bg-gray-100 py-24">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
      <p className="text-lg mb-12">Join Thousands of Happy Players</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <blockquote>
            <p className="text-xl mb-4">“SportsBuddy helped me find the best basketball team I’ve ever played with. Highly recommend!”</p>
            <footer>- Alex P.</footer>
          </blockquote>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <blockquote>
            <p className="text-xl mb-4">“As a newcomer to the city, SportsBuddy made it easy to connect with fellow soccer enthusiasts. I love it!”</p>
            <footer>- Maria L.</footer>
          </blockquote>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <blockquote>
            <p className="text-xl mb-4">“Great platform for finding tennis partners. It’s user-friendly and reliable.”</p>
            <footer>- James T.</footer>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Testimonials
