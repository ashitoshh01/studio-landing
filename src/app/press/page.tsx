import { Metadata } from "next";
import { LegalLayout } from "@/components/ui/legal-layout";

export const metadata: Metadata = {
    title: "Press & Media - Official Information",
    description: "Official press and media information about Apix Build. Get brand assets, company information, and contact details for media inquiries and partnerships.",
    keywords: ["Apix Build Press", "Media Inquiries", "Brand Assets", "Digital Agency Press Kit", "Partnership Inquiries"],
    openGraph: {
        title: "Apix Build Press & Media",
        description: "Official information for journalists, media professionals, and partners.",
        url: "https://apixbuild.com/press",
        type: "website",
    },
    alternates: {
        canonical: "https://apixbuild.com/press",
    },
};

export default function PressPage() {
    return (
        <LegalLayout title="Press & Media">
            <p>
                This page contains official information about ApixBuild for journalists, media professionals, partners, and collaborators.
            </p>

            <div>
                <h2>About ApixBuild:</h2>
                <p>
                    ApixBuild is a digital web solutions agency focused on designing and developing modern, scalable, and performance-driven websites for startups, small businesses, and growing brands.
                </p>
                <p>
                    We specialize in website design, development, UI/UX, landing pages, and website optimization, with a strong emphasis on quality, transparency, and long-term reliability.
                </p>
                <p>
                    Our goal is to simplify the digital journey for businesses by delivering solutions that are easy to manage, future-ready, and aligned with their growth goals.
                </p>
            </div>

            <div>
                <h2>Media & Press Inquiries:</h2>
                <p>
                    For press coverage, interviews, partnerships, or official statements, please contact us at: <br />
                    apixbuild@gmail.com
                </p>
            </div>

            <div>
                <h2>Brand Assets:</h2>
                <p>
                    Official brand assets such as logos, brand descriptions, and approved visuals are available upon request for editorial and media use.
                </p>
            </div>

            <div>
                <h2>Announcements:</h2>
                <p>
                    This section may be updated from time to time with company announcements, partnerships, milestones, or major updates related to ApixBuild.
                </p>
            </div>
        </LegalLayout>
    );
}
