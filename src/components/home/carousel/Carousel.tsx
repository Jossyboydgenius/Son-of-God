import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { CarouselSlide } from './CarouselSlide';
import { banners } from './carouselData';

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
          title={banner.title}
          image={banner.image}
          isActive={index === currentIndex}
        />
      ))}
      
      <button className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-white" />
      </button>
    </div>
  );
}