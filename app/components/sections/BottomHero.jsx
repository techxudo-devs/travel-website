"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        scale: 1.7, // zoom effect
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top", // scale until bottom of hero
          scrub: true,
        },
      });
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div
      ref={heroRef}
      className="relative min-h-[200vh] w-full text-white overflow-hidden"
    >
      {/* Background with scaling */}
      <Image loading="lazy"
        ref={bgRef}
        src="/hero-main.jpg"
        alt="Travel destination"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full object-cover z-0 will-change-transform"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Navbar */}
      <div className="relative z-20 flex flex-row items-center justify-between px-10 pt-8">
        <Image loading="lazy"
          src="/logoo.jpeg"
          alt="Logo"
          width={128}
          height={128}
          className="object-contain w-32"
        />

        <div className="flex flex-row items-center gap-6 bg-[#16171A]/70 px-5 py-3 rounded-full text-lg">
          <Link href={"/"} className="px-6 py-2 bg-[#202528]/80 rounded-full cursor-pointer hover:bg-[#D0B4B3] hover:text-black transition-all duration-300">
            Home
          </Link>
          <p>•</p>
          <Link href={"/about"} className="px-6 py-2 bg-[#202528]/80 rounded-full cursor-pointer hover:bg-[#D0B4B3] hover:text-black transition-all duration-300">
            About
          </Link>
          <p>•</p>
          <Link href={"/packages"} className="px-6 py-2 bg-[#202528]/80 rounded-full cursor-pointer hover:bg-[#D0B4B3] hover:text-black transition-all duration-300">
            Packages
          </Link>
          <p>•</p>
          <p className="px-6 py-2 bg-[#202528]/80 rounded-full cursor-pointer hover:bg-[#D0B4B3] hover:text-black transition-all duration-300">
            Pages
          </p>
        </div>

        <Link href={"/contact"} className="bg-white px-8 py-4 rounded-full cursor-pointer hover:scale-95 transition-all duration-300 text-black text-lg hover:bg-[#D0B4B3] flex items-center gap-2">
          <p>Contact Us</p>
          <p><ArrowRight /></p>
        </Link>
      </div>

      {/* Hero Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold leading-tight -mt-20"
        >
          Adventure Awaits – Book <br /> Your Journey Today
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-xl text-xl text-white/90 mt-4"
        >
          Step into a world of unforgettable adventures with Travio. Whether
          you're seeking serene beaches, vibrant cities, or hidden gems, we make
          every journey seamless and extraordinary.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="mailto:info@travio.com"
            className="group flex items-center gap-4 rounded-full bg-[#57809A]/90 backdrop-blur-sm px-6 py-3 transition-all duration-300 hover:bg-[#b89f9e] text-black"
          >
            <div className="bg-[#D0B4B3] hover:bg-[#D0B4B3] transition-all duration-300 rounded-full p-2">
              <Mail size={16} className="text-black" />
            </div>
            <div>
              <p className="text-lg leading-4 text-black transition-all duration-300">Send your query</p>
              <p className="text-sm text-black transition-all duration-300">user@example.com</p>
            </div>
          </a>

          <button className="group flex items-center gap-2 text-black bg-[#D0B4B3] font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:scale-95 text-lg cursor-pointer">
            <span>Book A Trip</span>
            <ArrowRight
              size={20}
              className="transition-all duration-300 group-hover:translate-x-1"
            />
          </button>
        </motion.div>
      </motion.div>

      {/* Girl + Bottom Section */}
      <div className="relative z-30 flex flex-col items-center justify-end min-h-screen -mt-28">
        <Image loading="lazy"
          src="/hero-girl.png"
          alt="Travel girl"
          width={500}
          height={500}
          className="object-contain relative z-30"
        />

        {/* Marquee Background Behind Last Image */}
        <div className="absolute bottom-20 w-full z-20">
          <Marquee
            speed={100}
            gradient={false}
            direction="right"
            className="uppercase font-extrabold text-[60px] md:text-[100px]  tracking-wider"
          >
            We Are &nbsp;{" "}
            <span className="text-[#D0B4B3]">Travel Girls</span>
          </Marquee>
        </div>

        <Image loading="lazy"
          src="/hero-bottom.png"
          alt="Bottom decoration"
          width={1920}
          height={200}
          className="w-full object-cover relative z-40 -mt-20"
        />
      </div>
    </div>
  );
};

export default Hero;
