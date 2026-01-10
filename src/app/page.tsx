import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ContactForm } from '@/components/contact-form';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code2, Layers, LineChart } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-zinc-900 selection:text-white">
      <Navbar />

      <main className="flex-1 pt-16">

        {/* --- HERO SECTION --- */}
        <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="container-wrapper relative z-10">
            <div className="max-w-3xl">
              <h1 className="h1 text-zinc-900 mb-6">
                We build premium <br />
                <span className="text-zinc-500">digital products.</span>
              </h1>
              <p className="p text-lg md:text-xl max-w-xl mb-8">
                A minimal digital agency focused on UI/UX, development, and strategy.
                We turn complex problems into simple, beautiful solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="#contact" className="gap-2">
                    Start a Project <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-linear-to-b from-zinc-50 to-white opacity-50 pointer-events-none" />
        </section>

        {/* --- SERVICES SECTION --- */}
        <section id="services" className="py-20 bg-zinc-50 border-y border-zinc-100">
          <div className="container-wrapper">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-lg">
                <h2 className="h2 mb-4">What we do</h2>
                <p className="p">We don't do everything. We just do these three things, extremely well.</p>
              </div>
              <Button variant="ghost" className="hidden md:inline-flex" asChild>
                <Link href="#contact">Get a quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6 text-zinc-900" />
                </div>
                <h3 className="h3 mb-3">UI/UX Design</h3>
                <p className="p text-sm">
                  Clean, modern interfaces designed heavily on user experience. We create design systems that scale.
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center mb-6">
                  <Code2 className="w-6 h-6 text-zinc-900" />
                </div>
                <h3 className="h3 mb-3">Development</h3>
                <p className="p text-sm">
                  Fast, responsive websites using Next.js and React. Clean code that ranks high on Google (SEO).
                </p>
              </div>

              {/* Service 3 */}
              <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center mb-6">
                  <LineChart className="w-6 h-6 text-zinc-900" />
                </div>
                <h3 className="h3 mb-3">Strategy</h3>
                <p className="p text-sm">
                  We help define your product roadmap and go-to-market strategy to ensure maximum impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- PROCESS/STATS --- */}
        <section id="process" className="py-20">
          <div className="container-wrapper">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="h2 mb-6">Simple, transparent process.</h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold">1</span>
                    <div>
                      <h4 className="font-semibold text-zinc-900">Submit Request</h4>
                      <p className="text-zinc-600 text-sm mt-1">Fill out the form with your project details.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-100 text-zinc-900 flex items-center justify-center font-bold">2</span>
                    <div>
                      <h4 className="font-semibold text-zinc-900">Review & Strategy</h4>
                      <p className="text-zinc-600 text-sm mt-1">We analyze your requirements and prepare a proposal.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-100 text-zinc-900 flex items-center justify-center font-bold">3</span>
                    <div>
                      <h4 className="font-semibold text-zinc-900">Launch Project</h4>
                      <p className="text-zinc-600 text-sm mt-1">We start building immediately after kickoff.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
                <div className="text-center space-y-2">
                  <p className="text-4xl font-bold text-zinc-900">24h</p>
                  <p className="text-sm text-zinc-500 uppercase tracking-wider font-medium">Response Time</p>
                </div>
                <div className="my-8 border-t border-zinc-200" />
                <div className="text-center space-y-2">
                  <p className="text-4xl font-bold text-zinc-900">100%</p>
                  <p className="text-sm text-zinc-500 uppercase tracking-wider font-medium">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section id="contact" className="py-20 bg-zinc-900 text-zinc-50">
          <div className="container-wrapper">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="h2 text-white mb-6">Let's build something great.</h2>
                <p className="text-zinc-400 text-lg mb-8">
                  Ready to start? Send us your requirements and we'll get back to you within 24 hours.
                </p>

                <div className="space-y-4 text-zinc-300">
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Accepting new projects for Q1 2026
                  </p>
                  <p>hello@studio-agency.com</p>
                  <p>+1 (555) 000-0000</p>
                </div>
              </div>

              <div className="bg-white text-zinc-900 p-6 md:p-8 rounded-2xl shadow-xl">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
