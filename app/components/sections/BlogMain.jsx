"use client";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const BlogMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // disable body scroll when sidebar open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <div className="relative h-screen w-full text-white overflow-hidden">
      {/* Background */}
      <Image
        loading="lazy"
        src="/blog5.jpg"
        alt="About background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full object-cover z-0 will-change-transform"
      />
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* About Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold">Blogs</h1>
      </div>

      {/* Bottom Decoration (fixed to bottom inside h-screen) */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <Image
          loading="lazy"
          src="/about-bottom.png"
          alt="Bottom decoration"
          width={1920}
          height={100}
          className="w-full object-contain" // use contain instead of cover
        />
      </div>
    </div>
  );
};

export default BlogMain;
