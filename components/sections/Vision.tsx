"use client";

import { motion } from "framer-motion";
import { VISION_CARDS } from "@/lib/constants";

export default function Vision() {
    return (
        <section className="pt-32 pb-32 relative" id="vision">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col gap-y-16 lg:gap-y-0 lg:grid lg:grid-cols-12 lg:gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:col-span-5 lg:sticky lg:top-32"
                    >
                        <span className="uppercase block text-xs text-yellow-500 tracking-widest font-mono mb-4">01 / O mnie</span>
                        <h2 className="md:text-5xl leading-[1.1] text-4xl font-semibold text-white tracking-tighter mb-8">
                            Pasja do muzyki<br />
                            <span className="text-neutral-500">i tworzenia niezwykłych wspomnień. </span>
                        </h2>
                        <p className="leading-relaxed font-light text-neutral-400 mb-8">
                            Cześć! Jestem Oskar. Od 2016 roku działam w branży weselnej, zajmując się tworzeniem niezapomnianych wesel poprzez oprawę muzyczną oraz prowadzenie zabaw i konkursów tanecznych. Moim celem nie jest po prostu "odtwarzanie muzyki", ale budowanie emocji i sterowanie energią tłumu, tak aby Wasze wesela były niezapomniane i przez lata były dobrze wspominane wśród rodziny i znajomych!                            <br /><br />
                            Wyróżnia mnie nowoczesne podejście. Unikam szablonów i cringe’owych zabaw, stawiając na elegancję, świetną selekcję muzyczną oraz prowadzenie wesela zgodnie z jego dynamiką i wykorzystując każdy moment na rozkręcenie pozytywnej energii na parkiecie.                        </p>
                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                            <div>
                                <span className="block text-3xl font-bold text-white mb-1">10+</span>
                                <span className="uppercase text-xs text-neutral-500 tracking-widest">Lat doświadczenia</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-bold text-white mb-1">+200</span>
                                <span className="uppercase text-xs text-neutral-500 tracking-widest">Wesel i ciągle rośnie</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="w-full lg:col-span-7 flex flex-col gap-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative aspect-video group overflow-hidden rounded-sm border border-white/5"
                        >
                            <img
                                src="/images/about-main.png"
                                alt="Pierwszy taniec w chmurach"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-100 md:opacity-80 md:group-hover:opacity-100 md:grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-6 left-6">
                                <h3 className="text-xl font-medium text-white tracking-tight">Muzyka i słowo na parkiecie</h3>
                            </div>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {VISION_CARDS.map((item, id) => (
                                <motion.div
                                    key={id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: id * 0.2 }}
                                    viewport={{ once: true }}
                                    className="relative aspect-[4/5] group overflow-hidden rounded-sm border border-white/5"
                                >
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-100 md:opacity-80 md:group-hover:opacity-100 md:grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute bottom-6 left-6">
                                        <h3 className="text-xl font-medium text-white tracking-tight">{item.title}</h3>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
