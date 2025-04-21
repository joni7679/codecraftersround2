import React, { useEffect, lazy, Suspense } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import CreativeSection from './components/CreativeSection';
import Footer from './components/Footer';
import Marquee from './components/Marquee';
import TechMarquee from './components/TechMarquee';
import Card from './components/Card';
import Loading from './components/Loader';

// Lazy-loaded components
const Hero = lazy(() => import('./components/Hero'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Stipes = lazy(() => import('./components/Stipes'));
const TestimonialCard = lazy(() => import('./components/TestimonialCard'));


gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize a new Lenis instance for smooth scrolling
    const lenis = new Lenis();

    // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
    lenis.on('scroll', ScrollTrigger.update);

    // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
    // This ensures Lenis's smooth scroll animation updates on each GSAP tick
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    });

    // Disable lag smoothing in GSAP to prevent any delay in scroll animations
    gsap.ticker.lagSmoothing(0);
  }, []);


  return (
    <main className="bg-white text-black">
      <Suspense fallback={<div className="text-center p-4"><Loading /></div>}>
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
  );
}

export default App;
