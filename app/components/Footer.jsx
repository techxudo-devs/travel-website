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
    // Handle form submission logic here
  };

  return (
    <footer
      // style={{ backgroundImage: `url('/wave4.svg')` }}
      className=" relative bg-brown  bg-no-repeat   text-white  py-8"
    >
      {/* <div className="absolute inset-0 bg-dark/60 z-0"></div> */}
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
            <h3 className="text-light font-bold text-lg  mb-4 boucher tracking-wide">
              NAVIGATION
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 sofia text-light">
              <Link
                href="/retail"
                className="hover:text-light font-bold transition-colors duration-300"
              >
                Retail
              </Link>
              <Link
                href="/amenities"
                className="hover:text-light font-bold transition-colors duration-300"
              >
                Amenities
              </Link>
              <Link
                href="/restaurants"
                className="hover:text-light font-bold transition-colors duration-300"
              >
                Restaurants
              </Link>
              <Link
                href="/location"
                className="hover:text-light font-bold transition-colors duration-300"
              >
                Location
              </Link>
              <Link
                href="/residencies"
                className="hover:text-light font-bold transition-colors duration-300"
              >
                Residences
              </Link>
              <Link
                href="/news-events"
                className="hover:text-light font-bold transition-colors duration-300"
              >
                News & Events
              </Link>
              <Link
                href="/hotels"
                className="hover:text-light font-bold transition-colors duration-300"
              >
                Hotels
              </Link>
              <Link
                href="/faqs"
                className="hover:text-light font-bold transition-colors duration-300"
              >
                FAQ's
              </Link>
              <Link
                href="/office"
                className="hover:text-light font-bold transition-colors duration-300"
              >
                Office
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
                  className="bg-orange-500 hover:bg-orange-600 text-white  py-2 px-8 rounded-full mt-2 transition-colors duration-300"
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
            <button className="bg-orange-500  hover:bg-orange-600 text-sm text-white  py-2 px-6 rounded-full transition-colors duration-300">
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
