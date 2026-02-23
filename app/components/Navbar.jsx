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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`relative transition-all duration-500 ${
          scrolled
            ? "bg-third/50 backdrop-blur-xl shadow-lg shadow-brown/30"
            : "bg-slate-900/10 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-20">
            <Link
              href="/"
              aria-label="Go to Homepage"
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-[var(--color-light)]/20 to-[var(--color-brown)]/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                loading="lazy"
                src="/logo23.svg"
                alt="Logo"
                width={240}
                height={60}
                className="relative object-contain w-40 md:w-52 transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative  px-6 py-2.5 text-slate-200 font-medium text-sm tracking-wide group overflow-hidden "
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-light)]/10 to-[var(--color-brown)]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-500 ease-out" />
                  <span className="absolute inset-0 bg-[var(--color-light)]/5 rounded-lg  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 group-hover:text-[var(--color-light)] lg:text-md 2xl:text-lg transition-colors duration-300">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            <Link
              href="/contact"
              className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[var(--color-light)] to-[var(--color-brown)] font-romie text-slate-900 font-semibold text-sm rounded-full hover:shadow-lg hover:shadow-[var(--color-brown)]/50 transition-all duration-300 hover:scale-105 group overflow-hidden relative"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-light)] to-[var(--color-brown)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Contact Us</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="lg:hidden p-2 text-[var(--color-light)] hover:text-[var(--color-brown)] transition-colors relative group"
            >
              <div className="absolute -inset-2 bg-[var(--color-brown)]/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Menu className="relative w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-light)]/30 to-transparent" />
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/60 z-40"
            />

            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-full max-w-md h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-50 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brown)]/5 via-transparent to-[var(--color-light)]/5 pointer-events-none" />

              <div className="absolute inset-0 pointer-events-none">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--color-brown)] via-[var(--color-light)] to-transparent"
                />
              </div>

              <div className="relative h-full flex flex-col p-8">
                <div className="flex items-center justify-between mb-12">
                  <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className="relative group"
                  >
                    <div className="absolute -inset-2 bg-[var(--color-brown)]/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                    className="relative p-2 text-[var(--color-light)] hover:text-[var(--color-brown)] transition-colors group"
                  >
                    <div className="absolute inset-0 bg-[var(--color-brown)]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                    <X className="relative w-6 h-6" />
                  </button>
                </div>

                <nav className="flex-1 flex flex-col gap-2">
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
                        className="group relative block px-6 py-4 rounded-2xl overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brown)]/0 to-[var(--color-light)]/0 group-hover:from-[var(--color-brown)]/10 group-hover:to-[var(--color-light)]/5 transition-all duration-300" />
                        <div className="absolute inset-0 bg-slate-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="relative flex items-center justify-between">
                          <span className="text-lg font-medium text-slate-200 group-hover:text-[var(--color-light)] transition-colors duration-300">
                            {item.label}
                          </span>
                          <ArrowRight className="w-5 h-5 text-[var(--color-light)] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </div>

                        <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[var(--color-light)]/20 to-transparent" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="relative mt-8"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-light)] to-[var(--color-brown)] rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

                  <Link
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="relative flex items-center justify-center gap-2 w-full px-8 py-4 bg-gradient-to-r from-[var(--color-light)] to-[var(--color-brown)] text-slate-900 font-bold text-base rounded-2xl hover:shadow-2xl hover:shadow-[var(--color-light)]/30 transition-all duration-300 group overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-light)] to-[var(--color-brown)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Sparkles className="relative w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="relative">Contact Us</span>
                    <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 text-center text-xs text-slate-400"
                >
                  <p>Discover your next adventure</p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
