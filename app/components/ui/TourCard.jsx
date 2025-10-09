import Image from "next/image";
import Link from "next/link";

const TourCard = ({ tour }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm  transition-shadow duration-300 border border-gray-100">
      {/* Image Container */}
      <div className="relative w-full h-64 overflow-hidden bg-gray-100">
        <Image
          src={tour.image}
          alt={tour.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 "
        />

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

        {/* Badges */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start gap-2">
          <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-lg shadow-sm">
            {tour.country}
          </span>
          <span className="px-3 py-1.5 bg-[#D0B4B3]/95 backdrop-blur-sm text-white text-xs font-semibold rounded-lg shadow-sm">
            {tour.duration}
          </span>
        </div>

        {/* Rating Badge */}
        <div className="absolute bottom-4 right-4">
          <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm">
            <svg
              className="w-4 h-4 text-yellow-500 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.612-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-gray-900 text-sm font-semibold">
              {tour.rating}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 leading-snug line-clamp-2 min-h-[3.5rem]">
          {tour.title}
        </h3>

        {/* Reviews */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(tour.rating)
                    ? "text-yellow-500"
                    : "text-gray-200"
                } fill-current`}
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.612-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-500 font-medium">
            {tour.reviews}
          </span>
        </div>

        {/* Price */}
        <div className="pt-2 border-t border-gray-100">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-gray-900">
              ${tour.price.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500">/ person</span>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href={`/tour/${tour.id}`}
          className="block w-full bg-gray-900 hover:bg-[#D0B4B3] text-white text-center font-semibold py-3 rounded-xl transition-colors duration-300"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default TourCard;
