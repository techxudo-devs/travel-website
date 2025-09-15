"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const  TourCard = dynamic(() => import("../ui/TourCard"));
import { BASE_URL } from "@/app/utils/ApiBaseUrl";
import { motion } from "framer-motion";

const tourSectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const TourPackages = () => {
  // --- START: Data fetching logic ---
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchTourPackages = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/tours/preplanned`); // ✅ fixed interpolation
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTours(data); // ✅ save fetched data
      } catch (e) {
        setError(e.message);
        console.error("Failed to fetch tour packages:", e);
      } finally {
        setLoading(false); // ✅ loading complete
      }
    };

    fetchTourPackages();
  }, []); // ✅ runs once on mount
  // --- END: Data fetching logic ---

  // --- START: Loading and Error states ---
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <p className="text-2xl text-[#D0B4B3] font-bold uppercase">
          Loading Tour Packages...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <p className="text-2xl text-red-500 font-bold uppercase">
          Error loading tours: {error}
        </p>
      </div>
    );
  }
  // --- END: Loading and Error states ---

  return (
    <div id="tour" className="relative z-40 w-full min-h-screen py-24 bg-gradient-to-b from-white to-fourth overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#D0B4B3] blur-3xl"></div>
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
          <motion.h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-wide">
            All inclusive
            <span className="block font-bold text-6xl text-[#D0B4B3] mt-2 uppercase">
              Tour Packages
            </span>
          </motion.h2>
          <motion.div className="w-24 h-1 bg-[#D0B4B3] mx-auto mb-8 rounded-full"></motion.div>
          <motion.p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700 opacity-80">
            Travel from anywhere in India or worldwide. Pick a tour that fits
            you — starting right from your city. Experience curated journeys
            designed for every traveler.
          </motion.p>
        </motion.div>

        {/* --- START: Dynamic Grid Rendering --- */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {tours.map((apiTour) => {
            const tourForCard = {
              id: apiTour._id,
              title: apiTour.title,
              image: apiTour.coverImage,
              price: apiTour.basePrice,
              country: apiTour.location,
              duration: apiTour.category?.[0]?.name || "N/A",
              rating: 4.5,
              reviews: "Popular choice",
            };

            return (
              <motion.div
                key={tourForCard.id}
                variants={tourItemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group"
              >
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-[var(--color-semilight)]/30 overflow-hidden">
                  <TourCard tour={tourForCard} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        {/* --- END: Dynamic Grid Rendering --- */}
      </motion.div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--color-semilight)]/20 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default TourPackages;
