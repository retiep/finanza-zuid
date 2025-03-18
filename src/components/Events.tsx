"use client";

import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

interface EventCardProps {
  date: string;
  title: string;
  description: string;
}

function EventCard({ date, title, description }: EventCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <p className="text-sm font-medium text-[#0066CC] mb-2">{date}</p>
      <h3 className="text-2xl font-bold text-[#1D1D1F] mb-2">{title}</h3>
      <p className="text-base text-[#86868B] mb-4">{description}</p>
      <div className="flex items-center gap-2 text-[#0066CC] font-medium">
        <span>Meer informatie</span>
        <FiArrowRight className="w-4 h-4" />
      </div>
    </div>
  );
}

export default function Events() {
  const events = [
    {
      date: '22 Juni 2024',
      title: 'CFO Summit 2024',
      description: 'Een exclusieve bijeenkomst voor finance leaders om de laatste trends te bespreken.'
    },
    {
      date: '15 Juli 2024',
      title: 'Digital Finance Workshop',
      description: 'Praktische sessie over digitale transformatie in finance.'
    },
    {
      date: '8 Augustus 2024',
      title: 'ESG Reporting Seminar',
      description: 'Diepgaande analyse van ESG rapportage vereisten.'
    }
  ];

  return (
    <section className="py-20 bg-[#F5F5F7]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#1D1D1F] text-center mb-12">
          Aankomende Evenementen
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
} 