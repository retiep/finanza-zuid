"use client";

import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1D1D1F] mb-6 leading-tight">
            Het Premier Netwerk voor Finance Professionals
          </h1>
          <p className="text-2xl text-gray-600 mb-12">
            Verbind met toonaangevende CFOs en finance experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-[#0066CC] text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
              Word Lid
            </button>
            <button className="px-8 py-3 bg-[#F5F5F7] text-[#1D1D1F] rounded-full font-medium hover:bg-gray-200 transition-colors">
              Meer Informatie
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/10 to-transparent"></div>
    </section>
  );
} 