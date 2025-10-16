import React, { useRef, useEffect } from "react";
import { FaTimes, FaMapMarkerAlt, FaPlane } from "react-icons/fa";
import { gsap } from "gsap";

const FounderModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const modalContentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent background from scrolling
      gsap.set(modalRef.current, { display: "flex" });
      gsap.to(modalRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.inOut",
      });
      gsap.fromTo(
        modalContentRef.current,
        { opacity: 0, scale: 0.95, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
          delay: 0.1,
        }
      );
    } else {
      document.body.style.overflow = "auto"; // Restore background scrolling
    }
  }, [isOpen]);

  const handleClose = () => {
    gsap.to(modalContentRef.current, {
      opacity: 0,
      scale: 0.95,
      y: 20,
      duration: 0.3,
      ease: "power2.in",
    });
    gsap.to(modalRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.set(modalRef.current, { display: "none" });
        onClose();
      },
    });
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [isOpen]);

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 bg-[#43555d]/20 backdrop-blur-sm flex items-start justify-center z-[1000] hidden opacity-0 p-4"
      onClick={handleClose}
    >
      <div
        ref={modalContentRef}
        className="relative bg-gradient-to-br from-[#f8efe3] to-[#f5e6d3] text-[#43555d] rounded-3xl shadow-2xl max-w-6xl w-full mx-auto overflow-hidden flex flex-col max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative SVG Planes */}
        <div
          className="absolute top-4 sm:top-8 left-4 sm:left-8 text-[#D0B4B3]/40 animate-bounce hidden sm:block"
          style={{ animationDuration: "3s" }}
        >
          <FaPlane size={28} className="transform rotate-45" />
        </div>
        <div
          className="absolute bottom-8 sm:bottom-12 right-8 sm:right-12 text-[#a37b64]/40 animate-bounce hidden md:block"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        >
          <FaPlane size={24} className="transform -rotate-12" />
        </div>
        <div className="absolute top-1/3 right-4 sm:right-8 text-[#D0B4B3]/30 hidden lg:block">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
        </div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 text-[#43555d]/60 hover:text-[#43555d] transition-all duration-300 hover:rotate-90 bg-[#D0B4B3]/30 rounded-full p-2 backdrop-blur-sm"
          aria-label="Close modal"
        >
          <FaTimes size={18} />
        </button>

        {/* CONTENT WRAPPER: This new div handles the internal scrolling */}
        <div className="overflow-y-auto custom-scrollbar">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 md:p-8">
            {/* Left Column - Profile & Images */}
            <div className="space-y-4 sm:space-y-6">
              {/* Profile Picture with Decorative Border */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D0B4B3] to-[#a37b64] rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-white to-[#f8efe3] rounded-3xl p-4 sm:p-6 border-2 border-[#D0B4B3]/50 shadow-lg">
                  {/* Decorative Corner SVGs */}
                  <div className="absolute -top-2 -left-2">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path
                        d="M0 15C0 6.71573 6.71573 0 15 0V0C15 8.28427 8.28427 15 0 15V15Z"
                        fill="url(#gradient1)"
                      />
                      <defs>
                        <linearGradient
                          id="gradient1"
                          x1="0"
                          y1="0"
                          x2="15"
                          y2="15"
                        >
                          <stop stopColor="#D0B4B3" />
                          <stop offset="1" stopColor="#a37b64" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 -right-2 transform rotate-180">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path
                        d="M0 15C0 6.71573 6.71573 0 15 0V0C15 8.28427 8.28427 15 0 15V15Z"
                        fill="url(#gradient2)"
                      />
                      <defs>
                        <linearGradient
                          id="gradient2"
                          x1="0"
                          y1="0"
                          x2="15"
                          y2="15"
                        >
                          <stop stopColor="#D0B4B3" />
                          <stop offset="1" stopColor="#a37b64" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 sm:w-40 sm:h-40 rounded-full border-4 border-[#D0B4B3] shadow-2xl overflow-hidden mb-3 sm:mb-4">
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#D0B4B3] to-[#a37b64] text-4xl sm:text-5xl">
                        <img
                          loading="lazy"
                          className="scale-150 object-cover"
                          src="/newBlog5.jpg"
                          alt="Founder"
                        />
                      </div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#a37b64] to-[#D0B4B3] bg-clip-text text-transparent mb-1">
                      Meet Val
                    </h2>
                    <p className="text-[#43555d]/70 text-xs uppercase tracking-wider font-semibold mb-2">
                      Founder & Heart of Travel Girls Club
                    </p>
                    <div className="flex items-center gap-2 text-[#a37b64] text-sm">
                      <FaMapMarkerAlt size={12} />
                      <span>Based in Barcelona</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Journey Cards */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <div className="relative bg-white/60 rounded-xl p-2 sm:p-3 text-center border border-[#D0B4B3]/30 hover:bg-white/80 hover:border-[#D0B4B3]/60 transition-all duration-300 overflow-hidden shadow-md">
                  <div className="absolute top-1 right-1">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle
                        cx="10"
                        cy="10"
                        r="8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-[#D0B4B3]/30"
                      />
                    </svg>
                  </div>
                  <div className="text-xl sm:text-2xl mb-1">🇦🇷</div>
                  <p className="text-xs text-[#43555d]/60 uppercase">Origins</p>
                  <p className="text-xs sm:text-sm font-semibold text-[#a37b64]">
                    Argentina
                  </p>
                </div>
                <div className="relative bg-white/60 rounded-xl p-2 sm:p-3 text-center border border-[#D0B4B3]/30 hover:bg-white/80 hover:border-[#D0B4B3]/60 transition-all duration-300 shadow-md">
                  <div className="text-xl sm:text-2xl mb-1">🌏</div>
                  <p className="text-xs text-[#43555d]/60 uppercase">
                    Adventure
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-[#a37b64]">
                    Australia
                  </p>
                </div>
                <div className="relative bg-white/60 rounded-xl p-2 sm:p-3 text-center border border-[#D0B4B3]/30 hover:bg-white/80 hover:border-[#D0B4B3]/60 transition-all duration-300 shadow-md">
                  <div className="text-xl sm:text-2xl mb-1">🇪🇸</div>
                  <p className="text-xs text-[#43555d]/60 uppercase">Home</p>
                  <p className="text-xs sm:text-sm font-semibold text-[#a37b64]">
                    Barcelona
                  </p>
                </div>
              </div>

              {/* Photo Gallery with SVG Borders */}
              <div>
                <h3 className="text-center text-base sm:text-lg font-semibold mb-3 text-[#a37b64]">
                  Travel Memories
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  <div className="relative aspect-square rounded-xl bg-gradient-to-br from-[#D0B4B3] to-[#c9a8a7] border-2 border-dashed border-[#a37b64]/40 shadow-lg overflow-hidden group">
                    <div className="absolute top-1 right-1 text-white/60">
                      <FaPlane size={12} className="transform rotate-45" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl">
                      <img
                        loading="lazy"
                        className="object-cover object-top"
                        src="/newBlog14.jpg"
                        alt="Memory 1"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                  </div>
                  <div className="relative aspect-square rounded-xl bg-gradient-to-br from-[#a37b64] to-[#8d6855] border-2 border-dashed border-[#D0B4B3]/40 shadow-lg overflow-hidden group">
                    <div className="absolute bottom-1 left-1 text-white/60">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl">
                      <img
                        loading="lazy"
                        className="object-cover object-top"
                        src="/soloBlog3.jpg"
                        alt="Memory 1"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                  </div>
                  <div className="relative aspect-square rounded-xl bg-gradient-to-br from-[#c9a8a7] to-[#D0B4B3] border-2 border-dashed border-[#a37b64]/40 shadow-lg overflow-hidden group">
                    <div className="absolute top-1 left-1 text-white/60">
                      <FaPlane size={12} className="transform -rotate-12" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl">
                      <img
                        loading="lazy"
                        className="object-cover object-top"
                        src="/newBlog15.jpg"
                        alt="Memory 1"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Story Content */}
            <div className="space-y-3 sm:space-y-4 text-sm text-[#43555d] leading-relaxed">
              <p className="text-center italic text-base text-[#a37b64] font-light">
                "A dreamer, traveler, and proud dog mom"
              </p>

              <div className="bg-white/70 rounded-2xl p-3 sm:p-4 backdrop-blur-sm border border-[#D0B4B3]/40 relative overflow-hidden shadow-md">
                <div className="absolute top-2 right-2 text-[#D0B4B3]/20">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
                  </svg>
                </div>
                <p className="mb-3 relative z-10">
                  I was born in Argentina, but deep down I always knew the life
                  that was expected of me as the CEO of my family's company
                  wasn't the life I wanted. I dreamed of living abroad,
                  exploring the world, and creating a life that truly felt like
                  mine.
                </p>
                <p className="mb-3">
                  My first solo trip was to Aruba, and that's where it all
                  began. Not long after, I moved to New York to study, the only
                  way my family would "allow" me to leave the country for a
                  while. A year later, I packed my bags again and moved to
                  Australia.
                </p>
                <p>
                  After that year abroad, I knew I didn't want to return to
                  Argentina, so I asked my dad to sell my car to pay for a
                  master's degree in Spain. A few months later, I arrived in
                  Barcelona, and it's been my home ever since. 💖
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#D0B4B3]/30 to-[#a37b64]/30 rounded-2xl p-3 sm:p-4 border border-[#a37b64]/30 relative shadow-md">
                <div className="absolute bottom-2 left-2 text-[#a37b64]/20 hidden sm:block">
                  <FaPlane size={32} className="transform rotate-12" />
                </div>
                <p className="mb-3">
                  Travel completely changed my life. I used to be very
                  introverted, but traveling gave me confidence, freedom, and
                  allowed me to truly be myself. After years of being a digital
                  nomad and traveling solo, I began craving connection.
                </p>
                <p className="mb-3">
                  I wanted to share these experiences with other women who
                  shared my love for travel.
                </p>
                <p className="text-[#a37b64] font-semibold text-base">
                  What started as my search for one travel girlfriend to go to
                  Thailand with, became the Travel Girls Club. And now I'm here
                  to remind you that you're never truly alone on this journey.
                  You have me, and you have us. ✈️💙
                </p>
              </div>

              <div className="text-center text-xs text-[#43555d]/60 italic pt-2">
                Join our community of adventurous women exploring the world
                together
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(208, 180, 179, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(163, 123, 100, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(163, 123, 100, 0.7);
        }
      `}</style>
    </div>
  );
};

export default FounderModal;
