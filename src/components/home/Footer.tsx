import React from 'react';

export function Footer() {
  return (
    <div className="py-24 px-4">
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <h3 className="footer-heading text-left text-2xl md:text-xl">Join the Conversation</h3>
            <div className="flex border-b border-black">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="flex-1 py-2 text-sm focus:outline-none"
              />
              <button className="py-1 px-0 text-xl">→</button>
            </div>
          </div>
          <div className="space-y-12">
             <div className="flex flex-col md:flex-row md:space-x-6 text-xs font-medium">
              <a href="/contact" className="hover:opacity-50 mb-2 md:mb-0">CONTACT</a>
              <a href="/client-services" className="hover:opacity-50 mb-2 md:mb-0">CLIENT SERVICES</a>
              <a href="/legal-notices" className="hover:opacity-50 mb-2 md:mb-0">LEGAL NOTICES</a>
              <a href="/social" className="hover:opacity-50">SOCIAL</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
