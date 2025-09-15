
import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 bg-black text-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img 
              src="./lovable-uploads/934da0f6-810a-4c6e-9b7a-cae0a7c63247.png" 
              alt="SALABELAH Logo" 
              className="h-6 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-slate-400 leading-relaxed font-light mb-6 text-sm max-w-xs">
              Bringing creative visions to life through thoughtful design 
              and artistic storytelling.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2 hover:bg-slate-700 transition-colors duration-300">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] mb-6 font-light">Services</h4>
            <ul className="space-y-3 text-slate-400 font-light text-sm">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Graphic Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Illustration</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Web Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Motion Design</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] mb-6 font-light">Links</h4>
            <ul className="space-y-3 text-slate-400 font-light text-sm">
              <li><a href="#portfolio" className="hover:text-white transition-colors duration-300">Work</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">About</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500 font-light text-xs uppercase tracking-[0.15em]">
            © 2024 SALABELAH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
