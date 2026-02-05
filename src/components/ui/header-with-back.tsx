"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function HeaderWithBack({ title }: { title?: string }) {
    const router = useRouter();

    return (
        <div className="container-wrapper py-6">
            <button
                onClick={() => router.back()}
                className="inline-flex items-center gap-2 font-medium transition-colors hover:opacity-80 appearance-none bg-transparent border-none cursor-pointer"
                style={{ color: '#74B52A' }}
            >
                <ArrowLeft className="h-5 w-5" />
                <span>Back</span>
            </button>
        </div>
    );
}
