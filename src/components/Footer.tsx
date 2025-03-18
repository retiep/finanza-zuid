"use client";

import React from 'react';
import Link from 'next/link';
import { FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F7] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="font-bold text-[#1D1D1F] mb-4">Finanza Zuid</h3>
            <p className="text-sm text-[#86868B]">
              Het premier netwerk voor finance professionals in Zuid-Nederland.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-[#1D1D1F] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Over ons', 'Leden', 'Evenementen', 'Bronnen'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-[#86868B] hover:text-[#1D1D1F]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-[#1D1D1F] mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-[#86868B]">
              <li>info@finanzazuid.nl</li>
              <li>+31 (0)40 123 4567</li>
              <li>Eindhoven, Nederland</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-[#1D1D1F] mb-4">Volg ons</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-[#1D1D1F] hover:text-[#0066CC]">
                <FiLinkedin className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-[#1D1D1F] hover:text-[#0066CC]">
                <FiTwitter className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
