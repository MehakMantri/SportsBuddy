import React from 'react';
// import img1 from './images/image4.jpeg';

function Register() {
  return (
    <div className="flex min-h-screen text-gray-100 flex-1 flex items-center justify-center">
      {/* Container for image */}
      {/* <div className="flex-1 flex items-center justify-center">
        <img 
          src={img1} 
          alt="sport-img" 
          className="w-[600px] h-auto object-cover rounded-lg shadow-lg" 
        />
      </div> */}
      {/* Container for form */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-6 space-y-6 bg-gray-800 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-center text-indigo-400">Register</h2>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <div className="flex-1">
                <label htmlFor="firstName" className="block text-sm font-medium text-indigo-300">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  required 
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                />
              </div>
              <div className="flex-1">
                <label htmlFor="lastName" className="block text-sm font-medium text-indigo-300">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  required 
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                />
              </div>
            </div>
            
            <div className="flex space-x-4">
              <div className="flex-1">
                <label htmlFor="phone" className="block text-sm font-medium text-indigo-300">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required 
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                />
              </div>
              <div className="flex-1">
                <label htmlFor="age" className="block text-sm font-medium text-indigo-300">Age</label>
                <input 
                  type="number" 
                  id="age" 
                  name="age" 
                  required 
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                />
              </div>
            </div>
            
            <div className="flex space-x-4">
              <div className="flex-1">
                <label htmlFor="city" className="block text-sm font-medium text-indigo-300">City</label>
                <input 
                  type="text" 
                  id="city" 
                  name="city" 
                  required 
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                />
              </div>
              <div className="flex-1">
                <label htmlFor="state" className="block text-sm font-medium text-indigo-300">State</label>
                <input 
                  type="text" 
                  id="state" 
                  name="state" 
                  required 
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="sports" className="block text-sm font-medium text-indigo-300">Sports Preference</label>
              <input 
                type="text" 
                id="sports" 
                name="sports" 
                required 
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" 
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-indigo-300">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" 
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-indigo-300">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                required 
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" 
              />
            </div>
            
            <div>
              <button 
                type="submit" 
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-400">
              Already have an account? 
              <a href="/login" className="text-indigo-400 hover:text-indigo-300 ml-1">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

