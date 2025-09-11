"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Mail, Phone } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef(null);

  // Animation variants for staggered fade-in effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    // MODIFICATION: Removed `items-center` to allow for custom vertical positioning
    <div
      ref={heroRef}
      className="relative h-[140vh] w-full text-white flex justify-center text-center"
    >
      {/* 1. Background Image & Gradient Overlay */}
      <Image
        src="/hero-main.jpg" // Your background image (the sky)
        alt="A beautiful blue sky with clouds over a travel destination"
        layout="fill"
        objectFit="cover"
        quality={90}
        priority
        className="z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10" />

      {/* 2. Main Centered Content */}
      {/* MODIFICATION: Added `pt-40` (padding-top) to push the content down from the top, leaving space at the bottom */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-20 flex flex-col items-center px-4 pt-50"
      >
        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold font-serif leading-tight"
        >
          Adventure Awaits – Book <br /> Your Journey Today
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="mt-4 max-w-xl text-lg text-white/90"
        >
          Step into a world of unforgettable adventures with Travio. Whether
          you're seeking serene beaches, vibrant cities, or hidden gems, we make
          every journey seamless and extraordinary.
        </motion.p>

        {/* Buttons / CTAs */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
        >
          {/* Inquiry Button */}
          <a
            href="tel:+2203653253698"
            className="group flex items-center gap-4 rounded-full bg-white/20 backdrop-blur-sm p-3 pr-5 border border-white/30 transition-all duration-300 hover:bg-white/30"
          >
            <div className="bg-white/20 rounded-full p-2">
              <Mail size={16} className="text-white" />
            </div>
            <div className="text-left">
              <p className="text-md text-white/80">Send your query</p>
            </div>
          </a>

          {/* Book a Trip Button */}
          <button className="group flex items-center gap-2 bg-black cursor-pointer font-semibold py-4 px-6 rounded-full hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            <span>Book A Trip</span>
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </motion.div>
      </motion.div>

      {/*
        <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
        <<< THIS IS WHERE YOUR IMAGES GO >>>
        <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
      */}

      <div className="absolute bottom-0 left-0  right-0 z-50 flex justify-center">
        <Image
          src="/hero-bottom.png"
          alt="Decorative wave element"
          width={2000}
          height={200}
          className="object-cover w-full"
        />
      </div>

      <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center">
        <Image
          src="/hero-girl.png"
          alt="A woman in a sunhat looking at the sky"
          width={500}
          height={250}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSection;
