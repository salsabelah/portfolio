import React, { useEffect, useState, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [projectImageIndexes, setProjectImageIndexes] = useState<{
    [key: number]: number;
  }>({});
  const {
    ref,
    isVisible
  } = useIntersectionObserver();

  // Touch/drag state for each project
  const [touchState, setTouchState] = useState<{
    [key: number]: {
      startX: number;
      startY: number;
      isDragging: boolean;
      isMouseDown: boolean;
    };
  }>({});
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when overlay is open
  useEffect(() => {
    if (selectedProject !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);
  const projects = [{
    id: 1,
    title: "Mobarmij",
    caption: "A modern identity system reflecting innovation and functionality.",
    role: "Brand Identity & Visual Design",
    description: "Developed a comprehensive brand identity for Mobarmij, a mobile and web developer, that combines clean typography, a versatile color palette, and modular logo design inspired by coding structures. The project tackled the challenge of creating a modern, trustworthy visual system adaptable across digital platforms while communicating both technical expertise and creative innovation. The resulting identity successfully positions Mobarmij as a forward-thinking developer with recognizable, consistent branding across all touchpoints.",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    mainImage: "./portfolio/mobarmij/main.png",
    projectImages: ["./portfolio/mobarmij/image-1.png", "./portfolio/mobarmij/image-2.png", "./portfolio/mobarmij/image-3.png", "./portfolio/mobarmij/image-4.png", "./portfolio/mobarmij/image-5.png", "./portfolio/mobarmij/image-6.png", "./portfolio/mobarmij/image-7.png", "./portfolio/mobarmij/image-8.png"],
    tags: ["Brand Identity", "Logo Design", "Typography"],
    backgroundColor: "bg-black/95"
  }, {
    id: 2,
    title: "Miles and Flies",
    caption: "A vibrant and trustworthy identity designed to inspire young travelers.",
    role: "Brand Identity Design",
    description: "Created a complete visual identity for Miles and Flies, a youth-focused travel agency, addressing the challenge of appealing to young travelers while maintaining professional credibility. The solution features dynamic branding built around youthful colors, clean typography, and playful design elements that capture travel excitement. The carefully balanced palette combines vibrancy with professionalism, encouraging exploration while establishing trust. This identity successfully positions Miles and Flies as both adventurous and reliable—perfect for youth adventure.",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
    mainImage: "./portfolio/miles-and-flies/main.png",
    projectImages: ["./portfolio/miles-and-flies/image-1.png", "./portfolio/miles-and-flies/image-2.png", "./portfolio/miles-and-flies/image-3.png", "./portfolio/miles-and-flies/image-4.png", "./portfolio/miles-and-flies/image-5.png", "./portfolio/miles-and-flies/image-6.png", "./portfolio/miles-and-flies/image-7.png", "./portfolio/miles-and-flies/image-8.png", "./portfolio/miles-and-flies/image-9.png"],
    tags: ["Branding", "Identity", "Travel"],
    backgroundColor: "bg-black/95"
  }, {
    id: 3,
    title: "Oyoun Media",
    caption: "Engaging visual content and character design for advertising agency.",
    role: "Social Media & Character Design",
    description: "Designed engaging visual content and character illustrations for Oyoun Media, an advertising agency seeking to enhance their social media presence and client campaigns. The project required creating distinctive character designs and social media templates that would boost brand engagement while maintaining consistency with existing brand guidelines. The solution blended creativity with strategic communication, developing original character illustrations and templates that resonate with target audiences. The result was a 40% increase in social media engagement and a recognizable visual style that strengthened Oyoun Media's market position.",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Procreate"],
    mainImage: "./portfolio/oyoun-media/main.png",
    projectImages: ["./portfolio/oyoun-media/image-1.png", "./portfolio/oyoun-media/image-2.png", "./portfolio/oyoun-media/image-3.png", "./portfolio/oyoun-media/image-4.png", "./portfolio/oyoun-media/image-5.png"],
    tags: ["Social Media", "Character Design", "Advertising"],
    backgroundColor: "bg-black/95"
  }, {
    id: 4,
    title: "Palestina Reaction",
    caption: "Bold typographic poster design for solidarity event in Barcelona.",
    role: "Poster Design & Visual Communication",
    description: "Created impactful visual communication for Palestina Reaction, a solidarity event for Palestine in Barcelona, requiring powerful poster design that would effectively communicate solidarity while remaining culturally sensitive and visually striking. The solution features bold typographic design with a digitally illustrated pomegranate as the central element, extended across print materials and merchandise as a symbol of solidarity.",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Procreate"],
    mainImage: "./portfolio/palestina-reaction/main.png",
    projectImages: ["./portfolio/palestina-reaction/image-1.png", "./portfolio/palestina-reaction/image-2.png", "./portfolio/palestina-reaction/image-3.png", "./portfolio/palestina-reaction/image-4.png", "./portfolio/palestina-reaction/image-5.png"],
    tags: ["Poster Design", "Event Design", "Visual Communication"],
    backgroundColor: "bg-black/95"
  }];
  const openProject = (projectId: number) => {
    setSelectedProject(projectId);
  };
  
  // Handle Esc key press
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedProject) {
        closeProject();
      }
    };

    if (selectedProject) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [selectedProject]);

  // Handle click outside modal
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeProject();
    }
  };

  const closeProject = () => {
    setSelectedProject(null);
  };
  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeProject();
    }
  };
  const nextProjectImage = (projectId: number, totalImages: number) => {
    setProjectImageIndexes(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages
    }));
  };
  const prevProjectImage = (projectId: number, totalImages: number) => {
    setProjectImageIndexes(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages
    }));
  };
  const getCurrentImage = (project: any) => {
    const currentIndex = projectImageIndexes[project.id] || 0;
    const allImages = [project.mainImage, ...project.projectImages];
    return allImages[currentIndex];
  };

  // Touch/drag handlers for project image navigation
  const handleTouchStart = (e: React.TouchEvent, projectId: number) => {
    e.stopPropagation();
    const touch = e.touches[0];
    setTouchState(prev => ({
      ...prev,
      [projectId]: {
        startX: touch.clientX,
        startY: touch.clientY,
        isDragging: false,
        isMouseDown: false
      }
    }));
  };

  const handleTouchMove = (e: React.TouchEvent, projectId: number) => {
    e.stopPropagation();
    const touch = e.touches[0];
    const state = touchState[projectId];
    if (!state) return;

    const deltaX = touch.clientX - state.startX;
    const deltaY = touch.clientY - state.startY;
    
    // Only start dragging if horizontal movement is greater than vertical
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
      setTouchState(prev => ({
        ...prev,
        [projectId]: { ...state, isDragging: true }
      }));
    }
  };

  const handleTouchEnd = (e: React.TouchEvent, projectId: number, totalImages: number) => {
    e.stopPropagation();
    const state = touchState[projectId];
    if (!state || !state.isDragging) return;

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - state.startX;
    const threshold = 50; // Minimum distance to trigger swipe

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        prevProjectImage(projectId, totalImages);
      } else {
        nextProjectImage(projectId, totalImages);
      }
    }

    setTouchState(prev => ({
      ...prev,
      [projectId]: { ...state, isDragging: false }
    }));
  };

  // Mouse handlers for desktop drag
  const handleMouseDown = (e: React.MouseEvent, projectId: number) => {
    e.stopPropagation();
    setTouchState(prev => ({
      ...prev,
      [projectId]: {
        startX: e.clientX,
        startY: e.clientY,
        isDragging: false,
        isMouseDown: true
      }
    }));
  };

  const handleMouseMove = (e: React.MouseEvent, projectId: number) => {
    e.stopPropagation();
    const state = touchState[projectId];
    if (!state || !state.isMouseDown) return;

    const deltaX = e.clientX - state.startX;
    const deltaY = e.clientY - state.startY;
    
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
      setTouchState(prev => ({
        ...prev,
        [projectId]: { ...state, isDragging: true }
      }));
    }
  };

  const handleMouseUp = (e: React.MouseEvent, projectId: number, totalImages: number) => {
    e.stopPropagation();
    const state = touchState[projectId];
    if (!state) return;

    if (state.isDragging) {
      const deltaX = e.clientX - state.startX;
      const threshold = 50;

      if (Math.abs(deltaX) > threshold) {
        if (deltaX > 0) {
          prevProjectImage(projectId, totalImages);
        } else {
          nextProjectImage(projectId, totalImages);
        }
      }
    }

    setTouchState(prev => ({
      ...prev,
      [projectId]: { ...state, isDragging: false, isMouseDown: false }
    }));
  };

  const handleMouseLeave = (e: React.MouseEvent, projectId: number) => {
    setTouchState(prev => ({
      ...prev,
      [projectId]: { ...prev[projectId], isDragging: false, isMouseDown: false }
    }));
  };
  const selectedProjectData = selectedProject ? projects.find(p => p.id === selectedProject) : null;
  return <>
      <section id="portfolio" className="py-20 bg-slate-50/30 relative overflow-hidden md:py-0">
        {/* Subtle Parallax Elements */}
        <div className="absolute top-0 left-1/4 w-1 h-32 bg-slate-100/50 transform rotate-45" style={{
        transform: `translateY(${scrollY * 0.1}px) rotate(45deg)`
      }}></div>
        <div className="absolute bottom-0 right-1/4 w-1 h-24 bg-slate-100/50 transform -rotate-45" style={{
        transform: `translateY(${-scrollY * 0.1}px) rotate(-45deg)`
      }}></div>

        <div className="container mx-auto px-8 max-w-6xl relative z-10 py-0">
          <div ref={ref} className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl font-light text-slate-600 mb-6 tracking-tight">
              Graphic Design
            </h2>
            <p className="text-base max-w-2xl mx-auto leading-relaxed font-light text-slate-500">
              Brand identities, visual systems, and communication design projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {projects.map((project, index) => {
            const currentIndex = projectImageIndexes[project.id] || 0;
            const allImages = [project.mainImage, ...project.projectImages];
            const currentImage = allImages[currentIndex];
            return <div key={project.id} className={`group cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
              transitionDelay: `${index * 100}ms`
            }} onClick={() => openProject(project.id)}>
                  <div 
                    className="relative overflow-hidden bg-white mb-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 select-none"
                    onTouchStart={(e) => handleTouchStart(e, project.id)}
                    onTouchMove={(e) => handleTouchMove(e, project.id)}
                    onTouchEnd={(e) => handleTouchEnd(e, project.id, allImages.length)}
                    onMouseDown={(e) => handleMouseDown(e, project.id)}
                    onMouseMove={(e) => handleMouseMove(e, project.id)}
                    onMouseUp={(e) => handleMouseUp(e, project.id, allImages.length)}
                    onMouseLeave={(e) => handleMouseLeave(e, project.id)}
                  >
                    <img 
                      src={currentImage} 
                      alt={project.title} 
                      className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105 rounded-2xl pointer-events-none" 
                      draggable={false}
                    />
                    
                    {/* Navigation Arrows - Secondary navigation */}
                    {allImages.length > 1 && <>
                        <button onClick={e => {
                    e.stopPropagation();
                    prevProjectImage(project.id, allImages.length);
                  }} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-80 transition-all duration-300 z-10 text-sm">
                          <ChevronLeft size={14} />
                        </button>
                        <button onClick={e => {
                    e.stopPropagation();
                    nextProjectImage(project.id, allImages.length);
                  }} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-80 transition-all duration-300 z-10 text-sm">
                          <ChevronRight size={14} />
                        </button>
                      </>}
                    
                    {/* Image Indicators */}
                    {allImages.length > 1 && <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1">
                        {allImages.map((_, imgIndex) => <div key={imgIndex} className={`w-2 h-2 rounded-full transition-all duration-300 ${imgIndex === currentIndex ? 'bg-white' : 'bg-white/50'}`} />)}
                      </div>}
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl text-black mb-2 group-hover:text-slate-600 transition-colors duration-300 md:text-2xl font-light">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-500 mb-4 leading-relaxed font-light">
                      {project.caption}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => <span key={tag} className="bg-slate-100 text-slate-500 px-3 py-1 text-xs font-light uppercase tracking-wider rounded-full shadow-sm">
                          {tag}
                        </span>)}
                    </div>
                  </div>
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* Fullscreen Project Overlay */}
      {selectedProject && selectedProjectData && <div 
          className={`fixed inset-0 z-50 ${selectedProjectData.backgroundColor} backdrop-blur-sm overflow-y-auto`} 
          onClick={handleBackdropClick}
        >
          <div 
            className="max-w-5xl mx-auto px-6 py-16" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={closeProject} 
              className="fixed top-6 right-6 z-10 bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 group"
            >
              <X size={20} className="text-white group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Header Section */}
            <header className="text-center mb-20 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-4 tracking-tight leading-[0.9]">
                {selectedProjectData.title}
              </h1>
              <div className="text-sm md:text-base text-white/60 font-light mb-8">
                {selectedProjectData.role}
              </div>
              <p className="text-lg md:text-xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed mb-12">
                {selectedProjectData.description}
              </p>
              
              {/* Tools Section */}
              <div className="text-center">
                <h3 className="text-sm font-medium text-white/60 uppercase tracking-wider mb-4">Tools Used</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {selectedProjectData.tools.map(tool => (
                    <span key={tool} className="bg-white/5 backdrop-blur-sm text-white/90 px-4 py-2 text-sm font-light rounded-full border border-white/10">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </header>

            {/* Project Gallery */}
            <main className="space-y-12 mb-20">
              {selectedProjectData.projectImages.map((imageUrl, index) => (
                <div key={index} className="group">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                    <img 
                      src={imageUrl} 
                      alt={`${selectedProjectData.title} - Image ${index + 1}`}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
              ))}
            </main>

            {/* Footer Section */}
            <footer className="text-center max-w-3xl mx-auto">
              
              <div className="flex flex-wrap justify-center gap-4">
                {selectedProjectData.tags.map((tag, index) => (
                  <span 
                    key={tag}
                    className="bg-white/5 backdrop-blur-sm text-white/90 px-6 py-3 text-sm font-light tracking-wide rounded-full border border-white/10 hover:bg-white/10 transition-colors duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </footer>
          </div>
        </div>}
    </>;
};
export default Portfolio;