import { ArrowUpRight } from "lucide-react";

export default function Hero() {
    return (
        <header className="overflow-hidden flex flex-col w-full min-h-screen lg:h-[110vh] relative items-center justify-center">
            <div className="z-0 absolute inset-0">
                <img
                    src="/images/hero-bg.jpg"
                    alt="DJ Oskar Hero"
                    className="w-full h-full object-cover object-center scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-neutral-900/60 to-black/30" />
            </div>

            <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-20">


                <h1 className="md:text-8xl lg:text-9xl leading-[0.9] text-6xl font-semibold text-white tracking-tighter mb-8 animate-fade-up">
                    Stwórzmy razem<br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
                        niezapomniane wesele
                    </span>
                </h1>

                <p className="md:text-xl leading-relaxed text-lg font-light text-neutral-400 max-w-2xl mx-auto mb-10 animate-fade-up">
                    Ekskluzywna oprawa muzyczna i wizualna wesel. Nowoczesne podejście, brak przaśnych zabaw, tylko czysta klasa i pełen parkiet do samego rana.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
                    <a
                        href="#contact"
                        className="group relative px-8 py-4 bg-white text-black text-sm font-semibold tracking-wide overflow-hidden rounded-sm transition-all hover:pr-10"
                    >
                        <span className="z-10 relative">Skontaktuj się</span>
                        <div className="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                        <ArrowUpRight
                            size={12}
                            className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                        />
                    </a>
                    <a
                        href="#portfolio"
                        className="group hover:bg-white/5 transition-all text-sm font-medium text-white tracking-wide border-white/10 border rounded-sm pt-4 px-8 pb-4 backdrop-blur-sm"
                    >
                        Oferta
                    </a>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent" />
            </div>
        </header>
    );
}
