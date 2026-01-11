'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ContactSection } from '@/components/ui/contact';
import { Web3HeroAnimated } from '@/components/ui/animated-web3-landing-page';
import { RevealImageList } from '@/components/ui/reveal-images';
import { TestimonialsSection } from '@/components/testimonials-section';
import { ProjectsSection } from '@/components/projects-section';
import { Loading } from '@/components/ui/circle-unique-load';
import { MarqueeTestimonials } from '@/components/ui/marquee-testimonials';

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
    return <Loading screenHFull={true} />;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-black selection:bg-white selection:text-black">
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* --- HERO SECTION (Full Screen) --- */}
        <Web3HeroAnimated />

        {/* --- SERVICES SECTION --- */}
        <section id="services" className="py-24 bg-black border-t border-zinc-900">
          <div className="container-wrapper">


            <div className="flex justify-center">
              <RevealImageList />
            </div>
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="py-24 bg-zinc-950 border-t border-zinc-900 overflow-x-hidden">
          <div className="container-wrapper">
            <div className="mb-16 text-center">
              <h2 className="h2 text-white">Featured Projects</h2>
              <p className="text-zinc-400 mt-4 text-lg">
                Building digital products that make an impact
              </p>
            </div>

            <ProjectsSection />
          </div>
        </section>

        {/* --- TESTIMONIALS SECTION --- */}
        <section className="py-24 bg-black border-t border-zinc-900">
          <div className="container-wrapper">
            <div className="mb-16 text-center">
              <h2 className="h2 text-white">Client Success Stories</h2>
              <p className="text-zinc-400 mt-4 text-lg">
                Join hundreds of satisfied clients worldwide
              </p>
            </div>

            <div className="flex flex-col gap-0">
              <TestimonialsSection />
              <MarqueeTestimonials />
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
