import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal-dark" />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50" />
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Main Footer Tagline */}
        <div className="text-center mb-12">
          <div className="animate-fade-in-up inline-block">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold">
              <span className="text-foreground">"One World. </span>
              <span className="text-gradient-gold">One Network. </span>
              <span className="text-foreground">One Worldwide Community."</span>
            </p>
          </div>
          
          {/* Decorative underline */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-glow" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold/60" />
          </div>
        </div>
        
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center gap-6 pt-8 border-t border-border/30">
          <Logo />
          <p className="text-sm text-muted-foreground font-body">
            © {new Date().getFullYear()} Network Global – Worldwide Association. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
