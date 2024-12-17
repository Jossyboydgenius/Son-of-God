import React from 'react';

interface CarouselSlideProps {
  title: string;
  image: string;
  isActive: boolean;
}

export function CarouselSlide({ title, image, isActive }: CarouselSlideProps) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white">
        <div className="space-y-4">
          <h1 className="font-heading text-6xl md:text-8xl tracking-wider leading-relaxed whitespace-pre-line">
            {title}
          </h1>
          <a href="/shop" className="inline-block mt-8 text-sm tracking-wider hover:opacity-80 transition-opacity border-b border-white pb-1">
            SHOP
          </a>
        </div>
      </div>
    </div>
  );
}