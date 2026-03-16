"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Sprawdzamy, czy użytkownik podjął już jakąkolwiek decyzję
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
        // TUTAJ w przyszłości wywołasz funkcję odpalającą analitykę
        window.location.reload(); // Odświeżamy, by skrypty zaskoczyły po zgodzie
    };

    const rejectCookies = () => {
        localStorage.setItem("cookie-consent", "rejected");
        setIsVisible(false);
        // TUTAJ skrypty analityczne pozostaną zablokowane
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-sm z-[100]">
            <div className="bg-neutral-900 border border-white/10 p-6 rounded-sm shadow-2xl backdrop-blur-md">
                <h3 className="text-white font-semibold mb-2 uppercase tracking-widest text-xs text-left">Ciasteczka & Prywatność</h3>
                <p className="text-neutral-400 text-[10px] leading-relaxed mb-4 text-left">
                    Używamy cookies, aby zapewnić najlepszą jakość korzystania z naszej strony. Możesz zaakceptować wszystkie lub odrzucić opcjonalne skrypty śledzące. Szczegóły w <Link href="/polityka-prywatnosci" className="text-white underline hover:text-yellow-500">Polityce Prywatności</Link>.
                </p>

                <div className="flex flex-col gap-2">
                    <button
                        onClick={acceptCookies}
                        className="w-full py-3 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-neutral-200 transition-colors"
                    >
                        Akceptuję wszystkie
                    </button>
                    <button
                        onClick={rejectCookies}
                        className="w-full py-2 bg-transparent text-neutral-500 text-[9px] font-bold uppercase tracking-[0.2em] hover:text-white transition-colors"
                    >
                        Tylko niezbędne
                    </button>
                </div>
            </div>
        </div>
    );
}