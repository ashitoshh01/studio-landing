import { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/ui/legal-layout";

export const metadata: Metadata = {
    title: "AI Automation Services – At APIX BUILD",
    description: "At APIX BUILD, we build intelligent AI automation systems — chatbots, WhatsApp bots, workflow automations, and AI integrations — that eliminate manual work and supercharge your team's productivity.",
    keywords: ["AI Automation", "ChatGPT Integration", "WhatsApp Bot", "Workflow Automation", "Business Automation", "Apix Build"],
    alternates: { canonical: "https://apixbuild.in/services/ai-automation" },
    openGraph: {
        title: "AI Automation – At APIX BUILD",
        description: "Intelligent automation that streamlines your workflows, eliminates repetitive tasks, and supercharges productivity — by APIX BUILD.",
        url: "https://apixbuild.in/services/ai-automation",
        type: "website",
    },
};

export default function AIAutomationPage() {
    return (
        <LegalLayout title="AI Automation">
            <p className="lead">
                At APIX BUILD, we build AI-powered automation systems that work for your business 24/7 — eliminating manual tasks, reducing errors, and saving your team hours every single day.
            </p>

            <div>
                <h2>What We Do</h2>
                <p>
                    We design and deploy intelligent automation solutions tailored to your specific business workflows. From AI chatbots that handle customer queries to automated lead nurturing pipelines and WhatsApp bots — we connect your tools and let AI do the heavy lifting.
                </p>
            </div>

            <div>
                <h2>Our AI Automation Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {[
                        { step: "01", title: "Workflow Audit", desc: "We map your current processes to identify where automation can save the most time and reduce the most errors." },
                        { step: "02", title: "Automation Roadmap", desc: "We design a phased automation plan prioritised by impact — quick wins first, complex flows later." },
                        { step: "03", title: "AI Model Integration", desc: "We integrate GPT-4, Gemini, Claude, or custom AI models into your workflows depending on the use case." },
                        { step: "04", title: "Bot & Workflow Development", desc: "We build and configure your automation bots, connecting WhatsApp, email, CRM, spreadsheets, and more." },
                        { step: "05", title: "Testing & Quality Assurance", desc: "We rigorously test every automation flow to ensure reliability, accuracy, and graceful error handling." },
                        { step: "06", title: "Deployment & Training", desc: "We deploy your automation systems live and train your team on how to manage and monitor them." },
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
                <h2>Automation Solutions We Build</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {[
                        { title: "WhatsApp AI Chatbots", desc: "Automate customer support, lead qualification, and order tracking on WhatsApp." },
                        { title: "AI Sales Assistants", desc: "Qualify leads, send follow-ups, and book meetings automatically — 24/7." },
                        { title: "Document Processing", desc: "Extract, classify, and process data from PDFs, invoices, and forms using AI." },
                        { title: "Email Automation", desc: "Smart email sequences that respond, nurture, and convert leads automatically." },
                        { title: "CRM & Tool Integration", desc: "Connect Notion, HubSpot, Sheets, Slack, and any other tools via intelligent workflows." },
                        { title: "Custom AI Workflows", desc: "Bespoke automation solutions built around your unique business processes." },
                    ].map((item) => (
                        <div key={item.title} className="bg-white border border-zinc-200 p-5 rounded-xl flex flex-col gap-2 shadow-sm hover:border-[#74B52A]/50 transition-colors group">
                            <span className="font-bold text-zinc-900 group-hover:text-[#74B52A] transition-colors">{item.title}</span>
                            <span className="text-sm text-zinc-500">{item.desc}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2>What&apos;s Included</h2>
                <ul>
                    <li>Full workflow audit &amp; automation strategy</li>
                    <li>Custom AI chatbot or workflow bot development</li>
                    <li>Integration with your existing tools (WhatsApp, CRM, email, etc.)</li>
                    <li>AI model selection &amp; prompt engineering</li>
                    <li>Testing &amp; quality assurance across all flows</li>
                    <li>Monitoring dashboard &amp; error alerting</li>
                    <li>Team training &amp; documentation</li>
                    <li>30-day post-deployment support</li>
                </ul>
            </div>

            <div>
                <h2>Why Automate With AI?</h2>
                <p>
                    Businesses that implement AI automation report saving an average of 10–20 hours per week on repetitive tasks. This means faster response times, fewer human errors, lower operational costs, and a team that can focus on work that truly matters.
                </p>
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
