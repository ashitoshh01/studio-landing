import { HeaderWithBack } from "@/components/ui/header-with-back";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-white">
            <HeaderWithBack />
            <div className="container-wrapper pb-20 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-10 text-zinc-900">Privacy Policy</h1>

                <div className="space-y-8 text-lg text-zinc-600">
                    <p className="leading-relaxed">
                        ApixBuild respects your privacy and is committed to protecting your personal information.
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-zinc-900">Information We Collect:</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Business details</li>
                            <li>Technical data such as IP address and browser type</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-zinc-900">How We Use Information:</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>To communicate with users and clients</li>
                            <li>To deliver and improve services</li>
                            <li>For analytics and performance monitoring</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-zinc-900">Data Protection:</h2>
                        <p className="leading-relaxed">
                            We implement reasonable security measures to protect your information.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-zinc-900">Third-Party Services:</h2>
                        <p className="leading-relaxed">
                            We may use third-party tools such as analytics or hosting services that collect limited data.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-zinc-900">Your Rights:</h2>
                        <p className="leading-relaxed">
                            You may request access, correction, or deletion of your data by contacting us.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
