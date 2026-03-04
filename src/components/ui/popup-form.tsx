"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Check, X } from 'lucide-react';

export function PopupForm() {
    const [isVisible, setIsVisible] = useState(false);
    const [isEnquireButtonVisible, setIsEnquireButtonVisible] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');

        if (!hasSeenPopup) {
            // Show after 2 seconds
            const timer = setTimeout(() => {
                setIsVisible(true);
                sessionStorage.setItem('hasSeenPopup', 'true');
            }, 2000);

            return () => clearTimeout(timer);
        } else {
            setIsEnquireButtonVisible(true);
        }
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isVisible) {
                handleClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isVisible]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };



    const handleClose = () => {
        setIsVisible(false);
        setIsEnquireButtonVisible(true);
    };

    const handleOpen = () => {
        setIsVisible(true);
        setIsEnquireButtonVisible(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        if (!process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY) {
            console.error('Missing Web3Forms Access Key');
            alert('Configuration Error: Missing Web3Forms Access Key.');
            setIsLoading(false);
            return;
        }

        try {
            const submissionData = {
                access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
                ...formData,
                subject: `New Popup Project Inquiry from ${formData.name}`,
                from_name: 'Apix Build Website',
                botcheck: false,
            };

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(submissionData),
            });

            const result = await response.json();

            if (result.success) {
                setIsSubmitted(true);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                });
            } else {
                alert(`Failed to send message: ${result.message || 'Unknown error'}`);
            }
        } catch {
            alert('An error occurred. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <>
            {/* Pop-up Overlay */}
            {isVisible && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-zinc-950/60 backdrop-blur-md p-4 animate-in fade-in duration-300">
                    <div className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl p-5 sm:p-7 border border-zinc-100 group">

                        {/* Subtle decorative glows behind the form within the white box */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#74B52A]/5 rounded-full blur-3xl -z-10 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-zinc-100 rounded-full blur-3xl -z-10 pointer-events-none" />

                        <button
                            onClick={handleClose}
                            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-full transition-all duration-300 z-[10000]"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="text-center mb-5 mt-6 sm:mt-2 px-2 sm:px-6">
                            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
                                Let&apos;s Build Something <span className="text-[#74B52A]">Amazing</span>
                            </h3>
                            <p className="text-zinc-500 mt-1.5 text-xs sm:text-sm">
                                Fill out the form below and we&apos;ll be in touch shortly.
                            </p>
                        </div>

                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center text-center py-6">
                                <div className="w-16 h-16 bg-[#74B52A]/10 rounded-full flex items-center justify-center mb-4">
                                    <div className="w-12 h-12 bg-[#74B52A] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#74B52A]/30">
                                        <Check className="w-6 h-6" strokeWidth={4} />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 mb-2">
                                    Message Sent Successfully!
                                </h3>
                                <p className="text-zinc-500 text-sm mb-6 max-w-[250px] mx-auto">
                                    Thank you for reaching out. Our team will contact you soon.
                                </p>
                                <Button
                                    onClick={handleClose}
                                    className="bg-zinc-900 text-white hover:bg-[#74B52A] rounded-xl px-6 h-10 text-sm"
                                >
                                    Close
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <Label htmlFor="popup-name" className="text-zinc-700 font-medium text-sm">Name <span className="text-red-500">*</span></Label>
                                        <Input
                                            id="popup-name"
                                            name="name"
                                            placeholder="Rahul Sharma"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="bg-zinc-50 border-zinc-200 focus:border-[#74B52A] focus:ring-[#74B52A]/20 h-10 rounded-xl transition-all text-sm text-zinc-900 placeholder:text-zinc-400 shadow-sm"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="popup-email" className="text-zinc-700 font-medium text-sm">Email <span className="text-red-500">*</span></Label>
                                        <Input
                                            id="popup-email"
                                            name="email"
                                            type="email"
                                            placeholder="rahul.sharma@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="bg-zinc-50 border-zinc-200 focus:border-[#74B52A] focus:ring-[#74B52A]/20 h-10 rounded-xl transition-all text-sm text-zinc-900 placeholder:text-zinc-400 shadow-sm"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5 mt-3">
                                    <Label htmlFor="popup-phone" className="text-zinc-700 font-medium text-sm">Phone</Label>
                                    <Input
                                        id="popup-phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="+91 98765 43210"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="bg-zinc-50 border-zinc-200 focus:border-[#74B52A] focus:ring-[#74B52A]/20 h-10 rounded-xl transition-all text-sm text-zinc-900 placeholder:text-zinc-400 shadow-sm"
                                    />
                                </div>

                                <div className="space-y-1.5 mt-3">
                                    <Label htmlFor="popup-message" className="text-zinc-700 font-medium text-sm">Project Details <span className="text-red-500">*</span></Label>
                                    <Textarea
                                        id="popup-message"
                                        name="message"
                                        placeholder="Tell us about your project..."
                                        className="min-h-[80px] bg-zinc-50 border-zinc-200 focus:border-[#74B52A] focus:ring-[#74B52A]/20 rounded-xl resize-none transition-all text-sm text-zinc-900 placeholder:text-zinc-400 shadow-sm p-3"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-full h-11 mt-4 text-sm font-bold tracking-wide bg-zinc-900 text-white hover:bg-[#74B52A] rounded-xl shadow-md hover:shadow-lg hover:shadow-[#74B52A]/20 transition-all duration-300 transform ${isLoading ? 'opacity-80 cursor-not-allowed' : 'hover:-translate-y-1'}`}
                                >
                                    {isLoading ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        "Send Message"
                                    )}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            )}

            {/* Sticky Right Side Button */}
            {isEnquireButtonVisible && (
                <div
                    onClick={handleOpen}
                    className="fixed right-0 top-[60%] sm:top-1/2 -translate-y-1/2 z-[9998] cursor-pointer bg-[#74B52A] hover:bg-zinc-900 text-white px-1 py-3 sm:px-1.5 sm:py-4 md:px-2 md:py-5 rounded-r-md shadow-xl transition-all duration-300 flex items-center justify-center border-r border-y border-white/10"
                    style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
                >
                    <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest whitespace-nowrap py-1">
                        ENQUIRE NOW
                    </span>
                </div>
            )}
        </>
    );
}
