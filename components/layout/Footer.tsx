import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black py-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <Link href="/" className="text-xl font-bold tracking-tighter uppercase text-white flex items-center gap-1">
                    DJ.Oskar<span className="text-yellow-500"></span>
                </Link>
                <p className="text-neutral-600 text-xs">
                    © DJ.Oskar · Design &amp; Development by Maro Drabik
                </p>
            </div>
        </footer>
    );
}
