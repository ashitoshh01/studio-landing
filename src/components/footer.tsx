import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-zinc-50 border-t border-zinc-200 py-12 md:py-16">
            <div className="container-wrapper">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
                    <div className="col-span-2 md:col-span-2">
                        <Link href="/" className="mb-4 block hover:opacity-80 transition-opacity w-fit">
                            <Image
                                src="/apix-logo.png"
                                alt="ApixBuild Logo"
                                width={180}
                                height={60}
                                className="h-14 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-zinc-500 max-w-sm mb-6">
                            Empowering brands with cutting-edge digital solutions. We build immersive experiences that drive growth and engagement.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://x.com/ApixBuild" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#74B52A] transition-colors" aria-label="Twitter">
                                <Twitter size={20} />
                            </Link>
                            <Link href="https://www.instagram.com/apixbuild/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#74B52A] transition-colors" aria-label="Instagram">
                                <Instagram size={20} />
                            </Link>
                            <Link href="https://www.linkedin.com/in/apixbuild" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#74B52A] transition-colors" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </Link>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-semibold text-zinc-900 mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/about" className="text-zinc-500 hover:text-[#74B52A] transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-zinc-500 hover:text-[#74B52A] transition-colors">Blog</Link>
                            </li>
                            <li>
                                <Link href="/press" className="text-zinc-500 hover:text-[#74B52A] transition-colors">Press</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-semibold text-zinc-900 mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/terms" className="text-zinc-500 hover:text-[#74B52A] transition-colors">Terms of Service</Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-zinc-500 hover:text-[#74B52A] transition-colors">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/cookies" className="text-zinc-500 hover:text-[#74B52A] transition-colors">Cookies</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-zinc-500 text-sm">
                        © {new Date().getFullYear()} ApixBuild. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="text-zinc-500 hover:text-[#74B52A] text-sm transition-colors">
                            Privacy
                        </Link>
                        <Link href="/terms" className="text-zinc-500 hover:text-[#74B52A] text-sm transition-colors">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
