import { cn } from "@/lib/utils";
import { Layout, Code2, Target, Share2, ArrowRight } from "lucide-react";
import React from "react";

const services = [
    {
        title: "UI/UX Design",
        description: "Thoughtful interfaces focused on clarity and usability.",
        icon: Layout,
        images: [
            {
                src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&auto=format&fit=crop&q=60",
                alt: "UI Design",
            },
            {
                src: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=200&auto=format&fit=crop&q=60",
                alt: "UX Design",
            },
            {
                src: "https://images.unsplash.com/photo-1550439062-609e1531270e?w=200&auto=format&fit=crop&q=60",
                alt: "Wireframing",
            },
        ],
    },
    {
        title: "Web Development",
        description: "Robust, scalable, and high-performance web solutions.",
        icon: Code2,
        images: [
            {
                src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&auto=format&fit=crop&q=60",
                alt: "Development",
            },
            {
                src: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=200&auto=format&fit=crop&q=60",
                alt: "Coding",
            },
            {
                src: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=200&auto=format&fit=crop&q=60",
                alt: "Server Architecture",
            },
        ],
    },
    {
        title: "Brand Strategy",
        description: "Building cohesive identities that resonate with your audience.",
        icon: Target,
        images: [
            {
                src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&auto=format&fit=crop&q=60",
                alt: "Strategy",
            },
            {
                src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&auto=format&fit=crop&q=60",
                alt: "Branding",
            },
            {
                src: "https://images.unsplash.com/photo-1553835973-dec43bfddbeb?w=200&auto=format&fit=crop&q=60",
                alt: "Marketing",
            },
        ],
    },
    {
        title: "Social Media Management",
        description: "Engaging content strategies to grow your digital presence.",
        icon: Share2,
        images: [
            {
                src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&auto=format&fit=crop&q=60",
                alt: "Social Analytics",
            },
            {
                src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&auto=format&fit=crop&q=60",
                alt: "Growth Charts",
            },
            {
                src: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=200&auto=format&fit=crop&q=60",
                alt: "Content Creation",
            },
        ],
    },
];

export function RevealImageList() {
    return (
        <div className="flex flex-col gap-4 w-full max-w-4xl mx-auto">
            {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
            ))}
        </div>
    );
}

function ServiceCard({ title, description, icon: Icon, images }: { title: string, description: string, icon: any, images: any[] }) {
    const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
    const cardRef = React.useRef<HTMLDivElement>(null);

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    // Animation classes for the images
    // Removed fixed positioning (right-8, top-1/2) 
    const container = "absolute z-40 h-16 w-16 md:h-24 md:w-24 pointer-events-none transition-transform duration-100 ease-out";
    const effect =
        "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-full h-full overflow-hidden transition-all rounded-xl";

    return (
        <div
            ref={cardRef}
            onMouseEnter={handleMouseEnter}
            className="group relative flex items-center justify-between p-6 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 hover:shadow-md hover:bg-white transition-all duration-300 cursor-pointer overflow-visible hover:z-50"
        >
            <div className="flex items-center gap-6 relative z-10 pointer-events-none">
                <div className="h-14 w-14 flex items-center justify-center rounded-xl bg-white border border-zinc-200 shadow-sm group-hover:scale-110 group-hover:border-[#74B52A]/30 group-hover:text-[#74B52A] transition-all duration-300 text-zinc-600">
                    <Icon className="w-7 h-7" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-1 group-hover:text-[#74B52A] transition-colors">{title}</h3>
                    <p className="text-zinc-500 font-medium">{description}</p>
                </div>
            </div>

            {/* Static Arrow that fades out on hover */}
            <div className="transition-all duration-300 text-zinc-300 group-hover:opacity-0 relative z-10">
                <ArrowRight className="w-6 h-6" />
            </div>

            {/* Image Reveal Animation - Following Cursor */}
            <div
                className={container}
                style={{
                    left: mousePos.x,
                    top: mousePos.y,
                    transform: 'translate(-50%, -50%)' // Center
                }}
            >
                <div className={effect}>
                    <img alt={images[1].alt} src={images[1].src} className="h-full w-full object-cover" />
                </div>
            </div>

            <div
                className={container}
                style={{
                    left: mousePos.x,
                    top: mousePos.y,
                    transform: 'translate(-30%, -30%) rotate(12deg)' // Rotated right
                }}
            >
                <div className={cn(effect, "duration-200")}>
                    <img alt={images[0].alt} src={images[0].src} className="h-full w-full object-cover" />
                </div>
            </div>

            <div
                className={container}
                style={{
                    left: mousePos.x,
                    top: mousePos.y,
                    transform: 'translate(-70%, -20%) rotate(-12deg)' // Rotated left and offset differently
                }}
            >
                <div className={cn(effect, "duration-300")}>
                    <img alt={images[2].alt} src={images[2].src} className="h-full w-full object-cover" />
                </div>
            </div>
        </div>
    )
}
