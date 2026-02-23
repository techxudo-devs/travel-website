"use client";
import Image from "next/image";
import {
  Instagram,
  Globe,
  Facebook,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

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
  };

  return (
    <div className="bg-[#f8efe3] text-[#a37b64] min-h-screen flex items-center justify-center font-sans p-6 sm:p-8">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-12 lg:gap-16">
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col justify-between relative">
          <div className="relative mx-auto w-full">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <Image
                loading="lazy"
                src="/contact.avif"
                alt="Woman walking on a beautiful beach"
                width={888}
                height={500}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 sm:-bottom-10 -right-4 sm:-right-8 w-64 sm:w-72 md:w-80 bg-[#a37b64] text-[#f8efe3] p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg">
              <h2 className="text-2xl md:text-4xl uppercase font-romie mb-1">
                Travel Girls<span className="text-[#c4c8ba]">.</span>
              </h2>
              <p className="text-sm sm:text-base font-semibold mt-3 sm:mt-4 leading-tight text-[#f8efe3]/80">
                Keep travelling all year round!
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-6">
                <a
                  href="#"
                  className="w-8 h-8 sm:w-9 sm:h-9 bg-[#f8efe3] rounded-full flex items-center justify-center text-[#a37b64] font-bold text-lg hover:bg-[#f8efe3]/80 transition-colors"
                >
                  X
                </a>
                <a
                  href="#"
                  className="w-8 h-8 sm:w-9 sm:h-9 bg-[#f8efe3] rounded-full flex items-center justify-center text-[#a37b64] hover:bg-[#f8efe3]/80 transition-colors"
                >
                  <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 sm:w-9 sm:h-9 bg-[#f8efe3] rounded-full flex items-center justify-center text-[#a37b64] hover:bg-[#f8efe3]/80 transition-colors"
                >
                  <Globe size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 sm:w-9 sm:h-9 bg-[#f8efe3] rounded-full flex items-center justify-center text-[#a37b64] hover:bg-[#f8efe3]/80 transition-colors"
                >
                  <Facebook size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-6xl font-romie  text-[#a37b64] mb-3">
            Let's work together
          </h1>
          <p className="text-[#a37b64]/70 font-medium mb-8 sm:mb-10 text-sm sm:text-base">
            Drop me a message or reach out directly – I'll get back within a
            day.
          </p>

          <div className="flex flex-col sm:flex-row sm:space-x-12 mb-8 sm:mb-10 space-y-4 sm:space-y-0">
            <div className="flex items-start space-x-2">
              <ChevronRight size={18} className="text-[#a37b64]" />
              <div>
                <h3 className="font-semibold text-[#a37b64] text-sm sm:text-base">
                  Mobile Number
                </h3>
                <p className="text-[#a37b64]/70 text-xs sm:text-sm">
                  + (38) 0292 7380 9925
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <ChevronRight size={18} className="text-[#a37b64]" />
              <div>
                <h3 className="font-semibold text-[#a37b64] text-sm sm:text-base">
                  Email Address
                </h3>
                <p className="text-[#a37b64]/70 text-xs sm:text-sm">
                  yourmailaddress@gmail.com
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div>
                <label
                  className="text-xs sm:text-sm font-medium text-[#a37b64]"
                  htmlFor="firstName"
                >
                  First Name*
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 sm:p-4 bg-transparent rounded-full border border-[#a37b64]/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a37b64] focus:border-[#a37b64] text-[#a37b64] text-sm sm:text-base placeholder:text-[#a37b64]/50"
                  required
                />
              </div>
              <div>
                <label
                  className="text-xs sm:text-sm font-medium text-[#a37b64]"
                  htmlFor="lastName"
                >
                  Last Name*
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 sm:p-4 bg-transparent rounded-full border border-[#a37b64]/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a37b64] focus:border-[#a37b64] text-[#a37b64] text-sm sm:text-base placeholder:text-[#a37b64]/50"
                  required
                />
              </div>
            </div>

            <div>
              <label
                className="text-xs sm:text-sm font-medium text-[#a37b64]"
                htmlFor="email"
              >
                Email Address*
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="johndoe@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 p-3 sm:p-4 bg-transparent rounded-full border border-[#a37b64]/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a37b64] focus:border-[#a37b64] text-[#a37b64] text-sm sm:text-base placeholder:text-[#a37b64]/50"
                required
              />
            </div>
            <div>
              <label
                className="text-xs sm:text-sm font-medium text-[#a37b64]"
                htmlFor="contactNumber"
              >
                Contact number*
              </label>
              <input
                type="tel"
                name="contactNumber"
                id="contactNumber"
                placeholder="+971 570 8230"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full mt-2 p-3 sm:p-4 bg-transparent rounded-full border border-[#a37b64]/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a37b64] focus:border-[#a37b64] text-[#a37b64] text-sm sm:text-base placeholder:text-[#a37b64]/50"
                required
              />
            </div>

            <div>
              <label
                className="text-xs sm:text-sm font-medium text-[#a37b64]"
                htmlFor="message"
              >
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
                className="w-full mt-2 p-3 sm:p-4 bg-transparent rounded-2xl sm:rounded-3xl border border-[#a37b64]/50 resize-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a37b64] focus:border-[#a37b64] text-[#a37b64] text-sm sm:text-base placeholder:text-[#a37b64]/50"
              ></textarea>
            </div>

            <div className="flex items-start space-x-3 pt-2">
              <input
                type="checkbox"
                name="agreeToPolicy"
                id="agreeToPolicy"
                checked={formData.agreeToPolicy}
                onChange={handleChange}
                className="h-4 w-4 rounded cursor-pointer mt-0.5 accent-[#a37b64]"
              />
              <label
                htmlFor="agreeToPolicy"
                className="text-xs sm:text-sm text-[#a37b64]/70 leading-snug"
              >
                I have read and accept the Privacy policy, and agree to join.
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-brown  text-white font-bold py-3 px-6 rounded-full flex items-center justify-center sm:justify-start space-x-3 group transition-all duration-300 hover:bg-first active:scale-95 cursor-pointer text-sm sm:text-base"
              >
                <span>Send Message</span>
                <div className="bg-white text-blue-500 rounded-full p-2 group-hover:bg-gray-100 transition-colors">
                  <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
