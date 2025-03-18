"use client";

import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#1D1D1F] mb-4">
          Blijf op de hoogte
        </h2>
        <p className="text-xl text-[#86868B] mb-8">
          Ontvang updates over evenementen en finance insights
        </p>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Uw e-mailadres"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-6 py-3 rounded-full bg-[#F5F5F7] text-[#1D1D1F] placeholder-[#86868B] focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-[#0066CC] text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            Aanmelden
          </button>
        </form>
      </div>
    </section>
  );
} 