"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Instagram,
  Globe,
  Facebook,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    message: "",
    agreeToPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here (e.g., API call)
  };

  return (
    <div className="bg-gradient-to-br from-[#b49a99] to-second text-white min-h-screen flex items-center justify-center font-sans p-8">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-16">
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <div className="relative  mx-auto">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img loading="lazy"
                  src="/contact.avif"
                  alt="Woman walking on a beautiful beach"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -top-8 -left-8 w-80 bg-[#D0B4B3] text-black p-8 rounded-3xl shadow-lg">
                <h2 className="text-3xl uppercase font-extrabold mb-1">
                  Travel Girls<span className="text-white">.</span>
                  <span className="block w-8 h-1 bg-white rounded-full -mt-2 ml-12"></span>
                </h2>
                <p className="text-base font-semibold mt-4 leading-tight text-gray-700">
                  Keep travelling all year round!
                </p>
                <div className="flex items-center space-x-3 mt-6">
                  <a
                    href="#"
                    className="w-9 h-9 bg-[#b49a99] rounded-full flex items-center justify-center text-white font-bold text-xl hover:bg-[#9b8484] transition-colors"
                  >
                    X
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 bg-[#b49a99] rounded-full flex items-center justify-center text-white hover:bg-[#9b8484] transition-colors"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 bg-[#b49a99] rounded-full flex items-center justify-center text-white hover:bg-[#9b8484] transition-colors"
                  >
                    <Globe size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 bg-[#b49a99] rounded-full flex items-center justify-center text-white hover:bg-[#9b8484] transition-colors"
                  >
                    <Facebook size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="text-light text-sm mt-8 md:mt-0 max-w-sm mx-auto">
            <p className="mb-6">© 2025. All rights reserved.</p>
            <div className="flex space-x-6 mb-6">
              <a href="#" className="hover:text-white">
                License
              </a>
              <a href="#" className="hover:text-white">
                Changelog
              </a>
              <a href="#" className="hover:text-white">
                StyleGuide
              </a>
            </div>
            <p>Designed by Flowcub Design</p>
            <p>Powered by Webflow</p>
          </div> */}
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-extrabold uppercase text-[#D0B4B3] mb-3">Let's work together</h1>
          <p className="text-gray-200 font-medium mb-10">
            Drop me a message or reach out directly – I'll get back within a
            day.
          </p>

          <div className="flex space-x-12 mb-10">
            <div className="flex items-center space-x-2">
              <ChevronRight size={20} className="text-[#D0B4B3]" />
              <div>
                <h3 className="font-semibold text-black">Mobile Number</h3>
                <p className="text-light text-sm">+ (38) 0292 7380 9925</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <ChevronRight size={20} className="text-[#D0B4B3]" />
              <div>
                <h3 className="font-semibold text-black">Email Address</h3>
                <p className="text-light text-sm">yourmailaddress@gmail.com</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-black" htmlFor="firstName">
                  First Name*
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full mt-2 p-4 bg-[#b49a99] rounded-full border border-transparent focus:outline-none focus:ring-2 focus:ring-[#D0B4B3] text-black"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-black" htmlFor="lastName">
                  Last Name*
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full mt-2 p-4 bg-[#b49a99] rounded-full border border-transparent focus:outline-none focus:ring-2 focus:ring-[#D0B4B3] text-black"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-black" htmlFor="email">
                Email Address*
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="johndoe@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 p-4 bg-[#b49a99] rounded-full border border-transparent focus:outline-none focus:ring-2 focus:ring-[#D0B4B3] text-black"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-black" htmlFor="contactNumber">
                Contact number*
              </label>
              <input
                type="tel"
                name="contactNumber"
                id="contactNumber"
                placeholder="+971 570 8230"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full mt-2 p-4 bg-[#b49a99] rounded-full border border-transparent focus:outline-none focus:ring-2 focus:ring-[#D0B4B3] text-black"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-black" htmlFor="message">
                Write your Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Hi, I want a Tour Guide"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full mt-2 p-4 bg-[#b49a99] rounded-3xl border border-transparent resize-none focus:outline-none focus:ring-2 focus:ring-[#D0B4B3] text-black"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-auto bg-white text-first font-bold py-3 pl-6 pr-3 rounded-full flex items-center space-x-4 group transition-all duration-300 hover:scale-95 cursor-pointer"
              >
                <span>Send Message</span>
                <div className="bg-black text-white rounded-full p-2 group-hover:bg-gray-800 transition-colors">
                  <ArrowRight size={18} />
                </div>
              </button>
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="agreeToPolicy"
                id="agreeToPolicy"
                checked={formData.agreeToPolicy}
                onChange={handleChange}
                className="h-4 w-4 bg-dark border-gray-600 rounded cursor-pointer"
              />
              <label htmlFor="agreeToPolicy" className="text-xs text-light">
                I have read and accept the Privacy policy, and agree to join.
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
