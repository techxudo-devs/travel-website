"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const leftLocations = [
  {
    id: 1,
    name: "Spain",
    subtitle: "Coastal Hiking",
    image: "/map1.webp",
    dropdown: [
      "BOTSWANA",
      "EGYPT",
      "SNORKELING",
      "KENYA",
      "MAURITIUS",
      "MOROCCO",
      "NAMIBIA",
      "THE SEYCHELLES",
      "TANZANIA",
      "ZIMBABWE",
    ],
  },
  {
    id: 2,
    name: "India",
    subtitle: "Hiking & Trekking",
    image: "/map2.webp",
    dropdown: [
      "CAMBODIA",
      "CHINA",
      "HONG KONG",
      "INDONESIA",
      "JAPAN",
      "THE MALDIVES",
      "SINGAPORE",
      "SRI LANKA",
      "THAILAND",
      "VIETNAM",
    ],
  },
  {
    id: 3,
    name: "Australia",
    subtitle: "Desert Camping",
    image: "/map3.webp",
    dropdown: [
      "AUSTRIA",
      "BELGIUM",
      "CROATIA",
      "CZECH REPUBLIC",
      "ENGLAND",
      "FRANCE",
      "GERMANY",
      "HUNGARY",
      "ICELAND",
      "PORTUGAL",
    ],
  },
  {
    id: 4,
    name: "Peru",
    subtitle: "Mountaineering",
    image: "/map4.webp",
    dropdown: ["CANADA", "MEXICO", "PUERTO RICO", "USA"],
  },
  {
    id: 5,
    name: "Serbia",
    subtitle: "Glacier Hiking",
    image: "/map5.webp",
    dropdown: ["AUSTRALIA", "FRENCH POLYNESIA", "NEW ZEALAND"],
  },
];

const rightLocations = [
  {
    id: 1,
    name: "Spain",
    image: "/map1.webp",
    mapPosition: { top: "60%", left: "53%" },
  },
  {
    id: 2,
    name: "Australia",
    image: "/map5.webp",
    mapPosition: { top: "30%", left: "70%" },
  },
  {
    id: 7,
    name: "India",
    image: "/map2.webp",
    mapPosition: { top: "30%", left: "20%" },
  },
  {
    id: 8,
    name: "Peru",
    image: "/map3.webp",
    mapPosition: { top: "68%", left: "80%" },
  },
  {
    id: 9,
    name: "Serbia",
    image: "/map4.webp",
    mapPosition: { top: "68%", left: "32%" },
  },
];

const TourMap = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const sidebarRef = useRef(null);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-[#FFFFFF] py-16 min-h-screen">
      {/* Heading */}
      <h1 className="text-center text-3xl md:text-5xl font-bold text-[#D0B4B3] pb-4 uppercase">
        Choose Your Destination
      </h1>
      <div className="w-20 md:w-24 h-1 bg-[#D0B4B3] mx-auto mb-8 rounded-full"></div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div
          ref={sidebarRef}
          className="lg:w-[240px] flex-shrink-0 relative px-4"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:flex lg:flex-col">
            {leftLocations.map((loc) => (
              <div key={loc.id} className="relative">
                <div
                  onClick={() => toggleDropdown(loc.id)}
                  className="cursor-pointer flex flex-col items-center hover:scale-105 active:scale-95 transition-all duration-200 group"
                >
                  <div className="relative">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#D0B4B3] opacity-30 animate-ping"></span>
                    <Image
                      loading="lazy"
                      className="rounded-full border-4 border-[#D0B4B3] shadow-md group-hover:shadow-xl group-hover:border-white transition-all duration-200"
                      src={loc.image}
                      alt={loc.name}
                      width={80}
                      height={80}
                      style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 rounded-full bg-black/0 group-hover:bg-black/10 transition-all duration-200"></div>
                  </div>
                  <div className="text-center mt-2">
                    <p className="text-sm font-semibold group-hover:text-[#D0B4B3] transition-colors duration-200">
                      {loc.name}
                    </p>
                  </div>
                </div>

                {/* Tooltip Dropdown */}
                <AnimatePresence>
                  {openDropdown === loc.id && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      // Responsive positioning: centered below on mobile, to the right on desktop
                      className="absolute z-20 w-max mt-2 top-full left-1/2 -translate-x-1/2 lg:left-full lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:ml-4 lg:mt-0"
                    >
                      <div className="relative bg-gradient-to-br from-brown to-light rounded-lg shadow-xl p-2 flex flex-col gap-1">
                        <div className="lg:hidden absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-brown"></div>
                        <div className="hidden lg:block absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[8px] border-r-brown"></div>

                        {loc.dropdown.map((item, i) => (
                          <div
                            key={i}
                            className="px-3 py-1 hover:bg-light hover:text-first transition-colors rounded cursor-pointer text-white text-sm whitespace-nowrap"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="flex-1 relative bg-[url('/map.jpg')] bg-cover bg-center min-h-[600px] w-full overflow-hidden mt-10 sm:mt-0">
          <div className="absolute inset-0 bg-white opacity-20"></div>

          {rightLocations.map((location) => (
            <div
              key={location.id}
              className="absolute group flex flex-col items-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
              style={location.mapPosition}
            >
              <div className="relative w-14 h-14 md:w-20 md:h-20 flex items-center justify-center">
                {/* Pulsing Animation */}
                {/* Image Container */}
                <div className="relative w-full h-full rounded-full border-4 border-white shadow-lg group-hover:border-[#D0B4B3] group-hover:shadow-2xl overflow-hidden transition-all duration-300 transform group-hover:scale-110">
                  <Image
                    loading="lazy"
                    src={location.image}
                    alt={location.name}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Arrow Pointer */}
              <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-[#D0B4B3] -mt-1 transition-all duration-300 transform group-hover:scale-110"></div>
              {/* Label */}
              <p className="text-[10px] md:text-xs font-semibold text-white bg-[#D0B4B3] px-2 py-1 rounded-full mt-1 shadow-md transition-all duration-300 transform group-hover:scale-110">
                {location.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourMap;
