"use client";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import TourCard from "../ui/TourCard"; // Assuming TourCard component is in this path
import { ChevronRight } from "lucide-react";

const tourPackages = [
  {
    country: "Egypt",
    duration: "9 Days - 7 Night",
    title: "Cairo to Nile Cruise",
    rating: 4.4,
    reviews: "293 reviews",
    price: 3896,
    image: "/1.jpg",
  },
  {
    country: "Indonesia",
    duration: "17 Days - 14 Night",
    title: "Bali & Java",
    rating: 4.8,
    reviews: "4.2k reviews",
    price: 8996,
    image: "/2.jpg",
  },
  {
    country: "Turkey",
    duration: "6 Days - 5 Night",
    title: "Blue Mosque",
    rating: 4.6,
    reviews: "563 reviews",
    price: 4996,
    image: "/3.jpg",
  },
  {
    country: "Maldives",
    duration: "5 Days - 4 Night",
    title: "Maldives Huruval",
    rating: 4.9,
    reviews: "6.9k reviews",
    price: 9587,
    image: "/7.jpg",
  },
];

// --- MAIN COMPONENT ---
const HeroSection = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  // Variants for the main container to orchestrate animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Variants for the title words
  const titleVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Variants for other text elements like subtitle and links
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Variants for icon
  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  // Variants for Tour Section animations
  const tourSectionVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Animate children one by one
        delayChildren: 0.1, // A small delay before the first child starts
      },
    },
  };

  // Variants for individual items (title, p, cards) in the tour section
  const tourItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const title = "Your Journey, Redefined";
  const titleWords = title.split(" ");

  return (
    // The main container uses the dark background color
    <div className="bg-[#0c0c0c]">
      {/* SECTION 1: HERO. Its height determines the scroll length for the animation. */}
      <div ref={heroRef} className="relative h-screen">
        {/* This div sticks to the top and contains all hero content. */}
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Animated Background */}
          <motion.div
            style={{ y: backgroundY }}
            className="absolute inset-0 z-0"
          >
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="https://adamsandbutler.b-cdn.net/app/uploads/2020/08/Web-Hero-Vid-V2-No-Sound-copy.mp4"
                type="video/mp4"
              />
            </video>
          </motion.div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Hero Text Content */}
          <div className="relative z-20 flex flex-col items-start translate-x-40 justify-center w-full h-full text-white">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-left" // Changed to text-left for better alignment
            >
              <motion.h1 className="text-7xl" aria-label={title}>
                {titleWords.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={titleVariants}
                    className="inline-block mr-4" // Add margin for spacing between words
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.h2
                variants={textVariants}
                className="mt-4 text-2xl" // Added more margin-top
              >
                Extraordinary travel, crafted with precision and passion.
              </motion.h2>

              <motion.div
                variants={textVariants}
                className="flex items-center space-x-8 mt-12 text-sm" // Added more margin-top
              >
                <a href="#" className="flex items-center space-x-3">
                  <span>EXPLORE OUR WORLDS</span>
                  <motion.div variants={iconVariants}>
                    <ChevronRight
                      size={16}
                      className="h-6 w-6 border rounded-full p-1" // Added padding
                    />
                  </motion.div>
                </a>
                <a href="#" className="flex items-center space-x-3">
                  <span>CRAFT YOUR ESCAPE</span>
                  <motion.div variants={iconVariants}>
                    <ChevronRight
                      size={16}
                      className="h-6 w-6 border rounded-full p-1"
                    />
                  </motion.div>
                </a>
                <a href="#" className="flex items-center space-x-3">
                  <span>INSPIRATION HUB</span>
                  <motion.div variants={iconVariants}>
                    <ChevronRight
                      size={16}
                      className="h-6 w-6 border rounded-full p-1"
                    />
                  </motion.div>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Logos Section */}
          <div className="absolute bottom-4 left-4 z-30">
            <Image
              src="/virtuoso.png"
              alt="Virtuoso"
              width={120}
              height={50}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
