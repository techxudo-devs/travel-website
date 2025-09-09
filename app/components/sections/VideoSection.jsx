"use client";
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const VideoSection = () => {
  const videoRef = useRef(null);
  const isInView = useInView(videoRef, { once: true, amount: 0.6 });

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play();
    }
  }, [isInView]);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const videoVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 1, 0.5, 1], // A nice ease-out curve
      },
    },
  };

  return (
    <section className="relative flex items-center justify-center w-full h-screen bg-brown">
      {/* Container for the video to manage positioning and animation */}
      <motion.div
        className="w-full h-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }} // Trigger animation when 60% is visible
        variants={sectionVariants}
      >
        <motion.div
          className="relative w-full h-full overflow-hidden"
          variants={videoVariants}
        >
          <video
            ref={videoRef}
            className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
            loop
            muted // Autoplay on most browsers requires the video to be muted
            playsInline // Important for iOS devices
            preload="auto"
          >
            {/* Replace with your video file */}
            <source src="/wildlife.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </motion.div>

      {/* Optional: Add a subtle overlay for text readability */}
      {/* <div className="absolute inset-0 bg-black/30"></div> */}

      {/* Optional: Add text or other content over the video */}
      <div className="relative z-10 text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Discover a New World
        </h2>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          Journeys that Inspire, Moments that Last.
        </p>
      </div>
    </section>
  );
};

export default VideoSection;
