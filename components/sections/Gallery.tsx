"use client";

import { motion } from "framer-motion";
import { GALLERY_IMAGES } from "@/lib/constants";

export default function Gallery() {
    return (
        <section id="galeria" className="py-24 bg-[#080808]">
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    <span className="text-yellow-500 font-mono text-xs uppercase tracking-widest mb-2 block">05 / Galeria</span>
                    <h2 className="text-3xl font-semibold tracking-tighter text-white">Momenty, które pamiętam najlepiej</h2>
                </motion.div>
            </div>
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
                {GALLERY_IMAGES.map((img, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className={`relative group overflow-hidden rounded-sm ${img.span}`}
                    >
                        <img
                            src={img.src}
                            alt={img.label}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-100 md:opacity-60 md:group-hover:opacity-100 md:grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 text-[10px] text-white uppercase tracking-widest border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                            {img.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
