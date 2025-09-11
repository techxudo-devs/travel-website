"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, ChevronDownIcon } from "lucide-react";

// --- SVG Icon Components ---
const PhoneIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-5 w-5 ${className}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

// --- Main Navbar Component ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state if user scrolls down more than 10px
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Navigation links data
  const navItems = [
    { name: "Home", href: "#" },
    { name: "Packages", href: "#" },
    { name: "About us", href: "#" },
    { name: "Destinations", href: "#" },
    { name: "Review", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  const headerTextColor = isScrolled ? "text-gray-700" : "text-white";

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Announcement Bar */}
      <div
        className={`bg-third  ${
          isScrolled ? "hidden" : ""
        } text-center py-6 px-4`}
      >
        <p className="text-sm font-semibold text-white">
          Summer specials offer - The season's best deals | Up to 60% off
        </p>
      </div>

      {/* Main Navigation */}
      <nav
        className={`transition-all duration-300 ease-in-out ${
          isScrolled ? "bg-fourth backdrop-blur-lg shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex items-center  justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="flex  items-center">
                <Image
                  src="/logo.png"
                  alt="Travito Logo"
                  width={120}
                  height={40}
                />
              </a>
            </div>

            {/* Right Side Items */}
            <div className="flex items-center space-x-4 md:space-x-6">
              {/* Desktop Contact Info */}
              <div
                className={`hidden md:flex items-center space-x-2 ${headerTextColor}`}
              >
                <PhoneIcon className="h-5 w-5" />
                <span className="font-semibold text-sm">(028) 858-494-999</span>
                <ChevronDownIcon />
              </div>

              {/* Menu Button */}
              <div className="relative">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`p-1 rounded-md cursor-pointer transition-colors duration-300 ${headerTextColor} hover:bg-gray-500/20`}
                  aria-label="Toggle mobile menu"
                >
                  <MenuIcon />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`
    absolute top-full right-0 mt-3 w-64
    origin-top-right transition-all duration-300 ease-in-out
    ${
      isMobileMenuOpen
        ? "opacity-100 scale-100 visible"
        : "opacity-0 scale-95 invisible"
    }
  `}
                >
                  <div className="bg-white rounded-3xl shadow-2xl ring-1 ring-black ring-opacity-10 overflow-hidden">
                    <div className="py-2 px-2">
                      {navItems.map((item, index) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`
            block px-6 py-4 text-3xl font-semibold text-dark 
            transition-colors duration-200 hover:bg-gray-50
            ${index !== navItems.length - 1 ? "border-b border-gray-100" : ""}
          `}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
