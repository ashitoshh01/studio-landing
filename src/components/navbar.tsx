'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="container-wrapper flex items-center justify-between h-16">
                <Link href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <span className="text-black font-extrabold text-xs">SL</span>
                    </div>
                    Studio.
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#services" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Services</Link>
                    <Link href="#work" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Work</Link>
                    <Button size="sm" className="bg-white text-black hover:bg-zinc-200" asChild>
                        <Link href="#contact">Start a Project</Link>
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-zinc-950 border-b border-zinc-800 p-4 flex flex-col gap-4 shadow-2xl">
                    <Link href="#services" className="text-base font-medium text-zinc-400 hover:text-white py-2" onClick={() => setIsOpen(false)}>Services</Link>
                    <Link href="#work" className="text-base font-medium text-zinc-400 hover:text-white py-2" onClick={() => setIsOpen(false)}>Work</Link>
                    <Button className="w-full bg-white text-black" asChild>
                        <Link href="#contact" onClick={() => setIsOpen(false)}>Start a Project</Link>
                    </Button>
                </div>
            )}
        </header>
    );
}
