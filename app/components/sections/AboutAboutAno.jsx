import React from 'react';

const AboutAboutAno = () => {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-12">
                {/* Left Content and Features */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <p className="text-[#D0B4B3] text-lg font-semibold mb-2">Our Promise</p>
                    <h2 className="text-4xl font-extrabold text-[#D0B4B3] uppercase leading-tight mb-6">
                        Why Choose Travel Girls
                    </h2>
                    <p className="text-gray-700 text-lg mb-12 max-w-lg mx-auto lg:mx-0">
                        We don't just plan trips—we craft unforgettable experiences. With personalized itineraries, local expertise, and dedicated support, we make every journey seamless, safe, and truly memorable.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Feature 1 */}
                        <div className="flex items-center gap-4 p-6 rounded-xl bg-[#EAF3EF] bg-opacity-70 shadow-sm">
                            <img className='w-14' src="/aboutc1.svg" alt="" />
                            <p className="text-xl font-semibold text-gray-800">Personalized Itineraries</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-center gap-4 p-6 rounded-xl bg-[#F6EFE6] bg-opacity-70 shadow-sm">
                            <img className='w-14' src="/aboutc2.svg" alt="" />
                            <p className="text-xl font-semibold text-gray-800">Unmatched Support</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex items-center gap-4 p-6 rounded-xl bg-[#F6EFE6] bg-opacity-70 shadow-sm">
                            <img className='w-14' src="/aboutc3.svg" alt="" />
                            <p className="text-xl font-semibold text-gray-800">Global Expertisess</p>
                        </div>

                        {/* Feature 4 */}
                        <div className="flex items-center gap-4 p-6 rounded-xl bg-[#EAF3EF] bg-opacity-70 shadow-sm">
                            <img className='w-14' src="/aboutc4.svg" alt="" />
                            <p className="text-xl font-semibold text-gray-800">Memorable Experiences</p>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                    <div className="w-full max-w-lg lg:max-w-none">
                        <img
                            className="rounded-xl shadow-lg object-cover w-full h-auto"
                            src="/about6.jpg"
                            alt="Couple looking at a map on a trip"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutAboutAno;