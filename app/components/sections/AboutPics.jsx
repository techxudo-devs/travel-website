import React from "react";
import Image from "next/image";
const AboutPics = () => {
  return (
    <section
      className="bg-white pb-10 px-4"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="container mx-auto max-w-5xl">
        <div className="relative flex flex-col items-center gap-24 lg:flex-row lg:justify-center lg:items-center lg:h-[550px]">
          {/* === Image 1: Left === */}
          <div className="lg:absolute lg:left-0 lg:top-12 z-10">
            <div className="transform transition-transform duration-300">
              <div className="relative bg-white p-2 shadow-xl">
                <img
                  src="https://www.theblondeabroad.com/wp-content/uploads/2018/07/The-Blog.jpg"
                  alt="Woman walking on a path surrounded by large palm trees"
                  width={256}
                  height={384}
                  className="w-64"
                />
                {/* Optional overlay behind image */}
                <div className="absolute inset-0 bg-black/10 -z-10 rounded"></div>
              </div>
            </div>
          </div>

          {/* === Image 2: Center === */}
          <div className="lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-20">
            <div className="transform transition-transform duration-300">
              <div className="relative bg-white p-3 shadow-2xl">
                <img
                  src="https://www.theblondeabroad.com/wp-content/uploads/2018/07/IMG_4206.jpg"
                  alt="Bike tire overlooking a winding mountain road"
                  width={384}
                  height={512}
                  className="w-96"
                />
                {/* Overlay behind image */}
                <div className="absolute inset-0 bg-black/10 -z-10 rounded"></div>
                {/* Caption */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-max bg-[#E4C9B5] px-6 py-3 text-center">
                  <p className="text-xs uppercase tracking-widest text-black font-medium">
                    MY BIGGEST ADRENALINE RUSH
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* === Image 3: Right === */}
          <div className="lg:absolute lg:right-0 lg:top-20 z-20">
            <div className="transform lg:rotate-4 transition-transform duration-300">
              <div className="relative bg-white p-3 shadow-xl">
                <img
                  src="https://www.theblondeabroad.com/wp-content/uploads/2018/07/IMG_0193.jpg"
                  alt="Colorful underwater coral reef with fish"
                  width={384}
                  height={512}
                  className="w-96"
                />
                <div className="absolute inset-0 bg-black/10 -z-10 rounded"></div>
                {/* Caption */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-max bg-[#E4C9B5] px-6 py-3 text-center">
                  <p className="text-xs uppercase tracking-widest text-black font-medium">
                    MY HAPPY PLACE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPics;
