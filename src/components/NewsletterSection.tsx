"use client";

import React, { useState } from "react";

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log("Newsletter signup with email:", email);
    // Reset form
    setEmail("");
  };

  return (
    <section className="py-[120px] px-8">
      <div className="max-w-[1400px] mx-auto text-center">
        <h2 className="text-[40px] max-sm:text-[32px] font-bold text-[#1D1D1F] mb-4">
          Blijf op de hoogte
        </h2>
        <p className="text-[20px] text-[#86868B] mb-8">
          Ontvang updates over evenementen en finance insights
        </p>
        <form
          className="flex max-sm:flex-col gap-[16px] justify-center items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Uw e-mailadres"
            className="w-full max-w-[400px] px-6 py-4 rounded-full bg-[#F5F5F7] border-none text-[16px] placeholder-[#86868B] focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email address"
          />
          <button
            type="submit"
            className="bg-[#0066CC] text-white px-8 py-4 rounded-full text-[16px] font-medium whitespace-nowrap"
          >
            Aanmelden
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
