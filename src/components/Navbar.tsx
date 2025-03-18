"use client";

import React, { useState } from "react";
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Over ons', href: '/about' },
    { label: 'Leden', href: '/leden' },
    { label: 'Evenementen', href: '/events' },
    { label: 'Bronnen', href: '/resources' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white bg-[#FFFFFF80] backdrop-blur-md z-50 border-b border-[#00000010]">
      <div className="max-w-[1400px] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[40px]">
            <Link href="/">
              <img
                src="https://placehold.co/120x40"
                alt="Finanza Zuid Logo"
                className="h-[40px]"
              />
            </Link>
            <div className="max-sm:hidden flex items-center gap-[32px]">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[14px] text-[#1D1D1F] font-medium hover:text-[#0066CC] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-[16px]">
            <Link
              href="/login"
              className="max-sm:hidden bg-[#0066CC] text-white px-6 py-2 rounded-full text-[14px] font-medium hover:bg-blue-700 transition-colors"
            >
              Leden Login
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#1D1D1F]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white py-4 px-8 border-t border-[#00000010]">
          <nav className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[16px] text-[#1D1D1F] font-medium py-2 hover:text-[#0066CC] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="bg-[#0066CC] text-white px-6 py-2 rounded-full text-[14px] font-medium hover:bg-blue-700 transition-colors text-center mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Leden Login
            </Link>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
