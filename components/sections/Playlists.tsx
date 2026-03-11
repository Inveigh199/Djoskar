"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { PLAYLISTS } from "@/lib/constants";

export default function Playlists() {
    const [activePlaylist, setActivePlaylist] = useState(PLAYLISTS[0]);

    return (
        <section id="playlists" className="py-32 relative bg-neutral-950 border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <span className="text-yellow-500 font-mono text-xs uppercase tracking-widest mb-4 block">04 / Playlisty</span>
                    <h2 className="md:text-5xl leading-[1.1] text-4xl font-semibold text-white tracking-tighter mb-8">
                        Oto co leciało <br />
                        <span className="text-neutral-500">na weselach.</span>
                    </h2>
                    <p className="text-neutral-400 text-lg font-light mb-12 max-w-md leading-relaxed">
                        Każda playlistą jest inna. Każdy zestaw utworów jest starannie dobrany pod daną parę, gości i klimat nocy. To są przykładowe zbiory, które cieszą się największą popularnością.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        {PLAYLISTS.map((playlist) => (
                            <button
                                key={playlist.id}
                                onClick={() => setActivePlaylist(playlist)}
                                className={`px-8 py-3 rounded-full border text-xs uppercase tracking-widest transition-all duration-300 ${activePlaylist.id === playlist.id
                                    ? "bg-white text-black border-white"
                                    : "bg-transparent text-white border-white/10 hover:border-yellow-500 hover:text-yellow-500"
                                    }`}
                            >
                                {playlist.name}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    key={activePlaylist.id}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                >
                    <div className="absolute -inset-4 bg-yellow-600/5 blur-[80px] rounded-full pointer-events-none" />
                    <iframe
                        src={`https://open.spotify.com/embed/playlist/${activePlaylist.spotifyId}?utm_source=generator&theme=0`}
                        width="100%"
                        height="400"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className="rounded-xl shadow-2xl relative z-10 border border-white/5"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
}
