import React, { Suspense } from 'react';
import Hero from '../components/Hero';
import Stipes from '../components/Stipes';
import AboutUs from './AboutUs';
import Loading from '../components/Loader';
import CreativeSection from '../components/CreativeSection';
import TestimonialCard from '../components/TestimonialCard';
import Footer from '../components/Footer';
import Card from '../components/Card';
import CustomCursor from '../components/CustomCursor';
import TechMarquee from '../components/TechMarquee';


export default function Home() {
    return (
        <>
            <main>
                <Suspense fallback={<Loading />}>
                    <CustomCursor />
                    <Hero />
                    <AboutUs />
                    <Stipes />
                    <Card />
                    <CreativeSection />
                    <TechMarquee />
                    <TestimonialCard />
                    <Footer />
                </Suspense>
            </main>
        </>
    );
}
