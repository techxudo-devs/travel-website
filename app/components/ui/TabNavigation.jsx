"use client";
import { useState, useEffect } from "react";

const TabNavigation = ({ sections }) => {
  const [activeTab, setActiveTab] = useState(sections[0].id);

  const handleTabClick = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveTab(section.id);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return (
    <div className="sticky top-0 bg-[#f8efe3]/95 backdrop-blur-md z-50 border-b border-[#c4c8ba]/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="inline-flex gap-1 py-3">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleTabClick(section.id)}
                className={`relative px-8 py-3  cursor-pointer text-sm font-semibold tracking-wide uppercase transition-colors duration-300 rounded-xl ${
                  activeTab === section.id
                    ? "text-white bg-[#a37b64] shadow-lg shadow-[#a37b64]/25"
                    : "text-[#a37b64]/70 bg-transparent"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;
