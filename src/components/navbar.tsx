'use client';

import {
    HomeIcon,
    Briefcase,
    Users,
    Mail,
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';

const data = [
    {
        title: 'Home',
        icon: (
            <HomeIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
        ),
        href: '#',
        action: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
    },
    {
        title: 'Services',
        icon: (
            <Briefcase className='h-full w-full text-neutral-600 dark:text-neutral-300' />
        ),
        href: '#services',
        action: () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
        title: 'Projects',
        icon: (
            <Users className='h-full w-full text-neutral-600 dark:text-neutral-300' />
        ),
        href: '#projects',
        action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
        title: 'Contact',
        icon: (
            <Mail className='h-full w-full text-neutral-600 dark:text-neutral-300' />
        ),
        href: '#contact',
        action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
    },
];

export function Navbar() {
    return (
        <div className='fixed bottom-8 left-1/2 max-w-full -translate-x-1/2 z-50'>
            <Dock className='items-end pb-3 bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 rounded-2xl'>
                {data.map((item, idx) => (
                    <DockItem
                        key={idx}
                        className='aspect-square rounded-full bg-zinc-800 dark:bg-zinc-800 border border-zinc-700'
                    >
                        <DockLabel className="bg-zinc-900 border-zinc-700 text-zinc-200">{item.title}</DockLabel>
                        <DockIcon>
                            <div onClick={(e) => {
                                e.preventDefault();
                                item.action();
                            }} className="h-full w-full cursor-pointer p-2 flex items-center justify-center">
                                {item.icon}
                            </div>
                        </DockIcon>
                    </DockItem>
                ))}
            </Dock>
        </div>
    );
}
