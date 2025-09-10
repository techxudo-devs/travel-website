import React from "react";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2671&auto=format&fit=crop",
    title: "Socotra's Dragon Blood Tree Forest & Beyond",
    category: "Nature",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?q=80&w=2639&auto=format&fit=crop",
    title: "Our Exclusive Luxury Camp Setup",
    category: "Accommodation",
  },
  {
    image:
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=2574&auto=format&fit=crop",
    title: "January 2025 plastic collection update - an overview",
    category: "Sustainability",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2670&auto=format&fit=crop",
    title: "Standard tents vs. luxury tents",
    category: "Accommodation",
  },
];

const BlogSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
      {/* Decorative dashed lines */}
      <div className="absolute top-20 right-32 w-64 h-64">
        <svg className="w-full h-full opacity-30" viewBox="0 0 200 200">
          <path
            d="M20,100 Q100,20 180,100"
            stroke="#d97706"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,8"
          />
        </svg>
      </div>

      <div className="absolute bottom-32 left-20 w-48 h-48">
        <svg className="w-full h-full opacity-30" viewBox="0 0 200 200">
          <path
            d="M180,100 Q100,180 20,100"
            stroke="#d97706"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,8"
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Read more on our blog
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Need more info and inspiration? Browse our blog for more insights on
            what to do and see in Socotra.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {blogPosts.map((post, index) => {
            // First card takes 2 columns and is taller
            const isLarge = index === 0;
            // Cards 2 and 3 stack vertically in one column
            const isStacked = index === 1 || index === 2;

            return (
              <div
                key={index}
                className={`
                  group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer
                  ${isLarge ? "lg:col-span-2 h-[500px]" : ""}
                  ${isStacked ? "h-[340px]" : ""}
                  ${!isLarge && !isStacked ? "h-[500px]" : ""}
                  ${index >= 3 ? "lg:col-span-1" : ""}
                `}
              >
                <div className="relative w-full h-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3
                          className={`font-bold leading-tight mb-2 group-hover:text-orange-200 transition-colors duration-300 ${
                            isLarge
                              ? "text-2xl"
                              : isStacked
                              ? "text-base"
                              : "text-xl"
                          }`}
                        >
                          {post.title}
                        </h3>
                      </div>
                      <div className="ml-4 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                        <ArrowRight size={isStacked ? 18 : 24} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="group inline-flex items-center justify-center bg-white hover:bg-dark  text-gray-900 font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:text-white cursor-pointer transition-all duration-300 border border-gray-200">
            View all blog posts
            <ArrowRight
              size={20}
              className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
