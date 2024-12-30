import React, { useState } from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
    return (
      <nav className="bg-black text-white px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-green-500 text-2xl font-bold">
            <NavLink to="/">MyApp</NavLink>
          </div>
  
          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
  
          {/* Nav Links */}
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } md:flex md:items-center md:space-x-6`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-2 rounded ${
                  isActive ? "text-green-500 font-bold" : "hover:text-green-500"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block px-3 py-2 rounded ${
                  isActive ? "text-green-500 font-bold" : "hover:text-green-500"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/concerts"
              className={({ isActive }) =>
                `block px-3 py-2 rounded ${
                  isActive ? "text-green-500 font-bold" : "hover:text-green-500"
                }`
              }
            >
              Concerts
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `block px-3 py-2 rounded ${
                  isActive ? "text-green-500 font-bold" : "hover:text-green-500"
                }`
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `block px-3 py-2 rounded ${
                  isActive ? "text-green-500 font-bold" : "hover:text-green-500"
                }`
              }
            >
              Register
            </NavLink>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;