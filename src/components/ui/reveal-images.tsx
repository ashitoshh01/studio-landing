import { cn } from "@/lib/utils";

interface ImageSource {
    src: string;
    alt: string;
}

interface ShowImageListItemProps {
    text: string;
    images: [ImageSource, ImageSource];
    className?: string;
}

function RevealImageListItem({ text, images, className }: ShowImageListItemProps) {
    const container = "absolute left-1/2 -translate-x-1/2 -top-10 z-40 h-32 w-24 pointer-events-none";
    const effect =
        "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-full h-full overflow-hidden transition-all rounded-md";

    return (
        <div className={cn("group relative h-fit w-fit overflow-visible py-8 cursor-pointer", className)}>
            <h1 className="text-4xl md:text-6xl font-black text-foreground transition-all duration-500 group-hover:opacity-40 text-center uppercase tracking-tighter">
                {text}
            </h1>
            <div className={container}>
                <div className={effect}>
                    <img alt={images[1].alt} src={images[1].src} className="h-full w-full object-cover" />
                </div>
            </div>
            <div
                className={cn(
                    container,
                    "translate-x-[-40%] translate-y-2 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-[-30%] group-hover:translate-y-[-10px] group-hover:rotate-12",
                )}
            >
                <div className={cn(effect, "duration-200")}>
                    <img alt={images[0].alt} src={images[0].src} className="h-full w-full object-cover" />
                </div>
            </div>
        </div>
    );
}

function RevealImageList() {
    const items = [
        {
            text: "UI/UX Design",
            images: [
                {
                    src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&auto=format&fit=crop&q=60",
                    alt: "UI Design",
                },
                {
                    src: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=200&auto=format&fit=crop&q=60",
                    alt: "UX Design",
                },
            ],
            position: "self-end", // Bottom
        },
        {
            text: "Web Development",
            images: [
                {
                    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&auto=format&fit=crop&q=60",
                    alt: "Development",
                },
                {
                    src: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=200&auto=format&fit=crop&q=60",
                    alt: "Coding",
                },
            ],
            position: "self-start", // Top
        },
        {
            text: "Brand Strategy",
            images: [
                {
                    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&auto=format&fit=crop&q=60",
                    alt: "Strategy",
                },
                {
                    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&auto=format&fit=crop&q=60",
                    alt: "Branding",
                },
            ],
            position: "self-end", // Bottom
        },
    ];

    return (
        <div className="flex flex-col md:flex-row justify-between items-center md:h-[400px] w-full max-w-6xl mx-auto px-4 md:px-8 gap-12 md:gap-4 relative">
            {/* Decorative connecting line (optional, subtle) */}
            <div className="hidden md:block absolute top-[50%] left-0 w-full h-[1px] bg-zinc-800 -z-10" />

            {items.map((item, index) => (
                <RevealImageListItem
                    key={index}
                    text={item.text}
                    images={item.images as [ImageSource, ImageSource]}
                    className={item.position}
                />
            ))}
        </div>
    );
}

export { RevealImageList };
