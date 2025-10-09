import React from 'react';
import Image from 'next/image';
import { Cable, HandFist, UsersRound, BaggageClaim, Telescope, ShieldCheck } from 'lucide-react';

const AboutAboutAno = () => {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-end gap-12">
                {/* Left Content and Features */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <p className="text-[#D0B4B3] text-lg font-semibold mb-2 uppercase">Our Values</p>
                    <h2 className="text-4xl font-extrabold text-[#D0B4B3] uppercase leading-tight mb-6">
                        Why Choose Travel Girls
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg mb-12 max-w-lg mx-auto lg:mx-0">
                        We believe travel is more than ticking destinations off a list. It’s about self-discovery, courage, and the joy of connecting with others who share your spirit of adventure. That’s why we organize group experiences, share helpful travel resources, and create opportunities for women everywhere to explore the world TOGETHER.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Feature 1 */}
                        <div className="flex items-center gap-4 p-6 rounded-xl bg-[#EAF3EF] bg-opacity-70 shadow-sm">
                            {/* <img loading='lazy' className='w-14' src="/aboutc1.svg" alt="" /> */}
                            <p className='bg-blue-100 p-3 rounded-full'><Cable /></p>
                            <p className="font-semibold text-gray-800">Authentic connection between women</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-center gap-4 p-6 rounded-xl bg-[#F6EFE6] bg-opacity-70 shadow-sm">
                            {/* <img loading='lazy' className='w-14' src="/aboutc2.svg" alt="" /> */}
                            <p className='bg-pink-200 p-3 rounded-full'><HandFist /></p>
                            <p className="font-semibold text-gray-800">Women’s empowerment</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex items-center gap-4 p-6 rounded-xl bg-orange-100 bg-opacity-70 shadow-sm">
                            {/* <img loading='lazy' className='w-14' src="/aboutc3.svg" alt="" /> */}
                            <p className='bg-orange-200 p-3 rounded-full'><UsersRound /></p>
                            <p className="font-semibold text-gray-800">Inspiration and community</p>
                        </div>

                        {/* Feature 4 */}
                        <div className="flex items-center gap-4 p-6 rounded-xl bg-green-100 bg-opacity-70 shadow-sm">
                            {/* <img loading='lazy' className='w-14' src="/aboutc4.svg" alt="" /> */}
                            <p className='bg-green-200 p-3 rounded-full'><BaggageClaim /></p>
                            <p className="font-semibold text-gray-800">Purposeful and meaningful travel</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex items-center gap-4 p-6 rounded-xl bg-purple-100 bg-opacity-70 shadow-sm">
                            {/* <img loading='lazy' className='w-14' src="/aboutc1.svg" alt="" /> */}
                            <p className='bg-purple-200 p-3 rounded-full'><Telescope /></p>
                            <p className="font-semibold text-gray-800">Inclusion and respect</p>
                        </div>

                        {/* Feature 4 */}
                        <div className="flex items-center gap-4 p-6 rounded-xl bg-lime-100 bg-opacity-70 shadow-sm">
                            {/* <img loading='lazy' className='w-14' src="/aboutc2.svg" alt="" /> */}
                            <p className='bg-lime-200 p-3 rounded-full'><ShieldCheck /></p>
                            <p className="font-semibold text-gray-800">Safety and trust</p>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2">
                    <div className="w-full max-w-lg lg:max-w-none">
                        <img loading='lazy'
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