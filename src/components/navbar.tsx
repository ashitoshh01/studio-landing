'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Process' },
    { href: '#contact', label: 'Contact' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
            <div className="container-wrapper flex items-center justify-between h-16">
                <Link href="/" className="text-xl font-bold tracking-tight text-zinc-900">
                    Studio.
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button size="sm" asChild>
                        <Link href="#contact">Start a Project</Link>
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-zinc-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-zinc-100 p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-base font-medium text-zinc-600 hover:text-zinc-900 py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button className="w-full" asChild>
                        <Link href="#contact" onClick={() => setIsOpen(false)}>Start a Project</Link>
                    </Button>
                </div>
            )}
        </header>
    );
}
