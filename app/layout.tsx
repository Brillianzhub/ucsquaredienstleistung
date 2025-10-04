import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UCSquare Clean Dienstleistung - Professionelle Reinigungsdienstleistungen, denen Sie vertrauen können',
  description: 'Professionelle Reinigungsdienstleistungen für Wohn-, Gewerbe- und Industrieimmobilien. Umweltfreundliche Lösungen, erfahrenes Team, wettbewerbsfähige Preise. Wir bedienen Deutschland.',
  keywords: 'Reinigungsdienstleistungen, professionelle Reinigung, Haushaltsreinigung, Büroreinigung, umweltfreundliche Reinigung, Berlin Reinigungsservice',
  authors: [{ name: 'UCSquare Clean Dienstleistung' }],
  openGraph: {
    title: 'UCSquare Clean Dienstleistung - Professionelle Reinigung, der Sie vertrauen können',
    description: 'Professionelle Reinigungsdienstleistungen für Privat- und Geschäftskunden. Umweltfreundlich, zuverlässig und erschwinglich.',
    type: 'website',
    locale: 'en_DE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}