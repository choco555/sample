import React, { useMemo, useState } from 'react';
import { FaReact } from 'react-icons/fa';
import ShapeBlur from '../ShapeBlur';



const Navbar: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pixelRatio = useMemo(() => {
    if (typeof window !== 'undefined' && window.devicePixelRatio) {
      return window.devicePixelRatio;
    }
    return 1;
  }, []);

  const closeMobileMenu = () => setIsMobileOpen(false);

  return (
    <nav className="w-full z-50 fixed top-0 my-5">
      <div className="relative flex items-center max-w-7xl mx-auto px-5 h-16 lg:h-18">
        {/* Left: Logo */}
        <div className="relative h-36 w-36 overflow-hidden rounded-lg">
          {/* ShapeBlur Background */}
          <div className="absolute inset-0">
            <ShapeBlur
              variation={0}
              pixelRatioProp={pixelRatio}
              shapeSize={0.5}
              roundness={0.5}
              borderSize={0.05}
              circleSize={0.5}
              circleEdge={1}
            />
          </div>
          {/* React Icon */}
          <div className="relative z-10 flex items-center justify-center h-full w-full">
            <FaReact className="text-cyan-400 text-6xl" />
          </div>
        </div>

        {/* Center: Navigation Links (md and up) */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <a href="#" className="text-white no-underline font-medium text-2xl tracking-wide uppercase hover:opacity-70 transition-opacity duration-200">column1</a>
          <a href="#" className="text-white no-underline font-medium text-2xl tracking-wide uppercase hover:opacity-70 transition-opacity duration-200">column2</a>
          <a href="#" className="text-white no-underline font-medium text-2xl tracking-wide uppercase hover:opacity-70 transition-opacity duration-200">column3</a>
          <a href="#" className="text-white no-underline font-medium text-2xl tracking-wide uppercase hover:opacity-70 transition-opacity duration-200">column4</a>
          <a href="#" className="text-white no-underline font-medium text-2xl tracking-wide uppercase hover:opacity-70 transition-opacity duration-200">column5</a>
        </div>

        {/* Right: Mobile Menu Button (below md) */}
        <div className="ml-auto md:hidden">
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={isMobileOpen}
            aria-controls="mobile-nav-menu"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Full Screen Mobile Modal */}
        {isMobileOpen && (
          <div className="fixed inset-0 z-50 bg-black md:hidden">
            {/* Header */}
            <div className="-mt-5 flex items-center justify-between px-6 pb-15">
              {/* Logo */}
              <div className="relative h-36 w-36 overflow-hidden rounded-lg">
                {/* ShapeBlur Background */}
                <div className="absolute inset-0">
                  <ShapeBlur
                    variation={0}
                    pixelRatioProp={pixelRatio}
                    shapeSize={0.5}
                    roundness={0.5}
                    borderSize={0.05}
                    circleSize={0.5}
                    circleEdge={1}
                  />
                </div>
                {/* React Icon */}
                <div className="relative z-10 flex items-center justify-center h-full w-full">
                  <FaReact className="text-cyan-400 text-6xl" />
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={closeMobileMenu}
                className="w-10 h-10 rounded-full border border-white/30 bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Close menu"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="px-6 py-4">
              {/* Main Navigation */}
              <nav className="-mt-20 space-y-0">
                <a
                  onClick={closeMobileMenu}
                  href="#grok"
                  className="block py-4 text-white text-lg font-medium border-b border-gray-700 hover:text-gray-300 transition-colors"
                >
                  Hero
                </a>
                <a
                  onClick={closeMobileMenu}
                  href="#api"
                  className="block py-4 text-white text-lg font-medium border-b border-gray-700 hover:text-gray-300 transition-colors"
                >
                  Product
                </a>
                <a
                  onClick={closeMobileMenu}
                  href="#company"
                  className="block py-4 text-white text-lg font-medium border-b border-gray-700 hover:text-gray-300 transition-colors"
                >
                  Features
                </a>
                <a
                  onClick={closeMobileMenu}
                  href="#colossus"
                  className="block py-4 text-white text-lg font-medium border-b border-gray-700 hover:text-gray-300 transition-colors"
                >
                  Pricing
                </a>
                <a
                  onClick={closeMobileMenu}
                  href="#careers"
                  className="block py-4 text-white text-lg font-medium border-b border-gray-700 hover:text-gray-300 transition-colors"
                >
                  FAQ
                </a>
              </nav>

              {/* Bottom Utility Links */}
              <div className="mt-60 space-y-0">
                <a
                  onClick={closeMobileMenu}
                  href="#try-grok"
                  className="block py-3 text-white text-sm font-medium uppercase tracking-wide border-b border-gray-700 hover:text-gray-300 transition-colors"
                >
                  TRY GROK
                </a>
                <a
                  onClick={closeMobileMenu}
                  href="#contact"
                  className="block py-3 text-white text-sm font-medium uppercase tracking-wide border-b border-gray-700 hover:text-gray-300 transition-colors"
                >
                  CONTACT
                </a>
                <a
                  onClick={closeMobileMenu}
                  href="#legal"
                  className="block py-3 text-white text-sm font-medium uppercase tracking-wide border-b border-gray-700 hover:text-gray-300 transition-colors"
                >
                  LEGAL
                </a>
                <a
                  onClick={closeMobileMenu}
                  href="#privacy"
                  className="block py-3 text-white text-sm font-medium uppercase tracking-wide border-b border-gray-700 hover:text-gray-300 transition-colors"
                >
                  PRIVACY POLICY
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
