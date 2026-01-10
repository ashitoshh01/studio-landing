export function Footer() {
    return (
        <footer className="bg-black border-t border-zinc-900 text-zinc-500">
            <div className="container-wrapper py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-xl font-bold tracking-tight text-white">
                            Studio.
                        </span>
                        <p className="mt-4 text-sm max-w-sm">
                            Helping ambitious brands build the future.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-zinc-600">
                        © {new Date().getFullYear()} Studio Agency. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
