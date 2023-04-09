import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Navbar = () => {
  return (
    <nav className="bg-blue-500 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">
          WelcomeBD
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/countries" className="text-white hover:text-gray-300">
            Country
            </Link>
          </li>
          <li>
            <Link to="/meals" className="text-white hover:text-gray-300">
           Meals
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-white hover:text-gray-300">
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="bg-white text-blue-500 font-semibold px-4 py-2 rounded-md hover:bg-gray-100"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
