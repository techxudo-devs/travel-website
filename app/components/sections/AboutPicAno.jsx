import React from 'react';
// Note: You are using the standard <img> tag, so Next.js Image component is not needed here.
// import Image from 'next/image'; 

// Data for the team members. This remains as you provided.
const teamMembers = [
    {
        name: "Emma Larson",
        title: "Lead Travel Consultant",
        imageSrc: "/team1.jpg",
    },
    {
        name: "Liam Chen",
        title: "Head of Itinerary Planning",
        imageSrc: "/team2.jpg",
    },
    {
        name: "Sophia Martinez",
        title: "Customer Experience Manager",
        imageSrc: "/team3.jpg",
    },
    {
        name: "Noah Patel", // Example name
        title: "Adventure Specialist", // Example title
        imageSrc: "/team4.jpg",
    }, {
        name: "Isabella Rossi", // Example name
        title: "Logistics Coordinator", // Example title
        imageSrc: "/team5.jpg",
    }, {
        name: "James Wilson", // Example name
        title: "Senior Guide", // Example title
        imageSrc: "/team6.jpg",
    },
];

// UPDATED reusable component to match the new design
const TeamMemberCard = ({ name, title, imageSrc }) => {
    return (
        // Each card is a flex column with centered text
        <div className="text-center flex flex-col">

            {/* The image container has the background color and rounded corners */}
            <div className="bg-[#F9F5F1] rounded-xl overflow-hidden">
                <img
                    src={imageSrc}
                    alt={`Portrait of ${name}`}
                    // Use standard Tailwind classes for styling the img tag
                    className="w-full h-auto object-cover object-top"
                />
            </div>

            {/* The text sits below the image container with a top margin */}
            <div className="mt-2 flex flex-col items-start">
                <h3 className="text-xl font-bold text-[#333333]">{name}</h3>
                <p className="text-[#7F7F7F]">{title}</p>
            </div>

        </div>
    );
};

// The main component for the "Our Team" section (No changes needed here)
const AboutPicAno = () => {
    return (
        <section className="bg-white py-20 px-4">
            <div className="container mx-auto max-w-6xl">

                {/* Section Header */}
                <div className="text-center md:text-left mb-12">
                    <p className="font-semibold text-[#D0B4B3] uppercase tracking-wide">
                        Our Team
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#b49a99] uppercase mt-2">
                        Meet the Experts Behind<br />Your Next Adventure
                    </h2>
                </div>

                {/* Grid of Team Members */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard
                            key={index}
                            name={member.name}
                            title={member.title}
                            imageSrc={member.imageSrc}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AboutPicAno;