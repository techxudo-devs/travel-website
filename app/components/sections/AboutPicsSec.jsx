import React from 'react'

const AboutPicsSec = () => {
    return (
        // Main Section Container with a light background color
        // Yeh poore section ka main container hai jiska halka background color hai
        <section className="bg-white pt-20 pb-30 px-4">
            <div className="container mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 items-center">

                {/* Left Column: Text and image collage */}
                {/* Baayaan (Left) Column: Text aur tasveeron ka collage */}
                <div className="flex flex-col items-center lg:items-start space-y-8 bg-[#fdfaf7] p-10">

                    {/* --- Heading Text --- */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-lg text-gray-500 tracking-widest">OUR</h2>
                        {/* Using style attribute for the specific font */}
                        {/* Khaas font ke liye style attribute istemal kiya gaya hai */}
                        <h1 className="text-6xl font-bold text-[#c5a78c]">
                            Vision
                        </h1>
                    </div>

                    {/* --- Intro Paragraph --- */}
                    <p className="max-w-md text-center lg:text-left text-gray-600 leading-relaxed">
                        What started in January 2022 as one woman’s search for a travel buddy quickly became a worldwide sisterhood of over 100,000 women who inspire, support, and travel together.
                    </p>

                    {/* --- Image Collage Section --- */}
                    {/* This container uses relative positioning to place child images absolutely */}
                    {/* Yeh container relative positioning istemal kar raha hai taake andar ki tasveerein absolutely position ho sakein */}
                    <div className="relative w-full max-w-lg h-96 sm:h-[500px] mt-8">

                        {/* Bottom/Background Image (Cape Town) */}
                        {/* Neeche wali tasveer (Cape Town), jo thori ghumi hui hai */}
                        <div className="absolute bottom-0 left-0 w-[80%] sm:w-[120%] transform -rotate-6 transition-transform duration-300 translate-y-30 -translate-x-10">
                            <div className="bg-white p-2 pb-6 shadow-2xl">
                                <img src="https://www.theblondeabroad.com/wp-content/uploads/2018/07/About-Postcard.jpg" alt="View of Cape Town from a mountain with a woman" className="w-full h-auto" />
                                <p className="absolute bottom-8 left-6 text-white text-5xl font-extrabold italic" style={{ fontFamily: "'Playfair Display', serif", textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>Cape Town</p>
                                {/* Decorative stamp on the image */}
                                {/* Tasveer par सजावटी stamp */}
                                <img src="https://i.imgur.com/Q9p4K9g.png" alt="Postage stamp" className="absolute top-2 right-2 w-16 h-16 opacity-80" />
                            </div>
                        </div>

                        {/* Top/Foreground Image (Beach) */}
                        {/* Oopar wali tasveer (Beach) */}
                        <div className="absolute top-0 right-0 w-[60%] sm:w-[100%] transition-transform duration-300 -translate-x-20">
                            <div className="bg-white p-2 shadow-xl">
                                <img src="https://www.theblondeabroad.com/wp-content/uploads/2018/07/DJI_0230.jpg" alt="Turquoise water beach from above" className="w-full h-auto" />
                                <p className="text-center text-xs text-gray-500 mt-1 tracking-widest">MY FAVORITE BEACH</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Main picture and text */}
                {/* Daayaan (Right) Column: Asal tasveer aur text */}
                <div className="flex flex-col items-center lg:items-start space-y-8 bg-[#fdfaf7] p-[59px]">

                    {/* --- Main Image with Stamp --- */}
                    <div className="relative w-full max-w-sm">
                        <img src="https://www.theblondeabroad.com/wp-content/uploads/2018/07/2016-06-28-17.15.04-2-1.jpg" alt="Woman in a hot air balloon" className="w-[150%] h-auto shadow-lg -translate-y-24" />
                        {/* Decorative circular stamp */}
                        {/* Gol (circular) सजावटी stamp */}
                        <div className="absolute -top-36 -right-6 flex items-center justify-center p-2 transform -rotate-12">
                            <img className='w-40' src="https://www.theblondeabroad.com/wp-content/themes/tba/images/About-Kiersten-Stamp.png" alt="" />
                        </div>
                    </div>

                    {/* --- Second Paragraph --- */}
                    <p className="max-w-md text-center lg:text-left text-gray-600 leading-relaxed">
                        Our mission is to create a safe, empowering, and welcoming space where women can find travel friends, plan trips, and make memories that last a lifetime. Doesn´t matter if you’re planning your first solo adventure or joining one of our curated group experiences, Travel Girls Club is here to help you feel confident, supported, and never alone on your journey.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default AboutPicsSec