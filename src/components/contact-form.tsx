'use client';

import { useState, FormEvent } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { CheckCircle2 } from 'lucide-react';

export function ContactForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate network request
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsLoading(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center p-8 text-center bg-zinc-50 rounded-2xl border border-zinc-100">
                <CheckCircle2 className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-zinc-900">Request Received</h3>
                <p className="text-zinc-600 mt-2 max-w-sm">
                    We've received your project details. Our team will review it and get back to you within 24 hours.
                </p>
                <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setIsSuccess(false)}
                >
                    Submit another request
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-900">
                        Name
                    </label>
                    <Input id="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-900">
                        Email
                    </label>
                    <Input id="email" type="email" placeholder="john@company.com" required />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="type" className="text-sm font-medium text-zinc-900">
                    Project Type
                </label>
                <select
                    id="type"
                    className="flex h-11 w-full rounded-md border border-zinc-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-900 disabled:cursor-not-allowed disabled:opacity-50 text-zinc-900"
                    required
                >
                    <option value="">Select a service...</option>
                    <option value="web-dev">Web Development</option>
                    <option value="design">UI/UX Design</option>
                    <option value="strategy">Digital Strategy</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium text-zinc-900">
                    Project Details
                </label>
                <Textarea
                    id="description"
                    placeholder="Tell us about your goals, timeline, and budget..."
                    required
                />
            </div>

            <Button type="submit" size="lg" className="w-full" isLoading={isLoading}>
                Send Request
            </Button>
        </form>
    );
}
