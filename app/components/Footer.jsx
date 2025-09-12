"use client";
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8 mb-8">
        {/* Logo and Address */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
              <img className='w-40' 
              // src="https://cdn.prod.website-files.com/6773bb8ef041a39ae66da8da/6774ca28bbe75cb8eb00366a_Brand%20logo.png" 
              alt="Logo" />
          </div>
          <p className="text-base">123 Main Street</p>
          <p className="text-base">New York, NY 10001</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-[#D1E993] transition-all duration-300 text-base">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#D1E993] transition-all duration-300 text-base">
                About Us
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-[#D1E993] transition-all duration-300 text-base">
                Packages
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#D1E993] transition-all duration-300 text-base">
                Events
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>
              <a href="mailto:website@gmail.com" className="hover:text-[#D1E993] transition-all duration-300 text-base">
                website@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+1500321852789" className="hover:text-[#D1E993] transition-all duration-300 text-base">
                +1 500 321 852 789
              </a>
            </li>
          </ul>
        </div>

        {/* Utility Pages */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Utility Pages</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-[#D1E993] transition-all duration-300 text-base">
                Style Guide
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#D1E993] transition-all duration-300 text-base">
                Licenses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#D1E993] transition-all duration-300 text-base">
                Changelog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#D1E993] transition-all duration-300 text-base">
                Search Result
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media and Copyright */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm">
        <p className="mb-4 md:mb-0 text-center md:text-left">
          Copyright &copy; Website | Designed by Techxudo - Powered by Techxudo
        </p>
        <div className="flex space-x-4">
          <a href="#" className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center hover:bg-[#D1E993] hover:text-gray-900 transition-colors duration-300">
            IG
          </a>
          <a href="#" className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center hover:bg-[#D1E993] hover:text-gray-900 transition-colors duration-300">
            TW
          </a>
          <a href="#" className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center hover:bg-[#D1E993] hover:text-gray-900 transition-colors duration-300">
            FB
          </a>
          <a href="#" className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center hover:bg-[#D1E993] hover:text-gray-900 transition-colors duration-300">
            WS
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;