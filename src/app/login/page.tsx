'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Cookies from 'js-cookie';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // For development, hardcode a simple check
    // In production, this should be replaced with proper authentication
    if ((email === 'demo@finanzazuid.nl' && password === 'demo123') ||
        (email === 'pieter@arts-colen.nl' && password === 'demo123')) {
      // Set a cookie to maintain the logged-in state
      Cookies.set('isLoggedIn', 'true', { expires: 7 }); // Expires in 7 days
      router.push('/');
    } else {
      setError('Ongeldige inloggegevens');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-text-primary mb-2">Finanza Zuid</h1>
          <p className="text-text-secondary">Website in Ontwikkeling</p>
        </div>

        <div className="bg-background-light rounded-xl p-4 mb-8">
          <p className="text-sm text-text-secondary">
            Deze website is momenteel in ontwikkeling. Toegang is alleen beschikbaar voor geautoriseerde leden die deelnemen aan het ontwikkelingsproces.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
              E-mailadres
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-full bg-background-light text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="uw@email.nl"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-text-primary mb-2">
              Wachtwoord
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-full bg-background-light text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-primary text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            Inloggen
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-text-secondary">
            Heeft u vragen? Neem contact op via{' '}
            <a href="mailto:info@finanzazuid.nl" className="text-primary hover:underline">
              info@finanzazuid.nl
            </a>
          </p>
        </div>
      </div>
    </div>
  );
} 