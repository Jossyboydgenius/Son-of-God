import React from 'react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80"
          alt="Holiday Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-light tracking-[0.2em] leading-tight">
            ESSENTIALS<br />HOLIDAY 2024<br />COLLECTION
          </h1>
          <a href="/shop" className="inline-block mt-8 text-sm tracking-wider hover:opacity-80 transition-opacity">
            SHOP
          </a>
        </div>
        
        <button className="absolute bottom-8 animate-bounce">
          <ChevronDown size={24} />
        </button>
      </div>
    </div>
  );
}