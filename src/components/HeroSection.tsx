"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface HeroSlide {
  title: string;
  subtitle: string;
  image: string;
}

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroSlides: HeroSlide[] = [
    {
      title: "Het Premier Netwerk voor Finance Professionals",
      subtitle: "Verbind met toonaangevende CFOs en finance experts",
      image: "https://placehold.co/1200x600",
    },
    {
      title: "Exclusieve Evenementen & Kennisdeling",
      subtitle: "Blijf voorop in de financiële sector",
      image: "https://placehold.co/1200x600",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <section className="pt-[80px]">
      <div className="relative h-[90vh] max-sm:h-[70vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/30 z-10" />
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="100vw"
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8 z-20">
              <h1 className="text-[56px] max-sm:text-[40px] font-bold text-white mb-4 max-w-[800px]">
                {slide.title}
              </h1>
              <p className="text-[24px] max-sm:text-[18px] text-white max-w-[600px]">
                {slide.subtitle}
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="bg-[#0066CC] text-white px-8 py-3 rounded-full text-[16px] font-medium"
                >
                  Word Lid
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
