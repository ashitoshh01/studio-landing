"use client";

import Link from "next/link";
import Image from "next/image";
import { Home, Briefcase, Mail, Users } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { MobileNav } from "@/components/mobile-nav";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState<number | null>(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Determine active section based on scroll position
            const scrollPosition = window.scrollY + 100; // Offset for better detection

            const sections = [
                { id: 'top', tabIndex: 0 },
                { id: 'services', tabIndex: 1 },
                { id: 'projects', tabIndex: 3 },
                { id: 'contact', tabIndex: 4 },
            ];

            // Default to Home if at top
            if (scrollPosition < 300) {
                setActiveTab(0);
                return;
            }

            for (const section of sections) {
                if (section.id === 'top') continue; // Handled above

                const element = document.getElementById(section.id);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveTab(section.tabIndex);
                        break;
                    }
                }
            }
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
            <div className="container-wrapper relative flex items-center h-14">
                {/* Branding - Left Aligned */}
                <Link href="/" className="hover:opacity-80 transition-opacity z-50">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={220}
                        height={140}
                        className="h-28 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Centered Navigation (>900px) / Right Aligned (480px-900px) */}
                <div className="hidden min-[480px]:block w-fit ml-auto min-[900px]:ml-0 min-[900px]:absolute min-[900px]:left-1/2 min-[900px]:top-1/2 min-[900px]:-translate-x-1/2 min-[900px]:-translate-y-1/2">
                    <ExpandableTabs
                        tabs={tabs}
                        activeTabIndex={activeTab}
                        activeColor="text-white"
                        className="border-none bg-transparent shadow-none"
                        onChange={handleTabChange}
                    />
                </div>

                {/* Mobile Navigation - Right Aligned (visible only below 480px) */}
                <div className="min-[480px]:hidden ml-auto z-50">
                    <MobileNav
                        tabs={tabs}
                        onTabSelect={handleTabChange}
                    />
                </div>
            </div>
        </header>
    );
}
