import React, { useEffect, lazy, Suspense } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import CreativeSection from './components/CreativeSection'
import Footer from './components/Footer'
import Marquee from './components/Marquee'
import TechMarquee from './components/TechMarquee'
import Card from './components/Card'

const Hero = React.lazy(() => import('./components/Hero'))
const AboutUs = React.lazy(() => import('./pages/AboutUs'))
const Stipes = React.lazy(() => import('./components/Stipes'))
const TestimonialCard = React.lazy(() => import('./components/TestimonialCard'))
import Loading from './components/Loader'
// Register ScrollTrigger only once
gsap.registerPlugin(ScrollTrigger)

function App() {

  // useEffect(() => {
  //   const lenis = new Lenis()
  //   function raf(time) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }
  //   requestAnimationFrame(raf)
  //   return () => {
  //     lenis.destroy()
  //   }
  // }, [])

  return (
    <main className="bg-white text-black">
      <Suspense fallback={<div className="text-center p-4">
        <Loading />
      </div>}>
        <Hero />
        <AboutUs />
        <Stipes />
        <Card />
        <CreativeSection />
        <TechMarquee />
        <TestimonialCard />
        <Marquee />
        <Footer />
      </Suspense>
    </main>
  )
}

export default App
