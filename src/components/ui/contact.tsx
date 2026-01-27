import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronDown, Mail } from 'lucide-react';

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
    contactEmail = "hello@apixbuild.com",
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
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

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
                    <div className="relative bg-zinc-900/80 p-6 md:p-10 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-xl w-full overflow-hidden group">
                        {/* Glow Effect - Subtle White/Zinc */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-zinc-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-zinc-500/20 transition-all duration-700" />
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none group-hover:bg-white/10 transition-all duration-700" />

                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-2">{mainMessage}</h2>
                            <p className="text-zinc-400 mb-8">We'd love to hear from you. Fill out the form below.</p>

                            {/* Email */}
                            <div className="mb-8 p-4 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between group/email transition-colors hover:bg-black/60 hover:border-white/10">
                                <div>
                                    <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-1">Direct Mail</p>
                                    <a href={`mailto:${contactEmail}`} className="text-white text-lg font-medium hover:text-zinc-200 transition-colors">
                                        {contactEmail}
                                    </a>
                                </div>
                                <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center group-hover/email:bg-white/10 group-hover/email:text-white transition-all text-zinc-400">
                                    <Mail className="w-5 h-5" />
                                </div>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-zinc-300">Name</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="bg-black/50 border-white/10 focus:border-white/25 focus:ring-white/10 h-12 rounded-lg transition-all text-white placeholder:text-zinc-600"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-zinc-300">Email</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="bg-black/50 border-white/10 focus:border-white/25 focus:ring-white/10 h-12 rounded-lg transition-all text-white placeholder:text-zinc-600"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="text-zinc-300">Phone (Optional)</Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="+1 (555) 000-0000"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="bg-black/50 border-white/10 focus:border-white/25 focus:ring-white/10 h-12 rounded-lg transition-all text-white placeholder:text-zinc-600"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-zinc-300">Project Details</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell us about your project goals, timeline, and budget..."
                                        className="min-h-[120px] bg-black/50 border-white/10 focus:border-white/25 focus:ring-white/10 rounded-lg resize-none transition-all text-white placeholder:text-zinc-600"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="space-y-4 pt-2">
                                    <Label className="text-zinc-300 block">I'm interested in...</Label>

                                    {/* Desktop Grid Layout (visible > 550px) */}
                                    <div className="hidden min-[550px]:grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {projectTypeOptions.map((option) => (
                                            <div key={option} className="relative">
                                                <Checkbox
                                                    id={option.replace(/\s/g, '-').toLowerCase()}
                                                    checked={formData.projectType.includes(option)}
                                                    onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)}
                                                    className="peer sr-only"
                                                />
                                                <Label
                                                    htmlFor={option.replace(/\s/g, '-').toLowerCase()}
                                                    className={`
                                                        flex items-center justify-center text-center px-4 py-3 rounded-xl border cursor-pointer transition-all duration-200 text-sm font-medium h-full
                                                        ${formData.projectType.includes(option)
                                                            ? 'bg-zinc-100 border-zinc-100 text-black shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                                                            : 'bg-black/40 border-white/5 text-zinc-400 hover:bg-black/60 hover:text-zinc-200'}
                                                    `}
                                                >
                                                    {option}
                                                </Label>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Mobile Dropdown Layout (visible < 550px) */}
                                    <div className="block min-[550px]:hidden relative">
                                        <button
                                            type="button"
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            className="flex h-14 w-full items-center justify-between rounded-xl border border-white/10 bg-black/40 px-4 text-left text-sm transition-colors hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-zinc-500/50"
                                        >
                                            <span className={formData.projectType.length > 0 ? "text-white font-medium" : "text-zinc-400"}>
                                                {formData.projectType.length > 0
                                                    ? `${formData.projectType.length} selected`
                                                    : "Select project types"}
                                            </span>
                                            <ChevronDown className={`h-4 w-4 text-zinc-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                        </button>

                                        {isDropdownOpen && (
                                            <div className="absolute z-50 mt-2 w-full rounded-xl border border-white/10 bg-zinc-900 shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                                <div className="max-h-60 overflow-y-auto p-2">
                                                    {projectTypeOptions.map((option) => (
                                                        <div
                                                            key={option}
                                                            className={`
                                                                flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors
                                                                ${formData.projectType.includes(option) ? 'bg-white/10' : 'hover:bg-white/5'}
                                                            `}
                                                            onClick={() => handleCheckboxChange(option, !formData.projectType.includes(option))}
                                                        >
                                                            <div className={`
                                                                h-5 w-5 rounded-md border flex items-center justify-center transition-all
                                                                ${formData.projectType.includes(option)
                                                                    ? 'bg-white border-white'
                                                                    : 'border-zinc-600'}
                                                            `}>
                                                                {formData.projectType.includes(option) && (
                                                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M1 4L3.5 6.5L9 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                )}
                                                            </div>
                                                            <span className={`text-sm ${formData.projectType.includes(option) ? 'text-white font-medium' : 'text-zinc-400'}`}>
                                                                {option}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full h-14 text-lg font-semibold bg-white text-black hover:bg-zinc-200 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    Send Message
                                </Button>
                            </form>
                        </div>
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
