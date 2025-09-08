"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HomeCards = ({
  category,
  title,
  desc,
  btnLink,
  bgColor,
  image,
  imgWidth,
  imgHeight,
  contentColor = "text-white",
  cardBgColor = "bg-light",
  reversed = false,
  cornerTheme = "default",
  imageFirst = false, // new prop to control layout
}) => {
  // [MODIFIED] Store the FULL Tailwind class names
  const cornerThemes = {
    default: {
      color: "bg-dark",
      hoverColor: "group-hover:bg-white",
    },
    card2: {
      color: "bg-card02",
      hoverColor: "group-hover:bg-blue-300",
    },
    card3: {
      color: "bg-card04",
      hoverColor: "group-hover:bg-red-300",
    },
    card4: {
      color: "bg-card01",
      hoverColor: "group-hover:bg-emerald-400",
    },
    purple: {
      color: "bg-purple-500",
      hoverColor: "group-hover:bg-purple-300",
    },
    orange: {
      color: "bg-orange-500",
      hoverColor: "group-hover:bg-orange-300",
    },
  };

  const theme = cornerThemes[cornerTheme] || cornerThemes.default;

  // [MODIFIED] Use the full class names directly
  const getCornerClasses = (isReversed, cornerColorClass, cornerHoverClass) => {
    // Combine the full, static class strings. Tailwind can now "see" them.
    const cornerBg = `${cornerColorClass} ${cornerHoverClass}`;

    if (isReversed) {
      return {
        first: "absolute top-0 left-0 w-16 h-16",
        firstInner: "absolute top-0 left-0 w-12 h-12",
        // The hardcoded group-hover:bg-white is removed to allow the theme's hover color to apply
        firstHorizontal: `absolute top-0 left-0 w-full h-2 z-50 ${cornerBg}`,
        firstVertical: `absolute top-0 left-0 w-2 h-full z-50 ${cornerBg}`,
        second: "absolute bottom-0 right-0 w-16 h-16",
        secondInner: "absolute bottom-0 rounded-2xl right-0 w-12 h-12",
        secondHorizontal: `absolute bottom-0 right-0 w-full h-2 z-50 ${cornerBg}`,
        secondVertical: `absolute bottom-0 right-0 w-2 h-full z-50 ${cornerBg}`,
      };
    }
    // Default: top-right and bottom-left
    return {
      first: "absolute top-0 right-0 w-16 h-16",
      firstInner: "absolute top-0 right-0 w-12 h-12",
      firstHorizontal: `absolute top-0 right-0 w-full h-2 z-50 ${cornerBg}`,
      firstVertical: `absolute top-0 right-0 w-2 h-full z-50 ${cornerBg}`,
      second: "absolute bottom-0 left-0 w-16 h-16",
      secondInner: "absolute bottom-0 rounded-2xl left-0 w-12 h-12",
      secondHorizontal: `absolute bottom-0 left-0 w-full h-2 z-50 ${cornerBg}`,
      secondVertical: `absolute bottom-0 left-0 w-2 h-full z-50 ${cornerBg}`,
    };
  };

  const corners = getCornerClasses(reversed, theme.color, theme.hoverColor);

  // Card component
  const CardComponent = () => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`md:max-w-md lg:max-w-xl max-w-sm ${
        imageFirst ? "md:-translate-x-14" : "md:translate-x-14"
      } translate-x-0`}
    >
      <div
        className={`relative ${cardBgColor} ${bgColor} group z-20 px-4 transition-colors cursor-pointer duration-500 ease-in-out overflow-hidden  py-22`}
      >
        {/* Decorative corner elements */}
        <div className={corners.first}>
          <div className={corners.firstInner}>
            <div className={corners.firstHorizontal}></div>
            <div className={corners.firstVertical}></div>
          </div>
        </div>
        <div className={corners.second}>
          <div className={corners.secondInner}>
            <div className={corners.secondHorizontal}></div>
            <div className={corners.secondVertical}></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative p-4 pb-10">
          {/* Category label */}
          <div className="mb-6">
            <span className="text-primary transition-colors text-dark font-medium duration-300  boucher text-lg uppercase">
              {category}
            </span>
          </div>
          {/* Title */}
          <h2
            className={`boucher md:text-3xl text-dark text-2xl lg:text-5xl  mb-6 leading-tight`}
          >
            {title}
          </h2>
          {/* Description */}
          <p
            className={`text-dark tracking-wide sofia lg:text-lg md:text-md text-sm    mb-6`}
          >
            {desc}
          </p>
          {/* CTA Button */}
          <a
            href={btnLink}
            target="_blank"
            className="bg-dark text-white group border hover:bg-primary  cursor-pointer  font-bold py-2 md:px-8 px-4 rounded-full transition-colors duration-200 uppercase tracking-wide lg:text-sm"
          >
            LEARN MORE
          </a>
        </div>
      </div>
    </motion.div>
  );

  // Image component
  const ImageComponent = () => (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Image
        src={image}
        width={imgWidth}
        height={imgHeight}
        className="lg:max-w-[580px] md:max-w-[480px] max-w-sm"
      />
    </motion.div>
  );

  return (
    <div
      className={`flex md:flex-row flex-col gap-2 items-center justify-center ${
        imageFirst ? "md:flex-row-reverse" : ""
      }`}
    >
      <CardComponent />
      <ImageComponent />
    </div>
  );
};

export default HomeCards;
