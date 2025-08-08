import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"; // adjust the path as necessary

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-gray-200 font-[Poppins] px-6 md:px-16 lg:px-24 xl:px-32 w-full">
      <div className="flex flex-col md:flex-row justify-between gap-10 py-12 border-b border-gray-300/30">
        
        {/* Logo and Description */}
        <div className="max-w-md">
          <Link to="/">
            <img src={Logo} alt="Company Logo" className="h-10 mb-4" />
          </Link>
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
          </p>
        </div>

        {/* Links */}
        <div className="w-full md:w-1/2 flex flex-wrap md:flex-nowrap justify-between gap-10">
          <div>
            <h2 className="text-base font-semibold text-gray-800 mb-4">RESOURCES</h2>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/docs" className="hover:text-indigo-600">Documentation</Link></li>
              <li><Link to="/tutorials" className="hover:text-indigo-600">Tutorials</Link></li>
              <li><Link to="/blog" className="hover:text-indigo-600">Blog</Link></li>
              <li><Link to="/community" className="hover:text-indigo-600">Community</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-800 mb-4">COMPANY</h2>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/about" className="hover:text-indigo-600">About</Link></li>
              <li><Link to="/careers" className="hover:text-indigo-600">Careers</Link></li>
              <li><Link to="/privacy" className="hover:text-indigo-600">Privacy</Link></li>
              <li><Link to="/terms" className="hover:text-indigo-600">Terms</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="py-6 text-center text-xs md:text-sm text-gray-500">
        Copyright © 2024{" "}
        <a
          href="https://prebuiltui.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline"
        >
          FindMyFlat
        </a>
        . All Rights Reserved.
      </div>
    </footer>
  );
}
