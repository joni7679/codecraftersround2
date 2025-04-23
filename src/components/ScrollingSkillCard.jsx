import React from "react";
import { icons } from "../constants/icons";

const MarqueeRow = ({ reverse = false }) => {
    return (
        <div className="overflow-hidden whitespace-nowrap w-full">
            <div className={`marquee-row gap-6 py-4 ${reverse ? "reverse" : ""}`}>
                {[...Array(2)].map((_, dupIdx) =>
                    icons.map((icon, i) => (
                        <div
                            key={`${dupIdx}-${i}`}
                            className="min-w-[80px] min-h-[80px] flex items-center justify-center"
                        >
                            <img
                                src={icon}
                                alt={`tech-icon-${i}`}
                                className="w-14 h-14 object-contain"
                                loading="lazy"
                            />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

const ScrollingSkillCard = () => {
    return (
        <div className="mt-11">
            <MarqueeRow />
            <MarqueeRow reverse />
        </div>
    );
};

export default ScrollingSkillCard;
