"use client";
import React, { useState } from "react";
import Link from "next/link";
const Footer = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <footer className=" relative bg-third  bg-no-repeat   text-light  py-8">
      <div className="max-w-[76rem] mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-4">
          {/* Information Section */}
          <div>
            <h3 className="text-light font-bold text-lg  boucher mb-4 tracking-wide">
              INFORMATION
            </h3>
            <div className="space-y-2 sofia text-light">
              <a
                href="https://maps.app.goo.gl/m51GHehDATiUa4p57"
                target="_blank"
                className="hover:text-primary transition-colors duration-400"
              >
                3500 E Parmer Lane,
                <br />
                Austin, Texas 78754
              </a>
              <div className="maw-w-10">
                <a
                  href="mailto:info@eastvillagetx.wpenginepower.com"
                  className="text-[15px] hover:text-primary transition-colors duration-400 "
                >
                  E:info@eastvillagetx.wpenginepower.com
                </a>
              </div>
              <a
                href="tel:512 777-8332"
                className="hover:text-primary transition-colors duration-400"
              >
                T: (512) 777-8332
              </a>
            </div>
          </div>

          {/* Navigation Section */}
          <div>
            <h3 className="text-light font-bold text-lg mb-4 boucher tracking-wide">
              NAVIGATION
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 sofia text-light">
              <Link
                href="/destinations"
                className="hover:text-light font-bold transition-colors duration-300"
              >
                Destinations
              </Link>
              <Link
                href="/tours"
                className="hover:text-light font-bold transition-colors duration-300"
              >
                Tours & Packages
              </Link>
              <Link
                href="/flights"
                className="hover:text-light font-bold transition-colors duration-300"
              >
                Flights
              </Link>
              <Link
                href="/hotels"
                className="hover:text-light font-bold transition-colors duration-300"
              >
                Hotels
              </Link>
              <Link
                href="/experiences"
                className="hover:text-light font-bold transition-colors duration-300"
              >
                Experiences
              </Link>
              <Link
                href="/travel-guides"
                className="hover:text-light font-bold transition-colors duration-300"
              >
                Travel Guides
              </Link>
              <Link
                href="/deals"
                className="hover:text-light font-bold transition-colors duration-300"
              >
                Deals
              </Link>
              <Link
                href="/about"
                className="hover:text-light font-bold transition-colors duration-300"
              >
                About Us
              </Link>
              <Link
                href="/blog"
                className="hover:text-light font-bold transition-colors duration-300"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="hover:text-light font-bold transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Get in Touch Section */}
          <div>
            <h3 className="text-light font-bold text-lg boucher mb-4 tracking-wide">
              GET IN TOUCH
            </h3>
            <div className="space-y-2">
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-0 border-b border-gray-600 pb-2 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-0 border-b border-gray-600 pb-2 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                />
              </div>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-0 border-b border-gray-600 pb-2 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                />
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="1"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-0 border-b border-gray-600 pb-2 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none resize-none transition-colors duration-300"
                />
              </div>
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-light hover:bg-light text-white hover:text-light cursor-pointer  py-2 px-8 rounded-full mt-2 transition-colors duration-300"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>

          {/* Stay Up to Date Section */}
          <div>
            <h3 className="text-light font-bold text-lg boucher mb-6 tracking-wide">
              STAY UP TO DATE
            </h3>
            <button className="bg-light hover:bg-light text-white hover:text-light text-sm   py-2 px-6 rounded-full transition-colors duration-300">
              IN THE NEWS
            </button>
          </div>
        </div>

        {/* Partners Section */}

        {/* Bottom Section */}
        <div className="flex flex-col sofia  md:flex-row justify-between items-center pt-8 border-t border-gray-700">
          <div className="mb-4 md:mb-0">
            <a
              href="#"
              className="text-gray-400 hover:text-light font-bold transition-colors duration-300"
            >
              Privacy Policy
            </a>
          </div>
          <div className="text-gray-400 text-sm">
            Designed by{" "}
            <span className="text-white font-semibold">Techxudo</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
