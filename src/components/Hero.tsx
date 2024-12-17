import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1483118714900-540cf339fd46?auto=format&fit=crop&q=80"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center text-white">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-light tracking-widest">ESSENTIALS</h1>
          <p className="text-lg md:text-xl tracking-wider">SPRING/SUMMER 2024</p>
          <button className="bg-white text-black px-8 py-3 text-sm tracking-wider hover:bg-opacity-90 transition-colors">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}