"use client";
import { MapPin, Share2, Edit } from "lucide-react";
import Image from "next/image";

const TourHero = ({ title, location, coverImage, basePrice, currency }) => {
    return (
        <section className="relative h-[60vh] md:h-[97vh] w-full text-white ">
            {/* Background Image */}
            <Image priority src={coverImage} alt={title} layout="fill" objectFit="cover" className="absolute inset-0 w-full h-full" />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

            <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-12 md:pb-20 relative z-10">
                <div className="flex items-center gap-2 text-lg mb-2">
                    <MapPin size={20} />
                    <span>{location}</span>
                </div>
                <h1 className="text-3xl md:text-6xl font-extrabold leading-tight max-w-4xl">{title}</h1>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-6 gap-6">
                    <div>
                        <button className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition">
                            <Share2 size={18} />
                            <span>Share</span>
                        </button>
                    </div>
                    <div className="text-right bg-black/50 p-4 rounded">
                        <p className="text-sm opacity-80">From</p>
                        <p className="text-4xl font-bold">
                            {new Intl.NumberFormat('de-DE', { style: 'currency', currency: currency }).format(basePrice)}
                        </p>
                        <p className="text-sm opacity-80 mb-3">Price Per Person</p>
                        {/* <button className="w-full bg-five text-first font-bold px-6 py-3 rounded hover:bg-opacity-90 transition">
                            Customize it!
                        </button> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TourHero;