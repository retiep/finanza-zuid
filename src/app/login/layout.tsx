import { Roboto } from 'next/font/google';

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap'
});

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={roboto.variable}>
      <body className="min-h-screen bg-background-light font-roboto">
        {children}
      </body>
    </html>
  );
} 