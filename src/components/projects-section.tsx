"use client";

import { CardStack, CardStackItem } from "@/components/ui/card-stack";
import { useMediaQuery } from "usehooks-ts";
import { useState, useEffect } from "react";

const items: CardStackItem[] = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "Modern shopping experience with seamless checkout and inventory management",
        imageSrc: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop&q=80",
        href: "#",
    },
    {
        id: 2,
        title: "SaaS Dashboard",
        description: "Analytics platform with real-time data visualization and insights",
        imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
        href: "#",
    },
    {
        id: 3,
        title: "Mobile Banking App",
        description: "Secure financial management with intuitive user experience",
        imageSrc: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=80",
        href: "#",
    },
    {
        id: 4,
        title: "Real Estate Portal",
        description: "Property search and management platform with virtual tours",
        imageSrc: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80",
        href: "#",
    },
    {
        id: 5,
        title: "Educational Platform",
        description: "Interactive learning management system with live classes",
        imageSrc: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=80",
        href: "#",
    },
];

export function ProjectsSection() {
    const [isMobile, setIsMobile] = useState(false);
    const matchesMobile = useMediaQuery("(max-width: 640px)");

    useEffect(() => {
        setIsMobile(matchesMobile);
    }, [matchesMobile]);

    return (
        <div className="w-full">
            <div className="mx-auto w-full max-w-5xl p-8">
                <CardStack
                    items={items}
                    initialIndex={0}
                    autoAdvance
                    intervalMs={2000}
                    pauseOnHover
                    showDots
                    cardWidth={isMobile ? 300 : 520}
                    cardHeight={isMobile ? 250 : 320}
                />
            </div>
        </div>
    );
}
