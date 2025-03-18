import React from 'react';
import Hero from '@/components/Hero';
import Events from '@/components/Events';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Events />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
} 