import React from "react";
import Image from "next/image";

const AboutTravels = () => {
  return (
    // Main Section Container
    // Section ka main container
    <section
      className="bg-[#FFFFFF] pt-40 pb-80 px-4"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="container mx-auto max-w-6xl flex flex-col items-center">
        {/* --- Top Text Description --- */}
        <p className="max-w-2xl text-center text-gray-500 leading-relaxed text-[14px] mb-20 px-4">
          Since embarking on that first solo trip, I’ve spent the past decade
          sharing my personal journeys and travel tips to inspire both men and
          women around the world. I have traveled to over 70 countries, lived in
          Cape Town, South Africa, and have settled down in California—and I'm
          SO happy to be home!{" "}
          <a href="#" className="font-semibold text-[#D6BFA8] underline">
            READ FULL STORY
          </a>
        </p>

        {/* --- Main Content Area --- */}
        {/* A relative container to allow absolute positioning of child elements, especially on large screens */}
        {/* Yeh ek relative container hai jo barri screens par child elements (tasveeron) ko aapas mein theek se position karne dega */}
        <div className="relative w-full">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            {/* === LEFT BOX: Favorite Destinations List === */}
            {/* Positioned to the left and given a z-index to control layering */}
            {/* Isay bayein taraf rakha gaya hai aur layering control karne ke liye z-index diya gaya hai */}
            <div className="w-full lg:w-[65%] relative bg-[#f2eadf] p-8 sm:p-12 lg:p-14 shadow-md z-10">
              {/* "Favorite Destinations For" Title */}
              <h2
                className="text-center text-4xl uppercase text-[#b9987b] mb-12"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Frequently Asked Questions
              </h2>

              {/* Grid for categories */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 text-gray-600 text-[13px]">
                {/* A single category item */}
                <div className="space-y-1">
                  {/* UPDATED FONT: Using italic Playfair Display for a more elegant, accurate look */}
                  {/* BEHTAR FONT: Title ke liye italic Playfair Display font istemal kiya hai taake design se match kare */}
                  <h3
                    className="text-2xl text-[#bca084] text-center mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Once in a lifetime experience?
                  </h3>
                  <p
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-center sm:text-base text-sm"
                  >
                    Tanzania, seeing the animals in their natural habitat gives
                    you goosebumps. It is emotional, powerful, and almost
                    surreal to watch them roaming free where they truly belong.
                  </p>
                </div>

                <div className="space-y-1">
                  <h3
                    className="text-2xl text-[#bca084] text-center mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Favorite destination?
                  </h3>
                  <p
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-center sm:text-base text-sm"
                  >
                    Thailand, exploring it island by island, from jungle
                    waterfalls to incredible beaches. The nature, the people,
                    the food, one month is not even enough to see all of its
                    beauty.
                  </p>
                </div>

                <div className="space-y-1">
                  <h3
                    className="text-2xl text-[#bca084] text-center mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Most stunning beach?
                  </h3>
                  <p
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-center sm:text-base text-sm"
                  >
                    Whitsunday Islands, Australia, the light there feels
                    different, like the sun shines just for that place.
                  </p>
                </div>

                <div className="space-y-1">
                  <h3
                    className="text-2xl text-[#bca084] text-center mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Place that felt like home?
                  </h3>
                  <p
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-center sm:text-base text-sm"
                  >
                    Croatia, I lived there for five months, exploring its
                    islands and falling in love with its sea, its sunsets, and
                    its calm rhythm of life.
                  </p>
                </div>

                <div className="space-y-1">
                  <h3
                    className="text-2xl text-[#bca084] text-center mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Most surprising destination?
                  </h3>
                  <p
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-center sm:text-base text-sm"
                  >
                    Russia, I never planned to visit, but it completely took me
                    by surprise. It was a trip unlike anything I expected.
                  </p>
                </div>

                <div className="space-y-1">
                  <h3
                    className="text-2xl text-[#bca084] text-center mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Destination that changed me?
                  </h3>
                  <p
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-center sm:text-base text-sm"
                  >
                    Aruba, it was my first solo trip and the experience that
                    changed everything. The moment I realized I was not scared
                    to be alone anymore.
                  </p>
                </div>

                <div className="space-y-1">
                  <h3
                    className="text-2xl text-[#bca084] text-center mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Favorite travel memory?
                  </h3>
                  <p
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-center sm:text-base text-sm"
                  >
                    Any moment spent traveling with my family. Those are the
                    memories that always stay closest to my heart.
                  </p>
                </div>

                <div className="space-y-1">
                  <h3
                    className="text-2xl text-[#bca084] text-center mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Most peaceful destination?
                  </h3>
                  <p
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-center sm:text-base text-sm"
                  >
                    Europe, especially Switzerland. Surrounded by greenry,
                    temples, and the gentle sound of nature — it’s the kind of
                    place where your mind finally slows down.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[35%] lg:absolute lg:top-[-4rem] lg:right-16 flex flex-col items-center lg:items-end gap-8 mt-12 lg:mt-0">
              {/* Safari Image */}
              <div className="relative w-full max-w-sm transform shadow-2xl transition-transform duration-300 z-20">
                <img
                  loading="lazy"
                  src="/newBlog3.jpg"
                  alt="Woman on safari"
                  width={384}
                  height={500}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-80 p-3 text-center">
                  <p className="text-gray-700 text-xs font-semibold uppercase tracking-wider">
                    ADVENTURE AWAITS. START HERE ▸
                  </p>
                  <div className="mt-1 w-8 h-px bg-[#b9987b] mx-auto"></div>
                </div>
              </div>

              {/* Travel Outfits Section */}
              <div className="relative w-full max-w-[280px] sm:max-w-xs bg-white p-2 shadow-xl transform transition-transform duration-300 z-20 translate-x-14">
                <img
                  loading="lazy"
                  src="/soloBlog2.jpg"
                  alt="Travel outfits"
                  width={320}
                  height={400}
                  className="w-full h-auto"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div> */}
              </div>
            </div>
          </div>

          {/* Overlaying "Remote Place" Image at the bottom left - positioned relative to the entire section */}
          {/* "Remote Place" wali tasveer - Isay poore section ke hisab se position kiya gaya hai */}
          <div className="absolute -bottom-24 left-0 sm:left-12 lg:left-20 w-96 h-auto shadow-xl transform -rotate-6 z-20 transition-transform duration-300 mt-8 lg:mt-0 translate-y-40">
            <div className="relative bg-white p-2 pb-3">
              <img
                loading="lazy"
                src="/soloBlog3.jpg"
                alt="The Most Remote Place I've Been"
                className="w-full h-72 object-cover"
              />
              <p className="absolute bottom-4 left-0 right-0 text-center text-black bg-[#D6BFA8] text-sm w-fit mx-auto px-4 py-1 font-semibold uppercase tracking-wide">
                THE MOST PLACE I'VE BEEN
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTravels;
