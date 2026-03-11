import { MARQUEE_ITEMS } from "@/lib/constants";

export default function Marquee() {
    return (
        <div className="w-full bg-neutral-900/30 border-y border-white/5 py-6 overflow-hidden relative z-20 backdrop-blur-sm">
            <div className="flex whitespace-nowrap w-[200%] animate-scroll hover:[animation-play-state:paused]">
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex items-center gap-12 mx-6">
                        {MARQUEE_ITEMS.map((item, j) => (
                            <div key={j} className="flex items-center gap-12">
                                <span className="text-4xl font-bold uppercase tracking-tighter text-white/10">{item}</span>
                                <span className="text-yellow-500 text-xl">•</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
