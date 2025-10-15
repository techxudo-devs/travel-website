"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import Image from "next/image";

const tourTypes = [
  {
    tagline: "DISCOVER AT YOUR OWN PACE",
    title: "Private Tours",
    imgSrc: "/13.jpg",
    alt: "A woman in a tent in a desert landscape with Dragon's Blood Trees in Socotra.",
    gradient: "",
  },
  {
    tagline: "LIFELONG MEMORIES",
    title: "Group Tours",
    imgSrc: "/11.jpg",
    alt: "Three men sitting on a colorful rug in the desert.",
    gradient: "",
  },
  {
    tagline: "ANYTHING BUT USUAL",
    title: "Specialized Tours",
    imgSrc: "/5.jpg",
    alt: "An aerial view of blue tents in a lush green mountain valley.",
    gradient: "",
  },
  {
    tagline: "THRILL & ADVENTURE",
    title: "Adventure Tours",
    imgSrc: "/6.jpg",
    alt: "A person on a swing on a pristine beach with turquoise water.",
    gradient: "",
  },
];

const TripSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const transitionDuration = 600;

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

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

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
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#FFFFFF]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 py-16">
        {/* Header Section */}
        <div className="flex flex-col justify-center text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-center md:text-5xl font-bold text-black mb-6 tracking-wide">
            <span className="block font-bold text-5xl sm:text-6xl text-[#D0B4B3] mt-2 uppercase">
              Trip with us Now
            </span>
          </h2>
          <div className="w-24 h-1 bg-[#D0B4B3] mx-auto mb-8 rounded-full"></div>
          <p className="mx-auto ttext-center max-w-3xl  leading-relaxed text-gray-700 opacity-80">
            Travel from anywhere in the world. Pick a tour that starts right
            from your city and matches your style. Experience curated journeys
            designed for every kind of traveler.
          </p>
        </div>

        {/* Cards Container */}
        <div
          className="relative flex items-center justify-center min-h-[600px] mb-10"
          style={{ perspective: "3500px" }}
        >
          {visibleCards.map((card) => {
            const { position, imgSrc, alt, tagline, title, gradient } = card;
            const isCenter = position === 0;
            const isHovered = hoveredCard === title;

            let transform = "";
            let opacity = 1;

            if (position === -1) {
              transform =
                "translateX(-90%) translateZ(-300px) rotateY(25deg) scale(0.75)";
              opacity = 0.4;
            }
            if (position === 0) {
              transform = `translateX(0) translateZ(0) rotateY(0) scale(${
                isHovered ? 1.05 : 1
              })`;
              opacity = 1;
            }
            if (position === 1) {
              transform =
                "translateX(90%) translateZ(-300px) rotateY(-25deg) scale(0.75)";
              opacity = 0.4;
            }

            return (
              <div
                key={title}
                className="absolute w-full max-w-md h-[540px] transition-all duration-700 ease-out"
                style={{
                  transform: transform,
                  zIndex: isCenter ? 30 : 10,
                  opacity: opacity,
                  pointerEvents: isCenter ? "auto" : "none",
                }}
                onMouseEnter={() => isCenter && setHoveredCard(title)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-full  overflow-hidden shadow-2xl">
                  {/* Card Image with Overlay */}
                  <div className="absolute inset-0">
                    <Image
                    loading="lazy"
                      src={imgSrc}
                      alt={alt}
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full object-cover transition-transform duration-700"
                      // style={{
                      //   transform: isHovered ? "scale(1.1)" : "scale(1)",
                      // }}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${gradient} mix-blend-multiply transition-opacity duration-500`}
                      style={{ opacity: isHovered ? 0.7 : 0.5 }}
                    ></div>
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div> */}
                  </div>

                  {/* Card Content */}
                  <div className="relative h-full flex flex-col justify-end p-8 sm:p-10">
                    {/* Tagline */}
                    <div className="mb-4 inline-flex self-start">
                      <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                        <p className="text-xs font-bold tracking-[0.25em] text-white uppercase">
                          {tagline}
                        </p>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-4xl sm:text-4xl font-bold text-white leading-tight drop-shadow-lg">
                      {title}
                    </h3>

                    {/* Description (visible on center card) */}
                    {isCenter && (
                      <p
                        className="text-white/90 text-sm sm:text-base mb-6 leading-relaxed transition-all duration-500"
                        style={{
                          opacity: isCenter ? 1 : 0,
                          transform: isCenter
                            ? "translateY(0)"
                            : "translateY(20px)",
                        }}
                      >
                        Discover the beauty of Socotra with our curated{" "}
                        {title.toLowerCase()}.
                      </p>
                    )}

                    {/* CTA Button */}
                    <button className="group relative w-full cursor-pointer  bg-white  hover:bg-brown hover:text-white text-slate-900 py-4 px-6 rounded-2xl flex items-center justify-center transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl overflow-hidden">
                      <span className="relative z-10 flex items-center gap-3">
                        Book {title.split(" ")[0]}
                        <ArrowRight
                          size={18}
                          className="transition-transform duration-300 group-hover:translate-x-2"
                        />
                      </span>
                    </button>
                  </div>

                  {/* Hover Glow Effect */}
                  {isCenter && isHovered && (
                    <div className="absolute inset-0 pointer-events-none transition-opacity duration-300"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Controls */}

        {/* Progress Bar */}
      </div>
    </div>
  );
};

export default TripSection;
