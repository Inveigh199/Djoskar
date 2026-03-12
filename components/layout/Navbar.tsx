"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
    const closeMenu = useCallback(() => setIsOpen(false), []);

    return (
        <>
            <nav className="fixed z-50 flex px-4 top-4 md:top-6 right-0 left-0 justify-center">
                <div
                    className={cn(
                        "flex gap-12 shadow-black/50 transition-all duration-300 bg-black/70 border-white/10 border rounded-full pt-4 pr-6 pb-4 pl-6 shadow-2xl backdrop-blur-xl items-center justify-between",
                        scrolled ? "bg-black/85" : "bg-black/70"
                    )}
                >
                    <Link href="/" className="uppercase flex items-center gap-1 text-lg font-bold text-white tracking-tighter">
                        DJ.Oskar
                    </Link>

                    <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-neutral-400">
                        {NAV_LINKS.map((link) => (
                            <a key={link.href} href={link.href} className="hover:text-white transition-colors">
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <a
                        href="#contact"
                        className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-white text-black hover:bg-neutral-200 transition-transform hover:scale-110"
                    >
                        <ArrowUpRight size={16} />
                    </a>

                    <button onClick={toggleMenu} className="md:hidden text-white flex items-center">
                        <Menu size={20} />
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0, scaleY: 0 }}
                        style={{ transformOrigin: "top" }}
                        className="fixed inset-0 z-[9999] bg-black/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-10"
                    >
                        <button onClick={toggleMenu} className="absolute top-10 right-10 text-white p-2">
                            <X size={32} />
                        </button>
                        <div className="flex flex-col items-center gap-6 text-2xl font-medium uppercase tracking-[0.2em] text-neutral-400">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={closeMenu}
                                    className="hover:text-white transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={closeMenu}
                                className="mt-4 px-8 py-3 bg-white text-black text-sm font-bold rounded-full"
                            >
                                Oferta
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
