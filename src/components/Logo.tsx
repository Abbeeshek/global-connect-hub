import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-10 h-10">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-2 border-gold opacity-80" />
        {/* Inner globe lines */}
        <svg 
          viewBox="0 0 40 40" 
          className="w-full h-full"
          fill="none"
        >
          {/* Horizontal line */}
          <ellipse 
            cx="20" 
            cy="20" 
            rx="16" 
            ry="6" 
            stroke="hsl(38 70% 50%)" 
            strokeWidth="1.5"
            opacity="0.8"
          />
          {/* Vertical ellipse */}
          <ellipse 
            cx="20" 
            cy="20" 
            rx="6" 
            ry="16" 
            stroke="hsl(38 70% 50%)" 
            strokeWidth="1.5"
            opacity="0.8"
          />
          {/* Center dot */}
          <circle 
            cx="20" 
            cy="20" 
            r="3" 
            fill="hsl(38 70% 50%)"
          />
          {/* Connection nodes */}
          <circle cx="20" cy="4" r="2" fill="hsl(20 70% 45%)" />
          <circle cx="20" cy="36" r="2" fill="hsl(20 70% 45%)" />
          <circle cx="4" cy="20" r="2" fill="hsl(20 70% 45%)" />
          <circle cx="36" cy="20" r="2" fill="hsl(20 70% 45%)" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-display font-semibold tracking-wider text-foreground">
          NETWORK
        </span>
        <span className="text-xs font-body tracking-widest text-gold">
          GLOBAL
        </span>
      </div>
    </div>
  );
};

export default Logo;
