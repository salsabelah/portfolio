import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
const DigitalArt = () => {
  const [scrollY, setScrollY] = useState(0);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [projectImageIndexes, setProjectImageIndexes] = useState<{
    [key: number]: number;
  }>({});
  const {
    ref,
    isVisible
  } = useIntersectionObserver();
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when overlay is open
  // Prevent scrolling when overlay is open and handle ESC key
  useEffect(() => {
    if (selectedProject !== null) {
      document.body.style.overflow = 'hidden';
      
      const handleEscKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          closeProject();
        }
      };
      
      document.addEventListener('keydown', handleEscKey);
      return () => {
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleEscKey);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);
  const projects = [{
    id: 1,
    title: "Palestinian Patterns",
    role: "Pattern Design & Cultural Illustration",
    description: "Comprehensive collection of traditional Palestinian patterns reimagined for modern applications.",
    tools: ["Procreate", "Adobe Photoshop"],
    mainImage: "/lovable-uploads/36359741-0a7e-4923-9455-b58942d44a13.png",
    // Big pomegranate pattern
    projectImages: [
    // Pomegranate Pattern Section
    "/lovable-uploads/36359741-0a7e-4923-9455-b58942d44a13.png", "/lovable-uploads/b992390c-8e80-4662-8e4b-4535a782a84b.png", "/lovable-uploads/3384f53c-b053-4037-b22b-5039002b4493.png", "/lovable-uploads/18166979-bf05-46a5-805b-88001a213c07.png",
    // Cactus Pattern Section
    "/lovable-uploads/07983918-2be7-4c8c-bc3c-60ecb2652e8f.png", "/lovable-uploads/3560b782-4c04-41be-a709-eda941b5794e.png", "/lovable-uploads/8f16d63e-5feb-44b5-8abb-d9a5ac313107.png", "/lovable-uploads/fdd964b4-f804-44d6-b138-50d598f92de7.png",
    // Fig Pattern Section
    "/lovable-uploads/20078dc1-20ff-4a74-b6d5-de2f15950b84.png", "/lovable-uploads/11e7bbd9-e2a8-4cc9-860d-977f5334de62.png", "/lovable-uploads/efdd933e-cb78-4801-8a08-71719358072d.png", "/lovable-uploads/3350d8b6-cf16-4ca1-a753-4bb27d847a99.png"],
    tags: ["Pattern Design", "Cultural Heritage", "Textile Design"],
    patternSections: {
      pomegranate: {
        title: "Pomegranate Pattern",
        description: "Traditional pomegranate patterns celebrating fertility and abundance, each seed a symbol of life's countless possibilities and infinite blessings.",
        images: ["/lovable-uploads/36359741-0a7e-4923-9455-b58942d44a13.png", "/lovable-uploads/b992390c-8e80-4662-8e4b-4535a782a84b.png", "/lovable-uploads/3384f53c-b053-4037-b22b-5039002b4493.png", "/lovable-uploads/18166979-bf05-46a5-805b-88001a213c07.png"]
      },
      cactus: {
        title: "Cactus Pattern",
        description: "Contemporary cactus patterns embodying steadfastness, resilience, and patience—enduring symbols of survival against overwhelming odds.",
        images: ["/lovable-uploads/07983918-2be7-4c8c-bc3c-60ecb2652e8f.png", "/lovable-uploads/3560b782-4c04-41be-a709-eda941b5794e.png", "/lovable-uploads/8f16d63e-5feb-44b5-8abb-d9a5ac313107.png", "/lovable-uploads/fdd964b4-f804-44d6-b138-50d598f92de7.png"]
      },
      fig: {
        title: "Fig Pattern",
        description: "Elegant fig patterns representing the ability to preserve and cherish life's harvest throughout the year, celebrating sustenance and enduring cultural memory.",
        images: ["/lovable-uploads/20078dc1-20ff-4a74-b6d5-de2f15950b84.png", "/lovable-uploads/11e7bbd9-e2a8-4cc9-860d-977f5334de62.png", "/lovable-uploads/efdd933e-cb78-4801-8a08-71719358072d.png", "/lovable-uploads/3350d8b6-cf16-4ca1-a753-4bb27d847a99.png"]
      }
    }
  }, {
    id: 2,
    title: "Palestinian Heritage Illustrations",
    role: "Personal Digital Art & Cultural Heritage",
    description: "Personal artworks celebrating Palestinian culture, preserving memories and traditions through visual art.",
    tools: ["Adobe Photoshop", "Procreate"],
    mainImage: "/lovable-uploads/64de7d8e-2587-4723-9e1b-66afe15b0882.png",
    projectImages: ["/lovable-uploads/64de7d8e-2587-4723-9e1b-66afe15b0882.png", "/lovable-uploads/a2b912e3-4658-4028-9325-62e564a57e7b.png"],
    tags: ["Palestinian Heritage", "Cultural Illustration", "Digital Art"],
    backgroundColor: "black",
    sections: {
      ladybug: {
        title: "Palestinian Ladybug & Jasmine",
        description: "A nostalgic childhood memory featuring the beloved ladybug among fragrant jasmine flowers",
        images: ["/lovable-uploads/64de7d8e-2587-4723-9e1b-66afe15b0882.png"]
      },
      kaak: {
        title: "Traditional Palestinian Ka'ak",
        description: "A tribute to the traditional Palestinian ka'ak bread, beloved staple of Palestinian breakfast culture",
        images: ["/lovable-uploads/a2b912e3-4658-4028-9325-62e564a57e7b.png"]
      }
    }
  }, {
    id: 3,
    title: "Watermello",
    role: "Brand Design & Apparel Graphics",
    description: "Vibrant brand identity and apparel graphics celebrating Palestinian heritage and cultural unity.",
    tools: ["Adobe Photoshop", "Procreate"],
    mainImage: "/lovable-uploads/d562ebc0-7797-40b1-acaa-7b68d2a8579a.png",
    // 5th image - colorful fruit designs
    projectImages: ["/lovable-uploads/6117cb61-2785-46a6-97c4-58712e4e7368.png",
    // 1st - Logo/symbol
    "/lovable-uploads/c3759a62-4254-408c-b058-2b5e0ff1782d.png",
    // 2nd - Traditional food designs
    "/lovable-uploads/8b7a9a8e-de18-4251-b2a3-7f42cbd96878.png",
    // 3rd - Pomegranate peace symbol
    "/lovable-uploads/94d3451c-d770-4ae1-b8fd-f57cfe0f59c9.png",
    // 4th - Cultural symbols with Arabic text
    "/lovable-uploads/8fe07427-f10f-4609-a9e7-55a2a99df93a.png",
    // 5th - Colorful fruit designs
    "/lovable-uploads/3339a013-c429-4555-a514-8fa6f6b6be67.png",
    // 6th - Palestine luggage tag design
    "/lovable-uploads/a3bc2efa-6b5f-4bdd-b986-36bddbef7aa3.png",
    // 7th - Watermelon phases design
    "/lovable-uploads/a1743e00-fd2a-44a9-a511-3686b640eca3.png",
    // 8th - Palestinian breakfast design
    "/lovable-uploads/6a6e2390-eb8b-4e2d-afb0-24a714afa75c.png",
    // 9th - Eye design
    "/lovable-uploads/23cc252b-67f9-4130-9c1d-2b791bfc3208.png",
    // 10th - Colorful grid design
    "/lovable-uploads/cdd198ce-302c-4b93-a70d-922b9815b383.png",
    // 11th - Red watermelon "OF UNITY" t-shirt
    "/lovable-uploads/9a3a332a-6782-4bd3-a257-a7dffc29be02.png",
    // 12th - Palestinian symbols and "ROOTS" t-shirts
    "/lovable-uploads/2a563111-9c79-4c1e-9a07-5499ed432933.png",
    // 13th - Red poppy flowers t-shirt
    "/lovable-uploads/29a9a97b-1a78-43c9-a174-e9af5df4308b.png" // 14th - Watermello logo on dark background
    ],
    tags: ["Apparel Graphics", "Cultural Design", "Palestinian Heritage"],
    backgroundColor: "black"
  }, {
    id: 4,
    title: "Canaany",
    role: "Brand Illustration & T-shirt Design",
    description: "Visual identity and clothing line translating Palestinian musical heritage into contemporary wearable design.",
    tools: ["Adobe Photoshop", "Procreate"],
    mainImage: "/lovable-uploads/0347c57d-a499-415b-a6a0-f11672b1f366.png",
    // Canaany logo
    projectImages: ["/lovable-uploads/bcdb17ec-88fc-4d45-a0b1-89cf4478d3fa.png", "/lovable-uploads/ab4cded8-5ecf-4bae-8ec1-933716c0a77a.png", "/lovable-uploads/3b346664-6712-488a-8237-a2e0ebf94eba.png", "/lovable-uploads/540c85d7-94ce-4679-acb4-017753b327f8.png", "/lovable-uploads/15c00b08-e2ef-4437-b57c-702923deb5f9.png", "/lovable-uploads/f4dd8d9e-d240-4099-ab55-d67fd275f9ed.png", "/lovable-uploads/f61f913c-0898-4672-9630-8fbdeb86380f.png", "/lovable-uploads/3bc6882e-deca-4110-80c1-d5985bcf83c3.png", "/lovable-uploads/dfffe914-4ae6-47eb-b5ce-73a4ef6a90d1.png", "/lovable-uploads/f66bd117-4045-4580-8147-e4fa2e3db50e.png", "/lovable-uploads/9abe607b-bc4e-454c-88cb-a65b0fda5acd.png", "/lovable-uploads/1a0acd73-1177-47ed-9006-8c51eaab69d2.png", "/lovable-uploads/27718fed-c972-48e5-9e4d-96d9691aebd2.png"],
    tags: ["Illustration", "T-shirt Design", "Cultural Design"]
  }];
  const openProject = (projectId: number) => {
    setSelectedProject(projectId);
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
  const selectedProjectData = selectedProject ? projects.find(p => p.id === selectedProject) : null;
  return <>
      <section id="digital-art" className="py-20 bg-white relative overflow-hidden md:py-[107px]">
        {/* Subtle Parallax Elements */}
        <div className="absolute top-0 right-1/4 w-1 h-32 bg-slate-100/50 transform rotate-45" style={{
        transform: `translateY(${scrollY * 0.1}px) rotate(45deg)`
      }}></div>
        <div className="absolute bottom-0 left-1/4 w-1 h-24 bg-slate-100/50 transform -rotate-45" style={{
        transform: `translateY(${-scrollY * 0.1}px) rotate(-45deg)`
      }}></div>

        <div className="container mx-auto px-8 max-w-6xl relative z-10">
          <div ref={ref} className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl font-light text-slate-600 mb-6 tracking-tight">
              Digital Art & Illustrations
            </h2>
            <p className="text-base max-w-2xl mx-auto leading-relaxed font-light text-slate-500">
              Exploring through digital painting, apparel, pattern design, and experimental art
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
                  <div className={`relative overflow-hidden mb-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${project.backgroundColor === 'black' ? 'bg-black' : 'bg-white'}`}>
                    <img src={currentImage} alt={project.title} className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105 rounded-2xl" />
                    
                    {/* Navigation Arrows */}
                    {allImages.length > 1 && <>
                        <button onClick={e => {
                    e.stopPropagation();
                    prevProjectImage(project.id, allImages.length);
                  }} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                          <ChevronLeft size={16} />
                        </button>
                        <button onClick={e => {
                    e.stopPropagation();
                    nextProjectImage(project.id, allImages.length);
                  }} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                          <ChevronRight size={16} />
                        </button>
                      </>}
                    
                    {/* Image Indicators */}
                    {allImages.length > 1 && <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1">
                        {allImages.map((_, imgIndex) => <div key={imgIndex} className={`w-2 h-2 rounded-full transition-all duration-300 ${imgIndex === currentIndex ? 'bg-white' : 'bg-white/50'}`} />)}
                      </div>}
                  </div>
                  
                  <div className="space-y-4">
                    <div className="text-xs text-slate-400 font-light uppercase tracking-wider">
                      {project.role}
                    </div>
                    <h3 className="text-xl md:text-2xl text-black mb-3 group-hover:text-slate-600 transition-colors duration-300 font-light">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-500 mb-4 leading-relaxed font-light">
                      {project.description}
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
      {selectedProject && selectedProjectData && <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm overflow-y-auto cursor-pointer" onClick={handleBackgroundClick}>
          <div className="min-h-full cursor-default" onClick={e => e.stopPropagation()}>
            {/* Close Button */}
            <button onClick={closeProject} className="fixed top-8 right-8 z-10 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300">
              <X size={24} className="text-white" />
            </button>

            {/* Project Content */}
            <div className="max-w-5xl mx-auto p-8 pt-24" onClick={handleBackgroundClick}>
              {/* Project Header */}
              <div className="text-center mb-24" onClick={e => e.stopPropagation()}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-4 tracking-tight leading-tight">
                  {selectedProjectData.title}
                </h1>
                <div className="text-sm md:text-base text-white/60 font-light mb-8">
                  {selectedProjectData.role}
                </div>
                <p className="text-xl md:text-2xl text-white/75 leading-relaxed font-light max-w-4xl mx-auto mb-16">
                  {selectedProjectData.description}
                </p>
                
                {/* Tools Section */}
                {selectedProjectData.tools && (
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
                )}
              </div>


              {/* Project Images */}
              <div className="space-y-16">
                {selectedProjectData.id === 1 && selectedProjectData.patternSections ?
            // Special layout for Palestinian Heritage Patterns
            <>
                    {/* Pomegranate Pattern Section */}
                    <div className="space-y-8" onClick={e => e.stopPropagation()}>
                      <div className="text-center">
                        <h3 className="text-3xl md:text-4xl font-extralight text-white mb-6 tracking-wide">
                          {selectedProjectData.patternSections.pomegranate.title}
                        </h3>
                        <p className="text-lg text-white/70 leading-relaxed font-light max-w-3xl mx-auto mb-12">
                          {selectedProjectData.patternSections.pomegranate.description}
                        </p>
                      </div>
                      <div className="space-y-8">
                        {selectedProjectData.patternSections.pomegranate.images.map((imageUrl, index) => <div key={index} className="flex justify-center">
                            <img src={imageUrl} alt={`Pomegranate Pattern - Image ${index + 1}`} className="max-w-4xl w-full h-auto max-h-[80vh] object-contain rounded-2xl" />
                          </div>)}
                      </div>
                    </div>


                    {/* Cactus Pattern Section */}
                    <div className="space-y-8" onClick={e => e.stopPropagation()}>
                      <div className="text-center">
                        <h3 className="text-3xl md:text-4xl font-extralight text-white mb-6 tracking-wide">
                          {selectedProjectData.patternSections.cactus.title}
                        </h3>
                        <p className="text-lg text-white/70 leading-relaxed font-light max-w-3xl mx-auto mb-12">
                          {selectedProjectData.patternSections.cactus.description}
                        </p>
                      </div>
                      <div className="space-y-8">
                        {selectedProjectData.patternSections.cactus.images.map((imageUrl, index) => <div key={index} className="flex justify-center">
                            <img src={imageUrl} alt={`Cactus Pattern - Image ${index + 1}`} className="max-w-4xl w-full h-auto max-h-[80vh] object-contain rounded-2xl" />
                          </div>)}
                      </div>
                    </div>


                    {/* Fig Pattern Section */}
                    <div className="space-y-8" onClick={e => e.stopPropagation()}>
                      <div className="text-center">
                        <h3 className="text-3xl md:text-4xl font-extralight text-white mb-6 tracking-wide">
                          {selectedProjectData.patternSections.fig.title}
                        </h3>
                        <p className="text-lg text-white/70 leading-relaxed font-light max-w-3xl mx-auto mb-12">
                          {selectedProjectData.patternSections.fig.description}
                        </p>
                      </div>
                      <div className="space-y-8">
                        {selectedProjectData.patternSections.fig.images.map((imageUrl, index) => <div key={index} className="flex justify-center">
                            <img src={imageUrl} alt={`Fig Pattern - Image ${index + 1}`} className="max-w-4xl w-full h-auto max-h-[80vh] object-contain rounded-2xl" />
                          </div>)}
                      </div>
                    </div>
                  </> : selectedProjectData.id === 2 && selectedProjectData.sections ?
            // Special layout for Palestinian Heritage Illustrations
            <>
                    {/* Ladybug Section */}
                    <div className="space-y-8" onClick={e => e.stopPropagation()}>
                      <div className="text-center">
                        <h3 className="text-2xl font-light text-white mb-4 tracking-tight">
                          {selectedProjectData.sections.ladybug.title}
                        </h3>
                        <p className="text-slate-200 leading-relaxed font-light max-w-2xl mx-auto mb-8">
                          {selectedProjectData.sections.ladybug.description}
                        </p>
                      </div>
                      <div className="space-y-8">
                        {selectedProjectData.sections.ladybug.images.map((imageUrl, index) => <div key={index} className="flex justify-center">
                            <img src={imageUrl} alt={`Palestinian Ladybug & Jasmine - Image ${index + 1}`} className="max-w-4xl w-full h-auto max-h-[80vh] object-contain rounded-2xl" />
                          </div>)}
                      </div>
                    </div>


                    {/* Ka'ak Section */}
                    <div className="space-y-8" onClick={e => e.stopPropagation()}>
                      <div className="text-center">
                        <h3 className="text-2xl font-light text-white mb-4 tracking-tight">
                          {selectedProjectData.sections.kaak.title}
                        </h3>
                        <p className="text-slate-200 leading-relaxed font-light max-w-2xl mx-auto mb-8">
                          {selectedProjectData.sections.kaak.description}
                        </p>
                      </div>
                      <div className="space-y-8">
                        {selectedProjectData.sections.kaak.images.map((imageUrl, index) => <div key={index} className="flex justify-center">
                            <img src={imageUrl} alt={`Traditional Palestinian Ka'ak - Image ${index + 1}`} className="max-w-4xl w-full h-auto max-h-[80vh] object-contain rounded-2xl" />
                          </div>)}
                      </div>
                    </div>
                  </> :
            // Default layout for other projects
            selectedProjectData.projectImages.map((imageUrl, index) => <div key={index} className="flex justify-center" onClick={e => e.stopPropagation()}>
                      <img src={imageUrl} alt={`${selectedProjectData.title} - Image ${index + 1}`} className="max-w-4xl w-full h-auto max-h-[80vh] object-contain rounded-2xl" />
                    </div>)}
              </div>

              {/* Project Tags */}
              <div className="flex flex-wrap justify-center gap-3 mt-20 mb-8" onClick={e => e.stopPropagation()}>
                {selectedProjectData.tags.map(tag => <span key={tag} className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 text-sm font-light uppercase tracking-wider rounded-full border border-white/20">
                    {tag}
                  </span>)}
              </div>
            </div>
          </div>
        </div>}
    </>;
};
export default DigitalArt;