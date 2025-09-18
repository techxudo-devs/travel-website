import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// Note: Replace these image URLs with the actual images from your project.
// I have used placeholders that resemble the images in the screenshot.
const blogPosts = [
  {
    image:
      "/blog1.png", // Replace with your actual image URL
    title: "collection update: Our efforts in 2024",
  },
  {
    image:
      "/blog2.jpg", // Replace with your actual image URL
    title: "10 places to visit on Tanzania",
  },
  {
    image:
      "/blog3.jpg", // Replace with your actual image URL
    title: "Where is Tanzania located?",
  },
  {
    image:
      "/blog4.jpg", // Replace with your actual image URL
    title: "Emilia in Tanzania – a traveler's view",
  },
  {
    image:
      "/blog5.jpg", // Replace with your actual image URL
    title: "Tanzania Dragon Blood Tree Forest & Nursery",
  },
];

const BlogSection = () => {
  return (
    <div id="blog" className="bg-white py-20 font-sans">
      <div className="mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#a08180] uppercase mb-4">
            Read more on our blog
          </h2>
          <p className="text-gray-700 font-medium text-base">
            Need more info and inspiration? Browse our blog for more insights on
            what to do and see in Socotra.
          </p>
          <div className="flex justify-center mt-2">
            <svg width="250" height="20" viewBox="0 0 250 20">
              <path
                d="M0 10 Q62.5 20, 125 10 T250 10"
                stroke="#a3a3a3"
                fill="none"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>
          </div>
        </div>

        {/* Blog Cards Carousel */}
        <div className="flex items-center justify-center">
          <div className="flex space-x-6 overflow-x-auto py-4">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-90 h-[480px] rounded-2xl overflow-hidden relative shadow-lg group
                    ${index === 2 ? "shadow-2xl transform scale-105" : ""}
                  `}
              >
                <img loading="lazy"
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex justify-between items-end">
                    <h3 className="text-white text-lg font-bold uppercase leading-tight max-w-[90%]">
                      {post.title}
                    </h3>
                    <div className="bg-black/20 rounded-full p-1 transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight size={20} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visit the blog button */}
        <div className="text-center mt-12">
          <button className="cursor-pointer border bg-[#D0B4B3]  text-black border-[#b49a99] uppercase font-bold py-3 px-8 rounded-full hover:bg-[#b49a99] hover:text-black hover:scale-95 transition-all duration-300 group flex items-center justify-center mx-auto">
            Visit the blog
            <ArrowRight
              size={20}
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Pagination and Navigation */}
      </div>
    </div>
  );
};

export default BlogSection;
