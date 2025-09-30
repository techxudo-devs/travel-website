import React from "react";
import { BedDouble, Map, Home, Plane } from "lucide-react";

const TourStatCard = ({ icon, value, label }) => (
  <div className="relative group">
    {/* Gradient background blob */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#a37b64]/10 to-[#c4c8ba]/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-500 ease-out"></div>

    {/* Main card */}
    <div className="relative flex items-center p-6 bg-[#f8efe3] rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 ease-out border border-[#c4c8ba]/20 overflow-hidden">
      {/* Animated accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#a37b64] to-[#c4c8ba] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>

      {/* Icon container with modern styling */}
      <div className="flex-shrink-0 relative">
        <div className="absolute inset-0 bg-[#a37b64] rounded-2xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
        <div className="relative bg-white group-hover:bg-[#a37b64] p-4 rounded-2xl transition-all duration-500 shadow-sm">
          {React.cloneElement(icon, {
            className:
              "w-7 h-7 text-[#a37b64] group-hover:text-white transition-colors duration-500",
            strokeWidth: 1.5,
          })}
        </div>
      </div>

      {/* Content */}
      <div className="ml-5 flex-1">
        <p className="text-xl font-bold text-[#a37b64] group-hover:text-[#a37b64] transition-colors duration-300 tracking-tight">
          {value}
        </p>
        <p className="text-sm font-medium text-[#a37b64]/60 mt-1 tracking-wide uppercase">
          {label}
        </p>
      </div>

      {/* Subtle arrow indicator */}
      <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500">
        <svg
          className="w-5 h-5 text-[#a37b64]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  </div>
);

const TourOverviewBar = ({ duration, visitingLocations, inclusions }) => {
  const accommodationCount = inclusions?.accommodation?.length || 5;
  const transportsCount = inclusions?.transportation?.length || 5;

  const stats = [
    {
      icon: <BedDouble />,
      value: `${duration.nights} Nights`,
      label: "Duration",
    },
    {
      icon: <Map />,
      value: `${visitingLocations.length} Destinations`,
      label: "Visiting",
    },
    {
      icon: <Home />,
      value: accommodationCount,
      label: "Accommodation",
    },
    {
      icon: <Plane />,
      value: transportsCount,
      label: "Transports",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-[#f8efe3]/30 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Optional heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#a37b64] mb-3">
            Tour Overview
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#a37b64] to-[#c4c8ba] mx-auto rounded-full"></div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <TourStatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourOverviewBar;
