// app/tours/[id]/page.jsx

import axios from 'axios';
import { notFound } from 'next/navigation';
import HeroSection from '@/app/components/sections/HeroSection'; // Apne component ka path check kar lein
import ImageCard from '@/app/components/ui/ImageCard';         // Apne component ka path check kar lein
import { CheckCircle2 } from 'lucide-react'; // Modern icons ke liye
import Inclusions from '@/app/components/sections/Inclusions';

// Data fetch karne ke liye ek alag function (best practice)
async function getTourData(id) {
    try {
        const response = await axios.get(`http://localhost:5050/api/tours/preplanned/${id}`);
        return response.data;
    } catch (error) {
        // Agar tour nahi milta (e.g., 404 error) to null return karein
        console.error("Failed to fetch tour details:", error.message);
        return null;
    }
}

// Yeh page ek Server Component hai
export default async function TourDetailPage({ params }) {
    const { id } = params; // URL se ID extract karein
    const tour = await getTourData(id);

    // Agar tour data nahi mila, to Next.js ki built-in 404 page dikhayein
    if (!tour) {
        notFound();
    }

    return (
        <div>
            {/* Hero Section: API se title aur coverImage ka use karega */}
            <HeroSection
                title={tour.title}
                bgImage={tour?.coverImage}
            />

            {/* Page ka main content section */}
            <main className="container mx-auto px-4 py-16 md:py-24">

                {/* Tour Description Section */}
                <section className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">About The Adventure</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        {tour.description}
                    </p>
                </section>

                {/* Activities and Extras Section (Modern Design with Grid Layout) */}
                <Inclusions
                    imageSrc={tour.coverImage || "/8.jpg"} // Ek acchi si image ka path dein
                    preHeading={`${tour.days.length} DAYS OF ${tour.title}`}
                    includedItems={tour.activities}   // Activities yahan pass karein
                    requiredExtras={tour.extras}
                />


                {/* Itinerary / Days Section */}
                <section className="flex flex-col items-center gap-16 md:gap-24">
                    <h2 className="text-4xl font-bold text-center text-gray-800">Your Daily Itinerary</h2>
                    <div className="w-full flex flex-col gap-20">
                        {tour.days.map((day, index) => (
                            <ImageCard
                                key={day._id}
                                // Heading me Day number add kar diya hai
                                heading={`Day ${day.day}: ${day.heading}`}
                                description={day.description}
                                // Har din ke liye alag images ka use
                                image={day.images[0]} // Pehli image ko main image banaya
                                floatImage={day.images[1] || day.images[0]} // Doosri image ko float, agar nahi hai to pehli hi use hogi
                                // Alignment ko alternate kiya gaya hai
                                alignment={index % 2 === 0 ? 'left' : 'right'}
                                buttonText="View Day Details" // Aap chahein to button hata sakte hain
                                buttonLink={`/tours/${id}/day/${day.day}`} // Optional link
                            />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}