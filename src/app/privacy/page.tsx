import { Metadata } from "next";
import { LegalLayout } from "@/components/ui/legal-layout";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Read Apix Build's privacy policy. Learn how we collect, use, and protect your personal information when you use our web development and design services.",
    keywords: ["Privacy Policy", "Data Protection", "Apix Build Privacy", "User Data Policy"],
    openGraph: {
        title: "Privacy Policy - Apix Build",
        description: "How we handle and protect your personal information.",
        url: "https://apixbuild.com/privacy",
        type: "website",
    },
    alternates: {
        canonical: "https://apixbuild.com/privacy",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function PrivacyPage() {
    return (
        <LegalLayout title="Privacy Policy" lastUpdated="February 17, 2026">
            <p>
                ApixBuild respects your privacy and is committed to protecting your personal information.
            </p>

            <div>
                <h2>Information We Collect:</h2>
                <ul>
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Business details</li>
                    <li>Technical data such as IP address and browser type</li>
                </ul>
            </div>

            <div>
                <h2>How We Use Information:</h2>
                <ul>
                    <li>To communicate with users and clients</li>
                    <li>To deliver and improve services</li>
                    <li>For analytics and performance monitoring</li>
                </ul>
            </div>

            <div>
                <h2>Data Protection:</h2>
                <p>
                    We implement reasonable security measures to protect your information.
                </p>
            </div>

            <div>
                <h2>Third-Party Services:</h2>
                <p>
                    We may use third-party tools such as analytics or hosting services that collect limited data.
                </p>
            </div>

            <div>
                <h2>Your Rights:</h2>
                <p>
                    You may request access, correction, or deletion of your data by contacting us.
                </p>
            </div>
        </LegalLayout>
    );
}
