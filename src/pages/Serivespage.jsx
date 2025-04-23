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
                {/* Custom Mouse Cursor Component */}
                <CustomCursor />
              
                {/* Navbar Component */}
                <Navbar />
                <ServicesHero />    
                {/* Services Section */}
                <Services />
                {/* Pricing Plans Section */}
                <Pricing />
                {/* Frequently Asked Questions */}
                <FAQ />
                {/* Footer Section */}
                <Footer />
            </Suspense>
        </main>
    )
}

export default Serivespage
