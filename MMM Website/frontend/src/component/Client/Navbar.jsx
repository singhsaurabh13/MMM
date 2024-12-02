import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/sidhi.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-600 shadow sticky top-0 z-10 transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img className="w-28" src={logo} alt="Company Logo" />
            </Link>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Navbar Links for Desktop */}
          <div className={`md:flex items-center space-x-6 hidden absolute md:static transition-all duration-300 ease-in-out`}>
            <Link to="/" className="text-white hover:text-gray-300 transition duration-200">Home</Link>
            <Link to="/plans" className="text-white hover:text-gray-300 transition duration-200">Plans</Link>
            <Link to="/rule" className="text-white hover:text-gray-300 transition duration-200">Rules</Link>

            {/* Dropdown Menu for Information with hover effect */}
            <div className="relative group">
              <button className="text-white hover:text-gray-300 transition duration-200 focus:outline-none">
                Information
              </button>
              <div className="absolute hidden group-hover:block bg-green-600 mt-2 space-y-4 px-6 p-2 w-60 rounded shadow-lg">
                <Link to="/mmmglobal" className="block text-white hover:text-gray-300 transition duration-200">What is MMM Global</Link>
                <Link to="/ideology" className="block text-white hover:text-gray-300 transition duration-200">Ideology</Link>
                <Link to="/news" className="block text-white hover:text-gray-300 transition duration-200">News</Link>
                <Link to="/promotion" className="block text-white hover:text-gray-300 transition duration-200">Promotional Materials</Link>
                <Link to="/contactleader" className="block text-white hover:text-gray-300 transition duration-200">Contacts of Leaders</Link>
              </div>
            </div>

            <Link to="/testimonial" className="text-white hover:text-gray-300 transition duration-200">Testimonial</Link>
            <Link to="/login" className="text-white hover:text-gray-300 transition duration-200">Login</Link>
            <Link to="/contactus" className="text-white hover:text-gray-300 transition duration-200">Contact Us</Link>
            <Link
              to="/register"
              className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded hover:from-blue-400 hover:to-green-400 transition duration-200"
            >
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-600 shadow-md transition-transform duration-300 ease-in-out">
          <div className="flex flex-col space-y-2 p-4">
            <Link to="/" className="text-white hover:text-gray-300 transition duration-200">Home</Link>
            <Link to="/plans" className="text-white hover:text-gray-300 transition duration-200">Plans</Link>
            <Link to="/rule" className="text-white hover:text-gray-300 transition duration-200">Rules</Link>

            {/* Dropdown Menu for Information in Mobile */}
            <div className="relative">
              <button className="text-white hover:text-gray-300 transition duration-200 focus:outline-none">
                Information
              </button>
              <div className="pl-4 mt-2 space-y-2">
                <Link to="/mmmglobal" className="text-white hover:text-gray-300 transition duration-200">What is MMM Global</Link>
                <Link to="/ideology" className="text-white hover:text-gray-300 transition duration-200">Ideology</Link>
                <Link to="/news" className="text-white hover:text-gray-300 transition duration-200">News</Link>
                <Link to="/promotion" className="text-white hover:text-gray-300 transition duration-200">Promotional Materials</Link>
                <Link to="/contactleader" className="text-white hover:text-gray-300 transition duration-200">Contacts of Leaders</Link>
              </div>
            </div>

            <Link to="/testimonial" className="text-white hover:text-gray-300 transition duration-200">Testimonial</Link>
            <Link to="/login" className="text-white hover:text-gray-300 transition duration-200">Login</Link>
            <Link to="/contactus" className="text-white hover:text-gray-300 transition duration-200">Contact Us</Link>
            <Link
              to="/register"
              className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded hover:from-blue-400 hover:to-green-400 transition duration-200"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
