"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

// Updated data with travel-related images and content
const travelSpots = [
  {
    src: "/swiper3.avif",
    alt: "Picturesque view of Pragser Wildsee in Italy",
    title: "Dolomites, Italy",
    description:
      "Explore the serene lakes and majestic peaks of the Italian Alps.",
  },
  {
    src: "/4.jpg",
    alt: "Hot air balloons over Cappadocia, Turkey",
    title: "Cappadocia, Turkey",
    description:
      "Witness a breathtaking sunrise from a hot air balloon over a unique landscape.",
  },
  {
    src: "/swiper1.avif",
    alt: "Lush green rice terraces in Bali, Indonesia",
    title: "Bali, Indonesia",
    description:
      "Discover the vibrant culture and lush, terraced rice paddies.",
  },
  {
    src: "/swiper2.avif",
    alt: "Fushimi Inari Shrine in Kyoto, Japan at night",
    title: "Kyoto, Japan",
    description:
      "Walk through the iconic torii gates and ancient temples of Japan's former capital.",
  },
];

export default function PictureSwiper() {
  const swiperRef = useRef(null);

  return (
    <div className="relative w-full py-10 flex items-center justify-center bg-light">
      {/* Swiper Container */}
      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={45}
        slidesPerView={1.1}
        centeredSlides={true}
        loop={true}
        className="w-full max-w-full"
      >
        {travelSpots.map((spot, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full h-[620px] relative overflow-hidden rounded-2xl shadow-lg">
              <img loading="lazy"
                src={spot.src}
                alt={spot.alt}
                objectFit="cover"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              {/* Centered Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white text-center p-8">
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold"
                  style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
                >
                  {spot.title}
                </h2>
                <p
                  className="mt-4 text-base sm:text-lg max-w-md"
                  style={{ textShadow: "1px 1px 6px rgba(0,0,0,0.7)" }}
                >
                  {spot.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Corrected Navigation Buttons */}
      <div className="absolute flex flex-col gap-4 right-10 md:right-40 top-1/2 transform -translate-y-1/2 z-20">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-[#D0B4B3] hover:bg-[#b49a99] transition-colors duration-300 cursor-pointer text-black p-3 rounded-full shadow-lg"
        >
          <ArrowLeft strokeWidth={3} size={24} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-[#D0B4B3] hover:bg-[#b49a99]  transition-colors duration-300 cursor-pointer text-black p-3 rounded-full shadow-lg"
        >
          <ArrowRight strokeWidth={3} size={24} />
        </button>
      </div>
    </div>
  );
}
