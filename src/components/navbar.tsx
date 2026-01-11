"use client";

import Link from "next/link";
import { Home, Briefcase, Mail, Users } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const tabs = [
        { title: "Home", icon: Home },
        { title: "Services", icon: Briefcase },
        { type: "separator" as const },
        { title: "Projects", icon: Users },
        { title: "Contact", icon: Mail },
    ];

    const handleTabChange = (index: number | null) => {
        if (index === null) return;

        // Adjust mapping based on separator index
        // 0: Home -> Top
        // 1: Services -> #services
        // 2: Separator
        // 3: Projects -> #projects
        // 4: Contact -> #contact

        const targetIndex = index < 2 ? index : index - 1;
        const sections = ["top", "services", "projects", "contact"];
        const sectionId = sections[targetIndex];

        if (sectionId === "top") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const element = document.getElementById(sectionId);
            element?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-2"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container-wrapper flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-white tracking-tighter hover:opacity-80 transition-opacity">
                    Wowgency
                </Link>

                {/* Desktop Navigation using ExpandableTabs */}
                <div className="hidden md:block">
                    <ExpandableTabs
                        tabs={tabs}
                        activeColor="text-white"
                        className="border-none bg-transparent shadow-none"
                        onChange={handleTabChange}
                    />
                </div>

                {/* Mobile Navigation Placeholder or simple button if needed */}
                <div className="md:hidden">
                    {/* We can use the same ExpandableTabs or a menu button. 
              For now keeping it simple as per request to match 'earlier' which likely was desktop focused */}
                    <ExpandableTabs
                        tabs={tabs}
                        activeColor="text-white"
                        className="border-none bg-transparent shadow-none scale-75 origin-right"
                        onChange={handleTabChange}
                    />
                </div>
            </div>
        </header>
    );
}
