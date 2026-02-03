'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ContactSection } from '@/components/ui/contact';
// import { Web3HeroAnimated } from '@/components/ui/hero-section';
import { AnimatedMarqueeHero } from '@/components/ui/hero-3';
import { RevealImageList } from '@/components/ui/reveal-images';
import { AboutStory } from '@/components/ui/about-story';

import { ProjectsSection } from '@/components/projects-section';
import Loader from '@/components/ui/loader';

// A list of sample image URLs for the demo
const DEMO_IMAGES = [
  "/hero/hero-1.jpg",
  "/hero/hero-2.jpg",
  "/hero/hero-3.jpg",
  "/hero/hero-4.jpg",
  "/hero/hero-5.jpg",
  "/hero/hero-6.jpg",
  "/hero/hero-7.jpg",
  "/hero/hero-8.jpg",
  "/hero/hero-9.jpg",
  "/hero/hero-10.jpg",
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader screenHFull={true} />;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background selection:bg-black selection:text-white">
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* --- HERO SECTION (Full Screen) --- */}
        <AnimatedMarqueeHero
          tagline="Design. Build. Scale."
          title="Creating Impactful Experiences"
          description="Transform your vision into reality with cutting-edge web solutions. From stunning designs to powerful applications, we craft digital products that drive results."
          primaryCtaText="View Our Work"
          primaryCtaHref="#projects"
          secondaryCtaText="Start a Project"
          secondaryCtaHref="#contact"
          images={DEMO_IMAGES}
        />

        {/* --- ABOUT SECTION --- */}
        <AboutStory />

        {/* --- SERVICES SECTION --- */}
        <section id="services" className="py-24 bg-background border-t border-zinc-200">
          <div className="container-wrapper">
            <div className="mb-16 text-center">
              <h2 className="h2 text-zinc-900">Our Expertise</h2>
              <p className="text-zinc-500 mt-4 text-lg">
                Comprehensive digital solutions for modern businesses
              </p>
            </div>

            <div className="flex justify-center">
              <RevealImageList />
            </div>
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="py-24 bg-zinc-50 border-t border-zinc-200">
          <div className="container-wrapper">
            <div className="mb-16 text-center">
              <h2 className="h2 text-zinc-900">Featured Projects</h2>
              <p className="text-zinc-500 mt-4 text-lg">
                Building digital products that make an impact
              </p>
            </div>

            <ProjectsSection />
          </div>
        </section>

        {/* --- TESTIMONIALS SECTION --- */}
        <section id="testimonials" className="py-24 bg-background border-t border-zinc-200">
          <div className="container-wrapper">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="h2 text-zinc-900">Client Feedback</h2>
              <div className="mt-8 p-8 bg-zinc-50 rounded-2xl border border-zinc-200">
                <p className="text-zinc-600 text-lg leading-relaxed">
                  We’re currently working with early clients and partners. Testimonials will be added as projects go live.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
