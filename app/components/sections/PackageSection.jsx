
"use client"
import { useState, useEffect } from 'react';
import ImageCard from '../ui/ImageCard';

export default function PackageSection() {
    // State variables to store tours data, loading state, and error state
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect hook to fetch data when the component mounts
    useEffect(() => {
        const fetchTours = async () => {
            try {
                // Fetch data from the specified endpoint
                const response = await fetch("http://localhost:5050/api/tours/preplanned");

                // Check if the network response was ok
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setTours(data); // Store the fetched data in state
            } catch (e) {
                // If an error occurs, store it in the error state
                setError(e.message);
                console.error("Failed to fetch tours:", e);
            } finally {
                // Set loading to false once the fetch is complete (either success or failure)
                setLoading(false);
            }
        };

        fetchTours();
    }, []); // Empty dependency array means this effect runs only once after the initial render

    // Show a loading message while data is being fetched
    if (loading) {
        return <div className="text-center py-20">Loading packages...</div>;
    }

    // Show an error message if the fetch failed
    if (error) {
        return <div className="text-center py-20 text-red-500">Error: {error}</div>;
    }

    // Render the list of tours once data is available
    return (
        <div className='flex flex-col gap-20 pb-20'>
            <ImageCard
                heading={"Private tour"}
                description={"Make your own customized tour"}
                image={"/6.jpg"}
                floatImage={"/5.jpg"}
                buttonText={"Customize your tour "}
                buttonLink={"/private-tour"}
                alignment='right'
            />

            {tours.map((tour, index) => (
                <ImageCard
                    // Use a unique key for each item in the list for React's optimization
                    key={tour._id || index}

                    // The main image from the API response
                    image={tour.coverImage}

                    // Placeholder for the smaller floating image as it's not in the API response
                    floatImage="/10.jpg"

                    // Heading from the tour title
                    heading={tour.title}

                    // Description from the tour description
                    description={tour.description}

                    // Static button text and link
                    buttonText="Book a tour"
                    buttonLink={`/tour/${tour._id}`}

                    // Dynamically alternate alignment based on the item's index
                    alignment={index % 2 === 0 ? 'left' : 'right'}
                />
            ))}
        </div>
    );
}