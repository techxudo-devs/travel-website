// app/components/Tour/ActivitiesExtrasSection.jsx
"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { FaHiking } from "react-icons/fa";

// Chhota, reusable card component har item ke liye
const FeatureCard = ({ name, icon }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex-shrink-0 bg-five/10 p-3 rounded-full text-five">
        {icon}
      </div>
      <p className="font-semibold text-first">{name}</p>
    </div>
  );
};

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ActivitiesExtrasSection({
  activities = [],
  extras = [],
}) {
  if (activities.length === 0 && extras.length === 0) {
    return null; // Agar dono lists khaali hain to section na dikhayein
  }

  return (
    <motion.section
      className="py-20 bg-fourth"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl font-bold text-first">
            Activities & Experiences
          </h2>
          <p className="mt-2 text-lg text-dark max-w-2xl mx-auto">
            Here's a glimpse of the thrilling activities included and optional
            extras to enhance your journey.
          </p>
          <div className="w-24 h-1 bg-five mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Activities Column */}
          {activities.length > 0 && (
            <motion.div variants={sectionVariants}>
              <h3 className="text-2xl font-bold text-second mb-6">
                Activities Included
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activities.map((activity) => (
                  <motion.div key={activity._id} variants={itemVariants}>
                    <FeatureCard
                      name={activity.name}
                      icon={<FaHiking size={24} />}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Extras Column */}
          {extras.length > 0 && (
            <motion.div variants={sectionVariants}>
              <h3 className="text-2xl font-bold text-brown mb-6">
                Optional Extras
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {extras.map((extra) => (
                  <motion.div key={extra._id} variants={itemVariants}>
                    <FeatureCard name={extra.name} icon={<Star size={24} />} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
