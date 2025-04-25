import React, { Suspense, lazy } from 'react'
import Loader from '../components/Loader'
import ServicesHero from '../components/ServicesHero'

// Lazy loading components
const CustomCursor = lazy(() => import('../components/CustomCursor'))
const Navbar = lazy(() => import('../components/Navbar'))
const Services = lazy(() => import('../components/Services'))
const Pricing = lazy(() => import('../components/Pricing'))
const FAQ = lazy(() => import('../components/FAQ').then(module => ({ default: module.FAQ }))) // <-- fixed
const Footer = lazy(() => import('../components/Footer'))

function Serivespage() {
    return (
        <main>
            <Suspense fallback={<Loader />}>
                <CustomCursor />
                <Navbar />
                <ServicesHero />    
                <Services />
                <Pricing />
                <FAQ />
                <Footer />
            </Suspense>
        </main>
    )
}

export default Serivespage
