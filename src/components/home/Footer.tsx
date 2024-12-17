import React from 'react';

export function Footer() {
  return (
    <div className="py-24 px-4">
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <h3 className="footer-heading text-left">Join the conversation</h3>
            <div className="flex border-b border-black">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="flex-1 py-2 text-sm focus:outline-none"
              />
              <button className="py-2 px-4">→</button>
            </div>
          </div>

          <div className="space-y-12">
            <div className="flex space-x-6">
              <a href="/contact" className="text-sm hover:opacity-50">CONTACT</a>
              <a href="/client-services" className="text-sm hover:opacity-50">CLIENT SERVICES</a>
              <a href="/legal-notices" className="text-sm hover:opacity-50">LEGAL NOTICES</a>
              <a href="/social" className="text-sm hover:opacity-50">SOCIAL</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
