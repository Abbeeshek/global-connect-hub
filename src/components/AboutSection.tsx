import React from 'react';

const AboutSection = () => {
  const highlights = [
    "People build strong business relationships",
    "Communities connect beyond borders",
    "Like-minded individuals collaborate for mutual growth",
    "Members safeguard their future from financial crises",
    "Businesses expand internationally",
    "Opportunities grow through Travel, FinTech, AI, Web3, and the Crypto community"
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-copper rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="animate-fade-in-up font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-gold mb-4">
              Our Purpose
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-gold rounded-full" />
          </div>
          
          {/* Main Content */}
          <div className="animate-fade-in-up animation-delay-200 space-y-8">
            <p className="text-lg md:text-xl text-foreground/90 font-body leading-relaxed text-center">
              The Worldwide Association of Network Global is a unified global community built to empower individuals and businesses through collaboration, relationships, and real-time opportunities.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed text-center">
              Our purpose is to create a powerful world platform where:
            </p>
            
            {/* Highlights Grid */}
            <div className="grid md:grid-cols-2 gap-4 mt-10">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className={`animate-fade-in-up animation-delay-${(index + 3) * 100} flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-gold/30 transition-all duration-300 hover:shadow-gold`}
                >
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gold" />
                  <span className="text-foreground/80 font-body">{item}</span>
                </div>
              ))}
            </div>
            
            {/* Closing Statement */}
            <p className="animate-fade-in-up animation-delay-600 text-lg md:text-xl text-foreground/90 font-body leading-relaxed text-center mt-12 pt-8 border-t border-border/30">
              This association brings together entrepreneurs, professionals, creators, and leaders from around the world to build global partnerships, establish international business networks, and participate in worldwide earning models.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
