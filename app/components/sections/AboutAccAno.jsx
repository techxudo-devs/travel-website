"use client";

import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// FAQ data array - easy to add, remove, or edit questions
const faqData = [
    {
        question: "How do I book a trip with Travlo?",
        answer: "You can book a trip directly through our website by selecting a package and following the checkout process. You can also contact our travel consultants via phone or email for personalized assistance."
    },
    {
        question: "What if I need to make changes to my booking?",
        answer: "We understand that plans can change. You can request changes to your booking by contacting our support team. Please note that changes are subject to availability and may incur fees depending on the notice period."
    },
    {
        question: "Does Travlo offer support during my trip?",
        answer: "Absolutely! We provide 24/7 on-trip support. You will be given a dedicated contact number to reach our team for any assistance you may need during your travels."
    },
    {
        question: "Are your trips family-friendly?",
        answer: "Yes, we offer a wide range of family-friendly packages. We can also customize itineraries to suit the needs and interests of all family members, including children and elderly travelers."
    },
    {
        question: "How do I know my booking is secure with Travlo?",
        answer: "We use industry-standard SSL encryption to protect your personal and payment information. All bookings are processed through a secure payment gateway for your peace of mind."
    },
    {
        question: "Can I customize my travel itinerary?",
        answer: "Yes, customization is one of our specialties. Our travel experts can work with you to create a bespoke itinerary tailored to your specific interests, budget, and travel style."
    },
];

// Reusable Accordion Item Component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-300">
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
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <p className="pb-5 text-gray-600">
                            {answer}
                        </p>
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
        <section className="relative bg-[#F6EFE6] pt-20 pb-40 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                    {/* Left Column: FAQs */}
                    <div className="lg:col-span-2">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                            Frequently Asked Questions
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
                        <img
                            src="https://cdn.prod.website-files.com/6773bb8ef041a39ae66da8da/677df3417108ec1ebad49038_Faq%20Image.jpg" // 👈 Replace with your image path
                            alt="Customer support agent"
                            width={400}
                            height={600}
                            className="object-cover w-full h-[500px]"
                        />
                        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                            <h3 className="text-3xl font-bold mb-4">
                                Do you need any help?
                            </h3>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center gap-2 bg-[#D1E993] text-black font-semibold py-3 px-6 rounded-full self-start transition-all duration-300 hover:scale-95"
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