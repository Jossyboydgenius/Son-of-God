import React from 'react';

const categories = [
  {
    id: 'son-of-god',
    title: 'FEAR OF GOD',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80'
  },
  {
    id: 'athletics',
    title: 'ATHLETICS',
    image: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&q=80'
  },
  {
    id: 'essentials',
    title: 'ESSENTIALS',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80'
  }
];

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category, index) => (
        <a 
          key={category.id}
          href={`/${category.id}`}
          className={`relative aspect-[4/5] group overflow-hidden ${
            index === 2 ? 'md:col-span-2 lg:col-span-1' : ''
          }`}
        >
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20" />
          <h2 className="absolute inset-0 flex items-center justify-center text-white text-4xl md:text-5xl font-light tracking-wider">
            {category.title}
          </h2>
        </a>
      ))}
    </div>
  );
}