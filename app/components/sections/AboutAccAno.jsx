"use client";

import React, { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// FAQ data array - easy to add, remove, or edit questions
const faqData = [
  {
    question: "Once in a lifetime experience?",
    answer:
      "Tanzania, seeing the animals in their natural habitat gives you goosebumps. It is emotional, powerful, and almost surreal to watch them roaming free where they truly belong.",
  },
  {
    question: "Favorite destination?",
    answer:
      "Thailand, exploring it island by island, from jungle waterfalls to incredible beaches. The nature, the people, the food, one month is not even enough to see all of its beauty.",
  },
  {
    question: "Most stunning beach?",
    answer:
      "Whitsunday Islands, Australia, the light there feels different, like the sun shines just for that place.",
  },
  {
    question: "Place that felt like home?",
    answer:
      "Croatia, I lived there for five months, exploring its islands and falling in love with its sea, its sunsets, and its calm rhythm of life.",
  },
  {
    question: "Most surprising destination?",
    answer:
      "Russia, I never planned to visit, but it completely took me by surprise. It was a trip unlike anything I expected.",
  },
  {
    question: "Destination that changed me?",
    answer:
      "Aruba, it was my first solo trip and the experience that changed everything. The moment I realized I was not scared to be alone anymore, I finally got to see who I really was and started to truly get to know myself.",
  },
  {
    question: "Favorite travel memory?",
    answer:
      "Any moment spent traveling with my family. Those are the memories that always stay closest to my heart.",
  },
];

// Reusable Accordion Item Component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-[#ddc0bf]">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-5 cursor-pointer"
      >
        <span className="text-lg font-medium text-gray-800">{question}</span>
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main FAQ Section Component
const AboutAccAno = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#ffe0df] pt-20 pb-40 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Column: FAQs */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#c2a7a6] uppercase mb-8">
              Questions & Answers
            </h2>
            <div className="space-y-2">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Help Card */}
          <div className="relative rounded-2xl overflow-hidden h-full mt-4 lg:mt-0">
            <Image
              loading="lazy"
              src="/acc.jpg" // 👈 Replace with your image path
              alt="Customer support agent"
              layout="fill"
              objectFit="cover"
              className="object-cover w-full h-[500px]"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
              <h3 className="text-3xl font-bold mb-4">Do you need any help?</h3>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-[#D0B4B3] text-black font-semibold py-3 px-6 rounded-full self-start transition-all duration-300 hover:scale-95"
              >
                Contact Us <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute bottom-0 left-0 right-0 z-30">
                <Image
                    src="/about-bottom.png"
                    alt="Bottom decoration"
                    width={2000}
                    height={500} // give it more height for better proportion
                    className="w-full object-contain" // use contain instead of cover
                />
            </div> */}
    </section>
  );
};

export default AboutAccAno;
