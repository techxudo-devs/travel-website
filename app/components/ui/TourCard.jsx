import Image from "next/image";
import { motion } from "framer-motion";

const TourCard = ({ tour }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border border-[var(--color-semilight)]/20 backdrop-blur-sm"
    >
      {/* Image Container */}
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

        {/* Country & Duration Badge */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <span className="px-3 py-1.5 bg-fourth backdrop-blur-sm text-second text-sm font-medium rounded-full shadow-sm">
            {tour.country}
          </span>
          <span className="px-3 py-1.5 bg-brown backdrop-blur-sm text-white text-sm font-medium rounded-full shadow-sm">
            {tour.duration}
          </span>
        </div>

        {/* Rating Badge */}
        <div className="absolute bottom-4 right-4">
          <div className="flex items-center space-x-1 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-2xl shadow-lg">
            <svg
              className="w-4 h-4 text-yellow-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.612-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-[var(--color-dark)] text-sm font-semibold">
              {tour.rating}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-[var(--color-dark)] leading-tight line-clamp-2 group-hover:text-[var(--color-brown)] transition-colors duration-300">
          {tour.title}
        </h3>

        {/* Reviews */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(tour.rating)
                    ? "text-yellow-400"
                    : "text-gray-200"
                } fill-current`}
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.612-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-[var(--color-dark)]/70">
            Excellent ({tour.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-3xl font-bold text-five">
              ${tour.price.toLocaleString()}
            </span>
            <span className="text-sm text-[var(--color-dark)]/60 ml-1">
              / per person
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3.5 bg-gradient-to-r from-third to-second hover:from-second hover:to-third text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
        >
          <span className="relative z-10">Book Now</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </motion.button>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[var(--color-brown)]/10 via-[var(--color-semilight)]/5 to-[var(--color-brown)]/10"></div>
      </div>
    </motion.div>
  );
};

export default TourCard;
