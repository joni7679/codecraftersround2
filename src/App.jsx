import React, { useEffect } from 'react'
// import Hero from './components/Hero'
import AboutUs from './pages/AboutUs'
import Hero from './components/Hero'
import Stipes from './components/Stipes'
import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import Card from './components/Card'


function App() {

  // // useEffect(() => {
  // //   const lenis = new Lenis();

  // //   // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
  // //   lenis.on('scroll', ScrollTrigger.update);

  // //   // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
  // //   // This ensures Lenis's smooth scroll animation updates on each GSAP tick
  // //   gsap.ticker.add((time) => {
  // //     lenis.raf(time * 1000); // Convert time from seconds to milliseconds
  // //   });

  // //   // Disable lag smoothing in GSAP to prevent any delay in scroll animations
  // //   gsap.ticker.lagSmoothing(0);

  // }, [])//


  return (
    <>
      <main>
        <Hero />
        <AboutUs />
        <Stipes />
        <Card />
      </main>

    </>
  )
}

export default App