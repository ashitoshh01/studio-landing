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
  metadataBase: new URL('https://apixbuild.com'),
  title: {
    default: 'Apix Build | Premier Digital Agency for Web Development & Branding',
    template: '%s | Apix Build'
  },
  description: 'Apix Build is a full-service digital agency specializing in custom web development, UI/UX design, brand strategy, and social media management. We build scalable digital solutions for growing businesses.',
  keywords: [
    'Digital Agency', 'Web Development', 'UI/UX Design', 'Brand Strategy',
    'Social Media Management', 'Next.js Developers', 'React Agency',
    'Website Optimization', 'Growth Marketing', 'Apix Build',
    'Software Development', 'E-commerce Solutions', 'Headless CMS',
    'Next.js 15', 'Tailwind CSS', 'Web Application', 'Startup MVP',
    'SaaS Development', 'SEO Optimization', 'Performance Tuning',
    'Best Digital Agency', 'Top Web Design Company', 'Enterprise Web Development',
    'Creative Digital Agency', 'UX/UI Design Agency', 'Product Design',
    'Vercel Experts', 'Startup Studio', 'Global Design Agency',
    'Boutique Creative Studio', 'High-end Web Design', 'Digital Transformation'
  ],
  category: 'technology',
  authors: [{ name: 'Apix Build Team', url: 'https://apixbuild.com' }],
  creator: 'Apix Build',
  publisher: 'Apix Build',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Apix Build | Premier Digital Agency',
    description: 'Transform your vision into reality with high-performance web solutions, stunning design, and strategic branding.',
    url: 'https://apixbuild.com',
    siteName: 'Apix Build',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Apix Build - Digital Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apix Build | Digital Agency',
    description: 'Crafting exceptional digital experiences through code and design.',
    images: ['/og-image.png'],
    creator: '@apixbuild',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://apixbuild.com',
  },
  icons: {
    icon: '/logo-icon.png',
    apple: '/logo-icon.png',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://apixbuild.com/#organization",
      "name": "Apix Build",
      "alternateName": "ApixBuild",
      "url": "https://apixbuild.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://apixbuild.com/logo-icon.png",
        "width": 112,
        "height": 112
      },
      "image": "https://apixbuild.com/og-image.png",
      "description": "Full-service digital agency specializing in web development, UI/UX design, brand strategy, and social media management.",
      "email": "apixbuild@gmail.com",
      "priceRange": "$$$",
      "sameAs": [
        "https://twitter.com/apixbuild",
        "https://instagram.com/apixbuild",
        "https://linkedin.com/company/apixbuild"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "apixbuild@gmail.com",
        "contactType": "customer service",
        "availableLanguage": ["English"]
      },
      "foundingDate": "2024",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "minValue": 1,
        "maxValue": 10
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://apixbuild.com/#website",
      "url": "https://apixbuild.com",
      "name": "Apix Build",
      "description": "Premium digital agency specialized in UI/UX design, web development, and brand strategy.",
      "publisher": {
        "@id": "https://apixbuild.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://apixbuild.com/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://apixbuild.com/#service",
      "name": "Apix Build",
      "description": "Full-service digital agency offering web development, UI/UX design, and social media management for startups and growing businesses.",
      "url": "https://apixbuild.com",
      "priceRange": "$$$",
      "areaServed": {
        "@type": "Place",
        "name": "Worldwide"
      },
      "serviceType": [
        "Web Development",
        "UI/UX Design",
        "Brand Strategy",
        "Social Media Management",
        "Website Optimization",
        "E-commerce Development"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Web Development",
              "description": "Build modern, scalable, and performance-driven websites using Next.js, React, and cutting-edge technologies."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "UI/UX Design",
              "description": "Create intuitive and visually stunning user interfaces that enhance user experience and drive conversions."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Brand Strategy & Consulting",
              "description": "Develop comprehensive brand strategies that align with your business goals and resonate with your target audience."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Social Media Management",
              "description": "Grow your online presence with strategic social media marketing and content management."
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://apixbuild.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does Apix Build offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Apix Build offers comprehensive digital services including custom web development, UI/UX design, brand strategy, social media management, website optimization, and e-commerce solutions."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to build a website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Project timelines vary based on complexity. A simple landing page can take 1-2 weeks, while a full website with custom features typically takes 4-8 weeks."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with startups and small businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We specialize in helping startups and small businesses establish a strong online presence with affordable, scalable solutions."
          }
        },
        {
          "@type": "Question",
          "name": "What technologies do you use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We primarily use modern technologies like Next.js, React, TypeScript, and Tailwind CSS to build fast, SEO-friendly, and maintainable websites."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://apixbuild.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://apixbuild.com"
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn(inter.variable, outfit.variable, "antialiased font-sans bg-background text-foreground min-h-screen")}>
        {children}
      </body>
    </html>
  );
}

