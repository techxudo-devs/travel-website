"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const TripWithUs = () => {
  const swiperRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  // Placeholder images - you can replace these with your actual images
  const smallImages = ["/4.jpg", "/6.jpg", "/3.jpg", "/4.jpg"];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % smallImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + smallImages.length) % smallImages.length
    );
  };

  const amenitiesList = [
    { left: "BEACH RESORTS", right: "MOUNTAIN HIKES" },
    { left: "CITY TOURS", right: "CULTURAL EXPERIENCES" },
    { left: "ADVENTURE SPORTS", right: "WILDLIFE SAFARIS" },
    { left: "LUXURY CRUISES", right: "ROAD TRIPS" },
  ];

  return (
    <div className="bg-white" style={{ backgroundImage: `url("/brown.svg")` }}>
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-2">
            <div>
              <p className="text-light boucher  text-md  uppercase mb-2">
                DISCOVER
              </p>
              <h2 className="text-5xl boucher   text-light leading-14 mb-6">
                TRAVEL THE WORLD
                <br />
                WITH US
              </h2>
              <p className="text-light sofia text-lg leading-relaxed ">
                From breathtaking mountains to relaxing beaches, our curated
                trips are designed to give you unforgettable experiences.
                Explore new cultures, try adventurous activities, and create
                memories that last a lifetime.
              </p>
            </div>

            {/* Amenities List */}
            <div className="space-y-2 py-8">
              {amenitiesList.map((item, index) => (
                <div key={index} className="grid grid-cols-2 gap-8 sofia">
                  <div className="border-b border-primary w-fit pb-2">
                    <p className="font-bold text-light text-sm  uppercase">
                      {item.left}
                    </p>
                  </div>
                  <div className="border-b w-fit  border-primary pb-2">
                    <p className="font-bold text-light text-sm  uppercase">
                      {item.right}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Section */}

          <div className="relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setCurrentImage(swiper.realIndex)}
              className="rounded-lg"
            >
              {smallImages.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="w-full max-w-[800px] h-[680px] overflow-hidden ">
                    <img
                      src={img}
                      alt={`Slide ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="absolute flex flex-col gap-2 -translate-4 -right-10 top-1/2 transform -translate-y-1/2 z-10">
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="bg-light text-dark hover:bg-slate-700 cursor-pointer p-3  hover:text-white rounded-full shadow-lg"
              >
                <ArrowRight strokeWidth={3} size={24} />
              </button>
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="bg-light hover:bg-slate-700 cursor-pointer   text-dark hover:text-white p-3 rounded-full shadow-lg"
              >
                <ArrowLeft strokeWidth={3} size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripWithUs;
