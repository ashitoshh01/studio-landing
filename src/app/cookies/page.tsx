import { Metadata } from "next";
import { HeaderWithBack } from "@/components/ui/header-with-back";

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
        <main className="min-h-screen bg-white">
            <HeaderWithBack />
            <div className="container-wrapper pb-20 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-10 text-zinc-900">Cookie Policy</h1>

                <div className="space-y-8 text-lg text-zinc-600">
                    <p className="leading-relaxed">
                        This Cookie Policy explains how ApixBuild uses cookies and similar technologies when you visit our website.
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-zinc-900">How We Use Cookies</h2>
                        <p className="mb-2">ApixBuild uses cookies to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Ensure proper website functionality</li>
                            <li>Improve performance and user experience</li>
                            <li>Understand how visitors interact with our website</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-zinc-900">Types of Cookies We Use</h2>

                        <h3 className="text-xl font-semibold mb-2 text-zinc-800">1. Essential Cookies</h3>
                        <p className="mb-4">These cookies are necessary for the website to function correctly. They enable core features such as page navigation, form submissions, and security.</p>

                        <h3 className="text-xl font-semibold mb-2 text-zinc-800">2. Analytics Cookies</h3>
                        <p className="mb-2">Analytics cookies help us understand website traffic, visitor behavior, and performance metrics.</p>
                        <p className="mb-2">This information allows us to improve our website and services over time.</p>
                        <p className="mb-4">We may use trusted third-party analytics tools for this purpose.</p>

                        <h3 className="text-xl font-semibold mb-2 text-zinc-800">Third-Party Cookies</h3>
                        <p>Some cookies may be placed by third-party services such as analytics or hosting providers. These cookies are governed by the respective third party’s privacy and cookie policies.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-zinc-900">Managing Cookies</h2>
                        <p className="leading-relaxed">
                            You can control or disable cookies at any time through your browser settings.
                            Please note that disabling certain cookies may affect the functionality and performance of the website.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-zinc-900">Consent</h2>
                        <p className="leading-relaxed">
                            By continuing to use the ApixBuild website, you consent to the use of cookies as described in this policy.
                            For more details on how we handle personal data, please refer to our Privacy Policy.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
