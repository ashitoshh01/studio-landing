import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const items = [
    {
        id: 1,
        title: "E-Commerce Architecture",
        description: "A headless commerce solution built for high-volume scale.",
        category: "Development",
        imageSrc: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop&q=80",
        href: "#",
    },
    {
        id: 2,
        title: "Fintech Dashboard",
        description: "Real-time analytics processing millions of data points securely.",
        category: "SaaS Product",
        imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
        href: "#",
    },
    {
        id: 3,
        title: "Neobank Mobile App",
        description: "Redefining personal banking with a frictionless mobile experience.",
        category: "Mobile App",
        imageSrc: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=80",
        href: "#",
    },
    {
        id: 4,
        title: "Luxury Real Estate",
        description: "Immersive property tours with VR integration.",
        category: "Web Design",
        imageSrc: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80",
        href: "#",
    },
    {
        id: 5,
        title: "EdTech Learning Hub",
        description: "Interactive video learning platform for global institutions.",
        category: "Platform",
        imageSrc: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=80",
        href: "#",
    },
    {
        id: 6,
        title: "AI Analysis Tool",
        description: "Machine learning interface for predictive data modeling.",
        category: "AI & ML",
        imageSrc: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80",
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
