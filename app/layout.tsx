import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kristian Correa - Software Engineer',
  description: 'Portfolio of Kristian Correa, Software Engineer passionate about building intuitive web experiences and solving real-world problems with code.',
  keywords: 'software engineer, web developer, react, next.js, javascript, typescript, portfolio',
  authors: [{ name: 'Kristian Correa' }],
  openGraph: {
    title: 'Kristian Correa - Software Engineer',
    description: 'Portfolio of Kristian Correa, Software Engineer passionate about building intuitive web experiences.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}