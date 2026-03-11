"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-32 bg-[#080808] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end mb-16 justify-between items-start gap-4">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <span className="text-yellow-500 font-mono text-xs uppercase tracking-widest mb-2 block">02 / Portfolio</span>
                        <h2 className="text-4xl font-semibold tracking-tighter text-white">Każdy element gra swoją rolę</h2>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {PROJECTS.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-sm border border-white/5"
                        >
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                            >
                                <source src={project.video} type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
                                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest text-white border border-white/10">2024</span>
                                    <ArrowUpRight className="text-white rotate-45 group-hover:rotate-0 transition-transform duration-500" size={20} />
                                </div>
                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-yellow-500 text-xs font-mono uppercase tracking-widest mb-2">{project.category}</p>
                                    <h3 className="text-2xl font-semibold text-white tracking-tight">{project.title}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
