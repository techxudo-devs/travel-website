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

// --- ENHANCED CARD COMPONENT ---
const TestimonialCard = ({ review }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 flex flex-col h-full shadow-xl hover:shadow-2xl border border-[var(--color-semilight)]/30 relative overflow-hidden group"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brown)]/5 via-transparent to-[var(--color-semilight)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        {/* Image Section */}
        <div className="relative mb-6 overflow-hidden rounded-2xl">
          <img
            src={review.image}
            alt={review.trip}
            className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient overlay for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

          {/* Rating badge */}
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm text-[var(--color-dark)] text-sm font-bold px-3 py-2 rounded-xl flex items-center gap-2 shadow-lg">
            <span>{review.rating}</span>
            <Star size={14} fill="#fbbf24" className="text-yellow-400" />
          </div>

          {/* Trip info badge */}
          <div className="absolute top-4 right-4 bg-dark/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            {review.duration}
          </div>
        </div>

        {/* Trip destination */}
        <div className="mb-4">
          <span className="inline-block bg-[var(--color-semilight)]/30 text-[var(--color-dark)] text-sm font-medium px-3 py-1 rounded-full">
            {review.trip}
          </span>
        </div>

        {/* Quote section */}
        <div className="flex-grow mb-6 relative">
          <Quote size={24} className="text-light/30 mb-3" />
          <p className="text-[var(--color-dark)] text-lg leading-relaxed font-medium italic">
            {review.quote}
          </p>
        </div>

        {/* Profile section */}
        <div className="flex items-center">
          <div className="relative">
            <img
              src={review.avatar}
              alt={review.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-[var(--color-brown)]/20"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="ml-4">
            <h4 className="text-[var(--color-dark)] font-bold text-base">
              {review.name}
            </h4>
            <p className="text-[var(--color-dark)]/70 text-sm">
              {review.location}
            </p>
          </div>
        </div>
      </div>
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
      <div className="max-w-7xl mx-auto relative z-10">
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
        <div className="swiper-pagination-custom text-center mt-8 [&_.swiper-pagination-bullet]:w-3 [&_.swiper-pagination-bullet]:h-3 [&_.swiper-pagination-bullet]:bg-[var(--color-semilight)] [&_.swiper-pagination-bullet]:opacity-60 [&_.swiper-pagination-bullet-active]:bg-dark [&_.swiper-pagination-bullet-active]:opacity-100 [&_.swiper-pagination-bullet-active]:w-8 [&_.swiper-pagination-bullet-active]:rounded-full [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300"></div>
      </div>

      {/* Statistics Section */}
      <motion.div
        variants={itemVariants}
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto relative z-10"
      >
        <div className="text-center">
          <div className="text-4xl font-bold text-light mb-2">2000+</div>
          <div className="text-[var(--color-dark)]/70 text-sm uppercase tracking-wider">
            Happy Travelers
          </div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-light mb-2">4.8/5</div>
          <div className="text-[var(--color-dark)]/70 text-sm uppercase tracking-wider">
            Average Rating
          </div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-light mb-2">50+</div>
          <div className="text-[var(--color-dark)]/70 text-sm uppercase tracking-wider">
            Destinations
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
