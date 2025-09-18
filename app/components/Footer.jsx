"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-gray-300 py-12 px-6">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/footer-main.jpg')` }}
      ></div>

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8 mb-8">
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            <img
              loading="lazy"
              src="/logo23.svg"
              alt="Logo"
              className="object-contain w-60"
            />
          </div>
          <p className="text-base">123 Main Street</p>
          <p className="text-base">New York, NY 10001</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold text-[#b49a99] mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="hover:text-[#D0B4B3] transition-all duration-300 text-base"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#D0B4B3] transition-all duration-300 text-base"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/tourpage"
                className="hover:text-[#D0B4B3] transition-all duration-300 text-base"
              >
                Tours
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-[#D0B4B3] transition-all duration-300 text-base"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#D0B4B3] transition-all duration-300 text-base"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl font-semibold text-[#b49a99] mb-4">
            Contact
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:website@gmail.com"
                className="hover:text-[#D0B4B3] transition-all duration-300 text-base"
              >
                travelgirls@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+1500321852789"
                className="hover:text-[#D0B4B3] transition-all duration-300 text-base"
              >
                +1 500 321 852 789
              </a>
            </li>
          </ul>
        </div>

        {/* Utility Pages */}
        <div>
          <h3 className="text-2xl font-semibold text-[#b49a99] mb-4">
            Utility Pages
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-[#D0B4B3] transition-all duration-300 text-base"
              >
                Style Guide
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#D0B4B3] transition-all duration-300 text-base"
              >
                Licenses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#D0B4B3] transition-all duration-300 text-base"
              >
                Changelog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#D0B4B3] transition-all duration-300 text-base"
              >
                Search Result
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media and Copyright */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-white">
        <p className="mb-4 md:mb-0 text-center md:text-left">
          Copyright &copy; TravelGirls
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center hover:bg-[#D0B4B3] hover:text-gray-900 transition-colors duration-300"
          >
            IG
          </a>
          <a
            href="#"
            className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center hover:bg-[#D0B4B3] hover:text-gray-900 transition-colors duration-300"
          >
            TW
          </a>
          <a
            href="#"
            className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center hover:bg-[#D0B4B3] hover:text-gray-900 transition-colors duration-300"
          >
            FB
          </a>
          <a
            href="#"
            className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center hover:bg-[#D0B4B3] hover:text-gray-900 transition-colors duration-300"
          >
            WS
          </a>
        </div>
      </div>
      <a
        href="https://wa.me/yourphonenumber"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[999]"
      >
        <div className="relative">
          <div className="w-14 sm:w-16 h-14 sm:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl transform hover:scale-105 transition-transform duration-300 cursor-pointer">
            <FaWhatsapp className="text-white text-2xl sm:text-4xl" />
          </div>
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
            1
          </span>
        </div>
      </a>
    </footer>
  );
};

export default Footer;
