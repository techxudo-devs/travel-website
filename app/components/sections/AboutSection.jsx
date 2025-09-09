"use client";
import React from "react";
import HomeCards from "../ui/HomeCards"; // Assuming this is the correct path

export default function AboutSection() {
  return (
    // Corrected the style prop syntax
    <div
      className="min-h-screen py-30 bg-white flex flex-col bg-no-repeat bg-contain items-center gap-20"
      style={{ backgroundImage: 'url("/wave-2.svg")' }}
    >
      <div className="flex flex-col items-center text-center  gap-4 justify-center">
        <h1 className="md:text-5xl text-3xl  font-medium text-dark md:text-light">
          Come on a trip with us
        </h1>
        <p className="text-xl md:max-w-3xl max-w-2xl text-center font-medium text-dark md:text-light">
          Whether you’re seeking the companionship of a group tour, the solitude
          of a private adventure or something totally different – we make sure
          to help create memories on Socotra that last a lifetime.
        </p>
      </div>
      <HomeCards
        category={"Adventure"}
        title={"Thrill Seekers’ Paradise"}
        desc={
          "From hiking rugged mountains to white-water rafting, our adventure tours are built for those who crave adrenaline. Discover breathtaking landscapes while challenging yourself on unforgettable journeys."
        }
        btnLink={"https://www.google.com"}
        bgColor={"hover:bg-card03"}
        cornerTheme="default"
        image={"/1.jpg"} // Adventure Image
        imgWidth={580} // Added width
        imgHeight={420} // Added height
      />
      <HomeCards
        category={"Culinary Journeys"}
        title={"A Taste of the World"}
        desc={
          "Savor authentic flavors across continents. From street food markets to fine dining, our culinary trips let you indulge in cultural delicacies while exploring vibrant destinations."
        }
        btnLink={"https://www.google.com"}
        bgColor={"hover:bg-card02"}
        image={"/8.jpg"} // Culinary Image
        imageFirst={true}
        reversed={true}
        imgWidth={580} // Added width
        imgHeight={420} // Added height
      />
      {/* Corrected component name from HomeCard to HomeCards */}
      <HomeCards
        category={"Cultural Escapes"}
        title={"Immersive Heritage Tours"}
        desc={
          "Step into living history with our cultural tours. Walk ancient streets, visit UNESCO heritage sites, and connect with local traditions that have stood the test of time."
        }
        btnLink={"https://www.google.com"}
        bgColor={"hover:bg-card01"}
        image={"/7.jpg"} // Cultural Image
        imgWidth={580} // Added width
        imgHeight={420} // Added height
      />
      {/* Corrected component name from HomeCard to HomeCards */}
      <HomeCards
        category={"Beach Getaways"}
        title={"Relax by the Waves"}
        desc={
          "Unwind on pristine beaches, enjoy crystal-clear waters, and let the ocean breeze refresh your soul. Perfect for a laid-back holiday with sun, sand, and serenity."
        }
        btnLink={"https://www.google.com"}
        bgColor={"hover:bg-card04"}
        image={"/3.jpg"} // Beach Image
        imageFirst={true}
        reversed={true}
        imgWidth={580} // Added width
        imgHeight={420} // Added height
      />
    </div>
  );
}
