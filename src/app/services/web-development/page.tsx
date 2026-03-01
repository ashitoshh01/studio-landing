import { Metadata } from "next";
import { LegalLayout } from "@/components/ui/legal-layout";

export const metadata: Metadata = {
    title: "Web Development Services – At APIX BUILD",
    description: "At APIX BUILD, we build fast, scalable, and SEO-optimised websites and web applications using Next.js, React, and modern tech stacks. See exactly what our web development service includes.",
    keywords: ["Web Development", "Next.js Development", "React Agency", "Custom Website", "Apix Build"],
    alternates: { canonical: "https://apixbuild.in/services/web-development" },
    openGraph: {
        title: "Web Development – At APIX BUILD",
        description: "High-performance websites and web applications built with Next.js, React and modern technologies — by APIX BUILD.",
        url: "https://apixbuild.in/services/web-development",
        type: "website",
    },
};

export default function WebDevelopmentPage() {
    return (
        <LegalLayout title="Web Development">
            <p className="lead">
                At APIX BUILD, we build websites and web applications that are blazing-fast, SEO-ready, and engineered to grow with your business.
            </p>

            <div>
                <h2>What We Do</h2>
                <p>
                    We translate your designs and business requirements into fully functional, production-grade web products. Whether you need a landing page, a business website, or a complex web application — we build it right, from the ground up.
                </p>
            </div>

            <div>
                <h2>Our Development Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {[
                        { step: "01", title: "Project Scoping", desc: "We define features, tech stack, timeline and milestones so there are zero surprises." },
                        { step: "02", title: "Architecture Planning", desc: "We design a scalable code architecture that can handle future growth and new features." },
                        { step: "03", title: "Frontend Development", desc: "We build pixel-perfect, responsive interfaces using React and Next.js." },
                        { step: "04", title: "Backend & API Integration", desc: "From REST APIs to databases, we connect all the pieces your product needs." },
                        { step: "05", title: "Performance Optimisation", desc: "We optimise images, code-splitting, caching and more to achieve 90+ Lighthouse scores." },
                        { step: "06", title: "Deployment & Handover", desc: "We deploy to Vercel, AWS, or your preferred host and hand over clean, documented code." },
                    ].map((item) => (
                        <div key={item.step} className="bg-zinc-50 border border-zinc-100 p-5 rounded-xl flex flex-col gap-2 shadow-sm hover:shadow-md transition-shadow">
                            <span className="text-[#74B52A] font-bold text-sm">{item.step}</span>
                            <span className="font-bold text-zinc-900">{item.title}</span>
                            <span className="text-sm text-zinc-500">{item.desc}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2>Technologies We Use</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                    {[
                        "Next.js 15", "React 19", "TypeScript", "Tailwind CSS",
                        "Node.js", "PostgreSQL", "Firebase", "Vercel Deployment",
                        "REST APIs", "GraphQL", "Supabase", "Prisma ORM"
                    ].map((tech) => (
                        <div key={tech} className="bg-zinc-50 border border-zinc-100 p-4 rounded-xl flex items-center gap-3 shadow-sm">
                            <div className="h-2 w-2 rounded-full bg-[#74B52A]" />
                            <span className="font-medium text-zinc-800 text-sm">{tech}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2>What's Included</h2>
                <ul>
                    <li>Full-stack website or web application development</li>
                    <li>Mobile-responsive layouts (all screen sizes)</li>
                    <li>SEO-optimised HTML structure &amp; metadata</li>
                    <li>Core Web Vitals optimisation (LCP, CLS, FID)</li>
                    <li>Contact forms, CMS integration, or custom dashboards</li>
                    <li>Security hardening &amp; best practices</li>
                    <li>Git-based version control &amp; clean codebase</li>
                    <li>Post-launch support &amp; maintenance</li>
                </ul>
            </div>

            <div className="mt-12 flex justify-center">
                <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#74B52A] text-black !no-underline hover:text-white font-semibold rounded-xl hover:bg-zinc-900 transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-zinc-900/20 text-base"
                >
                    Start a Project →
                </a>
            </div>
        </LegalLayout>
    );
}
