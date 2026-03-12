"use client";

import { motion } from "framer-motion";
import { Mail, Instagram, Facebook, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    const [form, setForm] = useState({
        name: "",
        email: "",
        venue: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });

            if (res.ok) {
                setIsSuccess(true);
                setForm({ name: "", email: "", venue: "", message: "" });
                setTimeout(() => setIsSuccess(false), 5000);
            } else {
                const data = await res.json();
                setError(data.error || "Wystąpił błąd przy wysyłaniu.");
            }
        } catch (err) {
            setError("Wystąpił błąd sieci. Spróbuj ponownie.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-32 relative bg-neutral-950 border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 relative z-10">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                    <h2 className="md:text-7xl text-6xl font-semibold text-white tracking-tighter mb-8 leading-[1.1]">
                        Stwórzmy razem <br />
                        <span className="text-neutral-600">coś niezwykłego.</span>
                    </h2>
                    <p className="text-neutral-400 text-lg font-light mb-12 max-w-md">
                        Opowiedz mi o swoim weselu i wspólnych planach.
                    </p>

                    <div className="space-y-8">
                        <a href="mailto:oskar.lakomy1515@gmail.com" className="group flex items-center gap-6 text-white hover:text-yellow-500 transition-colors">
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-yellow-500 transition-colors">
                                <Mail size={20} />
                            </div>
                            <div>
                                <span className="block text-xs text-neutral-500 uppercase tracking-widest mb-1">Email</span>
                                <span className="text-xl font-medium">oskar.lakomy1515@gmail.com</span>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/oskarlakomy/" target="_blank" className="group flex items-center gap-6 text-white hover:text-yellow-500 transition-colors">
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-yellow-500 transition-colors">
                                <Instagram size={20} />
                            </div>
                            <div>
                                <span className="block text-xs text-neutral-500 uppercase tracking-widest mb-1">Obserwuj</span>
                                <span className="text-xl font-medium">@oskar.lakomy</span>
                            </div>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61586400741244" target="_blank" className="group flex items-center gap-6 text-white hover:text-yellow-500 transition-colors">
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-yellow-500 transition-colors">
                                <Facebook size={20} />
                            </div>
                            <div>
                                <span className="block text-xs text-neutral-500 uppercase tracking-widest mb-1">Facebook</span>
                                <span className="text-xl font-medium">Oskar Łakomy</span>
                            </div>
                        </a>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="bg-neutral-900/30 p-10 border border-white/10 rounded-sm backdrop-blur-sm">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="group relative">
                                <input type="text" id="name" required value={form.name} onChange={handleChange} className="peer w-full bg-transparent border-b border-neutral-700 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors placeholder-transparent" placeholder="Name" />
                                <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-yellow-500">Imię</label>
                            </div>
                            <div className="group relative">
                                <input type="email" id="email" required value={form.email} onChange={handleChange} className="peer w-full bg-transparent border-b border-neutral-700 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors placeholder-transparent" placeholder="Email" />
                                <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-yellow-500">Email</label>
                            </div>
                        </div>

                        <div className="group relative">
                            <input type="text" id="venue" value={form.venue} onChange={handleChange} className="peer w-full bg-transparent border-b border-neutral-700 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors placeholder-transparent" placeholder="Venue" />
                            <label htmlFor="venue" className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-yellow-500">Miejsce wesela</label>
                        </div>

                        <div className="group relative">
                            <textarea id="message" required rows={4} value={form.message} onChange={handleChange} className="peer w-full bg-transparent border-b border-neutral-700 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors placeholder-transparent resize-none" placeholder="Message" />
                            <label htmlFor="message" className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-yellow-500">Wiadomość</label>
                        </div>

                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                        {isSuccess && <p className="text-green-500 text-sm mt-2 flex items-center gap-2"><CheckCircle2 size={16} /> Wiadomość została wysłana pomyślnie!</p>}

                        <button disabled={isLoading} className="w-full py-5 bg-white text-black font-semibold uppercase tracking-widest hover:bg-neutral-200 transition-all flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed">
                            {isLoading ? <Loader2 className="animate-spin" size={18} /> : (
                                <>
                                    Wyślij
                                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
