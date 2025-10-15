"use-client";

import React from "react";

import TripSection from "./components/sections/home/TripSection";
import BlogSection from "./components/sections/BlogSection";
import TravelInfoSection from "./components/sections/TravelSection";
import WhatToExpectSection from "./components/sections/WhatToExpect";
import PictureSwiper from "./components/sections/PictueSwiper";
import DestinationsSection from "./components/sections/home/DestinationSection";
import ContactForm from "./components/sections/ContactForm";
import TourPackages from "./components/sections/home/TourPackages";
import HeroAndTripSection from "./components/sections/Hero";
import BottomHero from "./components/sections/home/BottomHero";
import TourMap from "./components/sections/home/TourMap";
import TourPackagesClient from "./components/sections/home/TourPackages";
import InitialLoader from "./components/loader/InitialLoader";

const LandingPage = () => {
  return (
    <div>
      {/* <Hero /> */}
      {/* <TripSection /> */}

      <BottomHero />
      {/* <HeroAndTripSection backgroundImageUrl={"/hero.webp"} /> */}
      <TripSection />
      <TourPackagesClient limit/>
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
