import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/90 backdrop-blur-lg border-b border-border/50 py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Optional: Navigation could go here */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-body text-muted-foreground hover:text-gold transition-colors duration-300">
              About
            </a>
            <a href="#opportunities" className="text-sm font-body text-muted-foreground hover:text-gold transition-colors duration-300">
              Opportunities
            </a>
            <a href="#contact" className="text-sm font-body px-4 py-2 rounded-full border border-gold/50 text-gold hover:bg-gold hover:text-background transition-all duration-300">
              Join Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
