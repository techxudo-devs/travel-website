"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// --- DUMMY DATA ---
// Replace with your actual data
const testimonials = [
  {
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500",
    rating: 4.6,
    trip: "Maldives",
    duration: "8 Days - 7 Night",
    quote:
      "Travio made travel planning effortless. Book dream trip in minutes!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Riya Patel",
    location: "Bangalore",
  },
  {
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500",
    rating: 4.6,
    trip: "Maldives",
    duration: "9 Days - 7 Night",
    quote: "Planning our Maldives was great, fast and met our needs perfectly.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Vikram",
    location: "Delhi, India",
  },
  {
    image: "https://images.unsplash.com/photo-1502602898657-3e91760c0341?w=500",
    rating: 4.6,
    trip: "Indonesia",
    duration: "17 Days - 14 Night",
    quote:
      "Planning my Bali trip with Travio was a breeze. Bookings and great tips!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Priya Shah",
    location: "Mumbai",
  },
  {
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500",
    rating: 4.6,
    trip: "Dubai",
    duration: "7 Days - 6 Night",
    quote:
      "Exploring options for Dubai was simple, suggestions were personal and useful.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "Ahmed K.",
    location: "Dubai",
  },
  {
    image: "https://images.unsplash.com/photo-1533929736458-ca5889121684?w=500",
    rating: 4.6,
    trip: "Maldives",
    duration: "8 Days - 7 Night",
    quote:
      "Travio revealed hidden gems in Istanbul. It felt like having a local friend!",
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    name: "Sarah M",
    location: "London",
  },
];

const TestimonialCard = ({ review }) => {
  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-gradient-to-br from-white/98 to-white/95 backdrop-blur-xl rounded-[2rem] p-8 flex flex-col h-full shadow-2xl hover:shadow-3xl border border-[var(--color-semilight)]/20 relative overflow-hidden group"
    >
      {/* Enhanced gradient overlay with animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brown)]/8 via-[var(--color-semilight)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

      {/* Animated glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-brown)]/20 via-[var(--color-semilight)]/10 to-[var(--color-brown)]/20 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>

      <div className="relative z-10 h-full flex flex-col">
        {/* Enhanced Image Section */}
        <div className="relative mb-8 overflow-hidden rounded-3xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
          <div className="relative overflow-hidden">
            <img loading="lazy"
              src={review.image}
              alt={review.trip}
              className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
            />
            {/* Multi-layered gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brown)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Enhanced Rating badge */}
          <div className="absolute bottom-5 left-5 bg-white/98 backdrop-blur-md text-[var(--color-dark)] text-sm font-bold px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xl border border-white/50">
            <div className="flex items-center gap-1">
              <Star
                size={16}
                fill="#fbbf24"
                className="text-yellow-400 drop-shadow-sm"
              />
              <span className="font-black">{review.rating}</span>
            </div>
            <div className="w-px h-4 bg-[var(--color-semilight)]/40"></div>
            <span className="text-xs font-semibold text-[var(--color-dark)]/70 uppercase tracking-wide">
              Excellent
            </span>
          </div>

          {/* Enhanced Trip info badge */}
          <div className="absolute top-5 right-5 bg-[var(--color-dark)]/95 backdrop-blur-md text-[var(--color-light)] text-xs font-bold px-4 py-2 rounded-2xl shadow-xl">
            {review.duration}
          </div>
        </div>

        {/* Modern Trip destination chip */}
        <div className="mb-6">
          <span className="inline-flex items-center bg-gradient-to-r from-[var(--color-semilight)]/40 to-[var(--color-semilight)]/20 text-[var(--color-dark)] text-sm font-semibold px-5 py-2.5 rounded-2xl border border-[var(--color-semilight)]/30 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-2 h-2 bg-[var(--color-brown)] rounded-full mr-3 animate-pulse"></div>
            {review.trip}
          </span>
        </div>

        {/* Enhanced Quote section */}
        <div className="flex-grow mb-8 relative">
          <div className="relative">
            <Quote
              size={32}
              className="text-[var(--color-brown)]/20 mb-4 transform rotate-12"
            />
            <div className="relative">
              <p className="text-[var(--color-dark)] text-xl leading-relaxed font-medium italic pl-4 border-l-4 border-[var(--color-brown)]/30 hover:border-[var(--color-brown)]/50 transition-colors duration-300">
                "{review.quote}"
              </p>
              {/* Decorative quote marks */}
              <div className="absolute -top-2 -left-2 text-[var(--color-brown)]/10 text-6xl font-serif leading-none select-none">
                "
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Profile section */}
        <div className="flex items-center p-4 bg-gradient-to-r from-[var(--color-semilight)]/10 to-transparent rounded-2xl border border-[var(--color-semilight)]/20">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img loading="lazy"
                src={review.avatar}
                alt={review.name}
                className="w-16 h-16 object-cover border-3 border-white shadow-lg"
              />
            </div>
            {/* Enhanced online indicator */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-3 border-white shadow-lg flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>

          <div className="ml-5 flex-grow">
            <h4 className="text-[var(--color-dark)] font-bold text-lg mb-1 tracking-tight">
              {review.name}
            </h4>
            <div className="flex items-center text-[var(--color-dark)]/60 text-sm">
              <div className="w-1.5 h-1.5 bg-[var(--color-brown)]/60 rounded-full mr-2"></div>
              {review.location}
            </div>
          </div>

          {/* Verified badge */}
          <div className="ml-3">
            <div className="bg-[var(--color-brown)]/10 text-[var(--color-brown)] px-3 py-1 rounded-full text-xs font-bold border border-[var(--color-brown)]/20">
              ✓ Verified
            </div>
          </div>
        </div>
      </div>

      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[var(--color-brown)]/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
};

const Testimonials = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-brown py-24 px-4 relative overflow-hidden">
      {/* Background decorative elements */}

      <motion.div
        className="container mx-auto text-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="mb-10">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold tracking-[0.3em] text-light uppercase block mb-4">
              Our Testimonials
            </span>
            <div className="w-16 h-1 bg-dark mx-auto rounded-full"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-light text-[var(--color-dark)] leading-tight mb-6">
            Words from Our
            <span className="block font-medium text-light mt-2">
              Adventurers
            </span>
          </h2>

          <p className="text-[var(--color-dark)]/80 text-lg leading-relaxed max-w-3xl mx-auto">
            See what our travelers have to say about their journeys with Travio.
            Every story is a testament to unforgettable experiences.
          </p>
        </motion.div>
      </motion.div>

      {/* --- Enhanced Swiper Carousel --- */}
      <div className="max-w-8xl mx-auto relative z-10">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          className="!pb-20"
        >
          {testimonials.map((review, index) => (
            <SwiperSlide key={index} className="h-auto">
              <TestimonialCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Enhanced Custom Pagination */}
      </div>

      {/* Statistics Section */}
    </section>
  );
};

export default Testimonials;
