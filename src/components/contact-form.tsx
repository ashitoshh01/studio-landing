'use client';

import { useState, FormEvent } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';

export function ContactForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage('');

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                let errorMessage = 'Failed to send message';
                try {
                    const errorData = await response.json();
                    errorMessage = errorData?.error?.message || errorMessage;
                } catch (e) {
                    // Response was not JSON (likely a 500 error page or empty)
                    console.error('Non-JSON response:', e);
                    errorMessage = `Server Error (${response.status}). Please try again later.`;
                }
                throw new Error(errorMessage);
            }

            setIsSuccess(true);
        } catch (error: any) {
            setErrorMessage(error.message || 'Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="text-green-500 w-8 h-8 rotate-[-45deg]" />
                </div>
                <h3 className="text-white text-xl font-bold">Request Received</h3>
                <p className="text-zinc-400 mt-2">We've received your details. We'll be in touch within 24 hours.</p>
                <Button
                    onClick={() => setIsSuccess(false)}
                    variant="outline"
                    className="mt-6 border-zinc-700 text-white hover:bg-zinc-800"
                >
                    Send another
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400">Name</label>
                    <input
                        name="name"
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-white outline-none transition-all placeholder:text-zinc-600"
                        placeholder="John Doe"
                        required
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400">Email</label>
                    <input
                        name="email"
                        type="email"
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-white outline-none transition-all placeholder:text-zinc-600"
                        placeholder="john@example.com"
                        required
                    />
                </div>
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Tell us about your project</label>
                <textarea
                    name="message"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-white outline-none transition-all min-h-[120px] placeholder:text-zinc-600"
                    placeholder="I need a website for..."
                    required
                />
            </div>

            {errorMessage && (
                <p className="text-red-500 text-sm">{errorMessage}</p>
            )}

            <Button
                className="w-full bg-white text-black hover:bg-zinc-200 font-bold"
                size="lg"
                isLoading={isLoading}
            >
                Submit Request
            </Button>
        </form>
    );
}
