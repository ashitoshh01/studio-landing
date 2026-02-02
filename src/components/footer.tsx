import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-zinc-50 border-t border-zinc-200 py-12 md:py-16">
            <div className="container-wrapper">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
                    <div className="col-span-2 md:col-span-2">
                        <Link href="/" className="mb-4 block hover:opacity-80 transition-opacity w-fit">
                            <Image
                                src="/logo.png"
                                alt="ApixBuild Logo"
                                width={180}
                                height={60}
                                className="h-12 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-zinc-500 max-w-sm mb-6">
                            Empowering brands with cutting-edge digital solutions. We build immersive experiences that drive growth and engagement.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                                <Linkedin size={20} />
                            </Link>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-semibold text-zinc-900 mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="#" className="text-zinc-500 hover:text-zinc-900 transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-zinc-500 hover:text-zinc-900 transition-colors">Careers</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-zinc-500 hover:text-zinc-900 transition-colors">Blog</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-zinc-500 hover:text-zinc-900 transition-colors">Press</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-semibold text-zinc-900 mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="#" className="text-zinc-500 hover:text-zinc-900 transition-colors">Terms of Service</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-zinc-500 hover:text-zinc-900 transition-colors">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-zinc-500 hover:text-zinc-900 transition-colors">Cookies</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-zinc-500 text-sm">
                        © {new Date().getFullYear()} ApixBuild. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                            Privacy
                        </Link>
                        <Link href="#" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
