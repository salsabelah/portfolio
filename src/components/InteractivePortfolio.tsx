import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const InteractivePortfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const { ref, isVisible } = useIntersectionObserver();

  const projects = [
    {
      id: 1,
      title: "Mobarmij",
      role: "Brand Identity & Visual Design",
      description: "Developed a comprehensive brand identity for a freelance mobile developer, addressing the challenge of creating a modern, trustworthy visual system that communicates technical expertise and creativity. The solution features pixel-style typography, vibrant colors, and modular logo design inspired by coding structures, reflecting clarity in both code and communication. This identity successfully positions the developer as forward-thinking and professional while maintaining recognizability across all digital platforms.",
      mainImage: "/lovable-uploads/a0bafa56-1bf5-4af8-b144-af2a0a152716.png", // Apple Watch (Mobarmij)
      color: "from-purple-500 to-pink-500",
      projectImages: [
        "/lovable-uploads/508d37d6-8c3a-460b-bbbe-c041dad354ba.png",
        "/lovable-uploads/7617fb6e-02ac-4907-8ffd-d7985200e06d.png",
        "/lovable-uploads/52487de8-1e94-40d0-bbf0-0cc7dbda63f2.png",
        "/lovable-uploads/8433a5c5-68d2-48f0-a8af-1fa1c79917e0.png",
        "/lovable-uploads/efc93488-a9ad-4c06-b721-e6d61b4691d4.png",
        "/lovable-uploads/b54ae3fd-d1c8-44e6-a122-1dbbc9510396.png",
        "/lovable-uploads/a0bafa56-1bf5-4af8-b144-af2a0a152716.png",
        "/lovable-uploads/2efcaecd-b4b1-4ebf-bfc7-b5cdd38fe45c.png"
      ],
      tags: ["Brand Identity", "Logo Design", "Typography"],
      backgroundColor: "bg-black/95"
    },
    {
      id: 2,
      title: "Miles & Flies",
      role: "Brand Identity & Travel Design",
      description: "Created a complete visual identity system for a youth-focused travel agency, addressing the challenge of appealing to young travelers while maintaining professional credibility. The solution features vibrant colors, clean typography, and playful illustrations that capture the excitement of travel while building trust. The carefully balanced approach successfully positions the agency as both adventurous and reliable, encouraging exploration while establishing the credibility needed for a trusted travel service.",
      mainImage: "/lovable-uploads/c5ed3b47-117e-4159-8f95-408420a990e4.png", // Miles & Flies logo
      color: "from-blue-500 to-orange-500",
      projectImages: [
        "/lovable-uploads/c5ed3b47-117e-4159-8f95-408420a990e4.png",
        "/lovable-uploads/e13a15de-c1c2-40bc-ae21-67fbeb794ec9.png",
        "/lovable-uploads/93ff1fc4-caa3-4896-bca5-f34be1ff90d5.png",
        "/lovable-uploads/b92a2235-b0d1-43b2-8e66-390bcb22653d.png",
        "/lovable-uploads/716a2495-6e67-47c8-b8a7-8e1ec3c262f0.png",
        "/lovable-uploads/71d4c6de-939f-41dd-949b-84efaf6a1a04.png",
        "/lovable-uploads/3252ca12-d952-4783-87b0-9d542d817ead.png",
        "/lovable-uploads/c4ce995c-0ee8-46a5-b084-e824825ca2fd.png",
        "/lovable-uploads/51e163da-6d14-4a1a-b9bd-cc986e6505a1.png"
      ],
      tags: ["Brand Identity", "Travel Design", "Visual Identity"],
      backgroundColor: "bg-slate-900"
    },
    {
      id: 3,
      title: "Pomegranate Pattern Collection",
      role: "Pattern Design & Textile",
      description: "Developed vibrant pomegranate pattern designs that celebrate Palestinian cultural heritage, addressing the need to preserve traditional motifs through contemporary applications. The solution features hand-painted illustrations that represent abundance and prosperity, successfully applied across various mediums including textiles, stationery, and prints. This pattern collection connects cultural traditions with modern design sensibilities while making meaningful symbols accessible to diverse audiences.",
      mainImage: "/lovable-uploads/36359741-0a7e-4923-9455-b58942d44a13.png", // Big pomegranate pattern
      color: "from-red-500 to-pink-600",
      projectImages: [
        "/lovable-uploads/36359741-0a7e-4923-9455-b58942d44a13.png",
        "/lovable-uploads/3384f53c-b053-4037-b22b-5039002b4493.png",
        "/lovable-uploads/18166979-bf05-46a5-805b-88001a213c07.png"
      ],
      tags: ["Pattern Design", "Textile Design", "Illustration"],
      backgroundColor: "bg-red-900"
    },
    {
      id: 4,
      title: "Cactus Pattern Collection",
      role: "Pattern Design & Product Design",
      description: "Created playful cactus pattern designs that symbolize resilience and endurance in Palestinian culture, addressing the challenge of translating cultural meanings into contemporary design. The solution features organic shapes and earthy tones that reflect the Palestinian landscape, successfully applied across fashion, home decor, and packaging applications. These patterns effectively communicate themes of strength and persistence while appealing to modern aesthetic sensibilities.",
      mainImage: "/lovable-uploads/fdd964b4-f804-44d6-b138-50d598f92de7.png",
      color: "from-green-500 to-orange-600",
      projectImages: [
        "/lovable-uploads/07983918-2be7-4c8c-bc3c-60ecb2652e8f.png",
        "/lovable-uploads/8f16d63e-5feb-44b5-8abb-d9a5ac313107.png",
        "/lovable-uploads/fdd964b4-f804-44d6-b138-50d598f92de7.png"
      ],
      tags: ["Pattern Design", "Product Design", "Fashion"],
      backgroundColor: "bg-green-800"
    },
    {
      id: 5,
      title: "Fig Pattern Collection",
      role: "Pattern Design & Print Design",
      description: "Designed elegant fig patterns inspired by the sweetness and richness of Palestinian heritage, addressing the need to celebrate cultural symbols through sophisticated design. The solution features rich burgundy and green tones that reflect the natural beauty of Palestinian landscapes, successfully showcased across print materials, posters, and accessories. These patterns effectively bridge traditional cultural significance with contemporary aesthetic appeal.",
      mainImage: "/lovable-uploads/836dc985-c302-4548-8954-c21f06996c26.png",
      color: "from-purple-500 to-red-600",
      projectImages: [
        "/lovable-uploads/bc83e371-0b3d-4d9f-bc81-6dc58827598d.png",
        "/lovable-uploads/07314046-7b6b-4b01-ae73-6d01c253b030.png",
        "/lovable-uploads/836dc985-c302-4548-8954-c21f06996c26.png"
      ],
      tags: ["Pattern Design", "Print Design", "Accessories"],
      backgroundColor: "bg-purple-900"
    },
    {
      id: 6,
      title: "Canaany",
      role: "Brand Illustration & T-shirt Design",
      description: "Developed a complete visual identity and clothing line for Canaany, a Palestinian musician's brand, addressing the challenge of translating musical heritage into compelling visual language. The solution features illustrations inspired by traditional Arabic and Palestinian songs, incorporating poetic lyrics that reflect themes of resilience, heritage, and cultural identity. This comprehensive approach successfully created a visual language that authentically represents Palestinian musical heritage while appealing to contemporary audiences, establishing Canaany as a meaningful cultural brand.",
      mainImage: "/lovable-uploads/bcdb17ec-88fc-4d45-a0b1-89cf4478d3fa.png", // Canaany logo
      color: "from-amber-900 to-stone-900",
      projectImages: [
        "/lovable-uploads/bcdb17ec-88fc-4d45-a0b1-89cf4478d3fa.png",
        "/lovable-uploads/ab4cded8-5ecf-4bae-8ec1-933716c0a77a.png",
        "/lovable-uploads/3b346664-6712-488a-8237-a2e0ebf94eba.png",
        "/lovable-uploads/540c85d7-94ce-4679-acb4-017753b327f8.png",
        "/lovable-uploads/15c00b08-e2ef-4437-b57c-702923deb5f9.png",
        "/lovable-uploads/f4dd8d9e-d240-4099-ab55-d67fd275f9ed.png",
        "/lovable-uploads/f61f913c-0898-4672-9630-8fbdeb86380f.png",
        "/lovable-uploads/3bc6882e-deca-4110-80c1-d5985bcf83c3.png",
        "/lovable-uploads/dfffe914-4ae6-47eb-b5ce-73a4ef6a90d1.png",
        "/lovable-uploads/f66bd117-4045-4580-8147-e4fa2e3db50e.png",
        "/lovable-uploads/9abe607b-bc4e-454c-88cb-a65b0fda5acd.png",
        "/lovable-uploads/1a0acd73-1177-47ed-9006-8c51eaab69d2.png",
        "/lovable-uploads/27718fed-c972-48e5-9e4d-96d9691aebd2.png"
      ],
      tags: ["Brand Identity", "Illustration", "T-shirt Design", "Cultural Design"],
      backgroundColor: "#35312e"
    }
   ];

  const openProject = (projectId: number) => {
    setSelectedProject(projectId);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const selectedProjectData = selectedProject ? projects.find(p => p.id === selectedProject) : null;

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

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-8 max-w-7xl">
        <div 
          ref={ref}
          className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-extralight text-black mb-6 tracking-tight">
            Interactive Portfolio
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
            Experience our work in a more dynamic way - hover, scroll, and interact with each project.
          </p>
        </div>

        {/* Carousel Layout */}
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div 
                  className={`group cursor-pointer transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => openProject(project.id)}
                >
                  {/* Card with gradient overlay */}
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`}></div>
                    
                    <img 
                      src={project.mainImage} 
                      alt={project.title}
                      className="w-full h-96 object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Floating info card */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <div className="text-xs text-slate-400 font-light uppercase tracking-wider mb-1">
                        {project.role}
                      </div>
                      <h3 className="text-lg font-light text-black mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-light line-clamp-2">
                        {project.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mt-3">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span 
                            key={tag}
                            className="bg-slate-100 text-slate-500 px-2 py-1 text-xs font-light rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 2 && (
                          <span className="text-xs text-slate-400 px-2 py-1">
                            +{project.tags.length - 2}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Number indicator */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-sm font-light text-black">
                      {index + 1}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-3 text-sm uppercase tracking-wider font-light hover:bg-slate-800 transition-colors duration-300 rounded-full">
            View All Projects
          </button>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && selectedProjectData && (
        <div 
          className="fixed inset-0 z-50 backdrop-blur-sm overflow-y-auto" 
          style={{ backgroundColor: selectedProjectData.backgroundColor.startsWith('#') ? selectedProjectData.backgroundColor : undefined }}
          onClick={handleBackdropClick}
        >
          <div 
            className={`max-w-5xl mx-auto px-6 py-16 ${!selectedProjectData.backgroundColor.startsWith('#') ? selectedProjectData.backgroundColor : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
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
              <p className="text-lg md:text-xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
                {selectedProjectData.description}
              </p>
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
        </div>
      )}
    </section>
  );
};

export default InteractivePortfolio;
