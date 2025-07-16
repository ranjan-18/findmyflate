import React, { useState } from "react";
import { Link } from "react-router-dom"; // if you're using react-router
import logo from "../assets/logo.png"

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with real auth
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleLogout = () => {
    // handle real logout
    setIsLoggedIn(false);
  };

  return (
    <header className="bg-white shadow-md  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[70px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10" />
          <span className="text-xl font-bold text-gray-900 ">FindMyFlat</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-indigo-600 text-gray-700  transition">Home</Link>
          <Link to="/about" className="hover:text-indigo-600 text-gray-700  transition">demo</Link>
          <Link to="/listings" className="hover:text-indigo-600 text-gray-700  transition">Room Listing</Link>

          {isLoggedIn ? (
            <>
              <Link to="/dashboard" className="hover:text-indigo-600 text-gray-700 ">Dashboard</Link>
              <button onClick={handleLogout} className="text-red-600 hover:underline">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-indigo-600 text-gray-700">About Us</Link>
              <Link to="/register" className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition">Sign Up</Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 dark:text-white"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 bg-white dark:bg-gray-900 space-y-2 text-sm font-medium">
          <Link to="/" className="block text-gray-700 dark:text-white">Home</Link>
          <Link to="/about" className="block text-gray-700 dark:text-white">About</Link>
          <Link to="/listings" className="block text-gray-700 dark:text-white">Listings</Link>

          {isLoggedIn ? (
            <>
              <Link to="/dashboard" className="block text-gray-700 dark:text-white">Dashboard</Link>
              <button onClick={handleLogout} className="block text-red-600">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="block text-gray-700 dark:text-white">Login</Link>
              <Link to="/register" className="block bg-indigo-600 text-white text-center py-2 rounded-full">
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
