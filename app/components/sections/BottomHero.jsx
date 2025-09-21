"use client";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight, Menu, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        scale: 1.7,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  // disable body scroll when sidebar open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div
      ref={heroRef}
      className="relative w-full text-white overflow-hidden"
    >
      {/* Background with scaling */}
      <img
        loading="lazy"
        ref={bgRef}
        src="/hero-main.jpg"
        alt="Travel destination"
        className="absolute inset-0 w-full h-full object-cover z-0 will-change-transform"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Navbar */}
      <div className="relative z-20 flex flex-row items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
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

      {/* Mobile Sidebar */}
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

      {/* Hero Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight sm:-mt-20"
        >
          Adventure Awaits – Book <br /> Your Journey Today
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-xl text-base sm:text-lg md:text-xl text-white/90 mt-4"
        >
          Step into a world of unforgettable adventures with Travio. Whether
          you're seeking serene beaches, vibrant cities, or hidden gems, we make
          every journey seamless and extraordinary.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="mailto:info@travio.com"
            className="group flex items-center gap-4 rounded-full bg-[#57809A]/90 backdrop-blur-sm px-6 py-3 transition-all duration-300 hover:bg-[#b89f9e] text-black"
          >
            <div className="bg-[#D0B4B3] transition-all duration-300 rounded-full p-2">
              <Mail size={16} className="text-black" />
            </div>
            <div>
              <p className="text-base sm:text-lg leading-4 text-black">
                Send your query
              </p>
              <p className="text-xs sm:text-sm text-black">user@example.com</p>
            </div>
          </a>

          <button className="group flex items-center gap-2 text-black bg-[#D0B4B3] font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 shadow-lg hover:scale-95 text-base sm:text-lg cursor-pointer">
            <span>Book A Trip</span>
            <ArrowRight
              size={20}
              className="transition-all duration-300 group-hover:translate-x-1"
            />
          </button>
        </motion.div>
      </motion.div>

      {/* Girl + Bottom Section */}
      <div className="relative z-30 flex flex-col items-center justify-end -mt-0"> <img loading="lazy" src="/hero-girl.png" alt="Travel girl" className="object-contain relative z-30" /> {/* Marquee Background Behind Last Image */} <div className="absolute bottom-20 w-full z-20"> <Marquee speed={100} gradient={false} direction="right" className="uppercase font-extrabold text-[60px] md:text-[100px] tracking-wider" > We Are &nbsp;{" "} <span className="text-[#D0B4B3]">Travel Girls Club &nbsp;</span> </Marquee> </div> <img loading="lazy" src="/hero-bottom.png" alt="Bottom decoration" className="w-full object-cover relative z-40 sm:-mt-20 -mt-2" /> </div> </div>
  );
};

export default Hero;
