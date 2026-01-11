import Link from "next/link";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black border-t border-zinc-900 py-12 md:py-16">
            <div className="container-wrapper">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold text-white tracking-tighter mb-4 block">
                            Wowgency
                        </Link>
                        <p className="text-zinc-500 max-w-sm mb-6">
                            Empowering brands with cutting-edge digital solutions. We build immersive experiences that drive growth and engagement.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </Link>
                            <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                                <Github size={20} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="#" className="text-zinc-500 hover:text-white transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-zinc-500 hover:text-white transition-colors">Careers</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-zinc-500 hover:text-white transition-colors">Blog</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-zinc-500 hover:text-white transition-colors">Press</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="#" className="text-zinc-500 hover:text-white transition-colors">Terms of Service</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-zinc-500 hover:text-white transition-colors">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-zinc-500 hover:text-white transition-colors">Cookies</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-zinc-600 text-sm">
                        © {new Date().getFullYear()} Wowgency. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-zinc-600 hover:text-zinc-400 text-sm transition-colors">
                            Privacy
                        </Link>
                        <Link href="#" className="text-zinc-600 hover:text-zinc-400 text-sm transition-colors">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
