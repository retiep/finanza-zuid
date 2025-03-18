"use client";

import React from 'react';

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#F5F5F7]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#1D1D1F] text-center mb-12">
          Wat Onze Leden Zeggen
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-8 text-center">
            <p className="text-2xl text-[#1D1D1F] mb-8">
              "De evenementen zijn altijd relevant en van hoge kwaliteit."
            </p>
            <div>
              <h3 className="text-lg font-bold text-[#1D1D1F]">Maria Jansen</h3>
              <p className="text-base text-[#86868B]">Finance Director - Phillips</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 