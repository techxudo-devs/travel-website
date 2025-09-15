"use client";

import React, { useState } from "react";
import { ArrowRight, MapPin, Camera, Mountain, Waves } from "lucide-react";

const experiences = [
  {
    icon: Mountain,
    title: "Otherworldly Landscapes",
    description:
      "Discover alien-like terrains with Dragon Blood Trees, bottle trees, and surreal rock formations that exist nowhere else on Earth.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2670&auto=format&fit=crop",
    color: "from-emerald-400 to-teal-600",
  },
  {
    icon: Waves,
    title: "Pristine Beaches",
    description:
      "Walk on untouched white sand beaches with crystal-clear turquoise waters, perfect for swimming and snorkeling.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723a996f6ea?q=80&w=2670&auto=format&fit=crop",
    color: "from-blue-400 to-cyan-600",
  },
  {
    icon: Camera,
    title: "Endemic Wildlife",
    description:
      "Encounter species found nowhere else - from the Socotra sunbird to unique reptiles and fascinating marine life.",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2574&auto=format&fit=crop",
    color: "from-orange-400 to-amber-600",
  },
  {
    icon: MapPin,
    title: "Cultural Immersion",
    description:
      "Meet the warm Socotri people, learn their ancient traditions, and experience a way of life unchanged for centuries.",
    image:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?q=80&w=2574&auto=format&fit=crop",
    color: "from-purple-400 to-indigo-600",
  },
];

const WhatToExpectSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Abstract geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-brown to-semilight rounded-3xl rotate-12 animate-pulse"></div>
        </div>

        <div className="absolute top-1/3 right-20 w-24 h-24 opacity-15">
          <div
            className="w-full h-full bg-gradient-to-br from-light to-brown rounded-full animate-bounce"
            style={{ animationDuration: "3s" }}
          ></div>
        </div>

        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 opacity-8">
          <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl -rotate-12"></div>
        </div>

        {/* Flowing lines */}
        <svg
          className="absolute top-0 right-0 w-1/2 h-full opacity-5"
          viewBox="0 0 400 800"
        >
          <path
            d="M0,100 Q200,200 100,400 Q300,500 200,700"
            stroke="url(#gradient1)"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M100,0 Q250,150 150,300 Q350,400 250,600"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8efe3" />
              <stop offset="100%" stopColor="#f8efe3" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8efe3" />
              <stop offset="100%" stopColor="#f8efe3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-[0.3em] text-slate-600 uppercase mb-4">
            YOUR ADVENTURE AWAITS
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            What to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              expect
            </span>
            <br />
            in Socotra
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Step into a world that feels like another planet. Socotra offers
            experiences that will challenge everything you thought you knew
            about natural beauty.
          </p>
        </div>

        {/* Interactive Experience Cards */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Navigation Cards */}
          <div className="space-y-4">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    group cursor-pointer p-6 rounded-2xl transition-all duration-500 transform hover:scale-105
                    ${
                      isActive
                        ? "bg-white shadow-2xl border-l-4 border-blue-500 translate-x-2"
                        : "bg-white/50 backdrop-blur-sm hover:bg-white/80 shadow-lg"
                    }
                  `}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`
                      p-3 rounded-xl transition-all duration-300
                      ${
                        isActive
                          ? `bg-gradient-to-r ${exp.color} text-white shadow-lg`
                          : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
                      }
                    `}
                    >
                      <IconComponent size={24} />
                    </div>

                    <div className="flex-1">
                      <h3
                        className={`
                        font-bold text-xl mb-2 transition-colors duration-300
                        ${
                          isActive
                            ? "text-gray-900"
                            : "text-gray-700 group-hover:text-gray-900"
                        }
                      `}
                      >
                        {exp.title}
                      </h3>
                      <p
                        className={`
                        leading-relaxed transition-colors duration-300
                        ${
                          isActive
                            ? "text-gray-600"
                            : "text-gray-500 group-hover:text-gray-600"
                        }
                      `}
                      >
                        {exp.description}
                      </p>
                    </div>

                    <ArrowRight
                      size={20}
                      className={`
                        transition-all duration-300
                        ${
                          isActive
                            ? "text-blue-500 translate-x-1"
                            : "text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1"
                        }
                      `}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right - Active Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img loading="lazy"
                src={experiences[activeIndex].image}
                alt={experiences[activeIndex].title}
                className="w-full h-[600px] object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

              {/* Floating badge */}
              <div
                className={`
                absolute top-6 left-6 px-4 py-2 rounded-full text-white font-semibold text-sm
                bg-gradient-to-r ${experiences[activeIndex].color} shadow-lg
              `}
              >
                {experiences[activeIndex].title}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl opacity-25 rotate-45"></div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "#43555d" }}
            >
              Ready to discover the impossible?
            </h3>
            <p className="mb-6" style={{ color: "#43555d", opacity: 0.7 }}>
              Join us for an unforgettable journey to one of the world's last
              hidden paradises.
            </p>
            <button
              className="group inline-flex items-center text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #a37b64, #43555d)",
              }}
              onMouseEnter={(e) =>
                (e.target.style.background =
                  "linear-gradient(135deg, #8d6b55, #3a4a51)")
              }
              onMouseLeave={(e) =>
                (e.target.style.background =
                  "linear-gradient(135deg, #a37b64, #43555d)")
              }
            >
              Start planning your adventure
              <ArrowRight
                size={20}
                className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpectSection;
