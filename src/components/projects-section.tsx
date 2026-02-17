import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const items = [
    {
        id: 1,
        title: "Startup Landing Page",
        description: "A conversion-focused landing page designed to validate ideas and attract early users.",
        category: "UI/UX + Web Dev",
        imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
        href: "#",
    },
    {
        id: 2,
        title: "SaaS Analytics Dashboard",
        description: "A clean dashboard UI designed for clarity, performance, and decision-making.",
        category: "UX Thinking",
        imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
        href: "#",
    },
    {
        id: 3,
        title: "Business Website Redesign",
        description: "A modern website redesign focused on better usability, speed, and brand consistency.",
        category: "Web Design",
        imageSrc: "/business-redesign.webp",
        href: "#",
    },
    {
        id: 4,
        title: "Branding Strategy",
        description: "A cohesive brand system including logo, colors, typography, and digital presence.",
        category: "Brand Strategy",
        imageSrc: "/brand-identity.webp",
        href: "#",
    },
    {
        id: 5,
        title: "Web Application Interface",
        description: "A scalable web app UI built for long-term growth and performance.",
        category: "Engineering",
        imageSrc: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop&q=80",
        href: "#",
    },
    {
        id: 6,
        title: "Social Media Design Kit",
        description: "A content and visual system designed to maintain consistency across social platforms.",
        category: "Social + Design",
        imageSrc: "/social-media-kit.webp",
        href: "#",
    },
];

export function ProjectsSection() {
    return (
        <div className="w-full">
            <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item) => (
                        <Link key={item.id} href={item.href} className="block group">
                            <div className="relative flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-zinc-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-zinc-300">
                                {/* Image Container */}
                                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm text-zinc-800 font-medium shadow-sm hover:bg-white text-xs px-3 py-1">
                                            {item.category}
                                        </span>
                                    </div>
                                    <Image
                                        src={item.imageSrc}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-grow p-6">
                                    <div className="flex items-start justify-between gap-4 mb-3">
                                        <h3 className="font-heading font-bold text-xl text-zinc-900 group-hover:text-[#74B52A] transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <div className="p-2 rounded-full bg-zinc-50 border border-zinc-100 group-hover:bg-[#74B52A] group-hover:border-[#74B52A] transition-all duration-300">
                                            <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />
                                        </div>
                                    </div>
                                    <p className="text-zinc-500 leading-relaxed text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

