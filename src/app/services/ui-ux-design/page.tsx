import { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/ui/legal-layout";

export const metadata: Metadata = {
    title: "UI/UX Design Services – At APIX BUILD",
    description: "At APIX BUILD, we craft intuitive user interfaces and seamless user experiences that convert visitors into customers. Learn exactly what we do in our UI/UX Design service.",
    keywords: ["UI/UX Design", "User Interface Design", "User Experience", "Website Design", "Apix Build"],
    alternates: { canonical: "https://apixbuild.in/services/ui-ux-design" },
    openGraph: {
        title: "UI/UX Design – At APIX BUILD",
        description: "Thoughtful interfaces focused on clarity, usability and conversion — crafted by APIX BUILD.",
        url: "https://apixbuild.in/services/ui-ux-design",
        type: "website",
    },
};

export default function UIUXDesignPage() {
    return (
        <LegalLayout title="UI/UX Design">
            <p className="lead">
                At APIX BUILD, our UI/UX Design service is about creating beautiful, functional digital experiences that your users will love — and that drive real business results.
            </p>

            <div>
                <h2>What We Do</h2>
                <p>
                    We take your product concept and transform it into a polished, pixel-perfect design. From the first wireframe sketch to the final interactive prototype, we handle every step of the design process with intention and precision.
                </p>
            </div>

            <div>
                <h2>Our UI/UX Design Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {[
                        { step: "01", title: "Discovery & Research", desc: "We start by understanding your users, goals, and competitors to inform every design decision." },
                        { step: "02", title: "Wireframing & Information Architecture", desc: "We map out the user journey and structure the layout before a single pixel of colour is added." },
                        { step: "03", title: "Visual Design (UI)", desc: "We apply your brand identity — typography, colour palette, icons, and imagery — to create a stunning visual experience." },
                        { step: "04", title: "Interactive Prototypes", desc: "We build clickable prototypes in Figma so you can experience and test flows before development begins." },
                        { step: "05", title: "Usability Testing & Iteration", desc: "We gather feedback, identify friction points, and refine the design until it's ready for handoff." },
                        { step: "06", title: "Developer Handoff", desc: "We provide clean, organised design files with precise specs and assets so your development team can build with confidence." },
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
                <h2>What&apos;s Included</h2>
                <ul>
                    <li>Full UX audit of existing products (if applicable)</li>
                    <li>User personas and journey mapping</li>
                    <li>Wireframes (low &amp; high fidelity)</li>
                    <li>Responsive UI design for mobile, tablet &amp; desktop</li>
                    <li>Component libraries and design systems</li>
                    <li>Interactive Figma prototype</li>
                    <li>Accessibility compliance (WCAG guidelines)</li>
                    <li>Brand-aligned visual language</li>
                </ul>
            </div>

            <div>
                <h2>Why Our Designs Perform</h2>
                <p>
                    Great design is not just about looks — it is about guiding users effortlessly to take action. We combine data-driven UX principles with stunning aesthetics to deliver interfaces that convert visitors into paying customers.
                </p>
            </div>

            <div className="mt-12 flex justify-center">
                <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#74B52A] text-black !no-underline hover:text-white font-semibold rounded-xl hover:bg-zinc-900 transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-zinc-900/20 text-base"
                >
                    Start a Project →
                </Link>
            </div>
        </LegalLayout>
    );
}
