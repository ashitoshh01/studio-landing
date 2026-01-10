import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Studio. | Digital Agency',
  description: 'Premium digital agency specialized in UI/UX design, web development, and strategy.',
  keywords: ['digital agency', 'web design', 'next.js', 'react', 'seo', 'ui/ux'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.variable, "antialiased font-sans bg-background text-foreground min-h-screen")}>
        {children}
      </body>
    </html>
  );
}
