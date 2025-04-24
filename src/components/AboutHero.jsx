import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function AboutHero() {
  const textRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current.children,
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      }
    );

    gsap.to(overlayRef.current, {
      opacity: 0.7,
      duration: 1.5,
      scrollTrigger: {
        trigger: overlayRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true
      }
    });
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden font-[NeueMachina-Light]">
     
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1692861639282-aa8733daf2b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}
      />

      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 opacity-60"
      />

      
      <div className="absolute inset-0 w-full h-full">
        <div className="container mx-auto h-full">
          <div className="grid grid-cols-4 h-full">
            {[...Array(4)].map((_, i) => (
              <div 
                key={i}
              
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative container mx-auto h-full flex items-center justify-center px-4">
        <div 
          ref={textRef}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            We Turn Ideas into Reality.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Our passion lies in transforming your boldest ideas into digital success stories. 
            With a perfect blend of innovation and technical expertise, 
            we turn digital dreams into tangible results that light up screens.
          </p>
          
        </div>
      </div>

    
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-1 h-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-green-500 to-transparent" />
        </div>
        <span className="text-white text-sm mt-2">Scroll Down</span>
      </div>
    </section>
  );
}

export default AboutHero;