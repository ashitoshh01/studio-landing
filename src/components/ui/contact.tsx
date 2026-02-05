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
    contactEmail = "apixbuild@gmail.com",
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
        <section id="contact" className="relative min-h-screen overflow-hidden bg-zinc-50">
            {/* Background Image and Animated Bubbles */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-5 transition-all duration-500 ease-in-out"
                style={{ backgroundImage: `url(${backgroundImageSrc})` }}
            >
                {/* Animated Bubbles */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    {Array.from({ length: 15 }).map((_, i) => (
                        <div
                            key={i}
                            className="absolute bg-zinc-900/5 rounded-full animate-bubble opacity-0"
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
            <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen p-1 md:p-8 lg:p-12">
                {/* Main Section - Vertical Layout */}
                <div className="flex flex-col items-center gap-8 w-full max-w-4xl p-0 md:p-8 rounded-xl mt-16">
                    {/* Title */}
                    <div className="text-center w-full">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 leading-tight drop-shadow-sm">
                            {title}
                        </h1>
                    </div>

                    {/* Contact Form - Wider */}
                    <div id="contact-form" className="relative bg-white/80 p-4 md:p-10 rounded-2xl shadow-xl border border-zinc-200 backdrop-blur-xl w-[90vw] md:w-full group">
                        {/* Glow Effect - Subtle Zinc */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-zinc-200/50 rounded-full blur-3xl pointer-events-none group-hover:bg-zinc-300/50 transition-all duration-700" />
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-zinc-100/50 rounded-full blur-3xl pointer-events-none group-hover:bg-zinc-200/50 transition-all duration-700" />

                        <div className="relative z-10">

                            {/* Email */}
                            <div className="mb-8 p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-between group/email transition-colors hover:bg-zinc-100 hover:border-zinc-300">
                                <div>
                                    <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-1">Direct Mail</p>
                                    <a href={`mailto:${contactEmail}`} className="text-zinc-900 text-lg font-medium hover:text-zinc-700 transition-colors">
                                        {contactEmail}
                                    </a>
                                </div>
                                <div className="h-10 w-10 rounded-full bg-zinc-200/50 flex items-center justify-center group-hover/email:bg-zinc-200 group-hover/email:text-zinc-900 transition-all text-zinc-500">
                                    <Mail className="w-5 h-5" />
                                </div>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-zinc-700">Name</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="Rahul Sharma"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="bg-white border-zinc-200 focus:border-zinc-400 focus:ring-zinc-200 h-12 rounded-lg transition-all text-zinc-900 placeholder:text-zinc-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-zinc-700">Email</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="rahul.sharma@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="bg-white border-zinc-200 focus:border-zinc-400 focus:ring-zinc-200 h-12 rounded-lg transition-all text-zinc-900 placeholder:text-zinc-400"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="text-zinc-700">Phone (Optional)</Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="+91 98765 43210"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="bg-white border-zinc-200 focus:border-zinc-400 focus:ring-zinc-200 h-12 rounded-lg transition-all text-zinc-900 placeholder:text-zinc-400"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-zinc-700">Project Details</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell us about your project goals, timeline, and budget..."
                                        className="min-h-[120px] bg-white border-zinc-200 focus:border-zinc-400 focus:ring-zinc-200 rounded-lg resize-none transition-all text-zinc-900 placeholder:text-zinc-400"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="space-y-4 pt-2">
                                    <Label className="text-zinc-700 block">I'm interested in...</Label>

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
                                                            ? 'bg-[#74B52A] border-[#74B52A] text-white shadow-lg shadow-[#74B52A]/20'
                                                            : 'bg-white border-zinc-200 text-zinc-500 hover:border-[#74B52A] hover:text-[#74B52A] hover:bg-[#74B52A]/5'}
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
                                            className="flex h-14 w-full items-center justify-between rounded-xl border border-zinc-200 bg-white px-4 text-left text-sm transition-colors hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-200"
                                        >
                                            <span className={formData.projectType.length > 0 ? "text-zinc-900 font-medium" : "text-zinc-400"}>
                                                {formData.projectType.length > 0
                                                    ? `${formData.projectType.length} selected`
                                                    : "Select project types"}
                                            </span>
                                            <ChevronDown className={`h-4 w-4 text-zinc-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                        </button>

                                        {isDropdownOpen && (
                                            <div className="mt-2 w-full rounded-xl border border-zinc-200 bg-white shadow-lg overflow-hidden animate-in slide-in-from-top-2 fade-in duration-200">
                                                <div className="p-2 grid grid-cols-1 gap-1">
                                                    {projectTypeOptions.map((option) => (
                                                        <div
                                                            key={option}
                                                            className={`
                                                                flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors
                                                                ${formData.projectType.includes(option) ? 'bg-zinc-100' : 'hover:bg-zinc-50'}
                                                            `}
                                                            onClick={() => handleCheckboxChange(option, !formData.projectType.includes(option))}
                                                        >
                                                            <div className={`
                                                                h-5 w-5 rounded-md border flex items-center justify-center transition-all
                                                                ${formData.projectType.includes(option)
                                                                    ? 'bg-[#74B52A] border-[#74B52A]'
                                                                    : 'border-zinc-300 bg-white'}
                                                            `}>
                                                                {formData.projectType.includes(option) && (
                                                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                )}
                                                            </div>
                                                            <span className={`text-sm ${formData.projectType.includes(option) ? 'text-zinc-900 font-medium' : 'text-zinc-500'}`}>
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
                                    className="w-full h-14 text-lg font-semibold bg-zinc-900 text-white hover:bg-[#74B52A] rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1"
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
