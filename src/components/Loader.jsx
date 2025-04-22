import React, { useState, useEffect } from "react";

const Loader = () => {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercent((prev) => {
                if (prev < 100) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    return 100;
                }
            });
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="font-[NeueMachina-Light] w-full h-screen bg-black flex items-center justify-center relative">
                <h1 className=" text-5xl md:text-7xl font-light tracking-wider text-green-400">
                    Loading {percent}%
                </h1>
            </div>
        </>

    );
};

export default Loader;
