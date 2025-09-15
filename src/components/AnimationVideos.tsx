import React from 'react';

const AnimationVideos = () => {
  const videos = [
    {
      id: 1,
      title: "Filastiniyat – Working Women During COVID",
      description: "An animation created for Filastiniyat, a dedicated media organization empowering Palestinian women and youth through storytelling, media training, and community advocacy. This video highlights the struggles faced by women working from home during the COVID-19 pandemic, balancing household responsibilities with demanding professional duties.",
      vimeoId: "679518285",
      aspectRatio: "aspect-video",
      tools: ["After Effects", "Illustrator", "Photoshop"]
    },
    {
      id: 2,
      title: "Experimental Loop – Smoking",
      description: "A personal frame-by-frame animation project made using Procreate. This experimental video explores the act of smoking, depicting someone rolling a cigarette and then unrolling it back as they change their mind. The piece is designed as an endless seamless loop.",
      vimeoId: "683853531",
      aspectRatio: "aspect-square",
      tools: ["Procreate", "After Effects"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-slate-600 mb-6 tracking-tight">
            Animation & Motion Design
          </h2>
          <p className="text-base max-w-2xl mx-auto leading-relaxed font-light text-slate-500">
            Motion graphics and experimental animation projects
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-16">
          {videos.map((video, index) => (
            <div key={video.id} className="space-y-8">
              <div className={`relative ${video.aspectRatio} w-full ${video.aspectRatio === 'aspect-square' ? 'max-w-2xl mx-auto' : ''} rounded-lg overflow-hidden shadow-lg`}>
                <iframe 
                  src={`https://player.vimeo.com/video/${video.vimeoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`} 
                  className="absolute top-0 left-0 w-full h-full" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
                  title={video.title}
                />
              </div>
              
              <div className="bg-card rounded-lg p-8 shadow-sm border">
                <h3 className="text-2xl mb-4 text-slate-600 md:text-2xl font-normal">
                  {video.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  {video.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {video.tools.map((tool, toolIndex) => (
                    <span 
                      key={toolIndex} 
                      className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full font-light"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AnimationVideos;