import React from 'react';

const AboutHeroAno = () => {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-12">
                {/* Left Content Area */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <p className="text-[#D0B4B3] text-lg font-semibold mb-2">About Us</p>
                    <h1 className="text-4xl font-extrabold text-[#D0B4B3] uppercase leading-tight mb-6">
                        Travel Experts Crafting Unique Experiences
                    </h1>
                    <p className="text-gray-700 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                        Step into a world of unforgettable adventures with Travel Girls. Whether you're seeking serene beaches, vibrant cities, or hidden gems, we make every journey seamless and extraordinary. Your dream destination is just a click away!
                    </p>
                    <button className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-[#D0B4B3] bg-black hover:scale-95 transition-all cursor-pointer duration-300">
                        Contact Us
                        <svg className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                {/* Right Image Grid */}
                <div className="lg:w-1/2 flex justify-center lg:justify-end gap-6">
                    <div className="w-full sm:w-1/2 max-w-xs lg:max-w-none">
                        <img
                            className="rounded-xl shadow-lg object-cover w-full h-auto"
                            src="/about4.jpg"
                            alt="Traveler admiring a fjord landscape"
                        />
                    </div>
                    <div className="w-full sm:w-1/2 max-w-xs lg:max-w-none mt-8 sm:mt-0 lg:mt-12"> {/* Adjusted margin-top for second image */}
                        <img
                            className="rounded-xl shadow-lg object-cover w-full h-auto"
                            src="/about5.jpg"
                            alt="Woman in yellow dress on a tropical island"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHeroAno;