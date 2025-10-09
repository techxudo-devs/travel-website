import React from 'react';

const AboutTravels = () => {
    return (
        // Main Section Container
        // Section ka main container
        <section className="bg-[#FFFFFF] pt-16 pb-80 px-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <div className="container mx-auto max-w-6xl flex flex-col items-center">

                {/* --- Top Text Description --- */}
                <p className="max-w-2xl text-center text-gray-500 leading-relaxed text-[14px] mb-20 px-4">
                    Since embarking on that first solo trip, I’ve spent the past decade sharing my personal journeys and travel tips to inspire both men and women around the world. I have traveled to over 70 countries, lived in Cape Town, South Africa, and have settled down in California—and I'm SO happy to be home! <a href="#" className="font-semibold text-[#D6BFA8] underline">READ FULL STORY</a>
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
                            <h2 className="text-center text-4xl text-[#b9987b] mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
                                FAVORITE DESTINATIONS FOR:
                            </h2>

                            {/* Grid for categories */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 text-gray-600 text-[13px]">

                                {/* A single category item */}
                                <div className="space-y-1">
                                    {/* UPDATED FONT: Using italic Playfair Display for a more elegant, accurate look */}
                                    {/* BEHTAR FONT: Title ke liye italic Playfair Display font istemal kiya hai taake design se match kare */}
                                    <h3 className="text-2xl text-[#bca084] text-center mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Water</h3>
                                    <ul className="list-none space-y-1 leading-relaxed uppercase text-center tracking-wider">
                                        <li>SOUTH AFRICA, BOLIVIA, ICELAND</li>
                                        <li>NAMIBIA, VIETNAM, NEW</li>
                                        <li>ZEALAND, HAWAII</li>
                                    </ul>
                                </div>

                                <div className="space-y-1">
                                    <h3 className="text-2xl text-[#bca084] text-center mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Wildlife</h3>
                                    <ul className="list-none space-y-1 leading-relaxed uppercase text-center tracking-wider">
                                        <li>THE GALAPAGOS, KENYA, SRI</li>
                                        <li>LANKA, COSTA RICA, UGANDA,</li>
                                        <li>BOTSWANA</li>
                                    </ul>
                                </div>

                                <div className="space-y-1">
                                    <h3 className="text-2xl text-[#bca084] text-center mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Beaches</h3>
                                    <ul className="list-none space-y-1 leading-relaxed uppercase text-center tracking-wider">
                                        <li>SEYCHELLES, BRITISH VIRGIN</li>
                                        <li>ISLANDS, CALIFORNIA, GREECE</li>
                                        <li>COSTA RICA, FRENCH POLYNESIA</li>
                                        <li>MALDIVES, HAWAII, INDONESIA</li>
                                    </ul>
                                </div>

                                <div className="space-y-1">
                                    <h3 className="text-2xl text-[#bca084] text-center mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Sailing & Cruising</h3>
                                    <ul className="list-none space-y-1 leading-relaxed uppercase text-center tracking-wider">
                                        <li>CROATIA, ITALY, GREECE, THE</li>
                                        <li>CARIBBEAN, SEYCHELLES</li>
                                        <li>SARDINIA, CORSICA, EUROPEAN</li>
                                        <li>RIVER CRUISE</li>
                                    </ul>
                                </div>

                                <div className="space-y-1">
                                    <h3 className="text-2xl text-[#bca084] text-center mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Photography</h3>
                                    <ul className="list-none space-y-1 leading-relaxed uppercase text-center tracking-wider">
                                        <li>ICELAND, BOLIVIA, MOROCCO,</li>
                                        <li>INDONESIA, JORDAN, SOUTH</li>
                                        <li>AFRICA, FRANCE, CANADA, ITALY</li>
                                    </ul>
                                </div>

                                <div className="space-y-1">
                                    <h3 className="text-2xl text-[#bca084] text-center mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Scuba Diving</h3>
                                    <ul className="list-none space-y-1 leading-relaxed uppercase text-center tracking-wider">
                                        <li>INDONESIA, MEXICO, MALDIVES,</li>
                                        <li>BELIZE, PANAMA, JORDAN</li>
                                    </ul>
                                </div>

                                <div className="space-y-1">
                                    <h3 className="text-2xl text-[#bca084] text-center mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Luxury</h3>
                                    <ul className="list-none space-y-1 leading-relaxed uppercase text-center tracking-wider">
                                        <li>SEYCHELLES, MALDIVES,</li>
                                        <li>SINGAPORE, GREECE, AFRICAN</li>
                                        <li>SAFARI, FRENCH RIVIERA, AMALFI</li>
                                        <li>COAST, MOROCCO</li>
                                    </ul>
                                </div>

                                <div className="space-y-1">
                                    <h3 className="text-2xl text-[#bca084] text-center mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Skiing / Snowboarding</h3>
                                    <ul className="list-none space-y-1 leading-relaxed uppercase text-center tracking-wider">
                                        <li>WHISTLER, MONT TREMBLANT,</li>
                                        <li>AUSTRIA, PARK CITY, UTAH,</li>
                                        <li>SWITZERLAND</li>
                                    </ul>
                                </div>

                            </div>

                            {/* Decorative "RB" stamp - Positioned relative to the parent box */}
                            {/* Sajawati "RB" stamp - Isay parent box ke hisab se position kiya gaya hai */}
                            <img src="https://www.theblondeabroad.com/wp-content/themes/tba/images/Favorite-Destinations.png" alt="Decorative RB stamp" className="absolute -bottom-16 right-4 w-36 h-36 opacity-70 z-30 transform" />
                        </div>

                        {/* === RIGHT COLUMN IMAGES === */}
                        {/* On large screens, this is a container for the two absolutely positioned images. On mobile, it's a simple flex column */}
                        {/* Barri screens par, yeh 2 tasveeron ke liye container hai. Mobile par, yeh ek saada flex column hai. */}
                        <div className="w-full lg:w-[35%] lg:absolute lg:top-[-4rem] lg:right-20 flex flex-col items-center lg:items-end gap-8 mt-12 lg:mt-0">

                            {/* Safari Image */}
                            <div className="relative w-full max-w-sm transform shadow-2xl transition-transform duration-300 z-20">
                                <img src="https://www.theblondeabroad.com/wp-content/uploads/2018/07/Adventure-Awaits-About.jpg" alt="Woman on safari" className="w-full h-auto" />
                                <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-80 p-3 text-center">
                                    <p className="text-gray-700 text-xs font-semibold uppercase tracking-wider">ADVENTURE AWAITS. START HERE ▸</p>
                                    <div className="mt-1 w-8 h-px bg-[#b9987b] mx-auto"></div>
                                </div>
                            </div>

                            {/* Travel Outfits Section */}
                            <div className="relative w-full max-w-[280px] sm:max-w-xs bg-white p-2 shadow-xl transform transition-transform duration-300 z-20 translate-x-14">
                                <img src="https://www.theblondeabroad.com/wp-content/uploads/2018/07/Travel-Style.jpg" alt="Travel outfits" className="w-full h-auto" />
                                {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div> */}
                            </div>
                        </div>

                    </div>

                    {/* Overlaying "Remote Place" Image at the bottom left - positioned relative to the entire section */}
                    {/* "Remote Place" wali tasveer - Isay poore section ke hisab se position kiya gaya hai */}
                    <div className="absolute -bottom-24 left-0 sm:left-12 lg:left-20 w-96 h-auto shadow-xl transform -rotate-6 z-20 transition-transform duration-300 mt-8 lg:mt-0 translate-y-40">
                        <div className="relative bg-white p-2 pb-3">
                            <img src="https://www.theblondeabroad.com/wp-content/uploads/2018/07/DSCF7203.jpg" alt="The Most Remote Place I've Been" className="w-full h-auto" />
                            <p className="absolute bottom-4 left-0 right-0 text-center text-black bg-[#D6BFA8] text-sm w-fit mx-auto px-2 py-1 font-semibold uppercase tracking-wide">
                                THE MOST REMOTE PLACE I'VE BEEN
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutTravels;