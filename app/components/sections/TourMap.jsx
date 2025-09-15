import React from 'react';
import Image from 'next/image';

const tourLocations = [
    {
        id: 1,
        name: 'Africa',
        image: "https://cdn.prod.website-files.com/67be71af9e8ca0fac0d00356/67bfcf4783fa8a86bdfbc7b8_img5a.webp",
        mapPosition: { top: '60%', left: '52%' } // Example positioning, adjust as needed
    },
    {
        id: 2,
        name: 'Asia',
        image: "https://cdn.prod.website-files.com/67be71af9e8ca0fac0d00356/67bfd3de32c082d060e76255_img6a.webp",
        mapPosition: { top: '25%', left: '80%' }
    },
    {
        id: 3,
        name: 'The Caribbean',
        image: "https://cdn.prod.website-files.com/67be71af9e8ca0fac0d00356/67bfd3dfe450e9ab71adcb8b_img7a.webp",
        mapPosition: { top: '40%', left: '25%' }
    },
    {
        id: 4,
        name: 'Central America',
        image: "https://cdn.prod.website-files.com/67be71af9e8ca0fac0d00356/67bfd3dfdebb9d139a15084f_img8a.webp",
        mapPosition: { top: '30%', left: '10%' }
    },
    {
        id: 5,
        name: 'Europe',
        image: "https://cdn.prod.website-files.com/67be71af9e8ca0fac0d00356/67bfd3df9477fbba4179c0f6_img9a.webp",
        mapPosition: { top: '25%', left: '50%' }
    },
    {
        id: 6,
        name: 'The Middle East',
        image: "https://cdn.prod.website-files.com/67be71af9e8ca0fac0d00356/67bfcf4783fa8a86bdfbc7b8_img5a.webp", // Using a placeholder, replace with actual image
        mapPosition: { top: '40%', left: '65%' }
    },
    {
        id: 7,
        name: 'North America',
        image: "https://cdn.prod.website-files.com/67be71af9e8ca0fac0d00356/67bfd3de32c082d060e76255_img6a.webp", // Using a placeholder, replace with actual image
        mapPosition: { top: '20%', left: '20%' }
    },
    {
        id: 8,
        name: 'Oceania',
        image: "https://cdn.prod.website-files.com/67be71af9e8ca0fac0d00356/67bfd3dfe450e9ab71adcb8b_img7a.webp", // Using a placeholder, replace with actual image
        mapPosition: { top: '68%', left: '80%' }
    },
    {
        id: 9,
        name: 'South America',
        image: "https://cdn.prod.website-files.com/67be71af9e8ca0fac0d00356/67bfd3dfdebb9d139a15084f_img8a.webp", // Using a placeholder, replace with actual image
        mapPosition: { top: '70%', left: '31%' }
    },
];

const TourMap = () => {
    return (
        <div className='bg-[#FFFFFF] py-20 min-h-screen pr-10'>
            <h1 className='text-center text-5xl font-bold text-[#D0B4B3] pb-4 uppercase'>Choose Your Destination</h1>
            <div className="w-24 h-1 bg-[#D0B4B3] mx-auto mb-8 rounded-full"></div>
            <div className='flex'>
                {/* Left Section - Your existing content */}
                <div className='flex flex-col gap-10 w-1/5'>
                    <div className='flex flex-col gap-2 items-center'>
                        <img className='w-16 h-16 rounded-full object-cover' src="https://cdn.prod.website-files.com/67be71af9e8ca0fac0d00356/67bfcf4783fa8a86bdfbc7b8_img5a.webp" alt="Tour" width={64} height={64} />
                        <div className='text-center'>
                            <p className='text-sm font-medium'>Beach</p>
                            <p className='text-xs text-gray-600'>Coastal Hiking</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 items-center'>
                        <img className='w-16 h-16 rounded-full object-cover' src="https://cdn.prod.website-files.com/67be71af9e8ca0fac0d00356/67bfd3de32c082d060e76255_img6a.webp" alt="Tour" width={64} height={64} />
                        <div className='text-center'>
                            <p className='text-sm font-medium'>Forest</p>
                            <p className='text-xs text-gray-600'>Hiking & Trekking</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 items-center'>
                        <img className='w-16 h-16 rounded-full object-cover' src="https://cdn.prod.website-files.com/67be71af9e8ca0fac0d00356/67bfd3dfe450e9ab71adcb8b_img7a.webp" alt="Tour" width={64} height={64} />
                        <div className='text-center'>
                            <p className='text-sm font-medium'>Desert</p>
                            <p className='text-xs text-gray-600'>Desert Camping</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 items-center'>
                        <img className='w-16 h-16 rounded-full object-cover' src="https://cdn.prod.website-files.com/67be71af9e8ca0fac0d00356/67bfd3dfdebb9d139a15084f_img8a.webp" alt="Tour" width={64} height={64} />
                        <div className='text-center'>
                            <p className='text-sm font-medium'>Mountain</p>
                            <p className='text-xs text-gray-600'>Mountaineering</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 items-center'>
                        <img className='w-16 h-16 rounded-full object-cover' src="https://cdn.prod.website-files.com/67be71af9e8ca0fac0d00356/67bfd3df9477fbba4179c0f6_img9a.webp" alt="Tour" width={64} height={64} />
                        <div className='text-center'>
                            <p className='text-sm font-medium'>Northern</p>
                            <p className='text-xs text-gray-600'>Glacier Hiking</p>
                        </div>
                    </div>
                </div>

                {/* Right Section - Map with dynamic location icons */}
                <div className='w-4/5 relative bg-[url("/map.jpg")] bg-cover bg-center'>
                    {/* Overlay with a slight tint for better readability, optional */}
                    <div className="absolute inset-0 bg-white opacity-30"></div>

                    {tourLocations.map((location) => (
                        <div
                            key={location.id}
                            className='absolute flex flex-col items-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2'
                            style={location.mapPosition}
                        >
                            {/* The circular image */}
                            <div className='relative w-20 h-20 rounded-full border-4 border-black shadow-lg overflow-hidden flex items-center justify-center bg-gray-200'>
                                <img
                                    src={location.image}
                                    alt={location.name}
                                    objectFit='cover'
                                />
                            </div>
                            {/* Optional: Add a small triangle/pin point below the circle to make it look like a pin */}
                            <div className='w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-black -mt-1'></div>
                            {/* Location Name - optional, can be shown on hover */}
                            {/* <p className='text-xs font-semibold text-gray-800 mt-1'>{location.name}</p> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TourMap;