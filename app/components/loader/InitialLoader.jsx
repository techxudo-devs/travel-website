// src/components/InitialLoader.jsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const InitialLoader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(false), 2000); // 3 seconds
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className={`fixed inset-0 z-[999] bg-radial from-third via-[#D0B4B3]  to-[#D0B4B3] flex items-center justify-center flex-col gap-1
                     ${
                       isVisible ? "h-screen" : "h-0"
                     } transition-all duration-1000 ease-in-out overflow-hidden`}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className=" text-3xl md:text-5xl font-bold tracking-widest text-white"
          >
            Travel Girls Club
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: -30 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-sm md: text-xl  tracking-widest text-white pb-2 uppercase"
          >
            Travel Around The World
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default InitialLoader;
