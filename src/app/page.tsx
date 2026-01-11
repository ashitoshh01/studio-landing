'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ContactForm } from '@/components/contact-form';
import { Web3HeroAnimated } from '@/components/ui/animated-web3-landing-page';
import { RevealImageList } from '@/components/ui/reveal-images';
import { TestimonialsSection } from '@/components/testimonials-section';
import { ProjectsSection } from '@/components/projects-section';
import { Loading } from '@/components/ui/circle-unique-load';

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
            <div className="mb-16 text-center">
              <h2 className="h2 text-white">What We Offer</h2>
              <p className="text-zinc-400 mt-4 text-lg">
                Premium services tailored to your needs
              </p>
            </div>

            <div className="flex justify-center">
              <RevealImageList />
            </div>
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="py-24 bg-zinc-950 border-t border-zinc-900 overflow-x-hidden">
          <div className="container-wrapper">
            <div className="mb-16 text-center">
              <h2 className="h2 text-white">Our Built Projects</h2>
              <p className="text-zinc-400 mt-4 text-lg">
                See how we transform ideas into reality
              </p>
            </div>

            <ProjectsSection />
          </div>
        </section>

        {/* --- TESTIMONIALS SECTION --- */}
        <section className="py-24 bg-black border-t border-zinc-900">
          <div className="container-wrapper">
            <div className="mb-16 text-center">
              <h2 className="h2 text-white">What Our Clients Say</h2>
              <p className="text-zinc-400 mt-4 text-lg">
                Trusted by professionals worldwide
              </p>
            </div>

            <TestimonialsSection />
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section id="contact" className="py-24 bg-zinc-950 border-t border-zinc-900">
          <div className="container-wrapper max-w-2xl text-center">
            <h2 className="h2 text-white mb-6">Ready to start?</h2>
            <p className="text-zinc-400 mb-10">
              You have the idea. We have the team. <br />
              Fill the form below and let's get moving.
            </p>

            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 text-left">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
