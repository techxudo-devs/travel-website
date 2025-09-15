"use client";
import React, { useState } from "react";
import Image from "next/image";

const leftLocations = [
  {
    id: 1,
    name: "Beach",
    subtitle: "Coastal Hiking",
    image: "/map1.webp",
    dropdown: [
      "Surfing",
      "Scuba Diving",
      "Snorkeling",
      "Beach Volleyball",
      "Sunbathing",
    ],
  },
  {
    id: 2,
    name: "Forest",
    subtitle: "Hiking & Trekking",
    image: "/map2.webp",
    dropdown: [
      "Wildlife Safari",
      "Camping",
      "Treehouse Stay",
      "Nature Walk",
      "Photography",
    ],
  },
  {
    id: 3,
    name: "Desert",
    subtitle: "Desert Camping",
    image: "/map3.webp",
    dropdown: [
      "Camel Ride",
      "Sand Boarding",
      "Jeep Safari",
      "Star Gazing",
      "Cultural Show",
    ],
  },
  {
    id: 4,
    name: "Mountain",
    subtitle: "Mountaineering",
    image: "/map4.webp",
    dropdown: [
      "Rock Climbing",
      "Snow Trekking",
      "Paragliding",
      "Skiing",
      "Hot Springs",
    ],
  },
  {
    id: 5,
    name: "Northern",
    subtitle: "Glacier Hiking",
    image: "/map5.webp",
    dropdown: [
      "Ice Climbing",
      "Heli Tour",
      "Fishing",
      "Village Visit",
      "Snowmobile Ride",
    ],
  },
];

const tourLocations = [
  {
    id: 1,
    name: "Beach",
    image: "/map1.webp",
    mapPosition: { top: "60%", left: "52%" },
  },
  {
    id: 2,
    name: "Forest",
    image: "/map2.webp",
    mapPosition: { top: "25%", left: "80%" },
  },
  {
    id: 3,
    name: "Desert",
    image: "/map3.webp",
    mapPosition: { top: "40%", left: "25%" },
  },
  {
    id: 4,
    name: "Mountain",
    image: "/map4.webp",
    mapPosition: { top: "30%", left: "10%" },
  },
  {
    id: 5,
    name: "Northern",
    image: "/map5.webp",
    mapPosition: { top: "25%", left: "50%" },
  },
  {
    id: 6,
    name: "Beach",
    image: "/map1.webp",
    mapPosition: { top: "40%", left: "65%" },
  },
  {
    id: 7,
    name: "Forest",
    image: "/map2.webp",
    mapPosition: { top: "20%", left: "20%" },
  },
  {
    id: 8,
    name: "Desert",
    image: "/map3.webp",
    mapPosition: { top: "68%", left: "80%" },
  },
  {
    id: 9,
    name: "Mountain",
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
    <div className="bg-[#FFFFFF] py-20 min-h-screen pr-10">
      <h1 className="text-center text-5xl font-bold text-[#D0B4B3] pb-4 uppercase">
        Choose Your Destination
      </h1>
      <div className="w-24 h-1 bg-[#D0B4B3] mx-auto mb-8 rounded-full"></div>

      <div className="flex">
        {/* Left Section with dropdowns */}
        <div className="w-[220px] flex-shrink-0 relative">
          {leftLocations.map((loc) => (
            <div key={loc.id} className="mb-8 relative">
              {/* Image and title clickable */}
              <div
                onClick={() => toggleDropdown(loc.id)}
                className="cursor-pointer flex flex-col items-center"
              >
                <Image
                  loading="lazy"
                  className="w-16 h-16 rounded-full object-cover"
                  src={loc.image}
                  width={64}
                  height={64}
                  alt={loc.name}
                />
                <div className="text-center mt-2">
                  <p className="text-sm font-medium">{loc.name}</p>
                  <p className="text-xs text-gray-600">{loc.subtitle}</p>
                </div>
              </div>

                {/* Right Section - Map */}
                <div className="flex-1 relative bg-[url('/map.jpg')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-white opacity-30"></div>

                    {tourLocations.map(({ id, mapPosition, image, name }) => (
                        <div
                            key={id}
                            className='absolute flex flex-col items-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2'
                            style={mapPosition}
                        >
                            {/* The circular image */}
                            <div className='relative w-20 h-20 rounded-full border-4 border-black shadow-lg overflow-hidden flex items-center justify-center bg-gray-200'>
                                <img loading="lazy"
                                    src={image}
                                    alt={name}
                                    layout='fill'
                                    objectFit='cover'
                                />
                            </div>
                            <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-black -mt-1"></div>
                            <p className="text-xs font-semibold text-white bg-[#D0B4B3] px-3 py-1 shadow-black shadow-sm rounded-full mt-1">
                                {name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
          ))}
        </div>

        {/* Right Section - Map */}
        <div className="flex-1 relative bg-[url('/map.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-white opacity-30"></div>

          {tourLocations.map(({ id, mapPosition, image, name }) => (
            <div
              key={id}
              className="absolute flex flex-col items-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
              style={mapPosition}
            >
              {/* The circular image */}
              <div className="relative w-20 h-20 rounded-full border-4 border-black shadow-lg overflow-hidden flex items-center justify-center bg-gray-200">
                <Image
                  loading="lazy"
                  src={image}
                  alt={name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-black -mt-1"></div>
              <p className="text-xs font-semibold text-white bg-[#D0B4B3] px-3 py-1 shadow-black shadow-sm rounded-full mt-1">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourMap;
