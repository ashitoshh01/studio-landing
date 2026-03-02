import { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/ui/legal-layout";

export const metadata: Metadata = {
    title: "Social Media Management Services – At APIX BUILD",
    description: "At APIX BUILD, we grow your brand on social media with strategic content creation, scheduling, community management, and performance analytics. See exactly what's included.",
    keywords: ["Social Media Management", "Content Strategy", "Instagram Growth", "LinkedIn Marketing", "Apix Build"],
    alternates: { canonical: "https://apixbuild.in/services/social-media-management" },
    openGraph: {
        title: "Social Media Management – At APIX BUILD",
        description: "Engaging content strategies that grow your digital presence and turn followers into customers — by APIX BUILD.",
        url: "https://apixbuild.in/services/social-media-management",
        type: "website",
    },
};

export default function SocialMediaManagementPage() {
    return (
        <LegalLayout title="Social Media Management">
            <p className="lead">
                At APIX BUILD, we make social media work for your business — not the other way around. We create, schedule, and manage strategic content that grows your following and drives real engagement.
            </p>

            <div>
                <h2>What We Do</h2>
                <p>
                    We take full ownership of your social media presence across Instagram, LinkedIn, Twitter/X, and Facebook. From crafting compelling content to analysing metrics, we handle every aspect of your social strategy so you can focus on running your business.
                </p>
            </div>

            <div>
                <h2>Our Social Media Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {[
                        { step: "01", title: "Audit & Competitive Analysis", desc: "We analyse your current social presence, audience, and competitors to identify growth opportunities." },
                        { step: "02", title: "Content Strategy & Calendar", desc: "We create a monthly content plan with themes, post types, and publishing schedules tailored to your brand." },
                        { step: "03", title: "Content Creation", desc: "Our team creates high-quality graphics, captions, stories, reels, and carousel posts that match your brand voice." },
                        { step: "04", title: "Scheduling & Publishing", desc: "We schedule and publish posts at optimal times to maximise reach and engagement." },
                        { step: "05", title: "Community Management", desc: "We respond to comments and DMs, engage with your followers, and build genuine community around your brand." },
                        { step: "06", title: "Monthly Analytics Report", desc: "We track follower growth, engagement rate, reach, and conversions — and adjust strategy based on data." },
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
                <h2>Platforms We Manage</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                    {[
                        "Instagram", "LinkedIn", "Twitter / X", "Facebook", "YouTube Shorts", "Pinterest"
                    ].map((platform) => (
                        <div key={platform} className="bg-zinc-50 border border-zinc-100 p-4 rounded-xl flex items-center gap-3 shadow-sm">
                            <div className="h-2 w-2 rounded-full bg-[#74B52A]" />
                            <span className="font-medium text-zinc-800 text-sm">{platform}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2>What&apos;s Included</h2>
                <ul>
                    <li>Monthly content strategy &amp; calendar</li>
                    <li>16–30 posts per month (images, carousels, reels)</li>
                    <li>Branded graphic design for all posts</li>
                    <li>Engaging captions with hashtag research</li>
                    <li>Stories &amp; highlight covers</li>
                    <li>Community management (comments &amp; DMs)</li>
                    <li>Monthly performance report with insights</li>
                    <li>Competitor benchmarking</li>
                </ul>
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
