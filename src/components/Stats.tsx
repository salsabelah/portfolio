import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
const Stats = () => {
  const {
    ref,
    isVisible
  } = useIntersectionObserver();
  const stats = [{
    number: '50+',
    label: 'Projects Completed'
  }, {
    number: '6+',
    label: 'Years of Experience'
  }, {
    number: '30+',
    label: 'Client Collaborations'
  }];
  return <section className="py-20 bg-gradient-to-b from-white to-slate-50/50 relative overflow-hidden md:py-[50px]">
      {/* Subtle separator line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="container mx-auto px-8 max-w-5xl">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat, index) => <div key={index} className={`text-center relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{
            transitionDelay: `${index * 200}ms`
          }}>
                <div className="text-3xl md:text-4xl font-extralight text-black mb-2 tracking-tight">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-slate-500 font-light uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Stats;