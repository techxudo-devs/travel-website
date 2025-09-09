import React from "react";
import HeroToGridTransition from "./components/sections/Hero";
import AboutSection from "./components/sections/AboutSection";
import TripWithUs from "./components/sections/TripWithUs";
import Testimonials from "./components/sections/Testimonial";
import VideoSection from "./components/sections/VideoSection";
const LandingPage = () => {
  return (
    <div>
      <HeroToGridTransition />
      <AboutSection />
      <VideoSection />
      <TripWithUs />
      <Testimonials />
    </div>
  );
};

export default LandingPage;
