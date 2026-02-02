"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Tab {
    title?: string;
    icon?: any;
    type?: "separator";
}

interface MobileNavProps {
    tabs: Tab[];
    onTabSelect: (index: number) => void;
}

export function MobileNav({ tabs, onTabSelect }: MobileNavProps) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };
    }, [open]);

    const handleLinkClick = (index: number) => {
        setOpen(false);
        onTabSelect(index);
    };

    return (
        <>
            <Button
                variant="ghost"
                size="icon"
                className="text-zinc-900 hover:bg-zinc-100"
                onClick={() => setOpen(true)}
            >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
            </Button>

            <AnimatePresence>
                {open && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[1000]"
                            onClick={() => setOpen(false)}
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed right-0 top-0 bottom-0 w-[300px] bg-white border-l border-zinc-200 p-6 z-[1000] flex flex-col gap-8 shadow-2xl"
                        >
                            <div className="flex justify-end">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-zinc-900 hover:bg-zinc-100 hover:rotate-90 transition-transform duration-200"
                                    onClick={() => setOpen(false)}
                                >
                                    <X className="h-6 w-6" />
                                </Button>
                            </div>

                            <nav className="flex flex-col gap-2">
                                {tabs.map((tab, index) => {
                                    if (tab.type === "separator") {
                                        return <div key={index} className="h-px bg-zinc-200 my-4" />;
                                    }

                                    const Icon = tab.icon;

                                    return (
                                        <button
                                            key={index}
                                            onClick={() => handleLinkClick(index)}
                                            className="flex items-center gap-4 p-3 text-lg font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-all"
                                        >
                                            {Icon && <Icon className="h-5 w-5" />}
                                            {tab.title}
                                        </button>
                                    )
                                })}
                            </nav>

                            <div className="mt-auto text-center text-xs text-zinc-400">
                                &copy; 2026 ApixBuild
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
