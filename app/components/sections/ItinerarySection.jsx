"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

const ItinerarySection = ({ days, visitingLocations }) => {
  const [activeDayIndex, setActiveDayIndex] = useState(0);

  return (
    <section className="bg-gradient-to-b from-white to-[#f8efe3]/30 py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#a37b64]/10 rounded-full mb-4">
            <Calendar className="w-4 h-4 text-[#a37b64]" />
            <span className="text-sm font-medium text-[#a37b64] tracking-wide uppercase">
              Your Journey
            </span>
          </div>
          <h2 className="text-5xl font-bold text-[#a37b64] mb-4">
            Visiting & Itinerary
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#a37b64] to-[#c4c8ba] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Map & Day Tabs */}
          <div className="lg:col-span-1 space-y-6">
            {/* Map Card */}
            {/* <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#a37b64]/20 to-[#c4c8ba]/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative h-72 bg-[#f8efe3] rounded-3xl overflow-hidden shadow-lg border border-[#c4c8ba]/20">
                <img
                  src="/map_placeholder.png"
                  alt="Map of Tuscany"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#a37b64]/80 via-[#a37b64]/40 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="group/btn px-6 py-3 bg-white text-[#a37b64] rounded-xl hover:bg-[#a37b64] hover:text-white transition-all duration-300 shadow-lg font-semibold flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Enlarge map</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div> */}

            {/* Day Tabs */}
            <div className="space-y-3">
              {days.map((day, index) => (
                <motion.button
                  key={day._id}
                  onClick={() => setActiveDayIndex(index)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-500 flex items-start gap-4 relative overflow-hidden group ${
                    activeDayIndex === index
                      ? "bg-[#a37b64] text-white shadow-xl shadow-[#a37b64]/30"
                      : "bg-[#f8efe3] hover:bg-[#f8efe3]/80 border border-[#c4c8ba]/20"
                  }`}
                >
                  {/* Animated background shimmer */}
                  {activeDayIndex === index && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    />
                  )}

                  {/* Day number badge */}
                  <div className="relative flex-shrink-0">
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-xl font-bold text-lg transition-all duration-300 ${
                        activeDayIndex === index
                          ? "bg-white text-[#a37b64] shadow-lg"
                          : "bg-[#a37b64] text-white group-hover:scale-105"
                      }`}
                    >
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative flex-1">
                    <p
                      className={`font-bold text-base mb-1 ${
                        activeDayIndex === index
                          ? "text-white"
                          : "text-[#a37b64]"
                      }`}
                    >
                      DAY {day.day}
                    </p>
                    <p
                      className={`text-sm leading-relaxed ${
                        activeDayIndex === index
                          ? "text-white/90"
                          : "text-[#a37b64]/70"
                      }`}
                    >
                      {visitingLocations[index] ||
                        `Location for Day ${day.day}`}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <div
                    className={`flex-shrink-0 transition-all duration-300 ${
                      activeDayIndex === index
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-50"
                    }`}
                  >
                    <ArrowRight
                      className={`w-5 h-5 ${
                        activeDayIndex === index
                          ? "text-white"
                          : "text-[#a37b64]"
                      }`}
                    />
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Column: Day Content Carousel */}
          <div className="lg:col-span-2 relative">
            <div className="relative min-h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDayIndex}
                  initial={{ opacity: 0, x: 100, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute inset-0"
                >
                  {/* Image */}
                  <img
                    src={days[activeDayIndex].image}
                    alt={days[activeDayIndex].heading}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#a37b64]/95 via-[#a37b64]/60 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#a37b64]/30"></div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="absolute bottom-0 left-0 right-0 p-10"
                  >
                    {/* Day badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-4 border border-white/30">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-white tracking-wide">
                        DAY {days[activeDayIndex].day}
                      </span>
                    </div>

                    {/* Heading */}
                    <h3 className="text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight max-w-3xl">
                      {days[activeDayIndex].heading}
                    </h3>

                    {/* Decorative line */}
                    <div className="w-20 h-1 bg-gradient-to-r from-white to-transparent rounded-full mb-6"></div>

                    {/* Description */}
                    <p className="text-lg leading-relaxed text-white/95 max-w-2xl font-light">
                      {days[activeDayIndex].description}
                    </p>
                  </motion.div>

                  {/* Progress indicator */}
                  <div className="absolute top-6 right-6 flex gap-2">
                    {days.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1 rounded-full transition-all duration-500 ${
                          idx === activeDayIndex
                            ? "w-12 bg-white"
                            : "w-6 bg-white/30"
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItinerarySection;
