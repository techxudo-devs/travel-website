"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

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

// --- CARD COMPONENT ---
const TestimonialCard = ({ review }) => {
  return (
    <div className="bg-dark  rounded-xl p-4 flex flex-col h-full">
      <div className="relative mb-4">
        <img
          src={review.image}
          alt={review.trip}
          className="w-full h-52 object-cover rounded-lg"
        />
        <div className="absolute bottom-2 left-2 bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-md flex items-center gap-1">
          {review.rating}
          <Star size={14} fill="white" />
        </div>
      </div>
      <p className="text-gray-400 text-sm mb-4">
        {review.trip} • {review.duration}
      </p>
      <p className="text-white text-lg font-medium flex-grow">
        "{review.quote}"
      </p>
      <div className="flex items-center mt-6">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="text-white font-semibold">{review.name}</h4>
          <p className="text-gray-400 text-sm">{review.location}</p>
        </div>
      </div>
    </div>
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

  return (
    <section className="bg-gradient-to-b to-light via-light from-semilight py-20 px-4">
      <motion.div
        className="container mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <p className="text-dark uppercase tracking-wider mb-2">
          Our Testimonials
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Words from Our Adventurers
        </h2>
        <p className="text-dark max-w-2xl mx-auto mb-12">
          See what our travelers have to say about their journeys with Travio.
        </p>
      </motion.div>

      {/* --- Swiper Carousel --- */}
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom", // Custom pagination container
          }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is >= 1280px
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="!pb-16" // Add padding-bottom to make space for pagination
        >
          {testimonials.map((review, index) => (
            <SwiperSlide key={index} className="h-auto">
              <TestimonialCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Container */}
        <div className="swiper-pagination-custom text-center mt-8"></div>
      </div>
    </section>
  );
};

export default Testimonials;
