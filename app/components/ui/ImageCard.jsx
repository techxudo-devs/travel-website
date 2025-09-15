// components/ui/ImageCard.jsx

"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ImageCard({
    preHeading,
    heading,            // Sirf ek heading prop
    description,
    bulletPoints = [],
    buttonText,
    buttonLink,
    image,
    floatImage,
    alignment = "left", // Alignment prop add kiya gaya
}) {
    // Alignment ke liye logic
    const isTextOnLeft = alignment === 'left';

    // Heading ko do rango me baantne ke liye logic
    const words = heading ? heading.split(' ') : [];
    const headingPart1 = words.slice(0, 3).join(' '); // Pehle 3 shabd
    const headingPart2 = words.slice(3).join(' ');  // Baaki ke shabd

    return (
        <section className="w-full  py-20 px-4 sm:px-8 overflow-hidden">
            <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* Text Section */}
                <div className={`flex flex-col gap-5 text-center lg:text-left items-center lg:items-start ${isTextOnLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                    {preHeading && (
                        <p className="font-semibold text-gray-600 tracking-[0.2em] text-sm">
                            {preHeading}
                        </p>
                    )}

                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                        <span className="text-teal-600 block">{headingPart1}</span>
                        {headingPart2 && (
                            <span className="text-orange-500 block">{headingPart2}</span>
                        )}
                    </h1>

                    <p className="text-lg max-w-lg text-gray-700 leading-relaxed mt-2">
                        {description}
                    </p>

                    {bulletPoints.length > 0 && (
                        <ul className="space-y-3 my-4 text-left">
                            {bulletPoints.map((point, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                                    <span className="text-gray-600">{point}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    <Link href={buttonLink || "#"}>
                        <button
                            className="group mt-4 bg-teal-500 text-white py-3 px-8 rounded-full flex items-center justify-center transition-all duration-300 font-semibold shadow-md hover:bg-teal-600 hover:shadow-lg hover:scale-105"
                        >
                            <span>{buttonText}</span>
                            <ArrowRight
                                size={20}
                                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </button>
                    </Link>
                </div>

                {/* Image Section */}
                <div className={`relative w-full max-w-lg mx-auto h-[500px] ${isTextOnLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                    {/* Decorative Circles */}
                    <div className={`absolute -top-6 w-12 h-12 bg-yellow-400 rounded-full opacity-80 ${isTextOnLeft ? '-left-6' : '-right-6'}`}></div>
                    <div className={`absolute top-20 w-6 h-6 bg-orange-400 rounded-full opacity-80 ${isTextOnLeft ? '-left-10' : '-right-10'}`}></div>

                    {/* Main Image */}
                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                        <Image loading="lazy"
                            src={image}
                            alt={heading}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>

                    {/* Floating Image */}
                    {floatImage && (
                        <div className={`absolute -bottom-12 w-56 h-40 transform -rotate-6 ${isTextOnLeft ? '-right-12' : '-left-12'}`}>
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                                <Image loading="lazy"
                                    src={floatImage}
                                    alt="Floating detail image"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}