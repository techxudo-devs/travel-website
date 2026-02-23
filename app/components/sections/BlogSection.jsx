"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    id: "solo-travel",
    image: "/newBlog1.jpg",
    title:
      "Why Solo Travel - Can Be the Most Empowering Experience of Your Life",
  },
  {
    id: "solo-trip",
    image: "/newBlog2.jpg",
    title: "How To Plan The Ultimate Solo Trip - Without Getting Overwhelmed",
  },
  {
    id: "solo-destinations",
    image: "/newBlog3.jpg",
    title: "10 Destinations - Perfect For Solo Travelers",
  },
  {
    id: "solo-barcelona",
    image: "/newBlog4.jpg",
    title: "Barcelona - 3 Day Itinerary",
  },
  {
    id: "solo-london",
    image: "/newBlog5.jpg",
    title: "London and the Countryside - A 6-Day Itinerary",
  },
  {
    id: "solo-split",
    image: "/newBlog6.jpg",
    title: "Split - Where History, Food, And Coastal Charm Meet",
  },
  {
    id: "solo-croatia",
    image: "/newBlog7.jpg",
    title: "Croatia - A Country Worth Every Mile",
  },
  {
    id: "solo-friends",
    image: "/newBlog8.webp",
    title: "How To Make Friends? - Without Staying In Hostels",
  },
];

const BlogSection = () => {
  return (
    <div id="blog" className="bg-white py-20 font-sans">
      <div className="mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-romie  text-[#a08180]  mb-4">
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

        {/* Blog Cards */}
        <div className="flex items-center justify-center">
          <div className="flex space-x-6 overflow-x-auto py-4">
            {blogPosts.map((post, index) => (
              <Link
                href={`/blog/${post.id}`}
                key={index}
                className={`flex-shrink-0 w-90 h-[480px] rounded-2xl overflow-hidden relative shadow-lg group transition-transform hover:scale-[1.03]`}
              >
                <Image
                  loading="lazy"
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
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
              </Link>
            ))}
          </div>
        </div>

        {/* Visit the blog button */}
        <div className="text-center mt-12">
          <Link href="/blog">
            <button className="cursor-pointer border bg-[#D0B4B3] text-black border-[#b49a99] font-romie font-bold py-3 px-8 rounded-full hover:bg-[#b49a99] hover:text-black hover:scale-95 transition-all duration-300 group flex items-center justify-center mx-auto">
              Visit the blog
              <ArrowRight
                size={20}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
