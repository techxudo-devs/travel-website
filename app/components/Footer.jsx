"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-gray-300 py-12 px-6">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://cdn.prod.website-files.com/6773bb8ef041a39ae66da8da/6774e3e00617c7701b4eb3c0_Footer%20BG.jpg')` }}
      ></div>

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8 mb-8">
        {/* Logo and Address */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            <Image
              src="/logoo.jpeg"
              alt="Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
          <p className="text-base">123 Main Street</p>
          <p className="text-base">New York, NY 10001</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-[#D0B4B3] transition-all duration-300 text-base">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#D0B4B3] transition-all duration-300 text-base">
                About Us
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-[#D0B4B3] transition-all duration-300 text-base">
                Packages
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#D0B4B3] transition-all duration-300 text-base">
                Events
              </a>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#D0B4B3] transition-all duration-300 text-base">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>
              <a href="mailto:website@gmail.com" className="hover:text-[#D0B4B3] transition-all duration-300 text-base">
                website@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+1500321852789" className="hover:text-[#D0B4B3] transition-all duration-300 text-base">
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
              <a href="#" className="hover:text-[#D0B4B3] transition-all duration-300 text-base">
                Style Guide
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#D0B4B3] transition-all duration-300 text-base">
                Licenses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#D0B4B3] transition-all duration-300 text-base">
                Changelog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#D0B4B3] transition-all duration-300 text-base">
                Search Result
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media and Copyright */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-white">
        <p className="mb-4 md:mb-0 text-center md:text-left">
          Copyright &copy; Website | Designed by Techxudo - Powered by Techxudo
        </p>
        <div className="flex space-x-4">
          <a href="#" className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center hover:bg-[#D0B4B3] hover:text-gray-900 transition-colors duration-300">
            IG
          </a>
          <a href="#" className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center hover:bg-[#D0B4B3] hover:text-gray-900 transition-colors duration-300">
            TW
          </a>
          <a href="#" className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center hover:bg-[#D0B4B3] hover:text-gray-900 transition-colors duration-300">
            FB
          </a>
          <a href="#" className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center hover:bg-[#D0B4B3] hover:text-gray-900 transition-colors duration-300">
            WS
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;