"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const leftLocations = [
  {
    id: 1,
    name: "Africa",
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
    name: "Asia",
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
    name: "Europe",
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
    name: "North America",
    subtitle: "Mountaineering",
    image: "/map4.webp",
    dropdown: ["CANADA", "MEXICO", "PUERTO RICO", "USA"],
  },
  {
    id: 5,
    name: "Oceania",
    subtitle: "Glacier Hiking",
    image: "/map5.webp",
    dropdown: ["AUSTRALIA", "FRENCH POLYNESIA", "NEW ZEALAND"],
  },
];

const rightLocations = [
  {
    id: 1,
    name: "Africa",
    image: "/map1.webp",
    mapPosition: { top: "60%", left: "52%" },
  },
  {
    id: 2,
    name: "Asia",
    image: "/map2.webp",
    mapPosition: { top: "25%", left: "80%" },
  },
  {
    id: 3,
    name: "The Caribbean",
    image: "/map3.webp",
    mapPosition: { top: "40%", left: "25%" },
  },
  {
    id: 4,
    name: "Europe",
    image: "/map4.webp",
    mapPosition: { top: "30%", left: "10%" },
  },
  {
    id: 5,
    name: "Central America",
    image: "/map5.webp",
    mapPosition: { top: "25%", left: "50%" },
  },
  {
    id: 6,
    name: "Middle East",
    image: "/map1.webp",
    mapPosition: { top: "40%", left: "65%" },
  },
  {
    id: 7,
    name: "North America",
    image: "/map2.webp",
    mapPosition: { top: "20%", left: "20%" },
  },
  {
    id: 8,
    name: "Oceania",
    image: "/map3.webp",
    mapPosition: { top: "68%", left: "80%" },
  },
  {
    id: 9,
    name: "South America",
    image: "/map4.webp",
    mapPosition: { top: "70%", left: "31%" },
  },
];

const TourMap = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div className="bg-[#FFFFFF] py-16 min-h-screen">
      {/* Heading */}
      <h1 className="text-center text-3xl md:text-5xl font-bold text-[#D0B4B3] pb-4 uppercase">
        Choose Your Destination
      </h1>
      <div className="w-20 md:w-24 h-1 bg-[#D0B4B3] mx-auto mb-8 rounded-full"></div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar / Top Row */}
        <div className="lg:w-[240px] flex-shrink-0 relative px-4">
          {/* Animated Label */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="bg-[#D0B4B3] px-4 py-2 w-fit mx-auto mb-6 flex items-center gap-2 rounded-md shadow-md cursor-pointer"
          >
            <span className="font-medium sm:text-base text-sm text-white">Click To Choose</span>
            <ChevronDown className="w-5 h-5 text-white" />
          </motion.div>

          {/* Location List - Horizontal on small, vertical on lg */}
          <div className="flex lg:flex-col gap-6 overflow-x-auto pb-4 lg:overflow-visible lg:pb-0">
            {leftLocations.map((loc) => (
              <div key={loc.id} className="relative flex-shrink-0">
                {/* Image + title */}
                <div
                  onClick={() => toggleDropdown(loc.id)}
                  className="cursor-pointer flex flex-col items-center hover:scale-95 transition-all duration-300"
                >
                  <img
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-[#D0B4B3]"
                    src={loc.image}
                    alt={loc.name}
                  />
                  <div className="text-center mt-2">
                    <p className="text-sm font-medium">{loc.name}</p>
                    <p className="text-xs text-gray-600">{loc.subtitle}</p>
                  </div>
                </div>

                {/* Dropdown */}
                <div
                  className={`absolute lg:left-5 z-20 top-full transition-all duration-500 ease-in-out ${openDropdown === loc.id
                    ? "h-fit opacity-100"
                    : "max-h-0 opacity-0"
                    } w-[200px] overflow-hidden`}
                >
                  <ul className="mt-2 bg-[#D0B4B3] rounded-lg shadow-md text-sm p-2">
                    {loc.dropdown.map((item, i) => (
                      <li
                        key={i}
                        className="px-3 py-1 hover:bg-[#998584] rounded cursor-pointer text-white"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="flex-1 relative bg-[url('/map.jpg')] bg-cover bg-center min-h-[500px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-white opacity-20"></div>

          {rightLocations.map((location) => (
            <div
              key={location.id}
              className="absolute flex flex-col items-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
              style={location.mapPosition}
            >
              <div className="relative w-14 h-14 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg overflow-hidden flex items-center justify-center bg-gray-200">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-[#D0B4B3] -mt-1"></div>
              <p className="text-[10px] md:text-xs font-semibold text-white bg-[#D0B4B3] px-2 py-1 rounded-full mt-1 shadow-md">
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
