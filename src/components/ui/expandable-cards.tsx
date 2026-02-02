"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface CardItem {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
    href: string;
}

interface ExpandableCardsProps {
    items: CardItem[];
}

export function ExpandableCards({ items }: ExpandableCardsProps) {
    const [activeId, setActiveId] = useState<number | null>(items[0].id);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 min-h-[500px] flex flex-col lg:flex-row gap-4">
            {items.map((item) => (
                <motion.div
                    key={item.id}
                    layout
                    onClick={() => setActiveId(item.id)}
                    onMouseEnter={() => setActiveId(item.id)}
                    className={cn(
                        "relative overflow-hidden rounded-2xl cursor-pointer group",
                        activeId === item.id
                            ? "flex-[3] h-[300px] lg:h-[500px]"
                            : "flex-[1] h-[80px] lg:h-[500px]"
                    )}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    {/* Background Image */}
                    <motion.img
                        layoutId={`img-${item.id}`}
                        src={item.imageSrc}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Overlay Gradient */}
                    <div className={cn(
                        "absolute inset-0 bg-white/40 transition-colors duration-300",
                        activeId === item.id ? "bg-white/20" : "bg-white/60 group-hover:bg-white/40"
                    )} />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        {/* Collapsed state text (visible only when inactive and on desktop) */}
                        {activeId !== item.id && (
                            <div className="hidden lg:flex items-center justify-center w-full h-full">
                                <h3 className="text-xl font-bold text-zinc-900/70 -rotate-90 whitespace-nowrap tracking-widest origin-center">
                                    {item.title}
                                </h3>
                            </div>
                        )}

                        {/* Expanded Content */}
                        <AnimatePresence mode="popLayout">
                            {activeId === item.id && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ delay: 0.1, duration: 0.3 }}
                                    className="bg-white/90 backdrop-blur-md p-6 rounded-xl border border-zinc-200"
                                >
                                    <div className="flex justify-between items-start gap-4">
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2">{item.title}</h3>
                                            <p className="text-zinc-600 text-sm md:text-base line-clamp-2 md:line-clamp-none">
                                                {item.description}
                                            </p>
                                        </div>
                                        <a
                                            href={item.href}
                                            className="bg-zinc-900 text-white p-3 rounded-full hover:bg-zinc-800 transition-colors shrink-0"
                                        >
                                            <ArrowUpRight className="w-5 h-5" />
                                        </a>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Mobile Inactive Title (simple text at bottom) */}
                        {activeId !== item.id && (
                            <div className="lg:hidden absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white/90 to-transparent">
                                <h3 className="text-lg font-bold text-zinc-900">{item.title}</h3>
                            </div>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
