import React from 'react';

const products = [
  {
    id: 1,
    name: 'Essential Hoodie',
    price: 88,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Essential Sweatpants',
    price: 72,
    image: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Essential T-Shirt',
    price: 40,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    name: 'Essential Jacket',
    price: 150,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80'
  }
];

export default function ProductGrid() {
  return (
    <div className="max-w-[1800px] mx-auto px-4 py-16">
      <h2 className="text-2xl font-light tracking-wider mb-8">NEW ARRIVALS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative aspect-[3/4] mb-4 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-sm tracking-wider mb-1">{product.name}</h3>
            <p className="text-sm text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}