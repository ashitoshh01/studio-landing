import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/ui/3d-testimonials';

// Client testimonials
const testimonials = [
    {
        name: 'Sarah Thompson',
        username: '@sarahtech',
        body: 'Outstanding work! Our website traffic increased by 300% after the redesign.',
        img: 'https://randomuser.me/api/portraits/women/44.jpg',
        country: '🇺🇸 USA',
    },
    {
        name: 'Michael Chen',
        username: '@mchen',
        body: 'The team delivered beyond expectations. Highly professional and creative!',
        img: 'https://randomuser.me/api/portraits/men/32.jpg',
        country: '🇸🇬 Singapore',
    },
    {
        name: 'Emma Rodriguez',
        username: '@emmarodriguez',
        body: 'Best agency we\'ve worked with. They truly understand modern web development.',
        img: 'https://randomuser.me/api/portraits/women/65.jpg',
        country: '🇪🇸 Spain',
    },
    {
        name: 'David Miller',
        username: '@davemiller',
        body: 'Fast turnaround, excellent communication, and beautiful results!',
        img: 'https://randomuser.me/api/portraits/men/54.jpg',
        country: '🇬🇧 UK',
    },
    {
        name: 'Priya Sharma',
        username: '@priya_s',
        body: 'They transformed our digital presence completely. Amazing team!',
        img: 'https://randomuser.me/api/portraits/women/72.jpg',
        country: '🇮🇳 India',
    },
    {
        name: 'James Wilson',
        username: '@jwilson',
        body: 'Exceptional attention to detail and user experience. Worth every penny!',
        img: 'https://randomuser.me/api/portraits/men/67.jpg',
        country: '🇨🇦 Canada',
    },
    {
        name: 'Sophie Laurent',
        username: '@sophiel',
        body: 'Creative solutions and flawless execution. Our sales doubled!',
        img: 'https://randomuser.me/api/portraits/women/29.jpg',
        country: '🇫🇷 France',
    },
    {
        name: 'Alex Zhang',
        username: '@alexz',
        body: 'Top-notch developers with great design sense. Highly recommend!',
        img: 'https://randomuser.me/api/portraits/men/18.jpg',
        country: '🇨🇳 China',
    },
    {
        name: 'Isabella Costa',
        username: '@bellacosta',
        body: 'The perfect blend  of aesthetics and functionality. Love our new platform!',
        img: 'https://randomuser.me/api/portraits/women/50.jpg',
        country: '🇧🇷 Brazil',
    },
];

function TestimonialCard({ img, name, username, body, country }: (typeof testimonials)[number]) {
    return (
        <Card className="w-50">
            <CardContent>
                <div className="flex items-center gap-2.5">
                    <Avatar className="size-9">
                        <AvatarImage src={img} alt={username} />
                        <AvatarFallback>{name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <figcaption className="text-sm font-medium text-foreground flex items-center gap-1">
                            {name} <span className="text-xs">{country}</span>
                        </figcaption>
                        <p className="text-xs font-medium text-muted-foreground">{username}</p>
                    </div>
                </div>
                <blockquote className="mt-3 text-sm text-secondary-foreground">{body}</blockquote>
            </CardContent>
        </Card>
    );
}

export function TestimonialsSection() {
    return (
        <div className="border border-border rounded-lg relative flex h-96 w-full max-w-[800px] mx-auto flex-row items-center justify-center overflow-hidden gap-1.5 [perspective:300px]">
            <div
                className="flex flex-row items-center gap-4"
                style={{
                    transform:
                        'translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)',
                }}
            >
                {/* Vertical Marquee (downwards) */}
                <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
                    {testimonials.map((review) => (
                        <TestimonialCard key={review.username} {...review} />
                    ))}
                </Marquee>
                {/* Vertical Marquee (upwards) */}
                <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
                    {testimonials.map((review) => (
                        <TestimonialCard key={review.username} {...review} />
                    ))}
                </Marquee>
                {/* Vertical Marquee (downwards) */}
                <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
                    {testimonials.map((review) => (
                        <TestimonialCard key={review.username} {...review} />
                    ))}
                </Marquee>
                {/* Vertical Marquee (upwards) */}
                <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
                    {testimonials.map((review) => (
                        <TestimonialCard key={review.username} {...review} />
                    ))}
                </Marquee>
                {/* Gradient overlays for vertical marquee */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            </div>
        </div>
    );
}
