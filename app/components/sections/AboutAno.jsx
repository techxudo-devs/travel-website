"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const AboutAno = () => {
    return (
        <div className="relative h-screen w-full text-white overflow-hidden">
            {/* Background */}
            <Image
                src="/about-main.jpg"
                alt="About background"
                fill
                priority
                quality={90}
                className="object-cover z-0"
            />
            <div className="absolute inset-0 bg-black/70 z-10" />

            {/* Navbar */}
            <div className="relative flex flex-row items-center justify-between px-10 pt-8 z-50">
                <Image
                    src="/logoo.jpeg"
                    alt="Logo"
                    width={120}
                    height={120}
                    className="object-contain"
                />

                <div className="flex flex-row items-center gap-6 bg-[#494C4F] px-5 py-3 rounded-full text-lg">
                    <Link
                        href={"/"}
                        className="px-6 py-2 bg-[#3A3E45] rounded-full cursor-pointer hover:bg-[#D0B4B3] hover:text-black transition-all duration-300"
                    >
                        Home
                    </Link>
                    <p>•</p>
                    <Link
                        href={"/about"}
                        className="px-6 py-2 bg-[#3A3E45] rounded-full cursor-pointer hover:bg-[#D0B4B3] hover:text-black transition-all duration-300"
                    >
                        About
                    </Link>
                    <p>•</p>
                    <p className="px-6 py-2 bg-[#3A3E45] rounded-full cursor-pointer hover:bg-[#D0B4B3] hover:text-black transition-all duration-300">
                        Packages
                    </p>
                    <p>•</p>
                    <p className="px-6 py-2 bg-[#3A3E45] rounded-full cursor-pointer hover:bg-[#D0B4B3] hover:text-black transition-all duration-300">
                        Pages
                    </p>
                </div>

                <Link href={"/contact"} className="bg-white px-8 py-4 rounded-full cursor-pointer hover:scale-95 transition-all duration-300 text-black text-lg hover:bg-[#D0B4B3] flex items-center gap-2">
                    <p>Contact Us</p>
                    <p>
                        <ArrowRight />
                    </p>
                </Link>
            </div>

            {/* About Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center -mt-24">
                <h1 className="text-5xl md:text-7xl font-bold">About Us</h1>
            </div>

            {/* Bottom Decoration (fixed to bottom inside h-screen) */}
            <div className="absolute bottom-0 left-0 right-0 z-30">
                <Image
                    src="/about-bottom.png"
                    alt="Bottom decoration"
                    width={2000}
                    height={500} // give it more height for better proportion
                    className="w-full object-contain" // use contain instead of cover
                />
            </div>
        </div>
    );
};

export default AboutAno;
