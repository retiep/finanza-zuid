"use client";

import React, { useState, useEffect } from "react";

interface Testimonial {
  name: string;
  role: string;
  text: string;
}

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials: Testimonial[] = [
    {
      name: "Jan de Vries",
      role: "CFO - ABN AMRO",
      text: "Finanza Zuid heeft mijn professionele netwerk enorm versterkt.",
    },
    {
      name: "Maria Jansen",
      role: "Finance Director - Phillips",
      text: "De evenementen zijn altijd relevant en van hoge kwaliteit.",
    },
    {
      name: "Peter Bakker",
      role: "CFO - DSM",
      text: "Een onmisbaar platform voor finance professionals.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-[120px] px-8 bg-[#F5F5F7]">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-[40px] max-sm:text-[32px] font-bold text-[#1D1D1F] text-center mb-[60px]">
          Wat Onze Leden Zeggen
        </h2>
        <div className="relative">
          <div className="bg-white rounded-[24px] p-12 text-center max-w-[800px] mx-auto">
            <p className="text-[24px] text-[#1D1D1F] italic mb-8">
              {testimonials[currentTestimonial].text}
            </p>
            <div className="flex flex-col items-center">
              <h4 className="text-[18px] font-bold text-[#1D1D1F]">
                {testimonials[currentTestimonial].name}
              </h4>
              <p className="text-[16px] text-[#86868B]">
                {testimonials[currentTestimonial].role}
              </p>
            </div>
          </div>

          {/* Testimonial navigation dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentTestimonial
                    ? "bg-[#0066CC]"
                    : "bg-[#0066CC]/30"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
