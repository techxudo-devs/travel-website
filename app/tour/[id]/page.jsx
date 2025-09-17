// app/tours/[id]/page.jsx

import axios from 'axios';
import { notFound } from 'next/navigation';
import { BASE_URL } from '@/app/utils/ApiBaseUrl'; // Apna Base URL import karein

// Naye Components import karein
import TourHero from '@/app/components/TourHero';
import TourOverviewBar from '@/app/components/TourOverviewBar';
import ItinerarySection from '@/app/components/sections/ItinerarySection';
import Inclusions from '@/app/components/sections/Inclusions';
import PhotoGallery from '@/app/components/sections/PhotoGallery';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import ActivitiesExtrasSection from '@/app/components/sections/ActivitiesExtras';
import Navbar from '@/app/components/Navbar';

// Data fetch karne ke liye function
async function getTourData(id) {
    try {
        const response = await axios.get(`${BASE_URL}/api/tours/preplanned/${id}`);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch tour details:", error.message);
        return null;
    }
}

// Main Page Component (Server Component)
export default async function TourDetailPage({ params }) {
    const { id } = params;
    const tour = await getTourData(id);

    if (!tour) {
        notFound();
    }

    return (
        <div className="bg-white">
            <Navbar />
            {/* 1. Hero Section */}
            <TourHero
                title={tour.title}
                location={tour.location}
                coverImage={tour.coverImage}
                basePrice={tour.basePrice}
                currency={tour.currency}
            />

            {/* 2. Overview Bar */}
            <TourOverviewBar
                duration={tour.duration}
                inclusions={tour?.inclusions}
                visitingLocations={tour.visitingLocations}
            />

            {/* 3. Description Section */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-4xl font-bold text-first text-center mb-6">Description</h2>
                <p className="text-base sm:text-lg text-dark leading-relaxed max-w-4xl mx-auto whitespace-pre-wrap">
                    {tour.description}
                </p>
            </section>
            <ActivitiesExtrasSection
                activities={tour.activities}
                extras={tour.extras}
            />

            {/* 4. Itinerary (Map + Carousel) Section */}
            <ItinerarySection
                days={tour.days}

                visitingLocations={tour.visitingLocations}
            />
            {tour.galleryImages && tour.galleryImages.length > 0 && (
                <PhotoGallery images={tour.galleryImages} />
            )}

            {/* 5. Inclusions & Exclusions Section */}
            <Inclusions
                inclusions={tour.inclusions}
                exclusions={tour.exclusions}
            />

            {/* Aap yahan Photo Gallery aur Important Information ke liye aur components add kar sakte hain */}

        </div>
    );
}