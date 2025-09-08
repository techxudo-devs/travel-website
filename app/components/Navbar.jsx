"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let timeoutId = null;

    const handleScroll = () => {
      // Throttle scroll events for better performance
      if (timeoutId) return;

      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 50);
        timeoutId = null;
      }, 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const navItems = [
    { name: "Tours", href: "#tours" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* CSS animations using Tailwind's arbitrary values */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-white/20"
            : "bg-transparent"
        }`}
      >
        <div className="container py-2 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 z-20">
              <Image
                src="/logo.png"
                alt="Travel"
                width={120}
                height={50}
                className="border"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Nav Items */}
              <div className="flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className={`
                      relative px-4 py-2 text-lg font-medium transition-all duration-300
                      hover:scale-105 group cursor-pointer
                      ${
                        isScrolled
                          ? "text-gray-700 hover:text-blue-600"
                          : "text-black  hover:text-slate-900"
                      }
                    `}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.name}
                    {/* Animated underline */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-400 transition-all duration-300 group-hover:w-full"></span>

                    {/* Hover glow effect */}
                    <span className="absolute inset-0 rounded-lg opacity-0 bg-gradient-to-r from-blue-500/10 to-teal-400/10 transition-opacity duration-300 group-hover:opacity-100"></span>
                  </a>
                ))}
              </div>

              {/* Book Now Button */}
              <button
                className={`
                  relative overflow-hidden group
                  text-black   font-semibold
                  px-6 py-2.5 rounded-full
                  transition-all duration-300
                  transform hover:scale-105 active:scale-95
                  border-2
                  ${
                    isScrolled
                      ? "bg-gradient-to-r from-dark to-brown border-dark hover:from-light hover:to-dark"
                      : "bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30"
                  }
                `}
              >
                <span className="relative z-10">Book Now</span>

                {/* Shimmer effect */}
                <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-all duration-700"></div>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden z-20">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`
                  p-2 rounded-lg transition-colors duration-300
                  ${
                    isScrolled
                      ? "text-gray-700 hover:bg-gray-100"
                      : "text-white hover:bg-white/10"
                  }
                `}
                aria-label="Toggle mobile menu"
              >
                <div className="w-6 h-6 relative">
                  <span
                    className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                      isMobileMenuOpen ? "rotate-45 top-2.5" : "top-1"
                    }`}
                  ></span>
                  <span
                    className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-0" : "top-2.5"
                    }`}
                  ></span>
                  <span
                    className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                      isMobileMenuOpen ? "-rotate-45 top-2.5" : "top-4"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`
              md:hidden absolute top-full left-0 right-0
              transition-all duration-300 ease-in-out
              ${
                isMobileMenuOpen
                  ? "opacity-100 visible transform translate-y-0"
                  : "opacity-0 invisible transform -translate-y-4"
              }
            `}
          >
            <div className="bg-white/95 backdrop-blur-lg border border-white/20 rounded-b-2xl shadow-xl mx-4 mt-2 overflow-hidden">
              <div className="py-4">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="
                      block px-6 py-3 text-gray-700 font-medium
                      hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50
                      hover:text-blue-600 transition-all duration-300
                      border-l-4 border-transparent hover:border-blue-500
                      cursor-pointer
                    "
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                    className={`
                      block px-6 py-3 text-gray-700 font-medium
                      hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50
                      hover:text-blue-600 transition-all duration-300
                      border-l-4 border-transparent hover:border-blue-500
                      cursor-pointer
                      ${isMobileMenuOpen ? "slide-in-animation" : ""}
                    `}
                  >
                    {item.name}
                  </a>
                ))}

                <div className="px-6 py-3">
                  <button
                    className="
                      w-full bg-gradient-to-r from-blue-600 to-teal-500
                      text-white font-semibold py-3 px-6 rounded-full
                      hover:from-blue-700 hover:to-teal-600
                      transition-all duration-300 transform hover:scale-105
                      shadow-lg hover:shadow-xl
                    "
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
