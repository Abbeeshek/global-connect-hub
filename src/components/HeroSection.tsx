import React from 'react';
import { Globe } from 'lucide-react';

interface HeroSectionProps {
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ backgroundImage }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
      
      {/* Subtle animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-copper/5 animate-pulse-glow" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Globe Icon */}
          <div className="animate-fade-in-up mb-8">
            <Globe className="w-16 h-16 mx-auto text-gold animate-float" strokeWidth={1.5} />
          </div>
          
          {/* Main Title */}
          <h1 className="animate-fade-in-up animation-delay-200 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-gradient-gold">WORLDWIDE ASSOCIATION</span>
            <span className="block text-foreground mt-2 text-2xl md:text-3xl lg:text-4xl font-medium">
              Connecting People & Businesses Across the Globe
            </span>
          </h1>
          
          {/* Decorative Line */}
          <div className="animate-fade-in-up animation-delay-300 flex items-center justify-center gap-4 my-8">
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-gold/60" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-gold/60" />
          </div>
          
          {/* Tagline */}
          <p className="animate-fade-in-up animation-delay-400 text-lg md:text-xl lg:text-2xl text-muted-foreground font-body font-light tracking-wide">
            Building Business. Building Relationships. Building a Worldwide Future.
          </p>
          
          {/* Scroll indicator */}
          <div className="animate-fade-in animation-delay-800 absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-gold/40 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-gold rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
