"use client";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactAno = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <div className="relative h-screen w-full text-white overflow-hidden">
      {/* Background */}
      <Image
        loading="lazy"
        src="/contact-main.jpg"
        alt="About background"
        width={1500}
        
        objectFit="cover"
        className="absolute inset-0 w-full h-full object-cover z-0 will-change-transform"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Navbar */}
      <div className="relative z-50 flex flex-row items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
        <Image
          loading="lazy"
          src="/logo23.svg"
          alt="Logo"
          width={240}
          height={60}
          className="object-contain w-40 md:w-60"
        />

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-row items-center gap-6 bg-[#16171A]/70 px-5 py-3 rounded-full text-lg">
          <Link
            href={"/"}
            className="px-6 py-2 bg-[#202528]/80 rounded-full cursor-pointer hover:bg-[#D0B4B3] hover:text-black transition-all duration-300"
          >
            Home
          </Link>
          <p>•</p>
          <Link
            href={"/about"}
            className="px-6 py-2 bg-[#202528]/80 rounded-full cursor-pointer hover:bg-[#D0B4B3] hover:text-black transition-all duration-300"
          >
            About
          </Link>
          <p>•</p>
          <Link
            href={"/tourpage"}
            className="px-6 py-2 bg-[#202528]/80 rounded-full cursor-pointer hover:bg-[#D0B4B3] hover:text-black transition-all duration-300"
          >
            Tours
          </Link>
          <p>•</p>
          <Link
            href="/blog"
            className="px-6 py-2 bg-[#202528]/80 rounded-full cursor-pointer hover:bg-[#D0B4B3] hover:text-black transition-all duration-300"
          >
            Blog
          </Link>
        </div>

        {/* Desktop Contact Btn */}
        <Link
          href={"/contact"}
          className="hidden lg:flex bg-white px-8 py-4 rounded-full cursor-pointer hover:scale-95 transition-all duration-300 text-black text-lg hover:bg-[#D0B4B3] items-center gap-2"
        >
          <p>Contact Us</p>
          <ArrowRight />
        </Link>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-white cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      <motion.div>
        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setMenuOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
                className="fixed top-0 right-0 w-3/4 h-full bg-black z-50 flex flex-col p-6"
              >
                <div className="flex items-center justify-between mb-12">
                  <Image
                    src="/logo23.svg"
                    width={160}
                    height={40}
                    className="object-contain w-40"
                    alt="Logo"
                  />
                  <button
                    className="text-white cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    <X size={24} />
                  </button>
                </div>
                <nav className="flex flex-col gap-6 text-lg">
                  <Link
                    href={"/"}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-[#D0B4B3] transition-all"
                  >
                    Home
                  </Link>
                  <Link
                    href={"/about"}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-[#D0B4B3] transition-all"
                  >
                    About
                  </Link>
                  <Link
                    href="/tourpage"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-[#D0B4B3] transition-all"
                  >
                    Tours
                  </Link>
                  <Link
                    href="/blog"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-[#D0B4B3] transition-all"
                  >
                    Blog
                  </Link>
                </nav>
                <Link
                  href={"/contact"}
                  onClick={() => setMenuOpen(false)}
                  className="mt-8 bg-white text-black px-6 py-3 rounded-full hover:bg-[#D0B4B3] transition-all flex items-center gap-2"
                >
                  Contact Us <ArrowRight />
                </Link>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>

      {/* About Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center -mt-24">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold">
          Contact Us
        </h1>
      </div>

      {/* Bottom Decoration (fixed to bottom inside h-screen) */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <Image
          loading="lazy"
          src="/about-bottom.png"
          alt="Bottom decoration"
          width={1000}
          height={100}
          className="w-full object-contain" // use contain instead of cover
        />
      </div>
    </div>
  );
};

export default ContactAno;
