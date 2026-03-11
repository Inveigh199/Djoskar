"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import type { Testimonial } from "@/types";

function TestimonialCard({ item }: { item: Testimonial }) {
    return (
        <div className="p-8 rounded-sm border border-white/5 bg-neutral-900/30 backdrop-blur-md hover:border-yellow-500/50 transition-colors cursor-default">
            <p className="text-neutral-300 text-sm leading-relaxed mb-6 italic">&quot;{item.text}&quot;</p>
            <div className="flex flex-col gap-1">
                <span className="text-white font-medium text-sm">{item.firstName} {item.lastName}</span>
                <span className="text-yellow-500 font-mono text-[10px] uppercase tracking-widest">{item.location}</span>
            </div>
        </div>
    );
}

export default function Testimonials() {
    const col1 = TESTIMONIALS.slice(0, 6);
    const col2 = TESTIMONIALS.slice(6, 12);
    const col3 = TESTIMONIALS.slice(12, 18);

    const repeatedCol1 = [...col1, ...col1];
    const repeatedCol2 = [...col2, ...col2];
    const repeatedCol3 = [...col3, ...col3];

    return (
        <section id="opinie" className="py-32 bg-[#080808] border-t border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-16 relative z-20">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    <span className="text-yellow-500 font-mono text-xs uppercase tracking-widest mb-2 block">06 / Opinie</span>
                    <h2 className="text-4xl font-semibold tracking-tighter text-white">Słowa moich par młodych</h2>
                </motion.div>
            </div>

            <div className="relative h-[800px] max-w-7xl mx-auto px-6 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#080808] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080808] to-transparent z-10 pointer-events-none" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full items-start">
                    <div className="flex flex-col gap-6 w-full animate-scroll-y hover:[animation-play-state:paused]">
                        {repeatedCol1.map((item, id) => <TestimonialCard key={`col1-${id}`} item={item} />)}
                    </div>

                    <div className="flex flex-col gap-6 w-full animate-scroll-y-reverse hover:[animation-play-state:paused] hidden md:flex">
                        {repeatedCol2.map((item, id) => <TestimonialCard key={`col2-${id}`} item={item} />)}
                    </div>

                    <div className="flex flex-col gap-6 w-full animate-scroll-y hover:[animation-play-state:paused] hidden lg:flex">
                        {repeatedCol3.map((item, id) => <TestimonialCard key={`col3-${id}`} item={item} />)}
                    </div>
                </div>
            </div>
        </section>
    );
}
