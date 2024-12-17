import React from 'react';

export function Newsletter() {
  return (
    <div className="py-24 px-4">
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <h3 className="text-sm font-medium mb-6">JOIN THE CONVERSATION</h3>
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
            <div>
              <h3 className="text-sm font-medium mb-4">CLIENT SERVICES</h3>
              <div className="space-y-3">
                <a href="/contact" className="block text-sm hover:opacity-50">CONTACT</a>
                <a href="/shipping" className="block text-sm hover:opacity-50">SHIPPING</a>
                <a href="/returns" className="block text-sm hover:opacity-50">RETURNS</a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-4">FOLLOW US</h3>
              <div className="space-y-3">
                <a href="/instagram" className="block text-sm hover:opacity-50">INSTAGRAM</a>
                <a href="/facebook" className="block text-sm hover:opacity-50">FACEBOOK</a>
                <a href="/twitter" className="block text-sm hover:opacity-50">TWITTER</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
