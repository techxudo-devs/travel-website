import React from "react";
import HeroToGridTransition from "./components/sections/Hero";
import AboutSection from "./components/sections/AboutSection";
import TripWithUs from "./components/sections/TripWithUs";
import Testimonials from "./components/sections/Testimonial";
import VideoSection from "./components/sections/VideoSection";
import TourSection from "./components/sections/TourSection";
import BlogSection from "./components/sections/BlogSection";
import TravelInfoSection from "./components/sections/TravelSection";
import WhatToExpectSection from "./components/sections/WhatToExpect";
import PictureSwiper from "./components/sections/PictueSwiper";
const LandingPage = () => {
  return (
    <div>
      <HeroToGridTransition />
      <TourSection />
      {/* <AboutSection /> */}
      {/* <VideoSection /> */}
      <TripWithUs />
      <TravelInfoSection />
      {/* <WhatToExpectSection /> */}
      <BlogSection />
      <Testimonials />
      <PictureSwiper />
    </div>
  );
};

export default LandingPage;
