
import React, { useEffect, useState } from 'react';
const heroImage = './lovable-uploads/f9856ac9-a69c-4399-82b0-bc62a8e264c5.png';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="h-[calc(45vh+4rem)] flex flex-col justify-end relative overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <div className="relative w-full h-full">
          <img 
            src={heroImage} 
            alt="Beautiful ladybug artwork with white flowers on mint green background"
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: 'center center' }}
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
