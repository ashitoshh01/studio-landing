"use client";

import { cn } from "@/lib/utils";

export function TestimonialImageCards() {
    return (
        <div className="flex flex-col items-center text-zinc-100 py-12">
            <h2 className="text-3xl font-medium mb-10 text-center">
                Happy <span className="text-indigo-500 font-bold">Clients</span>
            </h2>
            <div className="flex items-center -space-x-3">
                <div className="relative group flex flex-col items-center">
                    <p className="opacity-0 scale-90 translate-y-2 group-hover:scale-100 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300 absolute -top-10 px-2 py-1 text-sm font-medium bg-zinc-800 rounded-md border border-zinc-700 whitespace-nowrap z-20">Michael</p>
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="Michael"
                        className="w-20 h-20 rounded-full border-4 border-zinc-950 object-cover hover:-translate-y-1 transition hover:scale-110 z-10 bg-zinc-800" />
                </div>
                <div className="relative group flex flex-col items-center">
                    <p className="opacity-0 scale-90 translate-y-2 group-hover:scale-100 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300 absolute -top-10 px-2 py-1 text-sm font-medium bg-zinc-800 rounded-md border border-zinc-700 whitespace-nowrap z-20">James</p>
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="James"
                        className="w-20 h-20 rounded-full border-4 border-zinc-950 object-cover hover:-translate-y-1 transition hover:scale-110 z-10 bg-zinc-800" />
                </div>
                <div className="relative group flex flex-col items-center">
                    <p className="opacity-0 scale-90 translate-y-2 group-hover:scale-100 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300 absolute -top-10 px-2 py-1 text-sm font-medium bg-zinc-800 rounded-md border border-zinc-700 whitespace-nowrap z-20">Emily</p>
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                        alt="Emily" className="w-20 h-20 rounded-full border-4 border-zinc-950 object-cover hover:-translate-y-1 transition hover:scale-110 z-10 bg-zinc-800" />
                </div>
                <div className="relative group flex flex-col items-center">
                    <p className="opacity-0 scale-90 translate-y-2 group-hover:scale-100 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300 absolute -top-10 px-2 py-1 text-sm font-medium bg-zinc-800 rounded-md border border-zinc-700 whitespace-nowrap z-20">John</p>
                    <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="John"
                        className="w-20 h-20 rounded-full border-4 border-zinc-950 object-cover hover:-translate-y-1 transition hover:scale-110 z-10 bg-zinc-800" />
                </div>
                <div className="relative group flex flex-col items-center">
                    <p className="opacity-0 scale-90 translate-y-2 group-hover:scale-100 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300 absolute -top-10 px-2 py-1 text-sm font-medium bg-zinc-800 rounded-md border border-zinc-700 whitespace-nowrap z-20">Sarah</p>
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200" alt="Sarah"
                        className="w-20 h-20 rounded-full border-4 border-zinc-950 object-cover hover:-translate-y-1 transition hover:scale-110 z-10 bg-zinc-800" />
                </div>
            </div>
        </div>
    );
};
