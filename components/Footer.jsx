import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="mb-4">Stay Connected, Stay Active</p>
          <p className="mb-4">Follow us on social media for updates, tips, and upcoming events. Have questions or feedback? Contact our support team anytime. Together, we’re building a stronger sports community.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-white hover:text-gray-400">Facebook</a>
            <a href="#" className="text-white hover:text-gray-400">Twitter</a>
            <a href="#" className="text-white hover:text-gray-400">Instagram</a>
            <a href="#" className="text-white hover:text-gray-400">LinkedIn</a>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
