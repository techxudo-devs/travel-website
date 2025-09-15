// app/components/Tour/PhotoGallery.jsx

"use client";

import { useState } from 'react';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';

// React Slick component aur zaroori CSS files
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Lightbox components
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// --- Custom Arrow Components for React Slick ---
// Yeh arrows slider ko left/right move karne ke liye hain
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow next-arrow `}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        >
            {/* <ChevronRight className="text-dark" /> */}
        </div>
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow prev-arrow`}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        >
            {/* <ChevronLeft className="text-dark" /> */}
        </div>
    );
};


export default function PhotoGallery({ images = [] }) {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const handleImageClick = (imageIndex) => {
        setIndex(imageIndex);
        setOpen(true);
    };

    if (images.length === 0) {
        return null;
    }

    // React Slick ke liye settings object
    const settings = {
        dots: true,
        infinite: images.length > 2, // Loop tabhi karega jab 2 se zyada images ho
        speed: 500,
        slidesToShow: 2, // Badi screen par 2 slides
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 768, // md screens se neeche
                settings: {
                    slidesToShow: 1, // Choti screen par 1 slide
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <>
            <section className="py-16 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-first">Photo gallery</h2>
                        <div className="flex items-center gap-2 px-4 py-2 bg-brown/80 text-white rounded-full text-sm">
                            <Camera size={18} />
                            <span>{images.length} photos</span>
                        </div>
                    </div>

                    {/* React Slick Carousel */}
                    <div className="photo-gallery-slider">
                        <Slider {...settings}>
                            {images.map((url, idx) => (
                                <div key={idx} className="px-3"> {/* Gutter/spacing ke liye padding */}
                                    <div
                                        className="relative w-full aspect-[4/3] rounded overflow-hidden cursor-pointer group shadow-md"
                                        onClick={() => handleImageClick(idx)}
                                    >
                                        <img loading='lazy'
                                            src={url}
                                            alt={`Gallery image ${idx + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>

            {/* Lightbox Component (waisa hi rahega) */}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={images.map(url => ({ src: url }))}
                index={index}
            />
        </>
    );
}