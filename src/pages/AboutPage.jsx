
import React from 'react'
import Timeline from '../components/Timeline'
import AboutHero from '../components/AboutHero'
import Navbar from '../components/Navbar'
import CustomCursor from '../components/CustomCursor'
import { gsap } from "gsap";
import Team from '../components/Team'
import Footer from '../components/Footer'
import MasterpieceCarousel from '../components/MasterpieceCarousel'
function AboutPage() {
  return (
    <>
      <main>
        <Navbar/>
        <CustomCursor/>
        <AboutHero />
        <Timeline />
        <Team/>
        <MasterpieceCarousel/>
        <Footer/>
      </main>


    </>
  )
}

export default AboutPage