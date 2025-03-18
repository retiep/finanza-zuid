'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Cookies from 'js-cookie';

interface Member {
  name: string;
  role: string;
  company: string;
  location: string;
  expertise: string[];
  sector: string;
  imageUrl: string;
}

const members: Member[] = [
  {
    name: 'Erik van der Berg',
    role: 'CFO',
    company: 'Rabobank',
    location: 'Amsterdam',
    expertise: ['Banking', 'Digital Transformation', 'M&A'],
    sector: 'Banking',
    imageUrl: '/members/erik.jpg',
  },
  {
    name: 'Sophie de Wit',
    role: 'Finance Director',
    company: 'ASML',
    location: 'Eindhoven',
    expertise: ['Tech Finance', 'Innovation', 'Risk Management'],
    sector: 'Technology',
    imageUrl: '/members/sophie.jpg',
  },
  {
    name: 'Thomas Janssen',
    role: 'Group CFO',
    company: 'Ahold Delhaize',
    location: 'Zaandam',
    expertise: ['Retail', 'Strategy', 'Corporate Finance'],
    sector: 'Retail',
    imageUrl: '/members/thomas.jpg',
  },
  {
    name: 'Laura Vermeer',
    role: 'CFO',
    company: 'KPN',
    location: 'Rotterdam',
    expertise: ['Telecom', 'Digital Strategy', 'Sustainability'],
    sector: 'Telecom',
    imageUrl: '/members/laura.jpg',
  },
  {
    name: 'Mark de Boer',
    role: 'Finance Director',
    company: 'Shell',
    location: 'Den Haag',
    expertise: ['Energy', 'Treasury', 'International Finance'],
    sector: 'Energy',
    imageUrl: '/members/mark.jpg',
  },
  {
    name: 'Anna Bakker',
    role: 'CFO',
    company: 'ING',
    location: 'Amsterdam',
    expertise: ['FinTech', 'Risk Management', 'Banking'],
    sector: 'Banking',
    imageUrl: '/members/anna.jpg',
  },
];

const sectors = ['Alle sectoren', 'Banking', 'Technology', 'Retail', 'Energy', 'Telecom'];

export default function LedenPage() {
  const router = useRouter();
  const [selectedSector, setSelectedSector] = useState('Alle sectoren');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = Cookies.get('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [router]);

  const filteredMembers = members.filter(member => {
    const matchesSearch = searchQuery === '' || 
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.expertise.some(exp => exp.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesSector = selectedSector === 'Alle sectoren' || member.sector === selectedSector;

    return matchesSearch && matchesSector;
  });

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#1D1D1F] mb-4">
            Onze Leden
          </h1>
          <p className="text-xl text-[#86868B]">
            Ontmoet de toonaangevende finance professionals die samen ons netwerk vormen.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Zoek op naam, expertise of bedrijf"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-10 rounded-full bg-[#F5F5F7] text-[#1D1D1F] placeholder-[#86868B] focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#86868B]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {sectors.map((sector) => (
              <button
                key={sector}
                onClick={() => setSelectedSector(sector)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedSector === sector
                    ? 'bg-primary text-white'
                    : 'bg-[#F5F5F7] text-[#1D1D1F] hover:bg-gray-200'
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>

        {/* Member Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member) => (
            <div
              key={member.name}
              className="bg-[#F5F5F7] rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden bg-gradient-to-r from-primary to-[#5856D6]">
                  <div className="w-full h-full flex items-center justify-center text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-[#1D1D1F] mb-2">
                  {member.name}
                </h2>
                <p className="text-[#86868B] mb-4">
                  {member.role} • {member.company}
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {member.expertise.map((exp) => (
                    <span
                      key={exp}
                      className="px-3 py-1 rounded-full bg-white text-primary text-sm"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
                <p className="text-[#86868B] text-sm">
                  {member.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 