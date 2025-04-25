import React, { Suspense, lazy } from 'react';
import Navbar from '../components/Navbar';
import CustomCursor from '../components/CustomCursor';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
const AboutHero = lazy(() => import('../components/AboutHero'));
const Timeline = lazy(() => import('../components/Timeline'));
const Team = lazy(() => import('../components/Team'));
const MasterpieceCarousel = lazy(() => import('../components/MasterpieceCarousel'));

function AboutPage() {
  return (
    <main>
      <Navbar />
      <CustomCursor />
      <Suspense fallback={<Loader />}>
        <AboutHero />
        <Timeline />
        <Team />
        <MasterpieceCarousel />
      </Suspense>
      <Footer />
    </main>
  );
}

export default AboutPage;
