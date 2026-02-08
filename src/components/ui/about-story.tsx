"use client";

import { motion } from "framer-motion";

export function AboutStory() {
    const features = [
        {
            title: "Holistic Approach",
            description: "We work at the intersection of design, technology, and strategy, helping businesses build products that are clear, scalable, and user-focused. Every project starts with understanding the problem deeply.",
        },
        {
            title: "Engineering Mindset",
            description: "We are engineers in the making with a strong problem-solving mindset. Instead of chasing trends, we focus on understanding people, breaking down problems, and building practical solutions.",
        },
        {
            title: "Founder-Led",
            description: "ApixBuild is a founder-led studio by Ashitosh Lavhate and Atharva Agarwal. We stay hands-on throughout the process, treating each build as a chance to create real value through technology.",
        }
    ];

    return (
        <section className="py-24 bg-zinc-50 relative overflow-hidden" id="about">
            {/* Decorative Background */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
            <div className="absolute top-[10%] left-[50%] -translate-x-[50%] w-[800px] h-[400px] bg-[#68AC28]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container-wrapper relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-zinc-900 leading-tight"
                    >
                        Driven by Passion, <br /> <span className="text-[#68AC28]">Defined by Quality.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-zinc-600 font-sans leading-relaxed"
                    >
                        ApixBuild was founded with a simple belief: digital products should be both functional and thoughtfully designed.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (index * 0.1) }}
                            className="bg-white p-8 rounded-2xl border border-zinc-200/60 shadow-sm hover:shadow-md hover:border-[#68AC28]/30 transition-all duration-300 group"
                        >
                            <div className="w-10 h-1 bg-[#68AC28]/20 group-hover:bg-[#68AC28] transition-colors mb-6 rounded-full" />
                            <h3 className="text-xl font-heading font-semibold text-zinc-900 mb-4 group-hover:text-[#68AC28] transition-colors">{item.title}</h3>
                            <p className="text-zinc-600 leading-relaxed text-sm md:text-base">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
