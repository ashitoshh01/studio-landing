import { cn } from "@/lib/utils";

interface ImageSource {
    src: string;
    alt: string;
}

interface ShowImageListItemProps {
    text: string;
    images: [ImageSource, ImageSource];
}

function RevealImageListItem({ text, images }: ShowImageListItemProps) {
    const container = "absolute -top-12 z-40 h-20 w-20 left-1/2 -translate-x-1/2 pointer-events-none";
    const effect =
        "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-20 h-20 overflow-hidden transition-all rounded-md";

    return (
        <div className="group relative h-fit w-fit flex flex-col items-center justify-center overflow-visible">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-black text-foreground transition-all duration-500 group-hover:opacity-40 whitespace-nowrap cursor-default">
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
                    "translate-x-[-50%] translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-[-30%] group-hover:translate-y-[-20%] group-hover:rotate-12",
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
    const uiImages: [ImageSource, ImageSource] = [
        { src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&auto=format&fit=crop&q=60", alt: "UI" },
        { src: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=200&auto=format&fit=crop&q=60", alt: "UX" }
    ];

    const devImages: [ImageSource, ImageSource] = [
        { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&auto=format&fit=crop&q=60", alt: "Dev" },
        { src: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=200&auto=format&fit=crop&q=60", alt: "Code" }
    ];

    const brandImages: [ImageSource, ImageSource] = [
        { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&auto=format&fit=crop&q=60", alt: "Brand" },
        { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&auto=format&fit=crop&q=60", alt: "Strategy" }
    ];

    const items: ShowImageListItemProps[] = [
        { text: "UI/UX Design", images: uiImages },
        { text: "UX Design", images: uiImages },
        { text: "UI Design", images: uiImages },
        { text: "Web Development", images: devImages },
        { text: "Coding", images: devImages },
        { text: "Development", images: devImages },
        { text: "Brand Strategy", images: brandImages },
    ];

    return (
        <div className="w-full overflow-hidden">
            <div className="w-full flex flex-row items-center justify-between gap-4 md:gap-8 rounded-sm bg-background px-4 py-12 overflow-x-auto scrollbar-hide">
                {items.map((item, index) => (
                    <RevealImageListItem key={index} text={item.text} images={item.images} />
                ))}
            </div>
        </div>
    );
}

export { RevealImageList };
