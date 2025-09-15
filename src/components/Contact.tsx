
import React from 'react';
import { Mail, MapPin, Phone, Download } from 'lucide-react';

const Contact = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/salsabelah-cv.pdf';
    link.download = 'Salsabelah_Anabtawi_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left Column - Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-extralight text-black mb-4 tracking-tight">
                Let's Work
                <span className="block">Together</span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-light max-w-md">
                Ready to bring your vision to life? Let's discuss your next creative project.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-50 rounded-2xl">
                  <Mail className="w-6 h-6 text-slate-600" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-[0.15em] text-black mb-1 font-light">Email</h3>
                  <p className="text-sm text-slate-600 font-light">salsabelah.anabtawi@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-50 rounded-2xl">
                  <Phone className="w-6 h-6 text-slate-600" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-[0.15em] text-black mb-1 font-light">Phone</h3>
                  <p className="text-sm text-slate-600 font-light">+34 610 918 548</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-50 rounded-2xl">
                  <MapPin className="w-6 h-6 text-slate-600" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-[0.15em] text-black mb-1 font-light">Location</h3>
                  <p className="text-sm text-slate-600 font-light">Barcelona, Spain</p>
                </div>
              </div>
            </div>

            {/* CV Download Button */}
            <div className="pt-8 border-t border-slate-200">
              <button 
                onClick={handleDownloadCV}
                className="inline-flex items-center space-x-3 bg-black text-white px-6 py-3 hover:bg-slate-800 transition-colors duration-300 font-light text-sm uppercase tracking-[0.15em]"
              >
                <Download className="w-4 h-4" strokeWidth={1.5} />
                <span>Download CV</span>
              </button>
            </div>

            <div className="pt-8 border-t border-slate-200">
              <h3 className="text-sm uppercase tracking-[0.15em] text-black mb-3 font-light">Response Time</h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed max-w-md">
                I typically respond to all inquiries within 24 hours. For urgent projects, 
                please mention it in your message.
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white p-6 shadow-sm h-fit">
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-[0.15em] text-black mb-2 font-light">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-slate-200 focus:outline-none focus:border-black transition-colors duration-300 font-light text-sm"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-[0.15em] text-black mb-2 font-light">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-slate-200 focus:outline-none focus:border-black transition-colors duration-300 font-light text-sm"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-[0.15em] text-black mb-2 font-light">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-slate-200 focus:outline-none focus:border-black transition-colors duration-300 font-light text-sm resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-black text-white py-4 text-xs uppercase tracking-[0.15em] hover:bg-slate-800 transition-colors duration-300 font-light mt-6"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
