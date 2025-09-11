"use client";
import React, { useState } from "react";
import Image from "next/image"; // Assuming you might use Next.js Image component, though divs are used here for full-bleed backgrounds

const DestinationsSection = () => {
  const destinations = [
    {
      name: "India",
      packages: "47 Trips Packages",
      image: "/4.jpg",
    },
    {
      name: "Italy",
      packages: "18 Trips Packages",
      image: "/6.jpg",
    },
    {
      name: "Greece",
      packages: "11 Trips Packages",
      image: "/3.jpg",
    },
    {
      name: "Portugal",
      packages: "14 Trips Packages",
      image: "/11.jpg", // Using a unique image
    },
    {
      name: "Japan",
      packages: "10 Trips Packages",
      image: "/10.jpg", // Using a unique image
    },
    {
      name: "Peru",
      packages: "15 Trips Packages",
      image: "/7.jpg", // Using a unique image
    },
    {
      name: "South Africa",
      packages: "14 Trips Packages",
      image: "/10.jpg", // Using a unique image
    },
    {
      name: "Europe",
      packages: "104 Trips Packages",
      image: "/8.jpg", // Using a unique image
    },
  ];

  // The default background image to show initially and on mouse leave
  const defaultBackgroundImage = "/4.jpg";

  // State to track the currently active background image
  const [activeBg, setActiveBg] = useState(defaultBackgroundImage);

  // Get a list of unique background images to prevent duplicate rendering
  const uniqueImages = [
    ...new Set([defaultBackgroundImage, ...destinations.map((d) => d.image)]),
  ];

  return (
    <div
      className="relative min-h-screen bg-black" // Fallback background
    >
      {/* Background Images Container */}
      <div className="absolute inset-0 z-0">
        {uniqueImages.map((img) => (
          <div
            key={img}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out"
            style={{
              backgroundImage: `url(${img})`,
              opacity: activeBg === img ? 1 : 0, // Show only the active image
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay for Readability */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1))`,
        }}
      />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-white/80 sofia text-lg mb-4">
            Explore Destinations Country
          </p>
          <h2 className="text-fourth boucher text-4xl md:text-7xl font-light">
            Where to next?
          </h2>
        </div>

        {/* Destinations Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          // Reset to default background when mouse leaves the entire grid area
          onMouseLeave={() => setActiveBg(defaultBackgroundImage)}
        >
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105"
              // Set the active background on hover
              onMouseEnter={() => setActiveBg(destination.image)}
            >
              {/* Card Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:brightness-110"
                style={{ backgroundImage: `url(${destination.image})` }}
              />

              {/* Card Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />

              {/* Card Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-white boucher text-3xl font-light mb-2 transform transition-all duration-300 group-hover:translate-y-[-4px]">
                  {destination.name}
                </h3>
                <div className="inline-flex">
                  <span className="bg-white/20 backdrop-blur-sm text-white sofia text-sm px-3 py-1 rounded-full border border-white/30 transition-all duration-300 group-hover:bg-white/30 group-hover:border-white/50">
                    {destination.packages}
                  </span>
                </div>
              </div>

              {/* Card Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationsSection;
