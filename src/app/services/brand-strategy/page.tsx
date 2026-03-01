import { Metadata } from "next";
import { LegalLayout } from "@/components/ui/legal-layout";

export const metadata: Metadata = {
    title: "Brand Strategy Services – At APIX BUILD",
    description: "At APIX BUILD, we build powerful brand identities — logo, colours, typography, voice and digital presence — that make your business unforgettable. See what our brand strategy service includes.",
    keywords: ["Brand Strategy", "Brand Identity", "Logo Design", "Digital Branding", "Apix Build"],
    alternates: { canonical: "https://apixbuild.in/services/brand-strategy" },
    openGraph: {
        title: "Brand Strategy – At APIX BUILD",
        description: "Cohesive brand identities that resonate with your audience and drive business growth — by APIX BUILD.",
        url: "https://apixbuild.in/services/brand-strategy",
        type: "website",
    },
};

export default function BrandStrategyPage() {
    return (
        <LegalLayout title="Brand Strategy">
            <p className="lead">
                At APIX BUILD, we build brands that people remember — and businesses that people trust. Our brand strategy service creates a cohesive identity that works across every touchpoint.
            </p>

            <div>
                <h2>What We Do</h2>
                <p>
                    A strong brand is more than a logo. We define your brand&apos;s purpose, personality, visual identity, and communication style so your business speaks with a consistent voice everywhere — from your website to your business card to your social media.
                </p>
            </div>

            <div>
                <h2>Our Brand Strategy Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {[
                        { step: "01", title: "Brand Discovery", desc: "We dive deep into your business goals, target audience, and competitive landscape through workshops and interviews." },
                        { step: "02", title: "Brand Positioning", desc: "We define your unique value proposition and craft a positioning statement that sets you apart." },
                        { step: "03", title: "Visual Identity", desc: "We design your logo, colour palette, typography system, icons, and visual language." },
                        { step: "04", title: "Brand Voice & Messaging", desc: "We create your tone of voice guidelines and key messaging pillars to ensure consistent communication." },
                        { step: "05", title: "Brand Guidelines Document", desc: "We deliver a comprehensive brand book showing exactly how to use every element of your identity." },
                        { step: "06", title: "Digital Brand Rollout", desc: "We apply your brand across your website, social profiles, email templates, and marketing materials." },
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
                <h2>What's Included</h2>
                <ul>
                    <li>Brand strategy &amp; positioning document</li>
                    <li>Logo design (primary, secondary, icon variants)</li>
                    <li>Full colour palette (primary, secondary, neutrals)</li>
                    <li>Typography system &amp; font pairing</li>
                    <li>Branded icon set &amp; illustration style</li>
                    <li>Brand voice &amp; tone guidelines</li>
                    <li>Comprehensive brand style guide (PDF &amp; Figma)</li>
                    <li>Business card &amp; letterhead templates</li>
                    <li>Social media profile &amp; cover image templates</li>
                </ul>
            </div>

            <div>
                <h2>Why Brand Strategy Matters</h2>
                <p>
                    Businesses with a consistent brand identity see up to 33% higher revenue than those without one. A well-crafted brand builds trust instantly, commands premium pricing, and creates loyal customers who refer others.
                </p>
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
