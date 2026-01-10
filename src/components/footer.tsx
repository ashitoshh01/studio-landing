export function Footer() {
    return (
        <footer className="bg-zinc-50 border-t border-zinc-200">
            <div className="container-wrapper py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-xl font-bold tracking-tight text-zinc-900">
                            Studio.
                        </span>
                        <p className="mt-4 text-sm text-zinc-500 max-w-sm">
                            We build digital products that help businesses grow. Minimalist design, robust engineering, and human-centric strategy.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-zinc-900 mb-4">Services</h4>
                        <ul className="space-y-2 text-sm text-zinc-600">
                            <li><a href="#" className="hover:text-zinc-900">Web Development</a></li>
                            <li><a href="#" className="hover:text-zinc-900">UI/UX Design</a></li>
                            <li><a href="#" className="hover:text-zinc-900">Consulting</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-zinc-900 mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-zinc-600">
                            <li><a href="#" className="hover:text-zinc-900">About</a></li>
                            <li><a href="#" className="hover:text-zinc-900">Contact</a></li>
                            <li><a href="#" className="hover:text-zinc-900">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-zinc-400">
                        © {new Date().getFullYear()} Studio Agency. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        {/* Social icons could go here */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
