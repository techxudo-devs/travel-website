"use client";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import TourCard from "../ui/TourCard";
import { ChevronDown } from "lucide-react";

const backgroundImages = ["/hero1.webp", "/hero2.webp"];

const destinations = [
  {
    src: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
    alt: "Man relaxing in a hammock",
    size: "w-80 h-96",
  },
  {
    src: "https://images.unsplash.com/photo-1501555088652-021faa106b9b",
    alt: "Hiker with a backpack",
    size: "w-72 h-80",
  },
  {
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
    alt: "Person on a boat",
    size: "w-96 h-96",
  },
  {
    src: "https://images.unsplash.com/photo-1440778303588-435521a205bc",
    alt: "Person kayaking",
    size: "w-72 h-80",
  },
];

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
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
  },
  {
    country: "Turkey",
    duration: "6 Days - 5 Night",
    title: "Blue Mosque",
    rating: 4.6,
    reviews: "563 reviews",
    price: 4996,
    image: "/2.jpg",
  },
  {
    country: "Maldives",
    duration: "5 Days - 4 Night",
    title: "Maldives Huruval",
    rating: 4.9,
    reviews: "6.9k reviews",
    price: 9587,
    image: "/3.jpg",
  },
];

// --- MAIN COMPONENT ---
const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const cardsY = useTransform(scrollYProgress, [0.4, 1], ["0%", "-150%"]);
  const cardsOpacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const tourSectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.15 },
    },
  };

  return (
    // The main container uses the dark background color
    <div className="bg-[#0c0c0c]">
      {/* SECTION 1: HERO. Its height determines the scroll length for the animation. */}
      <div ref={heroRef} className="relative h-[150vh]">
        {/* This div sticks to the top and contains all hero content. */}
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Animated Background */}
          <motion.div
            style={{ y: backgroundY }}
            className="absolute inset-0 z-0"
          >
            <AnimatePresence>
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={backgroundImages[currentImageIndex]}
                  alt="Travel Background"
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 to-transparent" />

          {/* Hero Text Content */}
          <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-center"
            >
              <motion.h1
                variants={textVariants}
                className="text-3xl font-semibold text-white drop-shadow-md md:text-5xl"
              >
                Make Your{" "}
                <span className="text-orange-400">Summer Vacation</span>
              </motion.h1>
              <motion.h2
                variants={textVariants}
                className="mt-2 text-3xl font-semibold text-white drop-shadow-md md:text-5xl"
              >
                Unforgettable!
              </motion.h2>
              <motion.p
                variants={textVariants}
                className="max-w-xl mx-auto mt-4 text-lg text-gray-200"
              >
                Get your dream trip planned with expert-guided destinations,
                booking, transport & more — all in one
              </motion.p>
              <motion.button
                variants={textVariants}
                className="px-8 py-2 mt-8 font-medium  text-black bg-white rounded-full cursor-pointer hover:bg-dark hover:text-white transition-colors ease-in-out duration-300"
              >
                Start Planning
              </motion.button>
            </motion.div>
            <motion.div
              className="absolute bottom-10"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDown size={32} className="text-white/50" />
            </motion.div>
          </div>
        </div>
      </div>

      <div
        className="relative z-40 w-full min-h-screen py-24 -mt-[50vh] bg-dark"
        style={{ backgroundImage: `url(/wave.svg)` }}
      >
        <motion.div
          className="container  mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={tourSectionVariants}
        >
          <h2 className="text-5xl font-medium text-dark">
            All Inclusive tour packages.
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-md text-gray-600">
            Travel from anywhere in India or worldwide. Pick a tour that fits
            you — starting right from your city.
          </p>
          <div className="grid grid-cols-4 gap-4 mt-12">
            {tourPackages.map((tour, index) => (
              <TourCard key={index} tour={tour} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
