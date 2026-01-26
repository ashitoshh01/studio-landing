import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const items = [
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
    return (
        <div className="w-full">
            <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item) => (
                        <Link key={item.id} href={item.href} className="block group">
                            <Card className="h-full bg-zinc-900 border-zinc-800 overflow-hidden hover:border-zinc-700 transition-colors duration-300">
                                <div className="relative aspect-video w-full overflow-hidden">
                                    <Image
                                        src={item.imageSrc}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-white text-xl">{item.title}</CardTitle>
                                        <ArrowUpRight className="text-zinc-500 w-5 h-5 group-hover:text-white transition-colors" />
                                    </div>
                                    <CardDescription className="text-zinc-400 mt-2">
                                        {item.description}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
