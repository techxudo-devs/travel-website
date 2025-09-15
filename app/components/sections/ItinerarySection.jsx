"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ItinerarySection = ({ days, visitingLocations }) => {
    const [activeDayIndex, setActiveDayIndex] = useState(0);

    return (
        <section className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-first text-center mb-12">Visiting & Itinerary</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Map & Day Tabs */}
                <div className="lg:col-span-1 space-y-6">
                    {/* <div className="relative h-64 bg-gray-200 rounded overflow-hidden">
                        <img src="/map_placeholder.png" alt="Map of Tuscany" className="w-full h-full object-cover opacity-70" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded shadow hover:bg-white transition">Enlarge map</button>
                        </div>
                    </div> */}

                    {/* Day Tabs */}
                    <div className="space-y-2">
                        {days.map((day, index) => (
                            <button
                                key={day._id}
                                onClick={() => setActiveDayIndex(index)}
                                className={`w-full text-left p-4 rounded transition-all duration-300 flex items-start gap-4 ${activeDayIndex === index ? 'bg-second text-white shadow-lg' : 'bg-fourth hover:bg-semilight/50'}`}
                            >
                                <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full font-bold mt-1 ${activeDayIndex === index ? 'bg-white text-second' : 'bg-second text-white'}`}>
                                    {index + 1}
                                </div>
                                <div>
                                    <p className="font-bold">{`DAY ${day.day}`}</p>
                                    <p className="text-sm">{visitingLocations[index] || `Location for Day ${day.day}`}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Column: Day Content Carousel */}
                <div className="lg:col-span-2 relative min-h-[500px] rounded overflow-hidden shadow-xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeDayIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className="absolute inset-0"
                        >
                            <img src={days[activeDayIndex].image} alt={days[activeDayIndex].heading} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8 text-white">
                                <h3 className="text-3xl font-bold mb-2">{days[activeDayIndex].heading}</h3>
                                <p className="text-md leading-relaxed max-w-2xl">{days[activeDayIndex].description}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default ItinerarySection;