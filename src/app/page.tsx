'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ContactSection } from '@/components/ui/contact';
// import { Web3HeroAnimated } from '@/components/ui/hero-section';
import { AnimatedMarqueeHero } from '@/components/ui/hero-3';
import { RevealImageList } from '@/components/ui/reveal-images';

import { ProjectsSection } from '@/components/projects-section';
import Loader from '@/components/ui/loader';
import { MarqueeTestimonials } from '@/components/ui/marquee-testimonials';

// A list of sample image URLs for the demo
const DEMO_IMAGES = [
  "https://images.unsplash.com/photo-1756312148347-611b60723c7a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1757865579201-693dd2080c73?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1756786605218-28f7dd95a493?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzh8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1757519740947-eef07a74c4ab?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDh8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1757263005786-43d955f07fb1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNzB8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1757207445614-d1e12b8f753e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxODZ8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1757269746970-dc477517268f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMjN8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1755119902709-a53513bcbedc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNDF8fHxlbnwwfHx8fHw%3D",
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
          tagline="Digital Excellence"
          title="We Build Digital Experiences That Scale"
          description="Transform your vision into reality with cutting-edge web solutions. From stunning designs to powerful applications, we craft digital products that drive results."
          ctaText="See Projects"
          ctaHref="#projects"
          images={DEMO_IMAGES}
        />

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
        <section className="py-24 bg-background border-t border-zinc-200">
          <div className="container-wrapper">
            <div className="mb-16 text-center">
              <h2 className="h2 text-zinc-900">Client Success Stories</h2>
              <p className="text-zinc-500 mt-4 text-lg">
                Join hundreds of satisfied clients worldwide
              </p>
            </div>

            <div className="flex flex-col gap-0">
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
