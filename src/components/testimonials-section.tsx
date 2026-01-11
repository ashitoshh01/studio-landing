"use client"

import { AnimatedReviewCards } from '@/components/ui/animated-review-card';

const clientReviews = [
    {
        id: 1,
        name: "Sarah Thompson",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
        text: "Outstanding work! Our website traffic increased by 300% after the redesign. The team delivered beyond expectations with exceptional attention to detail.",
        rating: 5,
    },
    {
        id: 2,
        name: "Michael Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
        text: "The team delivered beyond expectations. Highly professional and creative! Our digital presence has never looked better.",
        rating: 5,
    },
    {
        id: 3,
        name: "Emma Rodriguez",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
        text: "Best agency we've worked with. They truly understand modern web development and delivered a solution that exceeded our goals.",
        rating: 5,
    },
    {
        id: 4,
        name: "David Miller",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
        text: "Fast turnaround, excellent communication, and beautiful results! Couldn't be happier with the final product.",
        rating: 5,
    },
    {
        id: 5,
        name: "Priya Sharma",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces",
        text: "They transformed our digital presence completely. Amazing team with incredible design sense and technical expertise!",
        rating: 5,
    },
];

export function TestimonialsSection() {
    return (
        <div className="w-full flex items-center justify-center py-8">
            <AnimatedReviewCards
                reviews={clientReviews}
                interactionType="click"
                theme="default"
                autoRotate={true}
                rotateInterval={5000}
                showBorderBeam={true}
                classNames={{
                    container: "items-center justify-center",
                }}
            />
        </div>
    );
}
