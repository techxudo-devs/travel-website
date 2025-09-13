import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import BookingForm from '../components/sections/Booking'

export default function page() {
    return (
        <div>
            <HeroSection
                bgImage='/2.jpg'
                title='Private Tour'
            />
            <BookingForm />
        </div>
    )
}
