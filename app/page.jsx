import React from "react";
import HeroToGridTransition from "./components/sections/Hero";
import AboutSection from "./components/sections/AboutSection";
import TripWithUs from "./components/sections/TripWithUs";
import Testimonials from "./components/sections/Testimonial";
const LandingPage = () => {
  return (
    <div>
      <HeroToGridTransition />
      <AboutSection />
      <TripWithUs />
      <Testimonials />
    </div>
  );
};

export default LandingPage;
