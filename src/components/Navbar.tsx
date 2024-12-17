import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="max-w-[1800px] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <div className="hidden lg:flex space-x-8">
            <a href="#" className="text-sm hover:opacity-50 transition-opacity">FEAR OF GOD</a>
            <a href="#" className="text-sm hover:opacity-50 transition-opacity">ESSENTIALS</a>
            <a href="#" className="text-sm hover:opacity-50 transition-opacity">ATHLETICS</a>
          </div>

          <a href="/" className="text-2xl font-bold tracking-widest">SON OF GOD</a>
          {/* Updated for desktop view */}
          <div className="flex items-center space-x-6">
            <span className={`hidden lg:block text-sm hover:opacity-50 transition-opacity`}>
              SEARCH
            </span>
            <span className={`hidden lg:block text-sm hover:opacity-50 transition-opacity`}>
              ACCOUNT
            </span>
            <span className={`hidden lg:block text-sm hover:opacity-50 transition-opacity`}>
              CART
            </span>
            {/* Mobile view */}
            <button className="lg:hidden hover:opacity-50 transition-opacity">
              <Search size={20} />
            </button>
            <button className="lg:hidden hover:opacity-50 transition-opacity">
              <ShoppingBag size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t">
          <div className="p-4 space-y-4">
            <a href="#" className="block text-sm hover:opacity-50 transition-opacity">FEAR OF GOD</a>
            <a href="#" className="block text-sm hover:opacity-50 transition-opacity">ESSENTIALS</a>
            <a href="#" className="block text-sm hover:opacity-50 transition-opacity">ATHLETICS</a>
          </div>
        </div>
      )}
    </nav>
  );
}
