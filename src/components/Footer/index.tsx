import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-[#0b0b0b] pt-24 md:pt-36 lg:pt-40 pb-16 md:pb-24 lg:pb-[140px]">
      {/* Background horizon glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[32vh] md:h-[40vh] lg:h-[45vh] bg-[radial-gradient(ellipse_at_bottom,rgba(255,140,64,0.55)_0%,rgba(255,140,64,0.35)_20%,rgba(17,17,17,0.0)_60%)]"></div>
      {/* Subtle top fade */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

      {/* Main content container */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-16">
          
          {/* Column 1: TRY GROK ON */}
          <div className="space-y-4 md:space-y-5">
            <h3 className="text-white/40 text-[10px] md:text-[11px] uppercase tracking-[0.2em]">
              column1-1
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <a 
                  href="#" 
                  target="_blank" rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors duration-200 text-sm md:text-base"
                >
                  column1-2
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  target="_blank" rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors duration-200 text-sm md:text-base"
                >
                  column1-3
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  target="_blank" rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors duration-200 text-sm md:text-base"
                >
                  column1-4
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  target="_blank" rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors duration-200 text-sm md:text-base"
                >
                  column1-5
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: PRODUCTS */}
          <div className="space-y-4 md:space-y-5">
            <h3 className="text-white/40 text-[10px] md:text-[11px] uppercase tracking-[0.2em]">
              PRODUCTS
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <a 
                  href="#" 
                  target="_blank" rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors duration-200 text-sm md:text-base"
                >
                  column2-1
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  target="_blank" rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors duration-200 text-sm md:text-base"
                >
                  column2-2
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: COMPANY */}
          <div className="space-y-4 md:space-y-5">
            <h3 className="text-white/40 text-[10px] md:text-[11px] uppercase tracking-[0.2em]">
              column3-1
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <a 
                  href="#" 
                  target="_blank" rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors duration-200 text-sm md:text-base"
                >
                  column3-2
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  target="_blank" rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors duration-200 text-sm md:text-base"
                >
                  column3-3
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  target="_blank" rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors duration-200 text-sm md:text-base"
                >
                  column3-4
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  target="_blank" rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors duration-200 text-sm md:text-base"
                >
                  column3-5
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: RESOURCES */}
          <div className="space-y-4 md:space-y-5">
            <h3 className="text-white/40 text-[10px] md:text-[11px] uppercase tracking-[0.2em]">
              RESOURCES
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <a 
                  href="#" 
                  target="_blank" rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors duration-200 text-sm md:text-base"
                >
                  column4-1
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  target="_blank" rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors duration-200 text-sm md:text-base"
                >
                  column4-2
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  target="_blank" rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors duration-200 text-sm md:text-base"
                >
                  column4-3
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  target="_blank" rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors duration-200 text-sm md:text-base"
                >
                  column4-4
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  target="_blank" rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors duration-200 text-sm md:text-base"
                >
                  column4-5
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  target="_blank" rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors duration-200 text-sm md:text-base"
                >
                  column4-6
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom accent line similar to x.ai */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-400/70 via-orange-300/60 to-orange-400/70"></div>
    </footer>
  );
};

export default Footer;
