"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  // disable body scroll when sidebar open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (

    <div>
      <div className="relative z-20 flex flex-row items-center justify-between px-6 md:px-10 py-4 bg-black">
        <img
          loading="lazy"
          src="/logo23.svg"
          alt="Logo"
          className="object-contain w-40 md:w-60"
        />

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-row items-center gap-6 bg-[#16171A]/70 px-5 py-3 rounded-full text-lg">
          <Link
            href={"/"}
            className="px-6 py-2 bg-[#202528]/80 rounded-full cursor-pointer hover:bg-[#D0B4B3] hover:text-black transition-all duration-300 text-white"
          >
            Home
          </Link>
          <p>•</p>
          <Link
            href={"/about"}
            className="px-6 py-2 bg-[#202528]/80 rounded-full cursor-pointer hover:bg-[#D0B4B3] hover:text-black transition-all duration-300 text-white"
          >
            About
          </Link>
          <p>•</p>
          <Link
            href={"/tourpage"}
            className="px-6 py-2 bg-[#202528]/80 rounded-full cursor-pointer hover:bg-[#D0B4B3] hover:text-black transition-all duration-300 text-white"
          >
            Tours
          </Link>
          <p>•</p>
          <Link
            href="/blog"
            className="px-6 py-2 bg-[#202528]/80 rounded-full cursor-pointer hover:bg-[#D0B4B3] hover:text-black transition-all duration-300 text-white"
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
              {/* Blur Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setMenuOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              />

              {/* Sidebar */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
                className="fixed top-0 right-0 w-3/4 h-full bg-black z-50 flex flex-col p-6"
              >
                <div className="flex items-center justify-between mb-12">
                  <img src="/logo23.svg" className="object-contain w-40" alt="Logo" />
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
                    className="hover:text-[#D0B4B3] text-white transition-all"
                  >
                    Home
                  </Link>
                  <Link
                    href={"/about"}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-[#D0B4B3] text-white transition-all"
                  >
                    About
                  </Link>
                  <Link
                    href="/tourpage"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-[#D0B4B3] text-white transition-all"
                  >
                    Tours
                  </Link>
                  <Link
                    href="/blog"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-[#D0B4B3] text-white transition-all"
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
    </div>
  )
}

export default Navbar