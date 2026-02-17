
import React from 'react';
import { HeaderWithBack } from '@/components/ui/header-with-back';

interface LegalLayoutProps {
    title: string;
    lastUpdated?: string;
    children: React.ReactNode;
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
    return (
        <main className="min-h-screen bg-zinc-50 relative selection:bg-[#74B52A] selection:text-white font-sans">
            {/* Subtle Grid Pattern Background */}
            <div className="fixed inset-0 -z-10 h-full w-full bg-zinc-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70"></div>

            <HeaderWithBack />

            <div className="container-wrapper max-w-4xl pb-24 pt-4 md:pt-10">
                <article className="bg-white rounded-3xl shadow-sm border border-zinc-200/60 p-6 md:p-12 lg:p-16">
                    {/* Header */}
                    <header className="mb-12 border-b border-zinc-100 pb-8">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 mb-6">
                            {title}
                        </h1>
                        <div className="h-1.5 w-24 bg-[#74B52A] rounded-full mb-6"></div>
                        {lastUpdated && (
                            <p className="text-sm text-zinc-400 font-medium">Last updated: {lastUpdated}</p>
                        )}
                    </header>

                    {/* Content */}
                    <div className="legal-content text-base md:text-[1.0625rem] leading-[1.8] text-zinc-600 font-normal">
                        {children}
                    </div>
                </article>
            </div>

            {/* Global styles for this component's children to ensure consistent formatting */}
            <style jsx global>{`
                .legal-content h2 {
                    font-size: 1.5rem;
                    line-height: 2rem;
                    font-weight: 700;
                    color: #18181b; /* zinc-900 */
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;
                    letter-spacing: -0.02em;
                }
                .legal-content h3 {
                    font-size: 1.25rem;
                    line-height: 1.75rem;
                    font-weight: 600;
                    color: #27272a; /* zinc-800 */
                    margin-top: 2rem;
                    margin-bottom: 0.75rem;
                }
                .legal-content p {
                    margin-bottom: 1.5rem;
                }
                .legal-content ul {
                    list-style-type: disc;
                    padding-left: 1.5rem;
                    margin-bottom: 1.5rem;
                }
                .legal-content li {
                    margin-bottom: 0.5rem;
                    padding-left: 0.5rem;
                }
                .legal-content li::marker {
                    color: #74B52A;
                }
                .legal-content strong {
                    font-weight: 600;
                    color: #18181b;
                }
                .legal-content a {
                    color: #74B52A;
                    text-decoration: underline;
                    text-underline-offset: 4px;
                }
                .legal-content a:hover {
                    color: #5a8d20;
                }
            `}</style>
        </main>
    );
}
