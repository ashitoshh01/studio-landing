import { Metadata } from "next";
import { HeaderWithBack } from "@/components/ui/header-with-back";

export const metadata: Metadata = {
    title: "About Us - Web Development & Design Agency",
    description: "Learn about Apix Build, a full-service digital agency specializing in web development, UI/UX design, brand strategy, and website optimization for startups and growing businesses.",
    keywords: ["About Apix Build", "Web Development Agency", "Digital Agency Team", "UI/UX Design Company", "Startup Web Solutions"],
    openGraph: {
        title: "About Apix Build - Premier Digital Agency",
        description: "Discover our mission, vision, and services. We help startups and businesses build impactful digital products.",
        url: "https://apixbuild.com/about",
        type: "website",
    },
    alternates: {
        canonical: "https://apixbuild.com/about",
    },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <HeaderWithBack />
            <div className="container-wrapper pb-20 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-10 text-zinc-900">About Us</h1>

                <div className="space-y-8 text-lg text-zinc-600">
                    <p className="leading-relaxed">
                        ApixBuild is a digital-first web development and design agency focused on helping startups, small businesses, and growing brands establish a strong, reliable, and scalable online presence.
                    </p>

                    <p className="leading-relaxed">
                        Founded with the vision of making high-quality web solutions accessible, ApixBuild blends modern design principles with robust technology to deliver websites that are fast, secure, and user-focused.
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-zinc-900">Our Mission:</h2>
                        <p className="leading-relaxed">
                            Our mission is to empower businesses by transforming ideas into impactful digital products through innovation, transparency, and consistency.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-zinc-900">Our Vision:</h2>
                        <p className="leading-relaxed">
                            To become a trusted digital partner for businesses worldwide by delivering solutions that grow with them.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-zinc-900">Our Services:</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Website Design & Development",
                                "UI/UX Design",
                                "Landing Pages & Business Websites",
                                "Website Redesign & Optimization"
                            ].map((service, index) => (
                                <div key={index} className="bg-zinc-50 border border-zinc-100 p-4 rounded-xl flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="h-2 w-2 rounded-full bg-[#74B52A]" />
                                    <span className="font-medium text-zinc-800">{service}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-zinc-900">Why Choose ApixBuild:</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { title: "Client-first approach", desc: "Your goals are our priority." },
                                { title: "Clear communication", desc: "Transparent updates at every step." },
                                { title: "Affordable pricing", desc: "Premium quality for startups." },
                                { title: "Performance focus", desc: "Fast, scalable, and secure." }
                            ].map((item, index) => (
                                <div key={index} className="bg-white border border-zinc-200 p-5 rounded-xl flex flex-col gap-2 shadow-sm hover:border-[#74B52A]/50 transition-colors group">
                                    <span className="font-bold text-zinc-900 group-hover:text-[#74B52A] transition-colors">{item.title}</span>
                                    <span className="text-sm text-zinc-500">{item.desc}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-zinc-900">Contact:</h2>
                        <p className="leading-relaxed">
                            Email: apixbuild@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
