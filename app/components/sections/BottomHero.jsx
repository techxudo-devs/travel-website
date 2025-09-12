"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { ArrowRight } from "lucide-react";

const BottomHero = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-20 flex flex-col py-20 items-center text-center font-serif justify-center px-4 flex-grow"
      >
        <motion.h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight">
          Adventure Awaits – Book <br /> Your Journey Today
        </motion.h1>

        <motion.p className="mt-4 max-w-xl text-lg text-white/90">
          Step into a world of unforgettable adventures with Travio...
        </motion.p>

        <p className="max-w-xl text-dark">
          Step into a world of unforgettable adventures with Travio. Whether
          you're seeking serene beaches, vibrant cities, or hidden gems, we make
          every journey seamless and extraordinary.
        </p>

        <motion.div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="mailto:info@travio.com"
            className="group flex items-center gap-4  rounded-full bg-second backdrop-blur-sm p-2 pr-5 border border-white/30 transition-all duration-300 hover:bg-white/30"
          >
            <div className="bg-third rounded-full p-2">
              <Mail size={16} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-white/80">Send your query</p>
              <p className="text-[10px] text-light">user@example.com</p>
            </div>
          </a>

          <button className="group flex items-center gap-2 text-white bg-black font-semibold py-2 px-6 rounded-full hover:bg-gray-800 transition-transform duration-300 shadow-lg hover:scale-105">
            <span>Book A Trip</span>
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BottomHero;
