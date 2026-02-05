import { HeaderWithBack } from "@/components/ui/header-with-back";

export default function PressPage() {
    return (
        <main className="min-h-screen bg-white">
            <HeaderWithBack />
            <div className="container-wrapper pb-20 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-10 text-zinc-900">Press & Media</h1>

                <div className="space-y-8 text-lg text-zinc-600">
                    <p className="leading-relaxed">
                        This page contains official information about ApixBuild for journalists, media professionals, partners, and collaborators.
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-zinc-900">About ApixBuild:</h2>
                        <p className="leading-relaxed mb-4">
                            ApixBuild is a digital web solutions agency focused on designing and developing modern, scalable, and performance-driven websites for startups, small businesses, and growing brands.
                        </p>
                        <p className="leading-relaxed mb-4">
                            We specialize in website design, development, UI/UX, landing pages, and website optimization, with a strong emphasis on quality, transparency, and long-term reliability.
                        </p>
                        <p className="leading-relaxed">
                            Our goal is to simplify the digital journey for businesses by delivering solutions that are easy to manage, future-ready, and aligned with their growth goals.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-zinc-900">Media & Press Inquiries:</h2>
                        <p className="leading-relaxed">
                            For press coverage, interviews, partnerships, or official statements, please contact us at: <br />
                            apixbuild@gmail.com
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-zinc-900">Brand Assets:</h2>
                        <p className="leading-relaxed">
                            Official brand assets such as logos, brand descriptions, and approved visuals are available upon request for editorial and media use.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-zinc-900">Announcements:</h2>
                        <p className="leading-relaxed">
                            This section may be updated from time to time with company announcements, partnerships, milestones, or major updates related to ApixBuild.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
