import React, { useState, useEffect } from "react";

export function Web3HeroAnimated() {
    // Symmetric pillar heights (percent). Tall at edges, low at center.
    const pillars = [92, 84, 78, 70, 62, 54, 46, 34, 18, 34, 46, 54, 62, 70, 78, 84, 92];

    // State to trigger animations once the component is mounted.
    // This ensures animations play on load.
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Set isMounted to true after a short delay to allow the component to render first.
        // This is a common trick to ensure CSS transitions apply on the initial render.
        const timer = setTimeout(() => setIsMounted(true), 100);
        // Cleanup the timer if the component unmounts.
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* We inject a <style> tag directly into the component to define our custom
        CSS keyframe animations. This keeps the component fully self-contained.
      */}
            <style>
                {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes subtlePulse {
            0%, 100% {
              opacity: 0.8;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.03);
            }
          }
          
          /* We use a class to apply the animation */
          .animate-fadeInUp {
            /* Use 'forwards' to maintain the end state of the animation */
            animation: fadeInUp 0.8s ease-out forwards;
          }
        `}
            </style>

            <section className="relative isolate h-screen overflow-hidden bg-zinc-50 text-zinc-900">
                {/* ================== BACKGROUND ================== */}
                {/* Luminous elliptical gradients */}
                {/* ================== BACKGROUND ================== */}
                {/* Luminous elliptical gradients - Aurora Style */}
                <div
                    aria-hidden
                    className="absolute inset-0 -z-30 overflow-hidden"
                    style={{
                        background: `
                            radial-gradient(circle at 15% 50%, rgba(100, 100, 255, 0.15), transparent 45%),
                            radial-gradient(circle at 85% 30%, rgba(255, 100, 150, 0.15), transparent 45%),
                            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 1), transparent 100%),
                            linear-gradient(to bottom, transparent, #ffffff)
                        `
                    }}
                >
                    <div className="absolute top-[-20%] left-[-10%] h-[80vh] w-[80vw] bg-purple-200/40 blur-[120px] rounded-full mix-blend-multiply opacity-70 animate-pulse" style={{ animationDuration: '8s' }} />
                    <div className="absolute bottom-[-10%] right-[-10%] h-[80vh] w-[80vw] bg-blue-200/40 blur-[120px] rounded-full mix-blend-multiply opacity-70 animate-pulse" style={{ animationDuration: '10s' }} />
                    <div className="absolute top-[20%] left-[30%] h-[60vh] w-[60vw] bg-pink-100/60 blur-[100px] rounded-full mix-blend-multiply opacity-60" />
                </div>

                {/* Vignette corners for extra contrast */}
                <div aria-hidden className="absolute inset-0 -z-20 bg-[radial-gradient(140%_120%_at_50%_0%,transparent_50%,rgba(255,255,255,0.95))]" />

                {/* Grid overlay: vertical columns + subtle curved horizontal arcs */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, #000 1px, transparent 1px),
                            linear-gradient(to bottom, #000 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                        maskImage: 'radial-gradient(circle at 50% 50%, black 40%, transparent 100%)'
                    }}
                />

                {/* Curved horizontal arcs via repeating elliptical radial gradient for depth */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10 mix-blend-multiply opacity-[0.05]"
                    style={{
                        backgroundImage: [
                            "repeating-radial-gradient(80% 55% at 50% 52%, rgba(0,0,0,0.8) 0 1px, transparent 1px 120px)"
                        ].join(","),
                        backgroundBlendMode: "multiply",
                    }}
                />

                {/* ================== COPY ================== */}
                <div className="relative z-10 mx-auto grid w-full max-w-5xl place-items-center px-6 py-16 md:py-24 lg:py-28">
                    {/* We set opacity to 0 and apply the animation class to trigger the fade-in effect */}
                    <div className={`mx-auto text-center ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
                        <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-[11px] uppercase tracking-wider text-zinc-900 border border-zinc-200 backdrop-blur">
                            <span className="h-1.5 w-1.5 rounded-full bg-zinc-900" /> Digital Excellence
                        </span>
                        {/* Stagger animations with inline animation-delay */}
                        <h1 style={{ animationDelay: '200ms' }} className={`mt-6 text-4xl font-bold tracking-tight md:text-6xl text-black ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}>We Build Digital Experiences That Scale</h1>
                        <p style={{ animationDelay: '300ms' }} className={`mx-auto mt-5 max-w-2xl text-balance text-zinc-800 font-medium md:text-lg ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}>Transform your vision into reality with cutting-edge web solutions. From stunning designs to powerful applications, we craft digital products that drive results.</p>
                        <div style={{ animationDelay: '400ms' }} className={`mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
                            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-zinc-800">Start Your Project</a>
                            <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 backdrop-blur hover:bg-zinc-100/50">View Our Work</a>
                        </div>
                    </div>
                </div>

                {/* ================== PARTNERS ================== */}
                <div className="relative z-10 mx-auto mt-10 w-full max-w-6xl px-6 pb-24">
                    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-70">
                        {["React", "Next.js", "TypeScript", "Node.js", "Tailwind", "Vercel", "AWS", "Stripe"].map((brand) => (
                            <div key={brand} className="text-xs uppercase tracking-wider text-zinc-900 font-bold opacity-60">{brand}</div>
                        ))}
                    </div>
                </div>

                {/* ================== FOREGROUND ================== */}
                {/* Center-bottom rectangular glow with pulse animation */}
                <div
                    className="pointer-events-none absolute bottom-[128px] left-1/2 z-0 h-36 w-28 -translate-x-1/2 rounded-md bg-gradient-to-b from-rose-200/50 via-rose-100/30 to-transparent"
                    style={{ animation: 'subtlePulse 6s ease-in-out infinite' }}
                />

                {/* Stepped pillars silhouette */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[54vh]">
                    {/* Horizon Glow - Critical for silhouetting white pillars against white background */}
                    <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-purple-100/50 via-blue-50/30 to-transparent mix-blend-multiply" />

                    {/* light fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-zinc-50/90 to-transparent" />
                    {/* bars */}
                    <div className="absolute inset-x-0 bottom-0 flex h-full items-end gap-px px-[2px]">
                        {pillars.map((h, i) => (
                            <div
                                key={i}
                                className="flex-1 bg-zinc-950 transition-height duration-1000 ease-in-out"
                                style={{
                                    // Animate height from 0% to its target value when isMounted is true.
                                    height: isMounted ? `${h}%` : '0%',
                                    // Stagger the animation delay to create a wave effect from the center out.
                                    transitionDelay: `${Math.abs(i - Math.floor(pillars.length / 2)) * 60}ms`
                                }}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
