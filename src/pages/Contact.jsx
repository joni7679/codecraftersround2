import React from 'react'
import ContactForm from '../components/ContactForm'
import Navbar from '../components/Navbar'
import CustomCursor from '../components/CustomCursor'
import Footer from '../components/Footer'

function Contact() {
    return (
        <>
            <main>
                <Navbar />
                <CustomCursor />
                <ContactForm />
                <Footer />
            </main>


        </>
    )
}

export default Contact