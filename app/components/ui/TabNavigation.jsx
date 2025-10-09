"use client";
import { useState, useEffect } from "react";

const TabNavigation = ({ sections }) => {
  const [activeTab, setActiveTab] = useState(sections[0].id);

  const handleTabClick = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      // Adjust for the sticky header height when scrolling
      const headerOffset = 80; // Estimated height of the sticky nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Add an offset to trigger the active state a bit earlier
      const scrollPosition = window.scrollY + 100;

      // Find the current section in view
      const currentSection = sections.findLast((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          return scrollPosition >= element.offsetTop;
        }
        return false;
      });

      if (currentSection) {
        setActiveTab(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return (
    <div className="sticky top-0 bg-[#f8efe3]/95 backdrop-blur-md z-40 border-b border-[#c4c8ba]/20">
      <div className="container mx-auto px-4">
        {/* Wrapper for horizontal scrolling on small screens */}
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex justify-start md:justify-center">
            {/* Button container */}
            <div className="inline-flex gap-1 py-3 whitespace-nowrap">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleTabClick(section.id)}
                  className={`relative px-5 md:px-8 py-3 cursor-pointer text-sm font-semibold tracking-wide uppercase transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a37b64] focus:ring-opacity-50 ${
                    activeTab === section.id
                      ? "text-white bg-[#a37b64] shadow-lg shadow-[#a37b64]/25"
                      : "text-[#a37b64]/70 hover:bg-[#a37b64]/10"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;
