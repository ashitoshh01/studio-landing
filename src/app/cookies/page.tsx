import { Metadata } from "next";
import { LegalLayout } from "@/components/ui/legal-layout";

export const metadata: Metadata = {
    title: "Cookie Policy",
    description: "Learn how Apix Build uses cookies on our website. Understand the types of cookies we use and how to manage your cookie preferences.",
    keywords: ["Cookie Policy", "Apix Build Cookies", "Website Cookies", "Privacy Settings"],
    openGraph: {
        title: "Cookie Policy - Apix Build",
        description: "How we use cookies to improve your browsing experience.",
        url: "https://apixbuild.com/cookies",
        type: "website",
    },
    alternates: {
        canonical: "https://apixbuild.com/cookies",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function CookiesPage() {
    return (
        <LegalLayout title="Cookie Policy" lastUpdated="February 17, 2026">
            <p>
                This Cookie Policy explains how ApixBuild uses cookies and similar technologies when you visit our website.
            </p>

            <div>
                <h2>How We Use Cookies</h2>
                <p>ApixBuild uses cookies to:</p>
                <ul>
                    <li>Ensure proper website functionality</li>
                    <li>Improve performance and user experience</li>
                    <li>Understand how visitors interact with our website</li>
                </ul>
            </div>

            <div>
                <h2>Types of Cookies We Use</h2>

                <h3>1. Essential Cookies</h3>
                <p>These cookies are necessary for the website to function correctly. They enable core features such as page navigation, form submissions, and security.</p>

                <h3>2. Analytics Cookies</h3>
                <p>Analytics cookies help us understand website traffic, visitor behavior, and performance metrics.</p>
                <p>This information allows us to improve our website and services over time.</p>
                <p>We may use trusted third-party analytics tools for this purpose.</p>

                <h3>Third-Party Cookies</h3>
                <p>Some cookies may be placed by third-party services such as analytics or hosting providers. These cookies are governed by the respective third party’s privacy and cookie policies.</p>
            </div>

            <div>
                <h2>Managing Cookies</h2>
                <p>
                    You can control or disable cookies at any time through your browser settings.
                    Please note that disabling certain cookies may affect the functionality and performance of the website.
                </p>
            </div>

            <div>
                <h2>Consent</h2>
                <p>
                    By continuing to use the ApixBuild website, you consent to the use of cookies as described in this policy.
                    For more details on how we handle personal data, please refer to our Privacy Policy.
                </p>
            </div>
        </LegalLayout>
    );
}
