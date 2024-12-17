import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { banners } from './carousel/carouselData';
import { CarouselSlide } from './carousel/CarouselSlide';

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen">
      {banners.map((banner, index) => (
        <CarouselSlide
          key={banner.id}
          {...banner}
          isActive={index === currentIndex}
        />
      ))}
      
      <button 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </button>
    </div>
  );
}