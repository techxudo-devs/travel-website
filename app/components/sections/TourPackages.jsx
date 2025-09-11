"use client";

import { motion } from "framer-motion";
import TourCard from "../ui/TourCard"; // Assuming this component exists and works correctly

// --- FIX 1: Define the missing animation variants ---
const tourSectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Animates children one by one
      duration: 0.5,
    },
  },
};

const tourItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

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

const TourPackages = () => {
  return (
    // --- FIX 2: Ensure 'bg-fourth' is defined in your tailwind.config.js ---
    // and that CSS variables like --color-brown are in your global CSS file.
    <div className="relative z-40 w-full min-h-screen py-24 bg-fourth overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[var(--color-brown)] blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-[var(--color-semilight)] blur-3xl"></div>
      </div>
      <div className="absolute top-20 right-32 w-64 h-64">
        <svg className="w-full h-full opacity-30" viewBox="0 0 200 200">
          <path
            d="M20,100 Q100,20 180,100"
            stroke="#d97706"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10,10"
          />
        </svg>
      </div>
      <div className="absolute bottom-32 left-20 w-48 h-48">
        <svg className="w-full h-full opacity-30" viewBox="0 0 200 200">
          <path
            d="M180,100 Q100,180 20,100"
            stroke="#d97706"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,8"
          />
        </svg>
      </div>

      <motion.div
        className="container mx-auto text-center px-4 relative z-10"
        variants={tourSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Section Header */}
        <motion.div variants={tourItemVariants} className="mb-16">
          <motion.h2 className="text-5xl md:text-6xl font-light text-first mb-6 tracking-wide">
            All Inclusive
            <span className="block font-medium text-second mt-2">
              Tour Packages
            </span>
          </motion.h2>
          <motion.div className="w-24 h-1 bg-five mx-auto mb-8 rounded-full"></motion.div>
          <motion.p className="max-w-3xl mx-auto text-lg leading-relaxed text-[var(--color-dark)] opacity-80">
            Travel from anywhere in India or worldwide. Pick a tour that fits
            you — starting right from your city. Experience curated journeys
            designed for every traveler.
          </motion.p>
        </motion.div>

        {/* Tour Cards Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {tourPackages.map((tour, index) => (
            <motion.div
              key={tour.title} // Best practice: use a unique ID like tour.id if available
              variants={tourItemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group"
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-[var(--color-semilight)]/30 overflow-hidden">
                <TourCard tour={tour} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--color-semilight)]/20 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default TourPackages;
