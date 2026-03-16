import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <main className="bg-neutral-950 min-h-screen text-neutral-400 font-light selection:bg-yellow-500/30">
            {/* Prosta nawigacja powrotna */}
            <nav className="max-w-4xl mx-auto px-6 py-12">
                <Link href="/" className="group flex items-center gap-2 text-white hover:text-yellow-500 transition-colors w-fit uppercase tracking-widest text-xs font-semibold">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Powrót do strony głównej
                </Link>
            </nav>

            <article className="max-w-4xl mx-auto px-6 pb-32">
                <header className="mb-16">
                    <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter mb-4">
                        Polityka <br />
                        <span className="text-neutral-600">Prywatności.</span>
                    </h1>
                    <p className="text-sm uppercase tracking-[0.2em] text-yellow-500/50">Ostatnia aktualizacja: 16.03.2026</p>
                </header>

                <div className="space-y-12 text-lg leading-relaxed">
                    <section>
                        <h2 className="text-white text-l font-medium mb-4 uppercase tracking-wider">1. Informacje ogólne</h2>
                        <p>
                            Administratorem danych osobowych zbieranych za pośrednictwem strony internetowej jest Oskar Łakomy z siedzibą w 31-014 Kraków, e-mail: oskarlakomy1515@gmail.com (zwany dalej „Administratorem”).

                            Dane osobowe użytkownika są przetwarzane zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO) oraz ustawą o świadczeniu usług drogą elektroniczną.

                            Administrator dokłada szczególnej staranności w celu ochrony interesów osób, których dane dotyczą.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-xl font-medium mb-4 uppercase tracking-wider">2. Cel zbierania danych</h2>
                        <p>Dane podane w formularzu kontaktowym (imię, e-mail, miejsce wesela, data) przetwarzane są wyłącznie w celu:</p>
                        <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                            <li>Obsługa zapytań: Przetwarzanie danych podanych w formularzu kontaktowym (imię, adres e-mail) w celu udzielenia odpowiedzi na przesłane zapytanie ofertowe (podstawa prawna: art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes Administratora).</li>
                            <li>Realizacja usługi: Podjęcie działań na żądanie osoby, której dane dotyczą, przed zawarciem umowy (podstawa prawna: art. 6 ust. 1 lit. b RODO).</li>
                            <li>Analityka: Zapewnienie prawidłowego działania strony i analiza ruchu (podstawa prawna: art. 6 ust. 1 lit. f RODO).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-white text-xl font-medium mb-4 uppercase tracking-wider">3.Odbiorcy danych</h2>
                        <p>Dane osobowe mogą być przekazywane podmiotom zewnętrznym wspierającym działalność Administratora::</p>
                        <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                            <li>Dostawcy usług hostingu i poczty elektronicznej.</li>
                            <li>Podmioty świadczące usługi księgowe (w przypadku nawiązania współpracy).</li>
                            <li>Dane nie są przekazywane do państw trzecich (poza EOG), chyba że dostawca technologii (np. Google Analytics) stosuje odpowiednie zabezpieczenia zgodne z RODO.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-white text-xl font-medium mb-4 uppercase tracking-wider">4.Okres przechowywania danych</h2>
                        <p> Dane podane w celu zapytania ofertowego będą przechowywane przez okres niezbędny do udzielenia odpowiedzi i prowadzenia korespondencji. W przypadku zawarcia umowy, dane będą przechowywane przez okres realizacji usługi oraz czas wymagany przepisami prawa (np. księgowość) i okres przedawnienia roszczeń.</p>
                    </section>

                    <section>
                        <h2 className="text-white text-xl font-medium mb-4 uppercase tracking-wider">5.Prawa użytkownika</h2>
                        <p> Każdej osobie, której dane dotyczą, przysługuje prawo do:</p>
                        <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                            <li>DDostępu do swoich danych oraz otrzymania ich kopii.</li>
                            <li>Sprostowania (poprawiania) danych.</li>
                            <li>Usunięcia danych ("prawo do bycia zapomnianym").</li>
                            <li>Ograniczenia przetwarzania danych.</li>
                            <li>Przenoszenia danych.</li>
                            <li>Wniesienia sprzeciwu wobec przetwarzania.</li>
                            <li>Wniesienia skargi do organu nadzorczego (Prezesa Urzędu Ochrony Danych Osobowych).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-white text-xl font-medium mb-4 uppercase tracking-wider">6. Pliki Cookies</h2>
                        <p>
                            Strona korzysta z plików cookies (ciasteczek), które są niewielkimi informacjami tekstowymi przechowywanymi na urządzeniu końcowym użytkownika. Pliki te służą do zapewnienia prawidłowego działania strony oraz celów statystycznych. Użytkownik może w każdej chwili zmienić ustawienia dotyczące cookies w swojej przeglądarce internetowej. Ograniczenie stosowania plików cookies może jednak wpłynąć na niektóre funkcjonalności strony.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-xl font-medium mb-4 uppercase tracking-wider">7. Kontakt</h2>
                        <p>
                            Wszelkie pytania dotyczące przetwarzania danych osobowych należy kierować na adres:
                            <a href="mailto:oskar.lakomy1515@gmail.com" className="text-white hover:text-yellow-500 underline ml-1">oskar.lakomy1515@gmail.com</a>.
                        </p>
                    </section>

                    <div className="pt-12 border-t border-white/5">
                        <p className="text-sm text-neutral-600 italic">
                            Administratorem danych jest Oskar Łakomy. Dane są bezpieczne i nie są przekazywane podmiotom trzecim w celach marketingowych.
                        </p>
                    </div>
                </div>
            </article>
        </main>
    );
}