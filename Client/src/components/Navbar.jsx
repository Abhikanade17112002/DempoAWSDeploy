import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Info, Phone } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Add scroll effect to navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed w-full z-50 bg-gradient-to-r from-blue-700 to-indigo-700 text-white transition-all duration-300 ${isScrolled ? 'py-2 shadow-lg' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="text-2xl font-bold tracking-wider">
            <span className="text-yellow-300">🌟</span> MyApp
          </div>

          {/* Desktop Navigation - Full width on large screens */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8 text-lg font-medium">
              <Link 
                to="/" 
                className="hover:text-yellow-300 transition duration-300 flex items-center gap-2"
                aria-label="Home"
              >
                <Home size={18} /> Home
              </Link>
              <Link 
                to="/about" 
                className="hover:text-yellow-300 transition duration-300 flex items-center gap-2"
                aria-label="About"
              >
                <Info size={18} /> About
              </Link>
              <Link 
                to="/contact" 
                className="hover:text-yellow-300 transition duration-300 flex items-center gap-2"
                aria-label="Contact"
              >
                <Phone size={18} /> Contact
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button - Hidden on desktop */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden focus:outline-none p-2 rounded-lg hover:bg-indigo-600 transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X size={28} className="text-yellow-300" />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu - Only shows on small screens */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-indigo-900 to-blue-900 z-40 transition-all duration-300 flex flex-col items-center justify-center ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        } md:hidden`}
      >
        <div className="flex flex-col items-center space-y-8 text-2xl font-semibold">
          <Link 
            to="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-4 hover:text-yellow-300 transition-colors py-3 px-6 rounded-lg"
            aria-label="Home"
          >
            <Home size={24} className="text-yellow-300" /> Home
          </Link>
          <Link 
            to="/about" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-4 hover:text-yellow-300 transition-colors py-3 px-6 rounded-lg"
            aria-label="About"
          >
            <Info size={24} className="text-yellow-300" /> About
          </Link>
          <Link 
            to="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-4 hover:text-yellow-300 transition-colors py-3 px-6 rounded-lg"
            aria-label="Contact"
          >
            <Phone size={24} className="text-yellow-300" /> Contact
          </Link>
        </div>

        <button 
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-blue-800 transition-colors"
          aria-label="Close menu"
        >
          <X size={28} className="text-yellow-300" />
        </button>
      </div>
    </>
  );
}