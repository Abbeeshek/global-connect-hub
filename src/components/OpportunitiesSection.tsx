import React from 'react';
import { Globe2, Plane, CreditCard, Bot, Link, Coins, Handshake, Network } from 'lucide-react';

const opportunities = [
  {
    icon: Globe2,
    title: "Global Business Development",
    description: "Expand your reach across international markets"
  },
  {
    icon: Plane,
    title: "Tours & Travel Earnings",
    description: "Unlock travel-based income opportunities"
  },
  {
    icon: CreditCard,
    title: "FinTech Innovation Programs",
    description: "Access cutting-edge financial technology"
  },
  {
    icon: Bot,
    title: "AI & Automation Opportunities",
    description: "Leverage artificial intelligence for growth"
  },
  {
    icon: Link,
    title: "Web3 & Blockchain Integration",
    description: "Enter the decentralized digital economy"
  },
  {
    icon: Coins,
    title: "Crypto Community Growth",
    description: "Join a thriving cryptocurrency network"
  },
  {
    icon: Handshake,
    title: "Relationship & Network Building",
    description: "Forge meaningful global connections"
  },
  {
    icon: Network,
    title: "Borderless International Collaboration",
    description: "Work with partners worldwide seamlessly"
  }
];

const OpportunitiesSection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="animate-fade-in-up font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-gold mb-4">
            Opportunities
          </h2>
          <p className="animate-fade-in-up animation-delay-100 text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Discover the diverse pathways to success within our global network
          </p>
          <div className="h-1 w-24 mx-auto bg-gradient-gold rounded-full mt-6" />
        </div>
        
        {/* Opportunities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {opportunities.map((opportunity, index) => {
            const Icon = opportunity.icon;
            return (
              <div
                key={index}
                className={`animate-scale-in animation-delay-${(index + 2) * 100} group relative p-6 rounded-xl bg-gradient-card border border-border/50 hover:border-gold/40 transition-all duration-500 hover:shadow-gold hover:-translate-y-1`}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                    {opportunity.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body">
                    {opportunity.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;
