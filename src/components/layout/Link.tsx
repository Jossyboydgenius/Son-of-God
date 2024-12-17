import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  color?: 'black' | 'white';
}

export function Link({ href, children, className = '', color = 'black' }: LinkProps) {
  return (
    <a 
      href={href} 
      className={`text-sm tracking-[0.2em] hover:opacity-50 transition-opacity ${
        color === 'white' ? 'text-white' : 'text-black'
      } ${className}`}
    >
      {children}
    </a>
  );
}