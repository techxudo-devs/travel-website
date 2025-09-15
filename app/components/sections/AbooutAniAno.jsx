"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

// GSAP Imports
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const AbooutAniAno = () => {
    const containerRef = useRef(null);
    const statsRef = useRef([]); // To hold refs for each number

    // Data for the stat counters
    const stats = [
        { value: 1200, label: "Happy Traveler", suffix: "+" },
        { value: 1100, label: "Tour Success", suffix: "+" },
        { value: 98, label: "Positive Review", suffix: "%" },
    ];

    useGSAP(() => {
        // Animate each stat number when it scrolls into view
        statsRef.current.forEach((ref, index) => {
            const stat = stats[index];

            // Create a proxy object to animate a numeric value
            const counter = { val: 0 };

            gsap.to(counter, {
                val: stat.value, // Animate to the target value
                duration: 2,     // Animation duration of 2 seconds
                ease: 'power1.inOut',
                // Snap to whole numbers to avoid decimals
                snap: { val: 1 },

                // Use ScrollTrigger to start the animation on scroll
                scrollTrigger: {
                    trigger: ref,
                    start: 'top 85%', // Start when the top of the element is 85% down the viewport
                    toggleActions: 'play none none none', // Play the animation once
                },

                // On each update of the animation, update the text content
                onUpdate: () => {
                    ref.innerText = Math.round(counter.val).toLocaleString() + stat.suffix;
                },
            });
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="bg-[#F3F6F5] py-20 px-4">
            <div className="container mx-auto max-w-6xl">

                {/* Video Player Section */}
                <div className="relative w-full rounded-2xl overflow-hidden cursor-pointer group">
                    <Image loading='lazy'
                        src="/women.jpg" // 👈 Replace with your video thumbnail image
                        alt="Woman taking a photo on a mountain"
                        width={1000}
                        height={600}
                        className="w-full object-cover"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <div className="flex items-center justify-center w-24 h-24 bg-white/30 rounded-full backdrop-blur-sm transition-all duration-300 group-hover:scale-110">
                            <Play size={40} className="text-white fill-white ml-1" />
                        </div>
                    </div>
                </div>

                {/* Text Section */}
                <p className="text-center text-xl md:text-4xl text-gray-900 max-w-5xl mx-auto my-12">
                    Founded with a passion for exploration and a commitment to quality, Travlo was created to provide a seamless, inspiring travel experience for everyone. Over the years, we’ve built a trusted network of local guides.
                </p>

                {/* Animated Stats Section */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-64 h-64 bg-[#b49a99] rounded-full flex flex-col items-center justify-center text-[white]">
                                <span
                                    // Assign a ref to each number span
                                    ref={el => statsRef.current[index] = el}
                                    className="text-5xl font-bold text-[#ffdddc]"
                                >
                                    0{stat.suffix}
                                </span>
                                <div className="w-1/2 h-px bg-white/40 my-2"></div>
                                <p className="text-[white/80]">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AbooutAniAno;