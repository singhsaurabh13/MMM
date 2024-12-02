import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Company Info */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Company Name</h2>
            <p className="text-sm">1234 Street Name, City, State, 56789</p>
            <p className="text-sm">Email: info@company.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-xl hover:text-blue-500 transition duration-200" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-xl hover:text-blue-400 transition duration-200" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl hover:text-pink-400 transition duration-200" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl hover:text-blue-600 transition duration-200" />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="mt-4 md:mt-6">
          <h3 className="font-bold">Useful Links</h3>
          <ul className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4">
            <li><a href="/about" className="text-gray-400 hover:text-white transition duration-200">About Us</a></li>
            <li><a href="/services" className="text-gray-400 hover:text-white transition duration-200">Services</a></li>
            <li><a href="/contactus" className="text-gray-400 hover:text-white transition duration-200">Contact Us</a></li>
            <li><a href="/privacy" className="text-gray-400 hover:text-white transition duration-200">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="text-center text-sm mt-4">
        <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved. <a href="https://techxpert.in">techxpert.in</a> </p>
      </div>
    </footer>
  );
};

export default Footer;
