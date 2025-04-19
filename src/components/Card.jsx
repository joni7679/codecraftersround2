import React from 'react';
import CardsData from './cardsData';

function Card() {
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 p-6 bg-black min-h-screen">
            {CardsData.map((val, i) => (
                <div key={i} className="bg-[#FFA1A1] w-full max-w-[400px] h-[300px] rounded-[20px] p-6 shadow-md">
                    <h2 className="text-[24px] font-bold text-[#d43838] mb-4">{val.title}</h2>
                    <p className="text-[16px] text-[#814141] mb-6">{val.description}</p>
                    <div className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full text-white text-xl hover:bg-white/30 transition-all cursor-pointer">
                        {val.button}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card;
