import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const handleLogout = () => {
    logout();
    closeMenu();
  };

  // Helper to style active links
  const linkClasses = (path) =>
    location.pathname === path
      ? "text-indigo-600 font-semibold"
      : "text-gray-700 hover:text-indigo-600 transition";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[70px] flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <img src={logo} alt="Logo" className="h-10" />
          <span className="text-xl font-bold text-gray-900">FindMyFlat</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link to="/" className={linkClasses("/")}>Home</Link>
          <Link to="/listing" className={linkClasses("/listing")}>View Listings</Link>
          <Link to="/create-listing" className={linkClasses("/create-listing")}>Post Listing</Link>

          {isLoggedIn ? (
            <>
              <Link to="/dashboard" className={linkClasses("/dashboard")}>Dashboard</Link>
              <button
                onClick={handleLogout}
                className="text-red-600 hover:underline transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Toggle Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 bg-white space-y-2 text-sm font-medium border-t">
          <Link to="/" className={linkClasses("/")} onClick={closeMenu}>Home</Link>
          <Link to="/listing" className={linkClasses("/listing")} onClick={closeMenu}>View Listings</Link>
          <Link to="/create-listing" className={linkClasses("/create-listing")} onClick={closeMenu}>Post Listing</Link>

          {isLoggedIn ? (
            <>
              <Link to="/dashboard" className={linkClasses("/dashboard")} onClick={closeMenu}>Dashboard</Link>
              <button
                onClick={handleLogout}
                className="block text-red-600 w-full text-left"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={closeMenu}
                className="block bg-indigo-600 text-white text-center py-2 rounded-full"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={closeMenu}
                className="block bg-indigo-600 text-white text-center py-2 rounded-full"
              >
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
