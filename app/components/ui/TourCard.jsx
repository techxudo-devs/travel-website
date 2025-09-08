import Image from "next/image";
import { motion } from "framer-motion";

const TourCard = ({ tour }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="flex-shrink-0 max-w-3xl bg-dark  rounded-xl overflow-hidden shadow-lg"
    >
      <div className="relative w-full h-56">
        <Image
          src={tour.image}
          alt={tour.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <div className="flex  justify-between text-sm text-white">
          <span>{tour.country}</span>
          <span>{tour.duration}</span>
        </div>
        <h3 className="mt-2 text-xl text-start font-semibold text-white">
          {tour.title}
        </h3>
        <div className="flex items-start mt-2 space-x-2">
          <span className="px-2 py-1 text-sm font-medium text-white bg-green-500 rounded">
            {tour.rating}
          </span>
          <span className="text-sm text-gray-300">
            Wonderful ({tour.reviews})
          </span>
        </div>
        <div className="mt-4 text-2xl text-start font-bold text-white">
          ${tour.price.toLocaleString()}
          <span className="text-base font-normal text-gray-400">
            {" "}
            / per person
          </span>
        </div>
        <button className="w-full px-4 py-2 mt-4 font-semibold text-center text-white transition-colors border border-light rounded-lg hover:bg-light hover:text-dark cursor-pointer">
          Request Callback
        </button>
      </div>
    </motion.div>
  );
};
export default TourCard;
