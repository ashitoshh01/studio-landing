"use client";

import Link from "next/link";
import Image from "next/image";
import { Home, Briefcase, Mail, Users, User } from "lucide-react";
import { MobileNav } from "@/components/mobile-nav";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState<number | null>(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Trigger point at 25% of viewport height (closer to top) avoids early switching
            const triggerPoint = window.scrollY + window.innerHeight * 0.25;

            const sections = [
                { id: 'about', tabIndex: 1 },
                { id: 'services', tabIndex: 2 },
                { id: 'projects', tabIndex: 4 },
                { id: 'testimonials', tabIndex: 4 }, // Keep 'Projects' active during testimonials
                { id: 'contact', tabIndex: 5 },
            ];

            let newActiveTab = 0; // Default to Home 'top'

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    if (triggerPoint >= element.offsetTop) {
                        newActiveTab = section.tabIndex;
                    }
                }
            }

            setActiveTab(newActiveTab);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const tabs = [
        { title: "Home", icon: Home },
        { title: "About Us", icon: User },
        { title: "Services", icon: Briefcase },
        { type: "separator" as const },
        { title: "Projects", icon: Users },
        { title: "Contact", icon: Mail },
    ];

    const handleTabChange = (index: number | null) => {
        if (index === null) return;

        // Adjust mapping based on separator index
        // 0: Home -> Top
        // 1: About Us -> #about
        // 2: Services -> #services
        // 3: Separator
        // 4: Projects -> #projects
        // 5: Contact -> #contact

        const targetIndex = index < 3 ? index : index - 1;
        const sections = ["top", "about", "services", "projects", "contact"];
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
                "fixed top-0 left-0 right-0 z-[999] transition-all duration-300",
                scrolled
                    ? "bg-white border-b border-zinc-200 py-2 shadow-sm"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container-wrapper relative flex items-center h-14">
                {/* Branding - Left Aligned */}
                <Link href="/" className="hover:opacity-80 transition-opacity z-50">
                    <Image
                        src="/apix-logo.png"
                        alt="Logo"
                        width={190}
                        height={70}
                        className="h-14 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Navigation - Right Aligned */}
                <div className="hidden min-[900px]:flex items-center gap-8 ml-auto">
                    {tabs.map((tab, index) => {
                        if (tab.type === "separator") {
                            return <div key={index} className="h-4 w-px bg-zinc-300" />;
                        }

                        const Icon = tab.icon;
                        return (
                            <button
                                key={index}
                                onClick={() => handleTabChange(index)}
                                className={cn(
                                    "flex items-center gap-2 text-sm font-medium transition-colors duration-200",
                                    activeTab === (index < 3 ? index : index - 1)
                                        ? "text-zinc-900 font-bold"
                                        : "text-zinc-500 hover:text-zinc-900"
                                )}
                            >
                                {Icon && <Icon className="h-4 w-4" />}
                                <span>{tab.title}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Mobile Navigation - Right Aligned (visible below 900px) */}
                <div className="min-[900px]:hidden ml-auto z-50">
                    <MobileNav
                        tabs={tabs}
                        onTabSelect={handleTabChange}
                    />
                </div>
            </div>
        </header>
    );
}
