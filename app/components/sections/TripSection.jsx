"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

// Data for the tour cards with updated, working image sources
import Image from "next/image";

const tourTypes = [
  {
    tagline: "DISCOVER AT YOUR OWN PACE",
    title: "Private Tours",
    imgSrc: "/13.jpg",
    alt: "A woman in a tent in a desert landscape with Dragon's Blood Trees in Socotra.",
  },
  {
    tagline: "LIFELONG MEMORIES",
    title: "Group Tours",
    imgSrc: "/11.jpg",
    alt: "Three men sitting on a colorful rug in the desert.",
  },
  {
    tagline: "ANYTHING BUT USUAL",
    title: "Specialized Tours",
    imgSrc:
      "/5.jpg",
    alt: "An aerial view of blue tents in a lush green mountain valley.",
  },
  {
    tagline: "THRILL & ADVENTURE",
    title: "Adventure Tours",
    imgSrc: "/6.jpg",
    alt: "A person on a swing on a pristine beach with turquoise water.",
  },
];

const TripSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionDuration = 500; // Corresponds to duration-500 in Tailwind CSS

  // Memoize handler functions to prevent re-creation on each render
  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % tourTypes.length);
    setTimeout(() => setIsTransitioning(false), transitionDuration);
  }, [isTransitioning]);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + tourTypes.length) % tourTypes.length);
    setTimeout(() => setIsTransitioning(false), transitionDuration);
  }, [isTransitioning]);

  const handleDotClick = useCallback(
    (index) => {
      if (isTransitioning || index === currentIndex) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), transitionDuration);
    },
    [isTransitioning, currentIndex]
  );

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [handleNext]);

  // Calculate indices for the three visible cards
  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + tourTypes.length) % tourTypes.length;
      cards.push({ ...tourTypes[index], position: i });
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="relative w-full py-10 pb-40 flex bg-white items-center justify-center overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-6 justify-center py-12 mb-12">
          <div className="text-center space-y-2">
            <div className="inline-block">
              <span className="text-sm font-bold tracking-[0.3em] text-black uppercase mb-4 block">
                EXPLORE THE WORLD
              </span>
              <div className="w-16 h-1 bg-[#D0B4B3] mx-auto mb-6 rounded-full"></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold uppercase text-[#D0B4B3] leading-tight">
              Come on a Trip With Us!
              <span className="font-medium text-black block mt-2"></span>
            </h2>

            <p className="max-w-4xl text-center text-lg leading-relaxed mx-auto text-first">
              Whether you're seeking the companionship of a group tour, the
              solitude of a private adventure or something totally different –
              we make sure to help create memories on Socotra that last a
              lifetime.
            </p>
          </div>
        </div>

        {/* Cards Container */}
        <div
          className="relative flex items-center justify-center h-[550px]"
          style={{ perspective: "1200px" }}
        >
          {visibleCards.map((card) => {
            const { position, imgSrc, alt, tagline, title } = card;

            // Determine transform based on card position
            const isCenter = position === 0;
            let transform = "";
            if (position === -1)
              transform = "translateX(-80%) rotateY(20deg) scale(0.85)";
            if (position === 0) transform = "translateX(0) rotateY(0) scale(1)";
            if (position === 1)
              transform = "translateX(80%) rotateY(-20deg) scale(0.85)";

            return (
              <div
                key={title}
                className="absolute w-110 h-[560px] transition-all duration-500 ease-in-out"
                style={{
                  transform: transform,
                  zIndex: isCenter ? 20 : 10,
                  opacity: isCenter ? 1 : 0.7,
                }}
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl overflow-hidden h-full flex flex-col transform-gpu border border-white transition-all duration-300">
                  {/* Card Image */}
                  <div className="relative h-72 w-full overflow-hidden">
                    <img
                      src={imgSrc}
                      alt={alt}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    {/* Gradient overlay for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8 text-center flex-1 flex flex-col justify-between bg-gradient-to-b from-white/95 to-white">
                    <div className="space-y-4">
                      <div className="inline-block px-4 py-2 bg-[#D0B4B3] rounded-full">
                        <p className="text-xs font-semibold tracking-[0.2em] text-white uppercase">
                          {tagline}
                        </p>
                      </div>

                      <h3 className="text-4xl font-bold text-[#D0B4B3] leading-tight uppercase">
                        {title}
                      </h3>
                    </div>

                    <div className="mt-8">
                      <button className="group bg-gradient-to-r from-[#D0B4B3] to-black hover:from-black hover:to-[#D0B4B3] text-white py-4 px-8 rounded-2xl flex items-center justify-center transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 relative overflow-hidden cursor-pointer">
                        <span className="relative z-10">
                          Book a {title.split(" ")[0].toLowerCase()} tour
                        </span>
                        <ArrowRight
                          size={16}
                          className="ml-3 transition-transform duration-300 group-hover:translate-x-1 relative z-10"
                        />
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="absolute left-0 md:left-6 top-150  -translate-y-1/2 w-14 h-14 bg-[#D0B4B3] cursor-pointer backdrop-blur-sm rounded-full flex items-center justify-center text-[var(--color-dark)] hover:bg-[#bda4a3] hover:scale-110 transition-all duration-300 z-30 shadow-lg hover:shadow-xl border border-[var(--color-semilight)]/20"
        >
          <ArrowLeft size={20} />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="absolute right-0 md:right-6 top-150  -translate-y-1/2 w-14 h-14 bg-[#D0B4B3] cursor-pointer backdrop-blur-sm rounded-full flex items-center justify-center text-[var(--color-dark)] hover:bg-[#bda4a3] hover:scale-110 transition-all duration-300 z-30 shadow-lg hover:shadow-xl border border-[var(--color-semilight)]/20"
        >
          <ArrowRight size={20} />
        </button>

        {/* Pagination Dots */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {tourTypes.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                transition-all duration-300 rounded-full cursor-pointer
                ${currentIndex === index
                  ? "w-8 h-3 bg-[#D0B4B3]"
                  : "w-3 h-3 bg-[#bda4a3] hover:bg-[var(--color-brown)]/60"
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
    </div>
  );
};

export default TripSection;
