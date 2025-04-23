// src/components/CustomCursor.jsx
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";


const CustomCursor = () => {
    const [isMoving, setIsMoving] = useState(false);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const cursorRef = useRef(null);
    const trailRefs = useRef([]);
    const trailLength = 10;
    const mousePosition = useRef({ x: -100, y: -100 });
    const movementTimeout = useRef(null);
    const animationFrameId = useRef(null);
    useEffect(() => {
        trailRefs.current = Array.from({ length: trailLength }, () => React.createRef());
    }, []);

    // Mouse move event
    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX: x, clientY: y } = e;
            mousePosition.current = { x, y };

            gsap.to(cursorRef.current, {
                x,
                y,
                duration: 0.6,
                ease: "power2.out",
            });

            setIsMoving(true);
            clearTimeout(movementTimeout.current);
            movementTimeout.current = setTimeout(() => {
                setIsMoving(false);
            }, 500);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        const handleMouseDown = () => {
            setIsMouseDown(true);
            gsap.to(cursorRef.current, {
                width: 50,
                height: 50,
                borderColor: "var(--green)",
                boxShadow: "0 0 25px rgba(255, 255, 255, 0.5)",
                duration: 0.2,
            });
        };

        const handleMouseUp = () => {
            setIsMouseDown(false);
            gsap.to(cursorRef.current, {
                width: 50,
                height: 50,
                borderColor: "white",
                boxShadow: "none",
                duration: 0.2,
            });
        };

        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    // Animate trail segments
    useEffect(() => {
        const updateTrail = () => {
            trailRefs.current.forEach((ref, index) => {
                if (!ref.current) return;
                const delay = (index + 1) * 0.05;
                gsap.to(ref.current, {
                    x: mousePosition.current.x,
                    y: mousePosition.current.y,
                    delay,
                    duration: 0.3,
                    opacity: isMoving || isMouseDown ? 1 - index / trailLength : 0,
                    scale: 1 + index / trailLength,
                    ease: "power2.out",
                });
            });
        };

        const animate = () => {
            updateTrail();
            animationFrameId.current = requestAnimationFrame(animate);
        };

        animate();
        return () => cancelAnimationFrame(animationFrameId.current);
    }, [isMoving, isMouseDown]);

    return (
        <>
            {trailRefs.current.map((ref, index) => (
                <div key={index} className="trail-segment" ref={ref}></div>
            ))}
            <div className="custom-cursor" ref={cursorRef}>
                <div className="cursor-dot" />
            </div>
        </>
    );
};

export default CustomCursor;
