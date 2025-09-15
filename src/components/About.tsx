
import React from 'react';
import { Download, Award, Users, Briefcase } from 'lucide-react';

const About = () => {
  const skills = [
    "Adobe Creative Suite",
    "Figma & Sketch",
    "Cinema 4D",
    "After Effects",
    "Procreate",
    "Brand Strategy",
    "Typography",
    "Color Theory"
  ];

  return (
    <section id="about" className="py-32 bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-6xl font-light text-slate-800 mb-10 tracking-wide">
            About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
            A passionate creative professional crafting visual stories that connect and inspire.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-24">
          <div className="space-y-10 text-lg text-slate-600 leading-relaxed font-light text-center">
            <p>
              I'm a Palestinian graphic designer and illustrator based in Barcelona, Spain. 
              My work spans across brand identity, digital illustration, and experimental design, 
              with a focus on storytelling through visual communication.
            </p>
            <p>
              I believe design should be purposeful and meaningful. Whether creating brand identities 
              that capture the essence of a business or illustrations that preserve cultural heritage, 
              I approach each project with intention and care.
            </p>
            <p>
              My designs often reflect themes of identity, resilience, and cultural celebration, 
              drawing inspiration from my Palestinian roots and contemporary design practices.
            </p>
          </div>

          <div className="text-center mt-16">
            <a 
              href="/salsabelah-cv.pdf" 
              download="Salsabelah_Anabtawi_CV.pdf"
              className="bg-purple-400 text-white px-12 py-6 rounded-full hover:bg-purple-500 transition-all duration-700 transform hover:scale-105 font-light text-lg flex items-center gap-4 mx-auto shadow-xl hover:shadow-2xl"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-3xl p-12 lg:p-16">
            <h3 className="text-3xl font-light text-slate-800 mb-12 text-center tracking-wide">Skills & Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <div 
                  key={skill}
                  className="bg-white text-slate-700 px-6 py-5 rounded-2xl text-center font-light hover:bg-purple-50 hover:text-purple-700 transition-all duration-500 shadow-sm hover:shadow-md transform hover:scale-105"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
