import { Metadata } from "next";
import { LegalLayout } from "@/components/ui/legal-layout";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Read the terms of service for Apix Build. Understand our service agreements, payment policies, and client responsibilities when working with our digital agency.",
    keywords: ["Terms of Service", "Apix Build Terms", "Service Agreement", "Digital Agency Terms"],
    openGraph: {
        title: "Terms of Service - Apix Build",
        description: "Service agreements and policies for working with Apix Build.",
        url: "https://apixbuild.com/terms",
        type: "website",
    },
    alternates: {
        canonical: "https://apixbuild.com/terms",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function TermsPage() {
    return (
        <LegalLayout title="Terms of Service" lastUpdated="February 17, 2026">
            <p>
                By accessing or using ApixBuild services, you agree to comply with the following terms and conditions.
            </p>

            <div>
                <h2>Services:</h2>
                <p>
                    ApixBuild provides website design, development, optimization.
                </p>
            </div>

            <div>
                <h2>Payments:</h2>
                <ul>
                    <li>Advance payment may be required before project initiation.</li>
                    <li>All payments are non-refundable once work has commenced, unless otherwise agreed in writing.</li>
                </ul>
            </div>

            <div>
                <h2>Client Responsibilities:</h2>
                <ul>
                    <li>Clients must provide accurate content, materials, and approvals.</li>
                    <li>Delays caused by clients may impact delivery timelines.</li>
                </ul>
            </div>

            <div>
                <h2>Revisions:</h2>
                <ul>
                    <li>Revisions are limited to the scope defined in the project agreement.</li>
                </ul>
            </div>

            <div>
                <h2>Limitation of Liability:</h2>
                <p>
                    ApixBuild shall not be held responsible for damages arising from third-party services, hosting providers, or external tools.
                </p>
            </div>

            <div>
                <h2>Termination:</h2>
                <p>
                    We reserve the right to terminate services in case of policy violations or misuse.
                </p>
            </div>
        </LegalLayout>
    );
}
