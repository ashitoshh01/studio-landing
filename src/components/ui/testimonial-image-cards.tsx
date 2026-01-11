"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export function TestimonialImageCards() {
    return (
        <div className="poppins-font-container">
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                .poppins-font-container {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <div className="flex flex-wrap items-center justify-center gap-6">
                <div className="max-w-80 bg-zinc-900 border border-zinc-800 text-white rounded-2xl shadow-xl">
                    <div className="relative -mt-px overflow-hidden rounded-t-2xl">
                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600" alt="" className="h-[270px] w-full rounded-t-2xl hover:scale-105 transition-all duration-300 object-cover object-top" />
                        <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-zinc-900 to-transparent"></div>
                    </div>
                    <div className="px-6 pb-6 pt-2">
                        <p className="font-medium border-b border-zinc-700 pb-5 text-zinc-100">“Radiant made undercutting all of our competitors an absolute breeze.”</p>
                        <p className="mt-4 font-semibold text-white">— John Doe</p>
                        <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#E0724A] to-[#9938CA] text-transparent bg-clip-text">Content Marketing</p>
                    </div>
                </div>
                <div className="max-w-80 bg-zinc-900 border border-zinc-800 text-white rounded-2xl shadow-xl">
                    <div className="relative -mt-px overflow-hidden rounded-t-2xl">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600" alt="" className="h-[270px] w-full rounded-t-2xl hover:scale-105 transition-all duration-300 object-cover object-top" />
                        <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-zinc-900 to-transparent"></div>
                    </div>
                    <div className="px-6 pb-6 pt-2">
                        <p className="font-medium border-b border-zinc-700 pb-5 text-zinc-100">“The dashboard interfaces are incredibly intuitive and powerful.”</p>
                        <p className="mt-4 font-semibold text-white">— James Wilson</p>
                        <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#E0724A] to-[#9938CA] text-transparent bg-clip-text">Product Manager</p>
                    </div>
                </div>
                <div className="max-w-80 bg-zinc-900 border border-zinc-800 text-white rounded-2xl shadow-xl">
                    <div className="relative -mt-px overflow-hidden rounded-t-2xl">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&h=600&auto=format&fit=crop" alt="" className="h-[270px] w-full rounded-t-2xl hover:scale-105 transition-all duration-300 object-cover object-top" />
                        <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-zinc-900 to-transparent"></div>
                    </div>
                    <div className="px-6 pb-6 pt-2">
                        <p className="font-medium border-b border-zinc-700 pb-5 text-zinc-100">“Transforming our brand identity was seamless with their design team.”</p>
                        <p className="mt-4 font-semibold text-white">— Emily Davis</p>
                        <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#E0724A] to-[#9938CA] text-transparent bg-clip-text">Creative Director</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
