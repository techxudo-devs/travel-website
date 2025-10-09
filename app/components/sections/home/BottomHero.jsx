"use client";
import Image from "next/image";
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
    <div ref={heroRef} className="relative w-full text-white overflow-hidden">
      {/* Background with scaling */}
      <img
        loading="lazy"
        ref={bgRef}
        src="/hero-main.jpg"
        alt="Travel destination"
        className="absolute inset-0 w-full h-full object-cover z-0 will-change-transform"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-20 flex flex-col items-center justify-center translate-y-16 min-h-screen px-4 text-center"
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
          Welcome to Travel Girls Club, a global community created by women, for women who love to explore the world and connect through meaningful travel.
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

          <Link
            href={"/tourpage"}
            className="group flex items-center gap-2 text-black bg-[#D0B4B3] font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 shadow-lg hover:scale-95 text-base sm:text-lg cursor-pointer"
          >
            <span>Book A Trip</span>
            <ArrowRight
              size={20}
              className="transition-all duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </motion.div>
      {/* Girl + Bottom Section */}
      <div className="relative z-30 flex flex-col items-center justify-end -mt-0">
        {" "}
        <img
          loading="lazy"
          src="/hero-girl.png"
          alt="Travel girl"
          width={500}
          height={500}
          className="object-contain relative z-30"
        />{" "}
        {/* Marquee Background Behind Last Image */}{" "}
        <div className="absolute bottom-20 w-full z-20">
          {" "}
          <Marquee
            speed={100}
            gradient={false}
            direction="right"
            className="uppercase font-extrabold text-[60px] md:text-[100px] tracking-wider"
          >
            {" "}
            We Are &nbsp;{" "}
            <span className="text-[#D0B4B3]">
              Travel Girls Club &nbsp;
            </span>{" "}
          </Marquee>{" "}
        </div>{" "}
        <img
          loading="lazy"
          src="/hero-bottom.png"
          alt="Bottom decoration"
          width={1000}
          height={100}
          className="w-full object-cover relative z-40 sm:-mt-20 -mt-2"
        />{" "}
      </div>{" "}
    </div>
  );
};

export default Hero;
