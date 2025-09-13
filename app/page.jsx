"use-client"

import React from "react";

import TripSection from "./components/sections/TripSection";
import BlogSection from "./components/sections/BlogSection";
import TravelInfoSection from "./components/sections/TravelSection";
import WhatToExpectSection from "./components/sections/WhatToExpect";
import PictureSwiper from "./components/sections/PictueSwiper";
import DestinationsSection from "./components/sections/DestinationSection";
import ContactForm from "./components/sections/ContactForm";
import TourPackages from "./components/sections/TourPackages";
import HeroAndTripSection from "./components/sections/Hero";
import BottomHero from "./components/sections/BottomHero";
import TourMap from "./components/sections/TourMap";

const LandingPage = () => {
  return (
    <div>
      {/* <Hero /> */}
      {/* <TripSection /> */}
      <BottomHero />
      {/* <HeroAndTripSection backgroundImageUrl={"/hero.webp"} /> */}
      <TripSection />
      <TourPackages />
      <TourMap />
      <DestinationsSection />
      <TravelInfoSection />
      <BlogSection />
      <ContactForm />
      <PictureSwiper />
    </div>
  );
};

export default LandingPage;
