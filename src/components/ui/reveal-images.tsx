import { cn } from "@/lib/utils";

interface ImageSource {
    src: string;
    alt: string;
}

interface ShowImageListItemProps {
    text: string;
    subitems?: string[];
    images: [ImageSource, ImageSource];
}

function RevealImageListItem({ text, subitems, images }: ShowImageListItemProps) {
    const container = "absolute -top-12 z-40 h-24 w-24 left-1/2 -translate-x-1/2 pointer-events-none";
    const effect =
        "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-24 h-24 overflow-hidden transition-all rounded-md";

    return (
        <div className="group relative h-fit w-full flex flex-col items-center justify-center overflow-visible py-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground transition-all duration-500 group-hover:opacity-40 text-center whitespace-nowrap">
                {text}
            </h1>
            {subitems && (
                <div className="flex flex-col items-center mt-2 gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {subitems.map((item, idx) => (
                        <span key={idx} className="text-sm font-medium text-muted-foreground">{item}</span>
                    ))}
                </div>
            )}

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
    const items: ShowImageListItemProps[] = [
        {
            text: "UI/UX Design",
            subitems: ["UX Design", "UI Design"],
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
        },
        {
            text: "Web Development",
            subitems: ["Coding", "Development"],
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
        },
    ];

    return (
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-8 rounded-sm bg-background px-4 md:px-8 py-12">
            {items.map((item, index) => (
                <div key={index} className="flex-1 w-full flex justify-center">
                    <RevealImageListItem text={item.text} subitems={item.subitems} images={item.images} />
                </div>
            ))}
        </div>
    );
}

export { RevealImageList };
