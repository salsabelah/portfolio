import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
const Intro = () => {
  const {
    ref,
    isVisible
  } = useIntersectionObserver();
  return <section id="intro" className="py-20 bg-white relative my-0 md:py-[67px] mb-16 md:mb-24">
      <div className="container mx-auto px-8 max-w-4xl">
        <div ref={ref} className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg text-slate-400 mb-8 font-light tracking-wide md:text-3xl">
            Hi, I'm Salsabelah
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-black mb-8 leading-tight tracking-tight">
            <span className="block">Graphic designer</span>
            <span className="block">& Illustrator</span>
          </h1>
          <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed font-light md:text-2xl py-0">Visual artist with 6+ years of experience in branding, illustration, and diverse design areas. Detail-oriented and passionate about visual storytelling</p>
        </div>
      </div>
    </section>;
};
export default Intro;