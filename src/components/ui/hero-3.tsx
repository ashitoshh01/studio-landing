"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Props interface for the component
interface AnimatedMarqueeHeroProps {
    tagline: string;
    title: React.ReactNode;
    description: string;
    primaryCtaText?: string;
    primaryCtaHref?: string;
    secondaryCtaText?: string;
    secondaryCtaHref?: string;
    images: string[];
    className?: string;
}

// Simple action button — no framer-motion for buttons (reduces JS bundle)
const ActionButton = ({ children, href, className }: { children: React.ReactNode; href?: string; className?: string }) => {
    return (
        <a
            href={href}
            className={cn(
                "px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-opacity-75 inline-block",
                className
            )}
        >
            {children}
        </a>
    );
};

// The main hero component
export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
    tagline,
    title,
    description,
    primaryCtaText,
    primaryCtaHref,
    secondaryCtaText,
    secondaryCtaHref,
    images,
    className,
}) => {
    // Duplicate images for a seamless loop
    const duplicatedImages = [...images, ...images];

    return (
        <section
            id="hero"
            className={cn(
                "relative w-full h-screen overflow-hidden bg-[#E7EAE5] flex flex-col items-center justify-center text-center px-4",
                className
            )}
        >
            <div className="z-10 flex flex-col items-center -translate-y-8">
                {/* Tagline */}
                <div className="mb-4 inline-block rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm font-medium text-zinc-600 backdrop-blur-sm animate-[fadeIn_0.6s_ease-out_forwards]">
                    {tagline}
                </div>

                {/* Main Title - h1 for SEO, simple CSS animation not framer-motion */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground animate-[fadeInUp_0.7s_ease-out_0.1s_both]">
                    {typeof title === 'string' ? (
                        title.split(" ").map((word, i) => {
                            const isHighlight = word.includes("Impactful");
                            return (
                                <span
                                    key={i}
                                    className="relative inline-block mx-2"
                                >
                                    {isHighlight && (
                                        <span className="absolute inset-0 -z-10 block w-full h-full transform -skew-x-12 -rotate-2 scale-125">
                                            <svg viewBox="0 0 200 90" className="w-[120%] h-[170%] absolute -top-6 -left-6 fill-[#74B52A]" preserveAspectRatio="none">
                                                <path d="M15.5,55.8c0,0,32.3-17.7,60.7-22.3c23.6-3.8,111.9-9.1,123.7,1.6c6.4,5.8-9.4,13.8-37.5,20.4c-35.3,8.3-95.3,9.8-132.4,9.4C10.4,64.7,0.7,60.1,15.5,55.8z" />
                                                <path d="M190.5,35.8c-2.3-4.2-22.3-1.6-42.3,1.4c-33.6,5-101.9,13.1-137.4,14.4c-12.6,0.5-22.6,3.5,2.6,10.4c29.3,8,95.3,8.8,142.4,2.4C180.4,59.7,192.7,40.1,190.5,35.8z" opacity="0.6" />
                                            </svg>
                                        </span>
                                    )}
                                    <span className={isHighlight ? "relative z-10 text-white" : ""}>{word}</span>
                                </span>
                            );
                        })
                    ) : (
                        title
                    )}
                </h1>

                {/* Description */}
                <p className="mt-6 max-w-xl text-lg text-zinc-600 font-medium animate-[fadeInUp_0.7s_ease-out_0.25s_both]">
                    {description}
                </p>

                {/* Call to Action Buttons */}
                <div className="mt-8 flex flex-wrap gap-4 justify-center animate-[fadeInUp_0.7s_ease-out_0.35s_both]">
                    {primaryCtaText && (
                        <ActionButton
                            href={primaryCtaHref}
                            className="bg-[#000000] text-white hover:bg-zinc-800 focus:ring-[#353535]"
                        >
                            {primaryCtaText}
                        </ActionButton>
                    )}

                    {secondaryCtaText && (
                        <ActionButton
                            href={secondaryCtaHref}
                            className="bg-[#57AB1B] text-white hover:bg-[#74B52A] focus:ring-[#57AB1B]"
                        >
                            {secondaryCtaText}
                        </ActionButton>
                    )}
                </div>
            </div>

            {/* Animated Image Marquee - CSS-only animation for performance */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 md:h-2/5 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
                <div
                    className="flex gap-4"
                    style={{
                        animation: 'heroMarquee 40s linear infinite',
                        width: 'max-content',
                    }}
                >
                    {duplicatedImages.map((src, index) => (
                        <div
                            key={index}
                            className="relative aspect-[3/4] h-48 md:h-64 flex-shrink-0"
                            style={{
                                rotate: `${(index % 2 === 0 ? -2 : 5)}deg`,
                            }}
                        >
                            <Image
                                src={src}
                                alt={`Portfolio showcase ${(index % 6) + 1}`}
                                fill
                                className="object-cover rounded-2xl shadow-md"
                                sizes="(max-width: 768px) 192px, 256px"
                                priority={index === 0}
                                loading={index === 0 ? "eager" : "lazy"}
                            />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};
