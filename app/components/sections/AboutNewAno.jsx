import React from "react";
import Image from "next/image";
import { GiWorld } from "react-icons/gi";
import { FaRoute, FaMapMarkerAlt, FaCaretUp } from "react-icons/fa";

const AboutNewAno = () => {
  return (
    <section className="relative bg-white py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="flex flex-col space-y-8">
            <div>
              <span className="text-sm font-bold text-[#D0B4B3] uppercase tracking-widest">
                The Beginning
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#D0B4B3] uppercase mt-2">
                What started in January 2022
              </h2>
            </div>

            <div className="text-gray-600 space-y-4">
              <p>
                Our founder <strong>Valeria Rivas Baccega</strong> was a solo
                traveler and digital nomad who had spent years exploring the
                world on her own. But one day, she realized she wanted something
                more
              </p>
              <p>
                What started as an attempt not to travel alone in January 2022
                soon turned into a global community that connects, inspires, and
                supports women travelers.
              </p>
              <p>
                Today, Travel Girls Club brings together thousands of women from
                around the world. It’s a place where strangers become lifelong
                friends, solo dreams transform into shared adventures, and every
                woman feels empowered to discover the world in her own way, but
                never alone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
                {/* --- Replace with your image path --- */}
                <Image
                  loading="lazy"
                  src="/about1.webp"
                  alt="Couple taking a selfie while hiking"
                  className="w-full h-full object-cover"
                  width={300}
                  height={300}
                />
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <GiWorld className="text-3xl sm:text-4xl text-gray-800" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl text-[#D0B4B3] uppercase">
                      Trusted Guide
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Your reliable companion for every step of the journey.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <FaRoute className="text-3xl sm:text-4xl text-gray-800" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl text-[#D0B4B3] uppercase">
                      Personalized Trips
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Tailored travel experiences designed just for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button className="bg-[#D0B4B3] text-black font-bold py-3 px-8 rounded-md hover:scale-95 transition-all duration-300 shadow-md cursor-pointer sm:text-base text-sm">
                MORE ABOUT US
              </button>
            </div>
          </div>

          {/* Right Column (Video and Suitcase) */}
          {/* This section is hidden on screens smaller than lg (1024px) for better mobile experience */}
          <div className="relative w-full h-[600px] hidden lg:flex items-center justify-center">
            <div className="absolute w-[400px] h-[550px] rounded-2xl overflow-hidden shadow-2xl right-0">
              {/* --- Replace with your video path --- */}
              <video
                className="w-full h-full object-cover"
                src="/about3.mp4"
                autoPlay
                loop
                muted
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="absolute top-1/2 left-[0%] transform -translate-y-1/2 -rotate-[5deg] w-[300px] h-auto z-10">
              {/* --- Replace with your image path --- */}
              <Image
                loading="lazy"
                src="/about2.webp"
                alt="Open suitcase for travel"
                className="drop-shadow-2xl"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNewAno;
