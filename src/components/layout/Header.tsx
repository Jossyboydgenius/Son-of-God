import React, { useState, useEffect } from 'react';
import { Menu, Search, ShoppingBag } from 'lucide-react';
import { Link } from './Link';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <button className="lg:hidden text-current">
              <Menu size={20} />
            </button>
            <nav className="hidden lg:flex space-x-12">
              <Link href="/son-of-god" color={isScrolled ? 'black' : 'white'}>SON OF GOD</Link>
              <Link href="/essentials" color={isScrolled ? 'black' : 'white'}>ESSENTIALS</Link>
              <Link href="/athletics" color={isScrolled ? 'black' : 'white'}>ATHLETICS</Link>
            </nav>
          </div>

          <Link 
            href="/" 
            className={`absolute left-1/2 -translate-x-1/2 font-heading text-lg tracking-[0.2em] ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
          >
            SON OF GOD
          </Link>

          <div className="flex items-center space-x-6">
            <button className={`hover:opacity-50 transition-opacity ${
              isScrolled ? 'text-black' : 'text-white'
            }`}>
              <Search size={20} />
            </button>
            <button className={`hover:opacity-50 transition-opacity ${
              isScrolled ? 'text-black' : 'text-white'
            }`}>
              <ShoppingBag size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}