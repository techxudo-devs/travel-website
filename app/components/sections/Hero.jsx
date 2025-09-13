"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronRight, MailCheck } from "lucide-react";

const Hero = () => {
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
    <div
      ref={heroRef}
      className="relative md:min-h-screen h-[80vh] w-full text-white"
    >
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
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-20 flex flex-col items-center  justify-end translate-y-55 -translate-x-75 px-4 flex-grow"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl max-w-[250px] text-center leading-none font-bold "
        >
          We Are Travel Girls Club
        </motion.h1>
      </motion.div>
      {/* Hero Girl Image */}
      <div className="absolute bottom-0 md:bottom-0 left-0 right-0 z-30 flex justify-center p-4">
        <Image
          src="/hero-girl.png"
          alt="Your image description"
          width={400}
          height={150}
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

export default Hero;
