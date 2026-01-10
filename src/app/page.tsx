'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function Home() {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [requirement, setRequirement] = useState('');

  return (
    <div className="min-h-screen flex flex-col font-sans bg-black selection:bg-white selection:text-black">
      <Navbar />

      <main className="flex-1 flex flex-col">

        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20">

          {/* Background Grid/Glow */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 w-full max-w-4xl mx-auto space-y-12">

            {/* Tagline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="h1 text-white"
            >
              We don't just build websites. <br />
              <span className="text-zinc-500">We build empires.</span>
            </motion.h1>

            {/* Main Interactive Input (from sketch) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative max-w-2xl mx-auto w-full group"
            >
              <div className={`
                flex items-center gap-4 p-2 pl-6 rounded-full border transition-all duration-300
                ${isInputFocused ? 'bg-zinc-900 border-white ring-2 ring-white/20' : 'bg-zinc-900/50 border-zinc-700 hover:border-zinc-600'}
              `}>
                <Search className="w-6 h-6 text-zinc-500" />
                <input
                  type="text"
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => setIsInputFocused(false)}
                  placeholder="Tell us what you need (e.g., 'A modern e-commerce site')..."
                  className="flex-1 bg-transparent border-none outline-hidden text-lg text-white placeholder:text-zinc-500 h-12 w-full"
                />
                <Button
                  size="lg"
                  className="rounded-full px-8 bg-white text-black hover:bg-zinc-200 transition-transform active:scale-95"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Start <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* "Try First Pay Later" Sticker (from sketch) */}
              {/* Positioned comfortably near the input */}
              <motion.div
                initial={{ rotate: -12, scale: 0 }}
                animate={{ rotate: 12, scale: 1 }}
                whileHover={{ rotate: 0, scale: 1.1 }}
                transition={{ type: 'spring', delay: 0.5 }}
                className="absolute -bottom-16 -right-6 md:-right-16 md:-bottom-8 cursor-pointer"
              >
                <div className="relative flex items-center justify-center w-28 h-28 md:w-36 md:h-36">
                  {/* Starburst shape */}
                  <svg viewBox="0 0 200 200" className="absolute w-full h-full text-yellow-400 drop-shadow-lg animate-spin-slow duration-[10s]">
                    <path fill="currentColor" d="M100 0 L112 35 L145 25 L140 60 L170 75 L150 100 L170 125 L140 140 L145 175 L112 165 L100 200 L88 165 L55 175 L60 140 L30 125 L50 100 L30 75 L60 60 L55 25 L88 35 Z" />
                  </svg>
                  <div className="relative z-10 text-center font-bold text-black text-xs md:text-sm -rotate-12 leading-tight">
                    TRY FIRST<br />
                    <span className="text-sm md:text-base">PAY LATER</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </section>

        {/* --- PROJECTS SECTION (from sketch) --- */}
        <section className="py-24 bg-zinc-950 border-t border-zinc-900">
          <div className="container-wrapper">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="h2 text-white">Our Built Projects</h2>
              <p className="text-zinc-400 mt-4 text-lg">See how we transform ideas into reality.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: item * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative aspect-video bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-white/20 transition-all"
                >
                  {/* Pseudo Project Image */}
                  <div className="absolute inset-0 bg-zinc-800 group-hover:bg-zinc-700 transition-colors flex items-center justify-center">
                    <span className="text-zinc-600 font-bold text-2xl group-hover:text-white transition-colors">
                      Project {item}
                    </span>
                  </div>

                  {/* Overlay Info */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-xl font-bold text-white">Client Name</h3>
                    <p className="text-zinc-300 text-sm">Web Development • Design</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" className="text-white border-zinc-700 hover:bg-zinc-800">
                View All Work
              </Button>
            </div>
          </div>
        </section>

        {/* --- CONTACT SECTION (preserved but styled darkly) --- */}
        <section id="contact" className="py-24 bg-black">
          <div className="container-wrapper max-w-2xl text-center">
            <h2 className="h2 text-white mb-6">Ready to start?</h2>
            <p className="text-zinc-400 mb-10">You have the idea. We have the team. <br />Fill the form below and let's get moving.</p>

            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 text-left">
              {/* Re-using the contact form but wrapping it to fit the theme */}
              {/* NOTE: We need to update ContactForm components to handle dark mode specifically if they aren't using foreground/background vars perfectly. 
                    Actually, based on previous step, they use text-zinc-900 mostly. I should update ContactForm too. */}
              <DarkContactForm />
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

// Temporary inline Dark Mode optimized form or we modify the original. 
// I will create a modified version here for simplicity in this file, or update the component efficiently. 
// Since 'ContactForm' is imported, let's just make it look good.
function DarkContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <ArrowRight className="text-green-500 w-8 h-8 rotate-[-45deg]" />
        </div>
        <h3 className="text-white text-xl font-bold">Received</h3>
        <p className="text-zinc-400 mt-2">We'll be in touch within 24 hours.</p>
        <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-6 border-zinc-700 text-white hover:bg-zinc-800">
          Reset
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-400">Name</label>
          <input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-white outline-none transition-all" placeholder="John Doe" required />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-400">Email</label>
          <input type="email" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-white outline-none transition-all" placeholder="john@example.com" required />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-400">Tell us about your project</label>
        <textarea className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-white outline-none transition-all min-h-[120px]" placeholder="Type here..." required />
      </div>
      <Button className="w-full bg-white text-black hover:bg-zinc-200" size="lg" isLoading={isLoading}>Submit Request</Button>
    </form>
  )
}
