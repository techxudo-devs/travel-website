// components/sections/InclusionsSection.jsx

import Image from 'next/image';

// Yeh component tour page me activities aur extras dikhane ke liye hai
export default function Inclusions({
    imageSrc,           // Left side par dikhne wali image
    preHeading,         // Chhota text jaise "8 DAYS OF DISCOVERY"
    includedItems = [], // "This is included" list ka data
    requiredExtras = [],// "Required extras" list ka data
}) {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto">
                <div className="relative grid lg:grid-cols-2 items-center gap-8 bg-second rounded-2xl shadow-2xl">

                    {/* 1. Image Section (Left Side) */}
                    <div className="relative z-10 px-4 lg:px-0 h-[400px] md:h-[500px] lg:h-[600px]">
                        <Image
                            src={imageSrc}
                            alt="Tour Feature Image"
                            layout="fill"
                            objectFit="cover"
                            className=" rounded-l-2xl"
                        />
                    </div>

                    {/* 2. Content Section (Right Side) */}
                    <div className="relative  text-white rounded-2xl min-h-[500px] lg:min-h-[600px] flex items-center p-8 md:p-16">

                        {/* Creative Wavy Shape using SVG */}
                        <div className="absolute top-0 -left-20 h-full w-40 z-0 hidden lg:block">
                            <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 100 600"
                                preserveAspectRatio="none"
                                fill="#307082"
                            >
                                <path d="M100 0 C40 150, 120 300, 50 450 L60 600 L100 600 L100 0 Z" />
                            </svg>
                        </div>

                        {/* Decorative Dashed Line (SVG) */}
                        <div className="absolute bottom-[30%] -left-12 w-24 h-24 z-20 hidden lg:block">
                            <svg width="100%" height="100%" viewBox="0 0 100 100">
                                <path
                                    d="M5,95 C40,70 60,40 95,5"
                                    stroke="white"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeDasharray="4, 4"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>


                        {/* Content Inside */}
                        <div className="relative z-10">
                            {preHeading && (
                                <p className="text-sm font-bold tracking-widest uppercase opacity-80 mb-4">
                                    {preHeading}
                                </p>
                            )}

                            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#D0B4B3] uppercase">
                                This is included:
                            </h2>

                            <ul className="space-y-3">
                                {includedItems.map((item) => (
                                    <li key={item._id || item.name} className="flex items-start">
                                        <span className="mr-3 mt-1 text-cyan-300">•</span>
                                        <span>{item.name}</span>
                                    </li>
                                ))}
                            </ul>

                            {requiredExtras.length > 0 && (
                                <div className="mt-10">
                                    <h3 className="font-semibold text-gray-300 mb-4">
                                        Required extras:
                                    </h3>
                                    <ul className="space-y-2">
                                        {requiredExtras.map((extra) => (
                                            <li key={extra._id || extra.name} className="flex items-start">
                                                <span className="mr-3 mt-1 text-cyan-300">•</span>
                                                <span>{extra.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}