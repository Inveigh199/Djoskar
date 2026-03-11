"use client";

import { motion } from "framer-motion";
import { Camera, Zap, Wind, Music, Truck, Heart } from "lucide-react";
import type { Service } from "@/types";

const services: Service[] = [
    { icon: <Camera />, title: "Fotobudka", desc: "Uchwyć chwile radości w najwyższej jakości." },
    { icon: <Zap />, title: "Fontanna Iskier", desc: "Spektakularne zimne ognie na pierwszy taniec." },
    { icon: <Wind />, title: "Niski Dym", desc: "Taniec w chmurach – efektowna oprawa wizualna." },
    { icon: <Heart />, title: "Biały Miś", desc: "Niespodzianka i atrakcja dla gości oraz dzieci." },
    { icon: <Truck />, title: "Transport Gości", desc: "Bezpieczny powrót dla Twoich bliskich." },
    { icon: <Music />, title: "Oprawa Muzyczna", desc: "Najlepsze brzmienia do samego rana." },
];

export default function Services() {
    return (
        <section id="services" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
                    <span className="text-yellow-500 font-mono text-xs uppercase tracking-widest mb-2 block">03 / Atrakcje</span>
                    <h2 className="text-4xl font-semibold tracking-tighter text-white">Dla Twojego Wesela</h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-0 border border-white/10 bg-black translate-y-0">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group hover-border-glow p-10 border-r border-b border-white/10 hover:bg-white/[0.02] transition-colors"
                        >
                            <div className="w-12 h-12 bg-neutral-900 rounded-sm flex items-center justify-center mb-8 border border-white/5 group-hover:border-yellow-500/50 transition-colors">
                                <div className="text-neutral-300 group-hover:text-yellow-500 transition-colors">
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                            <p className="text-sm text-neutral-400 leading-relaxed">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
