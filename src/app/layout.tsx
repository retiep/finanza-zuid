import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Header from '@/components/Header';

// Font configuration
const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Finanza Zuid',
  description: 'Het premier netwerk voor finance professionals in de zuidelijke regio van Nederland',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={roboto.variable}>
      <body className="min-h-screen bg-white font-roboto">
        <Header />
        {children}
      </body>
    </html>
  );
} 