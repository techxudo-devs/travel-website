import React from 'react'
import AboutAno from '../components/sections/AboutAno'
import AboutHeroAno from '../components/sections/AboutHeroAno'
import AboutAboutAno from '../components/sections/AboutAboutAno'
import AbooutAniAno from '../components/sections/AbooutAniAno'
import AboutPicAno from '../components/sections/AboutPicAno'
import AboutAccAno from '../components/sections/AboutAccAno'
import AboutNewAno from '../components/sections/AboutNewAno'

const About = () => {
  return (
    <div>
      <AboutAno />
      <AboutNewAno />
      {/* <AboutHeroAno /> */}
      <AboutAboutAno />
      <AbooutAniAno />
      {/* <AboutPicAno /> */}
      <AboutAccAno />
    </div>
  )
}

export default About