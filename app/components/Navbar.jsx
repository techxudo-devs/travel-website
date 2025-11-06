"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/tourpage", label: "Tours" },
  { href: "/blog", label: "Blog" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Glassmorphism Navbar with Pill Shape */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative px-6 md:px-8 py-4"
      >
        <div
          className={`max-w-7xl mx-auto rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-slate-900/50 backdrop-blur-xl shadow-2xl shadow-[#a37b64]/60"
              : "bg-slate-900/50 backdrop-blur-lg"
          }`}
        >
          <div className="flex items-center justify-between px-8 py-4">
            {/* Logo with glow effect */}
            <Link
              href="/"
              aria-label="Go to Homepage"
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-[#f8efe3]/20 to-[#a37b64]/20 rounded-full  blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                loading="lazy"
                src="/logo23.svg"
                alt="Logo"
                width={240}
                height={60}
                className="relative object-contain w-40 md:w-52 transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation - Pill Container */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-800/50 px-2 py-2 rounded-full border border-[#a37b64]/60 shadow-lg shadow-slate-900/50">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-6 py-3 text-[#f8efe3]/70 font-medium text-sm tracking-wide group overflow-hidden rounded-full transition-all duration-300 hover:px-7"
                >
                  {/* Glow effect on hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-[#a37b64]/0 via-[#a37b64]/30 to-[#f8efe3]/20 rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500" />

                  {/* Solid background on hover */}
                  <span className="absolute inset-0 bg-gradient-to-br from-[#a37b64]/25 via-[#a37b64]/15 to-transparent rounded-full scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out" />

                  {/* Border accent */}
                  <span className="absolute inset-0 rounded-full border border-[#a37b64]/0 group-hover:border-[#a37b64]/40 transition-all duration-300" />

                  {/* Text with subtle lift */}
                  <span className="relative z-10 group-hover:text-[#f8efe3] group-hover:tracking-wider transition-all duration-300 drop-shadow-sm">
                    {item.label}
                  </span>

                  {/* Enhanced underline effect */}
                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#f8efe3] to-transparent group-hover:w-4/5 transition-all duration-400 rounded-full shadow-lg shadow-[#f8efe3]/50" />

                  {/* Shimmer effect */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                </Link>
              ))}
            </nav>

            {/* Desktop Contact Button - Pill Shape */}
            <Link
              href="/contact"
              className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#f8efe3] to-[#a37b64] text-slate-900 font-semibold text-sm rounded-full hover:shadow-lg hover:shadow-[#a37b64]/50 transition-all duration-300 hover:scale-105 group overflow-hidden relative"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#a37b64] to-[#f8efe3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Contact Us</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="lg:hidden p-2 text-[#f8efe3] hover:text-[#a37b64] transition-colors relative group"
            >
              <div className="absolute -inset-2 bg-[#a37b64]/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Menu className="relative w-6 h-6" />
            </button>
          </div>

          {/* Bottom border gradient */}
          <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#a37b64]/30 to-transparent rounded-full" />
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/60 z-40"
            />

            {/* Sidebar - Pill Container */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-full max-w-md h-full z-50"
            >
              <div className="h-full p-4">
                <div className="h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden">
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f8efe3]/5 via-transparent to-[#a37b64]/5 pointer-events-none" />

                  {/* Animated border */}
                  <div className="absolute inset-0 pointer-events-none rounded-[2.5rem] border border-[#a37b64]/20">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#a37b64] via-[#f8efe3] to-transparent rounded-l-[2.5rem]"
                    />
                  </div>

                  <div className="relative h-full flex flex-col p-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-12">
                      <Link
                        href="/"
                        onClick={() => setMenuOpen(false)}
                        className="relative group"
                      >
                        <div className="absolute -inset-2 bg-[#a37b64]/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Image
                          src="/logo23.svg"
                          width={160}
                          height={40}
                          className="relative object-contain w-36"
                          alt="Logo"
                        />
                      </Link>

                      <button
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                        className="relative p-3 text-[#f8efe3] hover:text-[#a37b64] transition-colors group rounded-full bg-slate-800/50"
                      >
                        <div className="absolute inset-0 bg-[#a37b64]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                        <X className="relative w-5 h-5" />
                      </button>
                    </div>

                    {/* Navigation Links - Pill Shapes */}
                    <nav className="flex-1 flex flex-col gap-3">
                      {navItems.map((item, index) => (
                        <motion.div
                          key={item.href}
                          initial={{ x: 50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.1 }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="group relative block px-6 py-5 rounded-full overflow-hidden bg-slate-800/40 border border-[#a37b64]/20 hover:border-[#a37b64]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#a37b64]/20"
                          >
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#a37b64]/0 via-[#a37b64]/20 to-[#f8efe3]/10 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 rounded-full" />

                            {/* Background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#a37b64]/0 to-[#a37b64]/0 group-hover:from-[#a37b64]/25 group-hover:to-[#f8efe3]/10 transition-all duration-400 rounded-full" />

                            {/* Shimmer effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                            {/* Content */}
                            <div className="relative flex items-center justify-between">
                              <span className="text-lg font-semibold text-[#f8efe3]/75 group-hover:text-[#f8efe3] group-hover:tracking-wide transition-all duration-300 drop-shadow-sm">
                                {item.label}
                              </span>
                              <ArrowRight className="w-5 h-5 text-[#a37b64] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 drop-shadow-lg" />
                            </div>

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#f8efe3] to-transparent group-hover:w-3/4 transition-all duration-400 rounded-full" />
                          </Link>
                        </motion.div>
                      ))}
                    </nav>

                    {/* Contact Button - Pill Shape */}
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="relative mt-8"
                    >
                      {/* Decorative glow */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#a37b64] to-[#f8efe3] rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

                      <Link
                        href="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="relative flex items-center justify-center gap-2 w-full px-8 py-4 bg-gradient-to-r from-[#f8efe3] to-[#a37b64] text-slate-900 font-bold text-base rounded-full hover:shadow-2xl hover:shadow-[#a37b64]/30 transition-all duration-300 group overflow-hidden"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-[#a37b64] to-[#f8efe3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Sparkles className="relative w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="relative">Contact Us</span>
                        <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </motion.div>

                    {/* Decorative element */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="mt-6 text-center text-xs text-[#f8efe3]/50"
                    >
                      <p>Discover your next adventure</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
