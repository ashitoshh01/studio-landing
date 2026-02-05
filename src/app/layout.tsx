import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ApixBuild | Smart Digitals',
  description: 'Premium digital agency specialized in UI/UX design, web development, and strategy.',
  keywords: ['digital agency', 'web design', 'next.js', 'react', 'seo', 'ui/ux'],
  icons: {
    icon: '/logo-icon.png',
    apple: '/logo-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.variable, outfit.variable, "antialiased font-sans bg-background text-foreground min-h-screen")}>
        {children}
      </body>
    </html>
  );
}
