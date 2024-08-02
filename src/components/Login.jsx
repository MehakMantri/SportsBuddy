import React from 'react';

function Login() {
  return (
    <div className="flex min-h-screen text-gray-100 flex-1 flex items-center justify-center">
      {/* Container for form */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-6 space-y-6 bg-gray-800 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-center text-indigo-400">Login</h2>
          <form className="space-y-4">
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
                Login
              </button>
            </div>
          </form>
          {/* Link to registration page */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-400">
              Don't have an account? 
              <a href="/register" className="text-indigo-400 hover:text-indigo-300 ml-1">Register</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
