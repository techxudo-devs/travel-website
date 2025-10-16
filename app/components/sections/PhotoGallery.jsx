// app/components/Tour/PhotoGallery.jsx

"use client";

import { useState } from "react";
import { Camera } from "lucide-react";
import Image from "next/image";

// React Slick component aur zaroori CSS files
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Lightbox components
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Autoplay } from "swiper/modules";

// --- Custom Arrow Components for React Slick ---
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      style={{ ...style }}
      onClick={onClick}
    />
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

  // --- BADLAV YAHAN KIYA GAYA HAI ---
  // React Slick ke liye updated settings
  const settings = {
    dots: false,
    infinite: images.length > 4, // Loop tabhi karega jab 4 se zyada images ho
    speed: 500,
    slidesToShow: 4, // Badi screen par 4 slides dikhayenge
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablet screen (lg)
        settings: {
          slidesToShow: 3, // Tablet par 3 slides
          slidesToScroll: 1,
          infinite: images.length > 3,
        },
      },
      {
        breakpoint: 768, // Mobile screen (md)
        settings: {
          slidesToShow: 2, // Choti screen par 2 slides
          slidesToScroll: 1,
          infinite: images.length > 2,
        },
      },
      {
        breakpoint: 480, // Extra small screens
        settings: {
          slidesToShow: 1, // Bahut choti screen par 1 slide
          slidesToScroll: 1,
          infinite: images.length > 1,
        },
      },
    ],
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
                // --- BADLAV YAHAN KIYA GAYA HAI ---
                <div key={idx} className="px-2">
                  {" "}
                  {/* Gutter/spacing ke liye padding kam kiya */}
                  <div
                    // Height ko fixed kar diya hai (h-56) aur aspect ratio hata diya hai
                    className="relative w-full h-56 rounded-lg overflow-hidden cursor-pointer group shadow-lg"
                    onClick={() => handleImageClick(idx)}
                  >
                    <Image
                      loading="lazy"
                      src={url}
                      alt={`Gallery image ${idx + 1}`}
                      fill // 'fill' poore container ko cover karega
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Performance ke liye
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((url) => ({ src: url }))}
        index={index}
      />
    </>
  );
}
