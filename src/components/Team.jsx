import React from 'react'
import TeamCard from './TeamCard'

function Team() {
    return (
        <>
            <section className="py-16 bg-black text-white px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">Meet Our Team</h2>
                    <p className="mt-2">The brains behind the creativity</p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-4">
                    <TeamCard/>
                </div>
            </section>
        </>
    )
}

export default Team