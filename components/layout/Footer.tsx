import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black py-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-end gap-6">

                {/* Lewa strona: Logo + Dane firmy */}
                <div className="flex flex-col items-center md:items-start gap-2">
                    <Link href="/" className="text-xl font-bold tracking-tighter uppercase text-white flex items-center gap-1">
                        DJ.Oskar<span className="text-yellow-500"></span>
                    </Link>
                    <div className="text-neutral-500 text-[10px] leading-relaxed text-center md:text-left">
                        Oskar Łakomy | Kraków | <a href="mailto:oskar.lakomy1515@gmail.com" className="hover:text-white transition-colors">oskar.lakomy1515@gmail.com</a>
                    </div>
                </div>

                {/* Prawa strona: Copyright & Links */}
                <div className="text-neutral-600 text-xs text-center md:text-right">
                    <p>
                        © DJ.Oskar ·
                        <Link href="/polityka-prywatnosci" className="hover:text-neutral-400 mx-1 transition-colors">
                            Polityka Prywatności
                        </Link>
                        · Design &amp; Dev by
                        <Link href="https://marodigitalstudio.framer.website/" className="hover:text-neutral-400 mx-1 transition-colors">
                            Maro Drabik
                        </Link>

                    </p>
                </div>

            </div>
        </footer>
    );
}