import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'Goldify — Smart Gold Analysis Platform',
  description: 'Harness AI-powered insights to analyze gold trends, forecast movement, and optimize your trading strategy all in one powerful platform.',
  icons: {
    icon: '/assets/images/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link
          rel="preload"
          href="/fonts/Li-Ador-Noirrit-Unicode.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-[#060606] text-[#F8F7F4] selection:bg-[#F5BE09]/20 selection:text-[#F5BE09]">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
