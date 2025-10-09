"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

// Array for navigation items for easy editing and reusability
const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/tourpage", label: "Tours" },
  { href: "/blog", label: "Blog" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Disable body scroll when the mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    // Header is positioned absolutely to overlay the content below it
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="relative flex flex-row items-center justify-between px-6 md:px-10 py-4 bg-transparent">
        <Link href="/" aria-label="Go to Homepage">
          <Image
            loading="lazy"
            src="/logo23.svg"
            alt="Logo"
            width={240}
            height={60}
            className="object-contain w-40 md:w-60"
          />
        </Link>

        {/* Desktop Nav - Mapped from navItems array */}
        <nav className="hidden lg:flex flex-row items-center gap-6 bg-[#16171A]/70 px-5 py-3 rounded-full text-lg">
          {navItems.map((item, index) => (
            <React.Fragment key={item.href}>
              <Link
                href={item.href}
                className="px-6 py-2 bg-first rounded-full cursor-pointer hover:bg-[#D0B4B3] hover:text-black transition-all duration-300 text-white"
              >
                {item.label}
              </Link>
              {index < navItems.length - 1 && (
                <p className="text-white/50">•</p>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Desktop Contact Btn */}
        <Link
          href={"/contact"}
          className="hidden lg:flex bg-white px-8 py-3 rounded-full cursor-pointer hover:scale-95 transition-all duration-300 text-black text-lg hover:bg-[#D0B4B3] items-center gap-2"
        >
          <p>Contact Us</p>
          <ArrowRight />
        </Link>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-white cursor-pointer"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Sidebar Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-3/4 max-w-sm h-full bg-black z-50 flex flex-col p-6"
            >
              <div className="flex items-center justify-between mb-12">
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  <Image
                    src="/logo23.svg"
                    width={160}
                    height={40}
                    className="object-contain w-40"
                    alt="Logo"
                  />
                </Link>
                <button
                  className="text-white cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Nav - Mapped from navItems array */}
              <nav className="flex flex-col gap-6 text-lg">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-[#D0B4B3] text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile Contact Button */}
              <Link
                href={"/contact"}
                onClick={() => setMenuOpen(false)}
                className="mt-auto bg-white text-black px-6 py-3 rounded-full hover:bg-[#D0B4B3] transition-colors flex items-center justify-center gap-2 w-full"
              >
                Contact Us <ArrowRight />
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
