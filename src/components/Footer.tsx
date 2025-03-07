import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Pointer as Pinterest } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center">
              <img src="/src/assests/images/travelick (1)_pg3.png" alt="Travelick" className="h-12 w-auto" />
              <span className="ml-2 text-xl font-bold">Travelick</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.
            </p>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Important Link</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-primary">About Us</Link></li>
              <li><Link to="/tours" className="text-gray-400 hover:text-primary">Tour Plan</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-primary">Privacy</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-primary">Blog & Tag</Link></li>
            </ul>
          </div>

          {/* Destination */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Destination</h3>
            <ul className="space-y-2">
              <li><Link to="/tours/egypt" className="text-gray-400 hover:text-primary">Egypt Tour</Link></li>
              <li><Link to="/tours/new-york" className="text-gray-400 hover:text-primary">New York Tour</Link></li>
              <li><Link to="/tours/indonesia" className="text-gray-400 hover:text-primary">Indonesia Tour</Link></li>
              <li><Link to="/tours/nepal" className="text-gray-400 hover:text-primary">Nepal Tour</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to get the latest updates and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter Email"
                className="flex-1 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary px-4 py-2 rounded-r-md hover:bg-primary-dark transition-colors"
              >
                →
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">Copyright ©2024 Travelick. All Rights Reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary"><Facebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-primary"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-primary"><Pinterest size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-primary"><Instagram size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;