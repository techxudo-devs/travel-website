import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import PackageSection from '../components/sections/PackageSection'
export default function page() {
    return (
        <div>
            <HeroSection title={"Tours"} bgImage='/sleeping-tents.jpg' />
            <PackageSection />
        </div>
    )
}
