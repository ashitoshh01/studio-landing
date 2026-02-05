import { HeaderWithBack } from "@/components/ui/header-with-back";

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-white">
            <HeaderWithBack />
            <div className="container-wrapper pb-20 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-10 text-zinc-900">Blog</h1>

                <div className="space-y-8 text-lg text-zinc-600">
                    <p className="leading-relaxed">
                        Welcome to the ApixBuild Blog, your trusted resource for insights, guides, and best practices related to web development, design, performance optimization, and digital growth.
                    </p>

                    <p className="leading-relaxed">
                        Our blog is created to help startups, businesses, and individuals make informed decisions about building and maintaining a strong online presence. We focus on practical, easy-to-understand content that bridges the gap between technology and real-world business needs.
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-zinc-900">What You’ll Find on Our Blog</h2>
                        <p className="mb-6">We regularly publish content covering topics such as:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Web Design & Development best practices",
                                "UI/UX design principles for better user experience",
                                "Website performance, speed optimization, and SEO basics",
                                "Business and startup website strategies",
                                "Step-by-step tutorials and technical guides",
                                "Case studies and project insights (as we grow)"
                            ].map((topic, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-100 hover:bg-zinc-100 transition-colors">
                                    <div className="mt-1 h-8 w-8 rounded-lg bg-[#74B52A]/10 flex items-center justify-center shrink-0">
                                        <span className="text-[#74B52A] text-lg font-bold">#</span>
                                    </div>
                                    <span className="text-zinc-700 font-medium">{topic}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-zinc-900">Who Writes Our Content</h2>
                        <p className="mb-2">All articles are written by the ApixBuild Team or reviewed by our internal developers and designers to ensure accuracy, clarity, and relevance.</p>
                        <p className="mb-2">Each post includes:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>“By ApixBuild Team”</li>
                            <li>Publish date</li>
                            <li>Last updated date (where applicable)</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-zinc-900">Educational Purpose Disclaimer</h2>
                        <p className="leading-relaxed mb-4">
                            All content published on the ApixBuild Blog is intended for informational and educational purposes only.
                            We do not guarantee specific outcomes, business growth, traffic, or revenue as a result of applying any information shared on this blog.
                            Readers are encouraged to evaluate information carefully and consult professionals where necessary.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-zinc-900">Get in Touch</h2>
                        <p className="leading-relaxed">
                            If you like our content and want help implementing it for your business, feel free to contact us.
                            We’re always happy to help you build something better.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
