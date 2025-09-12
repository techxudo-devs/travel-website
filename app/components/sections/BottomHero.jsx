"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        scale: 1.7, // zoom effect
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top", // scale until bottom of hero
          scrub: true,
        },
      });
    }
  }, []);

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
      className="relative min-h-[200vh] w-full text-white overflow-hidden"
    >
      {/* Background with scaling */}
      <Image
        ref={bgRef}
        src="/hero-main.jpg"
        alt="Travel destination"
        fill
        priority
        quality={90}
        className="object-cover z-0 will-change-transform"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Navbar */}
      <div className="relative z-20 flex flex-row items-center justify-between px-10 pt-8">
        <img
          className="w-40"
          src="https://cdn.prod.website-files.com/6773bb8ef041a39ae66da8da/6774ca28bbe75cb8eb00366a_Brand%20logo.png"
          alt="Logo"
        />

        <div className="flex flex-row items-center gap-6 bg-[#16171A]/70 px-5 py-3 rounded-full text-xl">
          <p className="px-6 py-2 bg-[#202528]/80 rounded-full cursor-pointer hover:bg-[#DAFF97] hover:text-black transition-all duration-300">
            Home
          </p>
          <p>•</p>
          <p className="px-6 py-2 bg-[#202528]/80 rounded-full cursor-pointer hover:bg-[#DAFF97] hover:text-black transition-all duration-300">
            About
          </p>
          <p>•</p>
          <p className="px-6 py-2 bg-[#202528]/80 rounded-full cursor-pointer hover:bg-[#DAFF97] hover:text-black transition-all duration-300">
            Packages
          </p>
          <p>•</p>
          <p className="px-6 py-2 bg-[#202528]/80 rounded-full cursor-pointer hover:bg-[#DAFF97] hover:text-black transition-all duration-300">
            Pages
          </p>
        </div>

        <div className="bg-white px-6 py-4 rounded-full cursor-pointer hover:scale-95 transition-all duration-300 text-black text-xl hover:bg-[#DAFF97] flex items-center gap-2">
          <p>Contact Us</p>
          <p><ArrowRight /></p>
        </div>
      </div>

      {/* Hero Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold leading-tight -mt-16"
        >
          Adventure Awaits – Book <br /> Your Journey Today
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-xl text-xl text-white/90 mt-4"
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
            className="group flex items-center gap-4 rounded-full bg-[#57809A]/90 backdrop-blur-sm px-6 py-3 transition-all duration-300 hover:bg-green-800"
          >
            <div className="bg-blue-700 rounded-full p-2">
              <Mail size={16} className="text-white" />
            </div>
            <div>
              <p className="text-lg leading-4 text-white/80">Send your query</p>
              <p className="text-sm text-light">user@example.com</p>
            </div>
          </a>

          <button className="group flex items-center gap-2 text-white bg-black font-semibold py-4 px-6 rounded-full hover:bg-green-800 transition-all duration-300 shadow-lg hover:scale-95 text-lg cursor-pointer">
            <span>Book A Trip</span>
            <ArrowRight
              size={20}
              className="transition-all duration-300 group-hover:translate-x-1"
            />
          </button>
        </motion.div>
      </motion.div>

      {/* Girl + Bottom Section */}
      <div className="relative z-30 flex flex-col items-center justify-end min-h-screen">
        <Image
          src="/hero-girl.png"
          alt="Travel girl"
          width={550}
          height={500}
          className="object-contain relative z-30"
        />

        {/* Marquee Background Behind Last Image */}
        <div className="absolute bottom-20 w-full z-20">
          <Marquee
            speed={80}
            gradient={false}
            direction="right"
            className="uppercase font-extrabold text-[60px] md:text-[100px]  tracking-wider"
          >
            Your Gateway To{" "}
            <span className="text-[#DAFF97]">Amazing Journeys &nbsp;</span>
          </Marquee>
        </div>

        <Image
          src="/hero-bottom.png"
          alt="Bottom decoration"
          width={2000}
          height={200}
          className="object-cover relative z-40 -mt-20"
        />
      </div>
    </div>
  );
};

export default Hero;
