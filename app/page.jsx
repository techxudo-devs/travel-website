import React from "react";
import HeroToGridTransition from "./components/sections/Hero";

import TripSection from "./components/sections/TripSection";
import BlogSection from "./components/sections/BlogSection";
import TravelInfoSection from "./components/sections/TravelSection";
import WhatToExpectSection from "./components/sections/WhatToExpect";
import PictureSwiper from "./components/sections/PictueSwiper";
import DestinationsSection from "./components/sections/DestinationSection";
import ContactForm from "./components/sections/ContactForm";
import TourPackages from "./components/sections/TourPackages";
const LandingPage = () => {
  return (
    <div>
      <HeroToGridTransition />
      <TripSection />
      <TourPackages />
      <DestinationsSection />
      <TravelInfoSection />
      <BlogSection />
      {/* <Testimonials /> */}
      <ContactForm />
      <PictureSwiper />
    </div>
  );
};

export default LandingPage;
