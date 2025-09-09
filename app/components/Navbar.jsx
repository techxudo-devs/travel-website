"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Tours", href: "#tours" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-light/95 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              {/* Using a placeholder for the logo to ensure visibility */}
              <Image
                src="/logo.png" // Ensure you have a logo that works with the new theme
                alt="Travel"
                width={120}
                height={50}
                className="border"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`relative px-4 py-2 text-lg font-medium transition-colors duration-300 group ${
                    isScrolled
                      ? "text-dark hover:text-brown"
                      : "text-dark hover:text-brown"
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brown transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <button
              className={`
                relative overflow-hidden group
                bg-dark text-light font-semibold
                px-6 py-2.5 rounded-full
                transition-all duration-300
                transform hover:scale-105 active:scale-95
                hover:bg-brown
              `}
            >
              <span className="relative z-10">Book Now</span>
              <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-all duration-700"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled
                  ? "text-dark hover:bg-semilight/50"
                  : "text-dark hover:bg-dark/10"
              }`}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 top-2.5" : ""
                  }`}
                ></span>
                <span
                  className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : "top-1/2 -translate-y-1/2"
                  }`}
                ></span>
                <span
                  className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 top-2.5" : "bottom-0"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`
          md:hidden absolute top-full left-0 right-0
          transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        <div className="bg-light/95 backdrop-blur-lg shadow-xl mx-4 mt-2 rounded-lg overflow-hidden border border-semilight/20">
          <div className="py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="
                  block px-6 py-3 text-dark font-medium
                  hover:bg-semilight/50
                  transition-colors duration-300
                "
              >
                {item.name}
              </a>
            ))}

            <div className="px-6 pt-4 pb-2">
              <button
                className="
                  w-full bg-dark text-light font-semibold py-3 px-6 rounded-full
                  hover:bg-brown
                  transition-colors duration-300 transform hover:scale-105
                  shadow-lg
                "
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
