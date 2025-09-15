import React from 'react';
import { Palette, Pen, Monitor, Video } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
const Services = () => {
  const {
    ref,
    isVisible
  } = useIntersectionObserver();
  const services = [{
    icon: Palette,
    title: 'Graphic Design',
    description: 'Visual identity and brand design'
  }, {
    icon: Pen,
    title: 'Illustration',
    description: 'Custom artwork and digital illustrations'
  }, {
    icon: Monitor,
    title: 'Web Design',
    description: 'Modern and responsive web interfaces'
  }, {
    icon: Video,
    title: 'Motion Design',
    description: 'Animated content and motion graphics'
  }];
  return <section className="py-20 bg-white relative my-0 md:py-[23px]">
      <div className="container mx-auto px-8 max-w-5xl">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-extralight text-black mb-6 tracking-tight py-[7px] my-0">
              Services
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 md:gap-12">
            {services.map((service, index) => {
            const IconComponent = service.icon;
            return <div key={index} className={`text-center group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
              transitionDelay: `${index * 200}ms`
            }}>
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-slate-50 rounded-2xl group-hover:bg-slate-100 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                    <IconComponent size={24} className="text-slate-600 group-hover:text-slate-800 transition-all duration-300 group-hover:scale-110 icon-float" strokeWidth={1.5} style={{
                  animationDelay: `${index * 0.2}s`
                }} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-light text-black mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-500 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>;
          })}
          </div>
        </div>
      </div>
    </section>;
};
export default Services;