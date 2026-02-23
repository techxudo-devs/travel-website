"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Instagram, Twitter, Facebook } from "lucide-react";
import FounderModal from "./ui/FounderModal";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* The Outer Wrapper: 
        Provides the padding to make the footer look like a floating card 
      */}
      <div className="px-4 pb-4 pt-12 sm:px-6 lg:px-8">
        {/* The Card Footer:
          Rounded corners, soft shadow, and border to define the shape
        */}
        <footer className="relative bg-gradient-to-tr from-[#F8EFE3] to-[#D0B4B3] rounded-[2.5rem] md:rounded-[3rem] border border-[#e8dccb] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] px-8 py-12 md:px-16 md:py-16 overflow-hidden">
          {/* Subtle Background Accent (Optional luxury touch) */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/40 blur-3xl rounded-full pointer-events-none" />

          {/* Top Section: Grid Layout */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-[#e8dccb] pb-12 mb-8">
            {/* Brand Column */}
            <div className="md:col-span-12 lg:col-span-4 flex flex-col items-start">
              <Link
                href="/"
                className="mb-6 block transition-transform hover:scale-105"
              >
                <Image
                  loading="lazy"
                  src="/logo23.svg"
                  alt="Logo"
                  width={200}
                  height={50}
                  className="object-contain w-48"
                />
              </Link>
              <div className="space-y-1 text-zinc-600 font-medium">
                <p>123 Main Street</p>
                <p>New York, NY 10001</p>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="md:col-span-6 lg:col-span-4">
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#b49a99] mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {["Home", "About Us", "Tours", "Blog", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href={
                          item === "Home"
                            ? "/"
                            : `/${item.toLowerCase().replace(" ", "")}`
                        }
                        className="text-zinc-700 font-medium hover:text-[#b49a99] hover:translate-x-1 transition-all duration-300 inline-block"
                      >
                        {item}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="md:col-span-6 lg:col-span-4">
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#b49a99] mb-6">
                Contact
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:travelgirls@gmail.com"
                    className="text-zinc-700 font-medium hover:text-[#b49a99] transition-colors duration-300 block"
                  >
                    travelgirls@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+1500321852789"
                    className="text-zinc-700 font-medium hover:text-[#b49a99] transition-colors duration-300 block"
                  >
                    +1 500 321 852 789
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section: Socials & Copyright */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-medium text-zinc-500">
            <p className="text-center md:text-left">
              Website Powered by:{" "}
              <a
                href="https://techxudo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-800 font-bold hover:text-[#b49a99] transition-colors"
              >
                Techxudo
              </a>
            </p>

            <div className="flex items-center space-x-3">
              {[
                { Icon: Instagram, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Facebook, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white border border-[#e8dccb] flex items-center justify-center text-zinc-600 hover:bg-[#b49a99] hover:text-white hover:border-[#b49a99] hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>

      {/* --- FLOATING ACTION BUTTONS ---
        Moved outside the footer card to ensure they float cleanly over the whole page.
      */}
      <div className="fixed bottom-6 right-6 z-[999] flex flex-col gap-4 items-center">
        {/* Founder Modal Trigger */}
        <button
          onClick={openModal}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white bg-[#b49a99] shadow-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 overflow-hidden group focus:outline-none focus:ring-4 focus:ring-[#b49a99]/30"
          aria-label="About the Founder"
        >
          <img
            loading="lazy"
            className="w-full h-full object-cover scale-[1.15] group-hover:scale-[1.25] transition-transform duration-500"
            src="/newBlog5.jpg"
            alt="Founder"
          />
        </button>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/yourphonenumber"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-white text-3xl" />
        </a>
      </div>

      <FounderModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

export default Footer;
