"use client";

import React from "react";
import { cn } from "@/lib/utils";

type CardT = {
    image: string;
    name: string;
    handle: string;
    text: string;
};

const TESTIMONIALS_ROW1: CardT[] = [
    {
        image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
        name: "Briar Martin",
        handle: "@neilstellar",
        text: "Radiant made undercutting all of our competitors an absolute breeze.",
    },
    {
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
        name: "Avery Johnson",
        handle: "@averywrites",
        text: "The team delivered beyond expectations. Highly professional and creative!",
    },
    {
        image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
        name: "Jordan Lee",
        handle: "@jordantalks",
        text: "Best agency we've worked with. They truly understand modern web development.",
    },
    {
        image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
        name: "Elliot Page",
        handle: "@elliotdev",
        text: "Transforms complex problems into elegant solutions. Simply amazing work.",
    },
];

const TESTIMONIALS_ROW2: CardT[] = [
    {
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
        name: "James Bryan",
        handle: "@jbryan",
        text: "Our conversion rates skyrocketed after the redesign. Worth every penny.",
    },
    {
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces",
        name: "Sarah Connors",
        handle: "@sconnor",
        text: "Professional, timely, and incredibly talented team. Highly recommended!",
    },
    {
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop&crop=faces",
        name: "Mark Sloan",
        handle: "@marksloan",
        text: "They brought our vision to life in ways we couldn't have imagined.",
    },
    {
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
        name: "Emily Clark",
        handle: "@eclark",
        text: "The attention to detail in the UI/UX design is simply outstanding.",
    },
];

const VerifyIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 48 48"
        className="inline-block text-blue-500"
    >
        <polygon
            fill="currentColor"
            points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"
        ></polygon>
        <polygon
            fill="#fff"
            points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"
        ></polygon>
    </svg>
);

const Card = ({ card }: { card: CardT }) => (
    <div className="p-4 rounded-xl mx-4 shadow-sm hover:shadow-md transition-all duration-200 w-80 shrink-0 bg-white border border-zinc-200">
        <div className="flex gap-3">
            <img className="size-10 rounded-full object-cover" src={card.image} alt={card.name} />
            <div className="flex flex-col">
                <div className="flex items-center gap-1">
                    <p className="font-medium text-zinc-900 text-sm">{card.name}</p>
                    <VerifyIcon />
                </div>
                <span className="text-xs text-zinc-500">{card.handle}</span>
            </div>
        </div>
        <p className="text-sm pt-3 text-zinc-600 leading-relaxed">
            {card.text}
        </p>
    </div>
);

function MarqueeRow({
    data,
    reverse = false,
    speed = 25,
}: {
    data: CardT[];
    reverse?: boolean;
    speed?: number;
}) {
    const doubled = React.useMemo(() => [...data, ...data, ...data], [data]);

    return (
        <div className="relative w-full overflow-hidden isolation-isolate">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-32 z-10 bg-gradient-to-r from-white to-transparent" />
            <div
                className={cn(
                    "flex w-max hover:[animation-play-state:paused]",
                    reverse ? "py-2" : "py-2"
                )}
                style={{
                    animation: `marqueeScroll ${speed}s linear infinite`,
                    animationDirection: reverse ? "reverse" : "normal",
                }}
            >
                {doubled.map((c, i) => (
                    <Card key={i} card={c} />
                ))}
            </div>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-32 z-10 bg-gradient-to-l from-white to-transparent" />
        </div>
    );
}

export function MarqueeTestimonials() {
    return (
        <>
            <style jsx global>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
            <div className="flex flex-col gap-6 py-12 w-full overflow-hidden">
                <MarqueeRow data={TESTIMONIALS_ROW1} reverse={false} speed={40} />
                <MarqueeRow data={TESTIMONIALS_ROW2} reverse={true} speed={45} />
            </div>
        </>
    );
}
