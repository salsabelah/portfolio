import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Sketchbook = () => {
  const [selectedSketch, setSelectedSketch] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const {
    ref,
    isVisible
  } = useIntersectionObserver();

  // Prevent scrolling when overlay is open
  useEffect(() => {
    if (selectedSketch !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedSketch]);

  // Sample sketches data - reordered to separate "Unspoken" and "A Kind Soul"
  const sketches = [{
    id: 1,
    title: "Unspoken",
    image: "./lovable-uploads/8b8a1feb-c551-4f87-9663-69588859b072.png", 
    description: "Words that live in silence"
  }, {
    id: 3,
    title: "French Woman",
    image: "./lovable-uploads/74f6a855-a597-417f-9154-bf60a05a79fb.png",
    description: "Timeless elegance and grace"
  }, {
    id: 2,
    title: "A Kind Soul", 
    image: "./lovable-uploads/20a73e37-aeb5-4798-8b6d-fbf453885ebc.png",
    description: "Gentle warmth and compassion"
  }, {
    id: 4,
    title: "Vibing",
    image: "./lovable-uploads/fa40b7a2-bac0-44ea-87e7-7c8ddf06739c.png",
    description: "Pure energy and good feels"
  }, {
    id: 5,
    title: "Nostalgia",
    image: "./lovable-uploads/1fb9111f-d5f2-4f2c-a231-9c5b27e58d0a.png",
    description: "Sweet longing for yesterday"
  }, {
    id: 7,
    title: "Mind & Heart Unity",
    image: "./lovable-uploads/30b1029f-92e8-42fa-a017-d96bfe0cbbb5.png",
    description: "Perfect balance between logic and emotion"
  }, {
    id: 6,
    title: "My Dad's Jacket",
    image: "./lovable-uploads/c353387f-cc49-4963-a8e2-68c9ac48140f.png",
    description: "Comfort and protective love"
  }, {
    id: 8,
    title: "Friendship & Solidarity",
    image: "./lovable-uploads/75359ae7-09cb-4c03-81f4-c25da1a50c38.png",
    description: "Unbreakable bonds and support"
  }];

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % sketches.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + sketches.length) % sketches.length);
  };
  
  const openSketch = (sketchId: number) => {
    setSelectedSketch(sketchId);
  };
  
  const closeSketch = () => {
    setSelectedSketch(null);
  };
  
  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeSketch();
    }
  };
  
  const navigateToSketch = (direction: 'prev' | 'next') => {
    if (!selectedSketch) return;
    
    const currentIndex = sketches.findIndex(s => s.id === selectedSketch);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : sketches.length - 1;
    } else {
      newIndex = currentIndex < sketches.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedSketch(sketches[newIndex].id);
  };
  
  const selectedSketchData = selectedSketch ? sketches.find(s => s.id === selectedSketch) : null;

  // Calculate visible sketches for slider
  const getVisibleSketches = () => {
    const visibleCount = 3; // Show 3 sketches at a time
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % sketches.length;
      result.push(sketches[index]);
    }
    return result;
  };

  return <>
      <section className="py-12 bg-slate-50/20 relative overflow-hidden">
        <div className="container mx-auto px-8 max-w-6xl relative z-10">
          <div ref={ref} className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-3xl md:text-4xl font-light text-slate-600 mb-6 tracking-tight">Experimental Designs</h3>
            <p className="text-base text-slate-500 leading-relaxed font-light max-w-xl mx-auto">
              A glimpse into my raw ideas, explorations, and process sketches
            </p>
          </div>

          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent className="-ml-2 md:-ml-4">
                {sketches.map((sketch, index) => (
                  <CarouselItem key={sketch.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div 
                      className="cursor-pointer"
                      onClick={() => openSketch(sketch.id)}
                    >
                      <div className="group relative overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="aspect-[3/4] relative">
                          <img 
                            src={sketch.image} 
                            alt={sketch.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                          />
                          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                      
                      <div className="mt-3 text-center">
                        <h4 className="text-xs font-light text-slate-500 group-hover:text-slate-700 transition-colors duration-300">
                          {sketch.title}
                        </h4>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 -translate-x-4" />
              <CarouselNext className="right-0 translate-x-4" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Fullscreen Sketch Overlay */}
      {selectedSketch && selectedSketchData && <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm overflow-y-auto cursor-pointer" onClick={handleBackgroundClick}>
          <div className="min-h-full cursor-default flex items-center justify-center p-8">
            {/* Close Button */}
            <button onClick={closeSketch} className="fixed top-8 right-8 z-10 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300">
              <X size={24} className="text-white" />
            </button>

            {/* Navigation Arrows */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                navigateToSketch('prev');
              }} 
              className="fixed left-8 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                navigateToSketch('next');
              }} 
              className="fixed right-8 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight size={24} className="text-white" />
            </button>

            {/* Sketch Content */}
            <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-light text-white mb-2 tracking-tight">
                  {selectedSketchData.title}
                </h3>
                <p className="text-slate-300 font-light">
                  {selectedSketchData.description}
                </p>
              </div>

              {/* Large Sketch Image */}
              <div className="flex justify-center">
                <img src={selectedSketchData.image} alt={selectedSketchData.title} className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl" />
              </div>
            </div>
          </div>
        </div>}
    </>;
};

export default Sketchbook;