
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'translate-y-0 opacity-100 bg-white/95 backdrop-blur-md shadow-sm' : '-translate-y-full opacity-0'
    }`}>
      <div className="mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={scrollToTop} className="transition-opacity duration-300 hover:opacity-80">
              <img 
                src="./lovable-uploads/934da0f6-810a-4c6e-9b7a-cae0a7c63247.png" 
                alt="SALABELAH Logo" 
                className="h-12 w-auto"
              />
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-sm uppercase tracking-wider text-slate-600 hover:text-black transition-colors duration-300 font-light"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-sm uppercase tracking-wider text-slate-600 hover:text-black transition-colors duration-300 font-light"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm uppercase tracking-wider text-slate-600 hover:text-black transition-colors duration-300 font-light"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-sm uppercase tracking-wider text-slate-600 hover:text-black transition-colors duration-300 font-light text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-sm uppercase tracking-wider text-slate-600 hover:text-black transition-colors duration-300 font-light text-left"
              >
                Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-sm uppercase tracking-wider text-slate-600 hover:text-black transition-colors duration-300 font-light text-left"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
