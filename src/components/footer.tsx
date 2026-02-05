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
                                src="/logo-new.png"
                                alt="ApixBuild Logo"
                                width={240}
                                height={80}
                                className="h-20 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-zinc-500 max-w-sm mb-6">
                            Empowering brands with cutting-edge digital solutions. We build immersive experiences that drive growth and engagement.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-zinc-400 hover:text-[#74B52A] transition-colors">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="text-zinc-400 hover:text-[#74B52A] transition-colors">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="text-zinc-400 hover:text-[#74B52A] transition-colors">
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
                                <Link href="#" className="text-zinc-500 hover:text-[#74B52A] transition-colors">Careers</Link>
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
