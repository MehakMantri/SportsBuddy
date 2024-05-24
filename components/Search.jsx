import React from 'react';

function Search() {
  return (
    <section id="search" className="bg-white p-8 text-center">
      <h2 className="text-2xl mb-4">I'm looking for...</h2>
      <input type="text" placeholder="Enter town or postcode" className="border p-2 mr-2" />
      <select className="border p-2 mr-2">
        <option>Football</option>
        <option>Tennis</option>
        <option>Badminton</option>
        {/* Add more sports as needed */}
      </select>
      <button className="bg-blue-500 text-white p-2">Search</button>
    </section>
  );
}

export default Search;
