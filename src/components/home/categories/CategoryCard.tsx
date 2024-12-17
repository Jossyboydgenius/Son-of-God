import React from 'react';

interface CategoryCardProps {
  id: string;
  title: string;
  image: string;
}

export function CategoryCard({ id, title, image }: CategoryCardProps) {
  return (
    <a 
      href={`/${id}`}
      className="relative aspect-[3/4] group overflow-hidden"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform-slow group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/20" />
      <h2 className="absolute inset-0 flex items-center justify-center text-white text-3xl md:text-4xl font-light tracking-wider">
        {title}
      </h2>
    </a>
  );
}