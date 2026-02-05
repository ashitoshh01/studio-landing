import { HeaderWithBack } from "@/components/ui/header-with-back";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-white">
            <HeaderWithBack />
            <div className="container-wrapper pb-20 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-10 text-zinc-900">Terms of Service</h1>

                <div className="space-y-8 text-lg text-zinc-600">
                    <p className="leading-relaxed">
                        By accessing or using ApixBuild services, you agree to comply with the following terms and conditions.
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-zinc-900">Services:</h2>
                        <p className="leading-relaxed">
                            ApixBuild provides website design, development, optimization.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-zinc-900">Payments:</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Advance payment may be required before project initiation.</li>
                            <li>All payments are non-refundable once work has commenced, unless otherwise agreed in writing.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-zinc-900">Client Responsibilities:</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Clients must provide accurate content, materials, and approvals.</li>
                            <li>Delays caused by clients may impact delivery timelines.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-zinc-900">Revisions:</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Revisions are limited to the scope defined in the project agreement.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-zinc-900">Limitation of Liability:</h2>
                        <p className="leading-relaxed">
                            ApixBuild shall not be held responsible for damages arising from third-party services, hosting providers, or external tools.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-zinc-900">Termination:</h2>
                        <p className="leading-relaxed">
                            We reserve the right to terminate services in case of policy violations or misuse.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
