import React from 'react';

const AnnouncementStrip = () => {
  const items = [
    'Now booking design collaborations',
    'Brand identity · Web · Motion',
    'Let\'s create something meaningful',
    'Barcelona · Remote Worldwide',
    'Get in touch →'
  ];

  return (
    <aside aria-label="announcement" className="relative w-full border-y border-slate-200/60 bg-slate-50/60 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="overflow-hidden">
        <div className="relative">
          {/* Track A */}
          <div className="animate-marquee flex items-center gap-8 whitespace-nowrap py-3 pl-8 will-change-transform">
            {items.concat(items).map((text, i) => (
              <a
                key={`a-${i}`}
                href="#contact"
                className="text-sm text-slate-700 hover:text-black transition-colors duration-200"
              >
                {text}
              </a>
            ))}
          </div>
          {/* Track B (offset) */}
          <div className="animate-marquee2 flex items-center gap-8 whitespace-nowrap py-3 pl-8 will-change-transform -mt-12" aria-hidden="true">
            {items.concat(items).map((text, i) => (
              <a
                key={`b-${i}`}
                href="#contact"
                className="text-sm text-slate-700 hover:text-black transition-colors duration-200"
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AnnouncementStrip;
