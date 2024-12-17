import React from 'react';
import { X, ChevronRight } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      
      {/* Menu Content */}
      <div className="absolute inset-y-0 left-0 w-full max-w-sm bg-white">
        <div className="p-8 h-full flex flex-col">
          <button onClick={onClose} className="self-end mb-12">
            <X size={24} />
          </button>

          <nav className="flex-1">
            <div className="space-y-8">
              <MenuItem href="/fear-of-god" label="FEAR OF GOD" />
              <MenuItem href="/essentials" label="ESSENTIALS" />
              <MenuItem href="/athletics" label="ATHLETICS" />
            </div>

            <div className="mt-auto pt-12 space-y-6">
              <MenuItem href="/account" label="ACCOUNT" />
              <MenuItem href="/contact" label="CONTACT" />
              <MenuItem href="/client-services" label="CLIENT SERVICES" />
              <MenuItem href="/legal" label="LEGAL NOTICES" />
              <MenuItem href="/social" label="SOCIAL" />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

function MenuItem({ href, label }: { href: string; label: string }) {
  return (
    <a 
      href={href}
      className="flex items-center justify-between py-2 group"
    >
      <span className="text-lg tracking-wider">{label}</span>
      <ChevronRight 
        size={20} 
        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
      />
    </a>
  );
}