"use client";

import { Home, Briefcase, Mail, Users } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";

export function Navbar() {
    const tabs = [
        { title: "Home", icon: Home },
        { title: "Services", icon: Briefcase },
        { type: "separator" as const },
        { title: "Projects", icon: Users },
        { title: "Contact", icon: Mail },
    ];

    const handleTabChange = (index: number | null) => {
        if (index === null) return;

        const sections = ["", "services", "projects", "contact"];
        const sectionId = sections[index < 2 ? index : index - 1]; // Account for separator

        if (sectionId === "") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const element = document.getElementById(sectionId);
            element?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center">
            <ExpandableTabs
                tabs={tabs}
                activeColor="text-white"
                className="w-full rounded-none border-none bg-zinc-900/80 backdrop-blur-xl justify-center py-4 shadow-none"
                onChange={handleTabChange}
            />
        </header>
    );
}
