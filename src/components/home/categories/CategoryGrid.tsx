import React from 'react';
import { CategoryCard } from './CategoryCard';
import { categories } from './categoryData';

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          {...category}
        />
      ))}
    </div>
  );
}