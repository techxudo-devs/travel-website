"use client";
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const VideoSection = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null); // Ref for the whole section to trigger animations
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });

  useEffect(() => {
    // Play video when the section is in view
    if (isInView && videoRef.current) {
      videoRef.current.play();
    }
  }, [isInView]);

  // Animation variant for the video container (fade in + scale)
  const videoVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 1, 0.5, 1], // A smooth ease-out curve
      },
    },
  };

  // Animation variant for the text container (staggered children)
  const textContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.3, // Start text animation after video starts appearing
        staggerChildren: 0.2, // Animate each line of text one after the other
      },
    },
  };

  // Animation variant for each individual text element (fade up)
  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    // Section is full-width and 80% of viewport height. `overflow-hidden` is important.
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center w-full h-[80vh] bg-black overflow-hidden"
    >
      {/* Video with animation */}
      <motion.div
        className="absolute inset-0 z-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={videoVariants}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/wildlife.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 z-10 bg-black/40"></div>

      {/* Centered text container with its own animation */}
      <motion.div
        className="relative z-20 text-center text-white px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={textContainerVariants}
      >
        <motion.h2
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-lg"
          variants={textItemVariants}
        >
          Discover a New World
        </motion.h2>
        <motion.p
          className="mt-4 text-lg leading-8 text-gray-200 max-w-2xl mx-auto drop-shadow-md"
          variants={textItemVariants}
        >
          Journeys that Inspire, Moments that Last.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default VideoSection;
