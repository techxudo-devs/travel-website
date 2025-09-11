import React from "react";
import { ArrowRight } from "lucide-react";

// Note: Replace these image URLs with the actual images from your project.
// I have used placeholders that resemble the images in the screenshot.
const blogPosts = [
  {
    image:
      "https://travelgirls.club/tanzania-zanzibar/_assets/media/d11d9ff2a52ecc0507b41e8f81982c89.png", // Replace with your actual image URL
    title: "collection update: Our efforts in 2024",
  },
  {
    image:
      "https://travelgirls.club/tanzania-zanzibar/_assets/media/33d99ac7e12911f1eff8445985a75cb8.jpg", // Replace with your actual image URL
    title: "10 places to visit on Tanzania",
  },
  {
    image:
      "https://travelgirls.club/tanzania-zanzibar/_assets/media/e9fc71f2f933760b4dffa1a037f92f12.jpg", // Replace with your actual image URL
    title: "Where is Tanzania located?",
  },
  {
    image:
      "https://travelgirls.club/tanzania-zanzibar/_assets/media/9ac3043abf04b0f415721b24dc9daa4b.jpg", // Replace with your actual image URL
    title: "Emilia in Tanzania – a traveler's view",
  },
  {
    image:
      "https://manyarassecret.com/wp-content/uploads/2020/11/ManyarasSecret_2020_1101.jpg", // Replace with your actual image URL
    title: "Tanzania Dragon Blood Tree Forest & Nursery",
  },
];

const BlogSection = () => {
  return (
    <div className="bg-fourth py-20 font-sans">
      <div className="mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Read more on our blog
          </h2>
          <p className="text-gray-600">
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
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="flex justify-between items-end">
                    <h3 className="text-white text-lg font-semibold leading-tight max-w-[90%]">
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
          <button className=" border bg-third  text-white border-gray-400  font-semibold py-3 px-8 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 group flex items-center justify-center mx-auto">
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
