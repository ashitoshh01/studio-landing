import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

interface ContactSectionProps {
    title?: string;
    mainMessage?: string;
    contactEmail?: string;
    socialLinks?: Array<{ id: string; name: string; iconSrc: string; href: string }>;
    backgroundImageSrc?: string;
    onSubmit?: (data: any) => void;
}

const defaultSocialLinks = [
    { id: '1', name: 'X', iconSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/x.svg', href: '#x' },
    { id: '2', name: 'Instagram', iconSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/instagram.svg', href: '#instagram' },
    { id: '3', name: 'LinkedIn', iconSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg', href: '#linkedin' },
];

export const ContactSection: React.FC<ContactSectionProps> = ({
    title = "Let's Build Something Amazing",
    mainMessage = "Let's talk! 👋",
    contactEmail = "hello@wowgency.com",
    socialLinks = defaultSocialLinks,
    backgroundImageSrc = "https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&auto=format&fit=crop&q=80",
    onSubmit,
}) => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        projectType: [] as string[],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (type: string, checked: boolean) => {
        setFormData((prev) => {
            const currentTypes = prev.projectType;
            if (checked) {
                return { ...prev, projectType: [...currentTypes, type] };
            } else {
                return { ...prev, projectType: currentTypes.filter((t) => t !== type) };
            }
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit?.(formData);
        console.log("Form submitted:", formData);
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            projectType: [],
        });
    };

    const projectTypeOptions = [
        'Website', 'Mobile App', 'Web App', 'E-Commerce',
        'Brand Identity', '3D & Animation', 'Social Media Marketing',
        'Brand Strategy & Consulting', 'Other'
    ];

    return (
        <section id="contact" className="relative min-h-screen overflow-hidden bg-black">
            {/* Background Image and Animated Bubbles */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20 transition-all duration-500 ease-in-out"
                style={{ backgroundImage: `url(${backgroundImageSrc})` }}
            >
                {/* Animated Bubbles */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    {Array.from({ length: 15 }).map((_, i) => (
                        <div
                            key={i}
                            className="absolute bg-white/20 rounded-full animate-bubble opacity-0"
                            style={{
                                width: `${Math.random() * 20 + 10}px`,
                                height: `${Math.random() * 20 + 10}px`,
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 10}s`,
                                animationDuration: `${Math.random() * 20 + 10}s`,
                                top: `${Math.random() * 100}%`,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Main Content Overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen p-4 md:p-8 lg:p-12">
                {/* Main Section - Vertical Layout */}
                <div className="flex flex-col items-center gap-8 w-full max-w-4xl p-4 md:p-8 rounded-xl mt-16">
                    {/* Title */}
                    <div className="text-center w-full">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
                            {title}
                        </h1>
                    </div>

                    {/* Contact Form - Wider */}
                    <div className="bg-zinc-900/80 p-6 md:p-10 rounded-lg shadow-xl border border-zinc-700 backdrop-blur-sm w-full">
                        <h2 className="text-2xl font-bold text-white mb-6">{mainMessage}</h2>

                        {/* Email & Socials */}
                        <div className="mb-6">
                            <p className="text-zinc-400 mb-2">Mail us at</p>
                            <a href={`mailto:${contactEmail}`} className="text-white hover:underline font-medium">
                                {contactEmail}
                            </a>
                            <div className="flex items-center space-x-3 mt-4">
                                <span className="text-zinc-400">OR</span>
                                {socialLinks.map((link) => (
                                    <Button key={link.id} variant="outline" size="icon" asChild>
                                        <a href={link.href} aria-label={link.name}>
                                            <img src={link.iconSrc} alt={link.name} className="h-4 w-4 invert" />
                                        </a>
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <hr className="my-6 border-zinc-700" />

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <p className="text-zinc-400">Leave us a brief message</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Your name</Label>
                                    <Input id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={handleChange} required />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Briefly describe your project idea...</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Briefly describe your project idea..."
                                    className="min-h-[80px]"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="space-y-4">
                                <p className="text-zinc-400">I'm looking for...</p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                    {projectTypeOptions.map((option) => (
                                        <div key={option} className="flex items-center space-x-2">
                                            <Checkbox
                                                id={option.replace(/\s/g, '-').toLowerCase()}
                                                checked={formData.projectType.includes(option)}
                                                onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)}
                                            />
                                            <Label htmlFor={option.replace(/\s/g, '-').toLowerCase()} className="text-sm font-normal">
                                                {option}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Button type="submit" className="w-full">
                                Send a message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            {/* CSS for bubble animation */}
            <style jsx global>{`
        @keyframes bubble {
          0% {
            transform: translateY(0) translateX(0) scale(0.5);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(calc(var(--rand-x-offset) * 10vw)) scale(1.2);
            opacity: 0;
          }
        }
        .animate-bubble {
          animation: bubble var(--animation-duration, 15s) ease-in-out infinite;
          animation-fill-mode: forwards;
          --rand-x-offset: ${Math.random() > 0.5 ? 1 : -1};
        }
      `}</style>
        </section>
    );
};
