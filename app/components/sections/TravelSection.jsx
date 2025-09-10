import React from "react";
import { ArrowRight } from "lucide-react";

const TravelInfoSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background with organic shapes */}
      <div className="absolute inset-0">
        {/* Main background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-amber-50 to-orange-100"></div>

        {/* Organic shape - bottom left */}

        {/* Organic shape - top right */}
        <div className="absolute -top-32 -right-32 w-80 h-80">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <path
              d="M200,0 Q350,50 400,200 Q350,350 200,400 Q50,350 0,200 Q50,50 200,0"
              fill="#c4a484"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Decorative dotted pattern */}
        <div className="absolute top-20 left-1/4 w-64 h-32 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 200 100">
            <defs>
              <pattern
                id="dots"
                patternUnits="userSpaceOnUse"
                width="20"
                height="20"
              >
                <circle cx="10" cy="10" r="1.5" fill="#8b4513" />
              </pattern>
            </defs>
            <rect width="200" height="100" fill="url(#dots)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold tracking-[0.3em] text-stone-600 uppercase mb-4">
                GETTING HERE
              </p>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                How to travel
                <br />
                <span className="text-amber-700">to Socotra</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Traveling to Socotra requires careful planning due to its remote
                location in the Indian Ocean and limited accessibility from the
                continent.
              </p>

              <p className="text-lg">
                We at Traveling Socotra provide you with all the necessary
                information and we will help you book your flights and arrange
                your visa for Socotra. Everything you need to ensure a smooth
                journey to this extraordinary destination.
              </p>
            </div>

            <button className="group inline-flex items-center bg-gray-900 text-white font-semibold py-4 px-8 rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Read more
              <ArrowRight
                size={20}
                className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Right Images */}
          <div className="relative">
            {/* Main large image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2574&auto=format&fit=crop"
                alt="Aerial view of Socotra landscape with winding river and dragon blood trees"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating passport image */}
            <div className="absolute -bottom-8 -right-8 w-48 h-32 rounded-2xl overflow-hidden shadow-xl rotate-12 hover:rotate-6 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2670&auto=format&fit=crop"
                alt="Passport with travel stamps"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-amber-400 rounded-full opacity-60"></div>
            <div className="absolute top-1/4 -left-8 w-4 h-4 bg-orange-400 rounded-full opacity-40"></div>
            <div className="absolute -bottom-4 left-1/4 w-6 h-6 bg-stone-400 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>

      {/* Bottom organic wave */}
    </section>
  );
};

export default TravelInfoSection;
