"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutStory() {
    return (
        <section className="py-24 bg-zinc-50 border-t border-zinc-200 overflow-hidden" id="about">
            <div className="container-wrapper">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-zinc-900 leading-tight">
                            Driven by Passion, <br /> <span className="text-[#68AC28]">Defined by Quality.</span>
                        </h2>

                        <p className="text-lg text-zinc-600 leading-relaxed font-sans">
                            ApixBuild was founded with a simple belief: digital products should be both functional and thoughtfully designed.
                        </p>

                        <p className="text-lg text-zinc-600 leading-relaxed font-sans">
                            We work at the intersection of design, technology, and strategy, helping businesses build products that are clear, scalable, and user-focused. Every project starts with understanding the problem deeply and ends with a solution that delivers real value.
                        </p>

                        <p className="text-lg text-zinc-600 leading-relaxed font-sans">
                            We are engineers in the making with a strong problem-solving mindset. Instead of chasing trends, we focus on understanding people, breaking down problems, and building solutions that are practical, reliable, and easy to use.
                        </p>

                        <p className="text-lg text-zinc-600 leading-relaxed font-sans">
                            ApixBuild is a founder-led studio by Ashitosh Lavhate and Atharva Agarwal. We work closely on every project, stay hands-on throughout the process, and treat each build as a chance to learn, improve, and create real value through technology.
                        </p>
                    </motion.div>

                    {/* Founders Images */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 mt-12">
                                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-xl">
                                    <Image
                                        src="/team/founder.png"
                                        alt="Founder"
                                        fill
                                        sizes="(max-width: 768px) 50vw, 33vw"
                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="text-left">
                                    <h3 className="font-heading font-semibold text-xl text-zinc-900">Ashitosh Lavhate</h3>
                                    <p className="text-zinc-500 text-sm">Founder & CEO</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-xl">
                                    <Image
                                        src="/team/co-founder.png"
                                        alt="Co-Founder"
                                        fill
                                        sizes="(max-width: 768px) 50vw, 33vw"
                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="text-left">
                                    <h3 className="font-heading font-semibold text-xl text-zinc-900">Atharva Agarwal</h3>
                                    <p className="text-zinc-500 text-sm">Co-Founder & CDO</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -z-10 -top-10 -right-10 w-72 h-72 bg-zinc-200 rounded-full blur-3xl opacity-50" />
                        <div className="absolute -z-10 bottom-0 left-0 w-72 h-72 bg-zinc-300 rounded-full blur-3xl opacity-50" />

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
