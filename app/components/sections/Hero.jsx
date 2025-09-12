"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef(null);

  // Animation variants for the text content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const title = "Your Journey, Redefined";
  const titleWords = title.split(" ");

  return (
    <div ref={heroRef} className="relative min-h-screen w-full text-white">
      <Image
        src="/hero-main.jpg" // Your background image path
        alt="Panoramic view of a stunning travel destination"
        layout="fill"
        objectFit="cover"
        quality={90}
        priority
        className="z-0"
      />
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* 2. Main Content */}

      {/* Hero Girl Image */}
      <div className="absolute  md:bottom-0 left-0 right-0 z-30 flex justify-center p-4">
        <Image
          src="/hero-girl.png"
          alt="Your image description"
          width={400}
          height={50}
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-30 flex justify-center">
        <Image
          src="/hero-bottom.png"
          alt="Your image description"
          width={2000}
          height={200}
          className="object-cover"
        />
      </div>

      <div className="absolute hidden bottom-4 left-4 z-30">
        <Image
          src="/virtuoso.png"
          alt="Virtuoso"
          width={120}
          height={50}
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default HeroSection;
