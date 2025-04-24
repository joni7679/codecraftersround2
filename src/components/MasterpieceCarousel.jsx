import React from 'react';
import { membersimg } from '../constants/memberdata';


function MasterpieceCarousel() {
    const positions = [
        { top: 'top-[12%]', left: 'left-[10%]' },
        { top: 'top-[5%]', left: 'left-[25%]' },
        { top: 'top-0', left: 'left-[45%]' },
        { top: 'top-[5%]', left: 'left-[66%]' },
        { top: 'top-[12%]', left: 'left-[83%]' }
    ];

    return (
        <section className="bg-black text-white py-16 px-4 min-h-screen">
            <h1 className='text-center text-3xl capitalize font-[NeueMachina-Light]'>our HardWork Members</h1>
            <div className="mt-9 relative w-full max-w-[1400px] h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200vw] h-[200vw]  rounded-full"></div>
                <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[150vw] h-[150vw] bg-black rounded-full"></div>
                {membersimg.map((member, index) => {
                    const { top, left } = positions[index];
                    return (
                        <div
                            key={index}
                            className={`absolute ${top} ${left} w-[100px] sm:w-[120px] md:w-[140px] lg:w-[150px] h-[150px] sm:h-[180px] md:h-[200px] lg:h-[220px] rounded-xl border-4 border-white bg-cover bg-center shadow-xl`}
                            style={{ backgroundImage: `url(${member.url})`}}
                        ></div>
                    );
                })}
            </div>
        </section>
    );
}

export default MasterpieceCarousel;
